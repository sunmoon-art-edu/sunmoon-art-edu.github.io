# 07/10: tiếng NGƯỜI THẬT cho các nút đọc lẻ (thay giọng điện thoại hay sai thanh)
# Nguồn: github.com/hugolpz/audio-cmn — âm tiết: Chen Wang · từ HSK: Yue Tan (Shtooka) · CC BY-SA
import re,os,json,urllib.request,urllib.parse
from pypinyin import pinyin,Style
D=os.path.dirname(os.path.abspath(__file__));R=os.path.dirname(D)
s=open(R+"/tu-hoc-tieng-trung.html",encoding="utf-8").read()
BASE="https://raw.githubusercontent.com/hugolpz/audio-cmn/master/64k/"
TONE={"ā":("a",1),"á":("a",2),"ǎ":("a",3),"à":("a",4),"ē":("e",1),"é":("e",2),"ě":("e",3),"è":("e",4),"ī":("i",1),"í":("i",2),"ǐ":("i",3),"ì":("i",4),
 "ō":("o",1),"ó":("o",2),"ǒ":("o",3),"ò":("o",4),"ū":("u",1),"ú":("u",2),"ǔ":("u",3),"ù":("u",4),"ǖ":("v",1),"ǘ":("v",2),"ǚ":("v",3),"ǜ":("v",4),"ü":("v",0)}
def so(py):   # mā → ma1 ; ma → ma0 (thanh nhẹ)
    py=py.strip().lower();t=0;o=""
    for c in py:
        if c in TONE:b,k=TONE[c];o+=b;t=t or k
        else:o+=c
    o=re.sub(r"[^a-z]","",o.replace("ü","v"));return o,t
# phụ âm / vần đơn đọc theo âm chuẩn sách giáo khoa (thanh 1)
AMDOC={"b":"bo1","p":"po1","m":"mo1","f":"fo1","d":"de1","t":"te1","n":"ne1","l":"le1","g":"ge1","k":"ke1","h":"he1","j":"ji1","q":"qi1","x":"xi1",
 "zh":"zhi1","ch":"chi1","sh":"shi1","r":"ri4","z":"zi1","c":"ci1","s":"si1","y":"yi1","w":"wu1","a":"a1","o":"o1","e":"e1","i":"yi1","u":"wu1","ü":"yu1","v":"yu1",
 "ai":"ai1","ei":"ei1","ui":"wei1","ao":"ao1","ou":"ou1","iu":"you1","ie":"ye1","üe":"yue1","ve":"yue1","er":"er2","an":"an1","en":"en1","in":"yin1","un":"wen1","ün":"yun1",
 "ang":"ang1","eng":"eng1","ing":"ying1","ong":"hong1","ia":"ya1","ua":"wa1","uo":"wo1","uai":"wai1","iao":"yao1","ian":"yan1","uan":"wan1","üan":"yuan1","iang":"yang1","uang":"wang1","iong":"yong1",
 "yin":"yin1","ying":"ying1","yuan":"yuan1","ye":"ye1","yun":"yun1","yue":"yue1"}
cap={}   # chữ → âm tiết mong muốn (từ dữ liệu bài)
for m in re.finditer(r'"([㐀-鿿]{1,4})\|([^|"]+)\|',s): cap.setdefault(m.group(1),m.group(2))
for m in re.finditer(r'\["([^"]{1,5})","([㐀-鿿])","([^"]*)"',s): cap.setdefault(m.group(2),m.group(3) or m.group(1))
for m in re.finditer(r'([a-zü]{1,4}):"([㐀-鿿])"',s[s.index("const AM="):s.index("const AM=")+600]): cap[m.group(2)]=m.group(1)
for m in re.finditer(r'(\w+)\|([㐀-鿿])',s): cap.setdefault(m.group(2),m.group(1))
PYOK=re.compile(r"[a-zA-Zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜü]{1,6}")
cap={h:p for h,p in cap.items() if PYOK.fullmatch(p.strip())}   # chỉ giữ phiên âm 1 âm tiết hợp lệ
NHE=set("吗呢吧了的么们着过")
han=set(re.findall(r'[㐀-鿿]{1,4}',s))
def tai(rel,out):
    if os.path.exists(out):return True
    try:urllib.request.urlretrieve(BASE+urllib.parse.quote(rel),out);return os.path.getsize(out)>1000
    except Exception:
        if os.path.exists(out):os.remove(out)
        return False
os.makedirs(D+"/s",exist_ok=True);os.makedirs(D+"/w",exist_ok=True)
MAP={};thieu=[]
for h in sorted(han):
    f=None
    if len(h)==1:
        py=cap.get(h);
        if h in NHE: syl=None
        elif py and py.lower() in AMDOC and not re.search(r"[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]",py): syl=AMDOC[py.lower()]
        else:
            o,t=so(py) if py else so(pinyin(h,style=Style.TONE)[0][0])
            syl=f"{o}{t or 1}" if o else None   # phiên âm không dấu trong bảng = đọc thanh 1
        if syl is None:   # thanh nhẹ → bản đọc chữ của Yue Tan
            if tai(f"hsk/cmn-{h}.mp3",f"{D}/w/{h}.mp3"):f=f"w/{h}.mp3"
        elif tai(f"syllabs/cmn-{syl}.mp3",f"{D}/s/{syl}.mp3"):f=f"s/{syl}.mp3"
    else:
        if h in cap and tai(f"hsk/cmn-{h}.mp3",f"{D}/w/{h}.mp3"):f=f"w/{h}.mp3"
    if f:MAP[h]=f
    elif len(h)==1 or h in cap:thieu.append(h)
json.dump(MAP,open(D+"/am.json","w"),ensure_ascii=False,separators=(",",":"))
print("co",len(MAP),"thieu",len(thieu),thieu[:40])
