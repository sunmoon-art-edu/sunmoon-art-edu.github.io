# -*- coding: utf-8 -*-
# Dựng trang DUYỆT BÀI cho cả 8 app (YCT 1–4, HSK 1–4): python3 duyet.py → duyet-bai.html
# Chị / giáo viên bấm "Báo sai" → ghi chú lưu vào db của trang (collection "gopy"), Claude đọc lại để sửa.
import json, subprocess, html, math, os

FILES = [('YCT 1', 'yct.js', 'yct1'), ('YCT 2', 'yct2.js', 'yct2'), ('YCT 3', 'yct3.js', 'yct3'), ('YCT 4', 'yct4.js', 'yct4'),
         ('HSK 1', 'hsk1.js', 'hsk1'), ('HSK 2', 'hsk2.js', 'hsk2'), ('HSK 3', 'hsk3.js', 'hsk3'), ('HSK 4', 'hsk4.js', 'hsk4')]
JS = ("const fs=require('fs'),vm=require('vm');const c=vm.createContext({});"
      "vm.runInContext(fs.readFileSync(process.argv[1],'utf8')+';globalThis.__L=LESSONS;',c);process.stdout.write(JSON.stringify(c.__L))")
songs = {}
if os.path.exists('songs.js'):
    o = subprocess.run(['node', '-e', "const fs=require('fs'),vm=require('vm');const c=vm.createContext({});vm.runInContext(fs.readFileSync('songs.js','utf8')+';globalThis.__S=SONGS;',c);process.stdout.write(JSON.stringify(c.__S))"], capture_output=True, text=True)
    songs = json.loads(o.stdout) if o.returncode == 0 else {}

data = []
for name, f, key in FILES:
    if not os.path.exists(f):
        continue
    o = subprocess.run(['node', '-e', JS, f], capture_output=True, text=True)
    L = json.loads(o.stdout)
    sg = songs.get(name.replace(' ', ''), {})
    ls = []
    for i, x in enumerate(L):
        if x.get('review'):
            continue
        s = sg.get(str(i))
        ls.append({'i': i + 1, 'zh': x['zh'], 'vi': x['vi'], 'w': x['words'], 's': [[z['z'], z['p'], z['v']] for z in x['sents']],
                   'song': [s['t'], s['v'], s['id']] if s else None})
    data.append({'name': name, 'key': key, 'lessons': ls})

tong_tu = sum(len(l['w']) for d in data for l in d['lessons'])
tong_cau = sum(len(l['s']) for d in data for l in d['lessons'])
tpl = open('duyet-tpl.html', encoding='utf-8').read()
out = (tpl.replace('/*DATA*/[]', json.dumps(data, ensure_ascii=False, separators=(',', ':')))
          .replace('{{TONG_TU}}', str(tong_tu)).replace('{{TONG_CAU}}', str(tong_cau)).replace('{{SO_APP}}', str(len(data))))
open('duyet-bai.html', 'w', encoding='utf-8').write(out)
print(len(data), 'app ·', tong_tu, 'từ ·', tong_cau, 'câu ·', len(out.encode()) // 1024, 'KB')
