# -*- coding: utf-8 -*-
"""Kiểm tra mọi chữ Hán trong hsk3-nguphap.js / hsk4-nguphap.js
   có thuộc tập chữ của danh sách từ HSK được phép hay không.
   HSK3 -> chữ của hsk1+hsk2+hsk3 ; HSK4 -> thêm hsk4. Cộng tên người cho phép.
   Chạy:  python3 kiem-tra-nguphap.py
"""
import json, re, subprocess, sys, os

HERE = os.path.dirname(os.path.abspath(__file__))
VOCAB = os.path.join(HERE, "hsk-vocab")
NAMES = set("王方李月大卫小明")          # tên người được phép
HAN = re.compile(r'[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]')

def chars_of_level(n):
    s = open(os.path.join(VOCAB, "hsk%d-moi.txt" % n), encoding="utf-8").read()
    s = re.sub(r'（[^）]*）', '', s)      # bỏ chú thích loại từ, vd 长（形容词）
    return set(HAN.findall(s))

def allowed(maxlevel):
    out = set(NAMES)
    for i in range(1, maxlevel + 1):
        out |= chars_of_level(i)
    return out

def load_js(path):
    """Đọc const NGUPHAP trong file .js bằng node, trả về dict."""
    out = subprocess.run(
        ["node", "-e",
         "const fs=require('fs');"
         "const o=eval(fs.readFileSync(process.argv[1],'utf8')+';NGUPHAP');"
         "process.stdout.write(JSON.stringify(o));", path],
        capture_output=True, text=True)
    if out.returncode:
        sys.exit("Lỗi JS ở %s:\n%s" % (path, out.stderr))
    return json.loads(out.stdout)

def check(level):
    path = os.path.join(HERE, "hsk%d-nguphap.js" % level)
    ok = allowed(level)
    data = load_js(path)
    bad = {}          # chữ lạ -> ví dụ
    nq = 0
    for lid, items in data.items():
        for idx, it in enumerate(items):
            nq += 1
            # cấu trúc
            assert it["k"] in ("cau", "dien", "xep"), (lid, idx, "k sai")
            assert len(it["o"]) == 3, (lid, idx, "phải có 3 phương án")
            assert 0 <= it["a"] <= 2, (lid, idx, "a sai")
            assert it.get("g"), (lid, idx, "thiếu giải thích")
            assert len(set(it["o"])) == 3, (lid, idx, "phương án trùng nhau")
            for field in ("q", "g", "v"):
                if it.get(field):
                    for c in HAN.findall(it[field]):
                        if c not in ok:
                            bad.setdefault(c, "bài %s câu %d (%s)" % (lid, idx + 1, field))
            for o in it["o"]:
                for c in HAN.findall(o):
                    if c not in ok:
                        bad.setdefault(c, "bài %s câu %d (o)" % (lid, idx + 1))
    print("HSK%d: %d bài, %d câu hỏi — tập chữ cho phép: %d chữ"
          % (level, len(data), nq, len(ok)))
    if bad:
        print("  CHỮ LẠ (%d):" % len(bad))
        for c, w in sorted(bad.items()):
            print("   ", c, "->", w)
    else:
        print("  OK: không có chữ lạ.")
    return not bad

if __name__ == "__main__":
    good = all([check(3), check(4)])
    sys.exit(0 if good else 1)
