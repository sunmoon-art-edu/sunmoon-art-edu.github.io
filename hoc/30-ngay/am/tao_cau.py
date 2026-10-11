# 11/10: câu/cụm chưa có tiếng người thật → thu sẵn bằng giọng edge-tts (miễn phí, cùng giọng bài giảng), to + chậm
import os,sys,json,hashlib,subprocess
D=os.path.dirname(os.path.abspath(__file__));os.makedirs(D+"/c",exist_ok=True)
M=json.load(open(D+"/am.json",encoding="utf-8"))
ds=[l.strip() for l in open(D+"/cau.txt",encoding="utf-8") if l.strip()]
FF=os.path.expanduser("~/bin/ffmpeg");n=0
for t in ds:
    k=t.replace("—","，");key=k.strip()
    import re;key=re.sub(r"[。！？!?]+$","",key)
    if key in M:continue
    h=hashlib.md5(key.encode()).hexdigest()[:12];mp3=f"{D}/c/{h}.mp3"
    if not os.path.exists(mp3):
        tmp=f"/private/tmp/claude-501/cau_{h}.mp3"
        for _ in range(4):
            r=subprocess.run([sys.executable,"-m","edge_tts","--voice","zh-CN-XiaoxiaoNeural","--rate=-30%","--text",k.replace("， ","，").replace("……","。"),"--write-media",tmp],capture_output=True)
            if r.returncode==0 and os.path.exists(tmp) and os.path.getsize(tmp)>2000:break
        else:print("LOI",t);continue
        subprocess.run([FF,"-loglevel","error","-y","-i",tmp,"-af","loudnorm=I=-15:TP=-1.5","-ar","24000","-ac","1","-b:a","48k",mp3],check=True);os.remove(tmp)
    M[key]="c/"+h+".mp3";n+=1
json.dump(M,open(D+"/am.json","w",encoding="utf-8"),ensure_ascii=False,separators=(",",":"))
print("them",n,"tong",len(M))
