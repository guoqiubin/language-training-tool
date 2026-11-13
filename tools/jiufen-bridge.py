#!/usr/bin/env python3
"""Local bridge for the Jiufen IELTS desktop app.

Run this on the same Mac as the desktop app. The website calls localhost,
the bridge copies the visible Electron page, and returns the reading content.
No content is uploaded by this helper.
"""
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
import json
import re
import subprocess
import time

HOST = "127.0.0.1"
PORT = 47821
APP_NAME = "九分学长考雅机考平台"
APP_BUNDLE_ID = "com.9fnnn.ielts"


def run_osascript(script):
    result = subprocess.run(["osascript", "-e", script], text=True, capture_output=True)
    if result.returncode:
        message = result.stderr.strip() or "无法控制九分学长窗口"
        if "-1728" in message or "不能获得" in message:
            message = "找不到九分学长应用，请先打开并保持阅读页面。"
        elif "Connection invalid" in message or "辅助功能" in message or "access" in message.lower():
            message = "macOS 辅助功能权限未生效，请在系统设置中允许 Terminal/Python 控制电脑后重启桥接。"
        raise RuntimeError(message)
    return result.stdout.strip()


def copy_visible_page():
    launch = subprocess.run(["open", "-b", APP_BUNDLE_ID], text=True, capture_output=True)
    if launch.returncode:
        raise RuntimeError("找不到九分学长应用，请先打开并保持阅读页面。")
    time.sleep(0.8)
    script = f'''tell application "System Events"
    set matchingProcesses to every application process whose name contains "{APP_NAME}"
    if (count of matchingProcesses) is 0 then
        error "找不到九分学长窗口"
    end if
    set targetProcess to item 1 of matchingProcesses
    set frontmost of targetProcess to true
    delay 0.25
    tell targetProcess
        keystroke "a" using command down
        delay 0.15
        keystroke "c" using command down
    end tell
end tell'''
    run_osascript(script)
    time.sleep(0.25)
    result = subprocess.run(["pbpaste"], text=True, capture_output=True)
    if result.returncode or not result.stdout.strip():
        raise RuntimeError("没有读取到页面文字，请确认九分学长窗口处于前台")
    return result.stdout


def extract_content(raw):
    text = re.sub(r"\r\n?", "\n", raw)
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text).strip()
    title_match = re.search(r"(?:Part \d+\n)?(.+?)\n(?=This exhibition|This article|The passage|Questions \d+)", text, re.S | re.I)
    title = title_match.group(1).strip() if title_match else "当前雅思阅读真题"
    title = title.split("\n")[-1].strip()
    question_match = re.search(r"\nQuestions? \d+", text, re.I)
    if not question_match:
        raise RuntimeError("已读取页面，但没有识别到题目区域")
    passage_start = text.find(title) + len(title)
    passage = text[passage_start:question_match.start()].strip()
    questions = text[question_match.start():].strip()
    questions = re.split(r"\n(?:题目导航|上一题|下一题|Finish section|Exit)\b", questions, maxsplit=1)[0].strip()
    if len(passage) < 80 or len(questions) < 20:
        raise RuntimeError("页面文字已读取，但正文或题目内容不完整，请先进入完整阅读题页面")
    return {"title": title, "passage": passage, "questions": questions, "source": "九分学长本地页面"}


class Handler(BaseHTTPRequestHandler):
    def _send(self, status, payload):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self._send(204, {})

    def do_GET(self):
        if self.path == "/health":
            self._send(200, {"ok": True, "service": "jiufen-bridge", "port": PORT})
            return
        self._send(404, {"ok": False, "error": "Not found"})

    def do_POST(self):
        if self.path != "/capture":
            self._send(404, {"ok": False, "error": "Not found"})
            return
        try:
            raw = copy_visible_page()
            self._send(200, {"ok": True, "data": extract_content(raw)})
        except Exception as error:
            self._send(500, {"ok": False, "error": str(error)})

    def log_message(self, *_args):
        return


if __name__ == "__main__":
    print(f"九分学长本地桥接已启动：http://{HOST}:{PORT}")
    print("请保持九分学长阅读页面打开；内容只在本机读取，不上传服务器。")
    ThreadingHTTPServer((HOST, PORT), Handler).serve_forever()
