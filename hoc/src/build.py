# Dựng app học YCT: python3 build.py 1   (hoặc 2, 3, 4; không ghi = 1)
import re,json,urllib.request,urllib.parse,os,subprocess,base64,hashlib,sys
LV=int(sys.argv[1]) if len(sys.argv)>1 else 1
src=lambda n: 'yct.js' if n==1 else f'yct{n}.js'
js=open(src(LV),encoding='utf-8').read()
WRE=r'\[\s*"([^"]+)","([^"]+)","([^"]+)"\s*\]'
def words_of(text):
    body=text[text.index('const LESSONS'):text.index('const EXTRA_PY')]
    out=[]
    for blk in re.findall(r'words:\[(.*?)\]\s*,\s*sents:',body,flags=re.S): out+=re.findall(WRE,blk)
    return out
words=words_of(js)
vocab=[w[0] for w in words]
prior={}
for n in range(1,LV):
    for h,p,v in words_of(open(src(n),encoding='utf-8').read()): prior[h]=p
extra=dict(re.findall(r'"([^"]+)"\s*:\s*"([^"]+)"',js[js.index('const EXTRA_PY'):]))
sents=re.findall(r'z:"([^"]+)"',js)
toks=set(sum([re.findall(r'"([^"]+)"',t) for t in re.findall(r't:\[([^\]]+)\]',js)],[]))
miss=sorted(t for t in toks if t not in vocab and t not in prior and t not in extra)
if miss: print('!! token chưa có pinyin:', ' '.join(miss))
chars={c for c in ''.join(vocab) if '\u4e00'<=c<='\u9fff'}
texts=set(vocab)|set(sents)|toks|chars
SUB={"长":"常"}  # đọc đúng cháng
audio={}
os.makedirs('audio',exist_ok=True)
for t in sorted(texts):
    h=hashlib.md5(t.encode()).hexdigest()[:10]; m4a=f'audio/{h}.m4a'
    if not os.path.exists(m4a):
        subprocess.run(['say','-v','Tingting','-r','165','-o',f'audio/{h}.aiff',SUB.get(t,t)],check=True)
        subprocess.run(['afconvert','-f','m4af','-d','aac','-b','40000',f'audio/{h}.aiff',m4a],check=True)
        os.remove(f'audio/{h}.aiff')
    audio[t]='data:audio/mp4;base64,'+base64.b64encode(open(m4a,'rb').read()).decode()
data={}
cache='strokes.json'
if os.path.exists(cache): data=json.load(open(cache,encoding='utf-8'))
wchars=chars|set(''.join(re.findall(r'write:\[([^\]]+)\]',js)).replace('"','').replace(',',''))
wchars|=set('习一十人六口小三他月四八')  # chữ ví dụ phần Học cách viết chữ
need={}
for c in sorted(wchars):
    if c not in data:
        try: data[c]=json.load(urllib.request.urlopen('https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0.1/'+urllib.parse.quote(c)+'.json',timeout=20))
        except Exception as e: print('!! thiếu nét chữ',c,e); continue
    need[c]=data[c]
json.dump(data,open(cache,'w',encoding='utf-8'),ensure_ascii=False)
s=open('app.html',encoding='utf-8').read()
s=s.replace('YCT 1',f'YCT {LV}').replace('YCT1',f'YCT{LV}').replace('yct1',f'yct{LV}')
s=s.replace('/*DATA*/',js).replace('/*PRIOR*/{}',json.dumps(prior,ensure_ascii=False))
s=s.replace('/*STROKES*/{}',json.dumps(need,ensure_ascii=False,separators=(',',':')))
s=s.replace('/*AUDIO*/{}',json.dumps(audio,ensure_ascii=False,separators=(',',':')))
open(f'../yct{LV}-artifact.html','w',encoding='utf-8').write(s)
page=('<!doctype html>\n<html lang="vi">\n<head>\n<meta charset="utf-8">\n'
      '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
      '<meta name="theme-color" content="#4E8F91">\n'
      '<style>body{margin:0}img{max-width:100%}[hidden]{display:none!important}:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}</style>\n'
      + s.replace('</style>', '</style>\n</head>\n<body>', 1) + '\n</body>\n</html>\n')
open(f'../yct{LV}.html','w',encoding='utf-8').write(page)
print(f'YCT{LV}: {len(vocab)} từ, {len(sents)} câu, {len(audio)} tiếng đọc, {len(need)} chữ viết, {len(s.encode())//1024} KB')
