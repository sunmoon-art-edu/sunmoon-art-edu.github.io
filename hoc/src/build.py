import re,json,urllib.request,urllib.parse,os,subprocess,base64,hashlib
js=open('yct.js',encoding='utf-8').read()
words=re.findall(r'\[\s*"([^"]+)","([^"]+)","([^"]+)"\s*\]',js)
vocab=[w[0] for w in words if not any(ch in w[2] for ch in '"')]
sents=re.findall(r'z:"([^"]+)"',js)
toks=set(sum([re.findall(r'"([^"]+)"',t) for t in re.findall(r't:\[([^\]]+)\]',js)],[]))
chars={c for c in ''.join(vocab) if '\u4e00'<=c<='\u9fff'}
texts=set(vocab)|set(sents)|toks|chars
SUB={"长":"常"}  # đọc đúng cháng
audio={}
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
for c in sorted(wchars):
    if c in data: continue
    data[c]=json.load(urllib.request.urlopen('https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0.1/'+urllib.parse.quote(c)+'.json',timeout=20))
json.dump(data,open(cache,'w',encoding='utf-8'),ensure_ascii=False)
s=open('app.html',encoding='utf-8').read()
s=s.replace('/*STROKES*/{}',json.dumps(data,ensure_ascii=False,separators=(',',':')))
s=s.replace('/*AUDIO*/{}',json.dumps(audio,ensure_ascii=False,separators=(',',':')))
open('../../../sunmoon-yct1-artifact.html' if False else '../yct1-artifact.html','w',encoding='utf-8').write(s)
page=('<!doctype html>\n<html lang="vi">\n<head>\n<meta charset="utf-8">\n'
      '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
      '<meta name="theme-color" content="#4E8F91">\n'
      '<style>body{margin:0}img{max-width:100%}[hidden]{display:none!important}:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}</style>\n'
      + s.replace('</style>', '</style>\n</head>\n<body>', 1) + '\n</body>\n</html>\n')
open('../yct1.html','w',encoding='utf-8').write(page)
print('clips',len(audio),'size',len(s.encode())//1024,'KB')
