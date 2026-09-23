# -*- coding: utf-8 -*-
# Dựng NGÂN HÀNG CÂU HỎI của 8 app: python3 nganhang.py → ngan-hang-cau-hoi.html
import json, subprocess, os, re, random

FILES = [('YCT 1', 'yct.js', 'yct1'), ('YCT 2', 'yct2.js', 'yct2'), ('YCT 3', 'yct3.js', 'yct3'), ('YCT 4', 'yct4.js', 'yct4'),
         ('HSK 1', 'hsk1.js', 'hsk1'), ('HSK 2', 'hsk2.js', 'hsk2'), ('HSK 3', 'hsk3.js', 'hsk3'), ('HSK 4', 'hsk4.js', 'hsk4')]
JS = ("const fs=require('fs'),vm=require('vm');const c=vm.createContext({});"
      "vm.runInContext(fs.readFileSync(process.argv[1],'utf8')+';globalThis.__L=VAR;',c);process.stdout.write(JSON.stringify(c.__L))")


def load(f, var='LESSONS'):
    o = subprocess.run(['node', '-e', JS.replace('VAR', var), f], capture_output=True, text=True)
    return json.loads(o.stdout) if o.returncode == 0 and o.stdout else None


app = open('app.html', encoding='utf-8').read()
RAD_NAME = json.loads(re.search(r'const RAD_NAME = (\{.*?\});', app, re.S).group(1))
RAD_DISP = {"⺼": "月", "⺮": "竹", "⺌": "小", "⺀": "丷"}
STROKES = json.load(open('strokes.json', encoding='utf-8'))
MMAH = {}
for line in open('makemeahanzi-dictionary.txt', encoding='utf-8'):
    o = json.loads(line)
    MMAH[o['character']] = o
PARTICLES = {"吗", "的", "个"}

data = []
for name, f, key in FILES:
    if not os.path.exists(f):
        continue
    L = load(f)
    nd = load(key + '-nd.js', 'ND') or {} if os.path.exists(key + '-nd.js') else {}
    ls = []
    for i, x in enumerate(L):
        if x.get('review'):
            continue
        words = x['words']
        sents = x['sents']
        # điền từ: mỗi câu, các chỗ trống dùng được (bỏ từ chức năng)
        fill = []
        for s in sents:
            for k, t in enumerate(s['t']):
                if t in PARTICLES:
                    continue
                if any(w[0] == t for w in words):
                    line = ''.join('____' if j == k else y for j, y in enumerate(s['t']))
                    fill.append([line + s['z'][-1] if s['z'][-1] in '。？！' else line, t, s['v']])
        ghep = [[w[0], w[1], w[2]] for w in words if len(w[0]) > 1]
        viet = [[w[0], w[1], w[2]] for w in words if len(w[0]) == 1 and w[0] in STROKES]
        bothu = []
        for c in dict.fromkeys(''.join(w[0] for w in words)):
            o = MMAH.get(c)
            st = STROKES.get(c)
            if not o or not st or not st.get('radStrokes') or len(st['radStrokes']) >= len(st['strokes']):
                continue
            r = o.get('radical', '')
            if r not in RAD_NAME:
                continue
            m = re.match(r'^[⿰⿱⿵⿶⿷⿸⿹⿺⿻]([^？⿰-⿻])([^？⿰-⿻])$', o.get('decomposition', ''))
            bothu.append([c, RAD_DISP.get(r, r), RAD_NAME[r][0], RAD_NAME[r][1], (RAD_DISP.get(m.group(1), m.group(1)) + '+' + RAD_DISP.get(m.group(2), m.group(2))) if m else ''])
        v = nd.get(str(i)) or {}
        ls.append({'i': i + 1, 'zh': x['zh'], 'vi': x['vi'], 'w': words, 's': [[z['z'], z['p'], z['v']] for z in sents],
                   'fill': fill, 'ghep': ghep, 'viet': viet, 'bothu': bothu[:4],
                   'dl': v.get('dl'), 'rd': v.get('rd')})
    data.append({'name': name, 'key': key, 'lessons': ls})

tpl = open('nganhang-tpl.html', encoding='utf-8').read()
out = tpl.replace('/*DATA*/[]', json.dumps(data, ensure_ascii=False, separators=(',', ':')))
open('ngan-hang-cau-hoi.html', 'w', encoding='utf-8').write(out)
print(len(data), 'app ·', sum(len(l['w']) for d in data for l in d['lessons']), 'từ ·', len(out.encode()) // 1024, 'KB')
