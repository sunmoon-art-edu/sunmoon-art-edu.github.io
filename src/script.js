<script>
(function(){
  /* ---- config: connect the trial form here (Google Apps Script / Formspree / your API). Leave empty until ready. ---- */
  var FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzcqoHdsWUcwVkGZimpB-zN5PHvtn3HW1YAc5lGTqdTYhKunKvibm136KhqSFF2O8eKaA/exec';

  var d=document, w=window;
  var reduce = w.matchMedia && w.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var LANGS={vi:'Tiếng Việt',en:'English',zh:'中文'};
  var ZALO='https://zalo.me/0396308188';
  var MSG={
    en:{open:'Open menu',close:'Close menu',title:'Registration sent ✓',copied:'Copied. Paste it into the Zalo chat.',copy:'Copy message',go:'Open Zalo and send',
        hint:'SunMoon has received your details. Tap one of the Zalo numbers below, then tap and hold the chat box → Paste → Send.',
        compose:function(x){return 'Hello SunMoon, I would like to book a trial class.\n- Parent: '+x.parent+'\n- Phone/Zalo: '+x.phone+'\n- Class: '+x.group+(x.age?'\n- Age: '+x.age:'')+'\n- Chinese experience: '+x.experience+(x.message?'\n- Note: '+x.message:'');}},
    vi:{open:'Mở menu',close:'Đóng menu',title:'Đã gửi đăng ký ✓',copied:'Đã sao chép. Dán vào khung chat Zalo là xong.',copy:'Sao chép tin nhắn',go:'Mở Zalo và gửi',
        hint:'SunMoon đã nhận thông tin đăng ký của ba mẹ. Bấm 1 trong 2 số Zalo bên dưới, rồi nhấn giữ ô chat → Dán → Gửi để trò chuyện ngay.',
        compose:function(x){return 'Xin chào SunMoon, tôi muốn đăng ký học thử.\n- Phụ huynh: '+x.parent+'\n- SĐT/Zalo: '+x.phone+'\n- Lớp: '+x.group+(x.age?'\n- Tuổi: '+x.age:'')+'\n- Đã học tiếng Trung: '+x.experience+(x.message?'\n- Ghi chú: '+x.message:'');}},
    zh:{open:'打开菜单',close:'关闭菜单',title:'报名已提交 ✓',copied:'已复制。粘贴到 Zalo 聊天框即可。',copy:'复制信息',go:'打开 Zalo 发送',
        hint:'日月已收到您的报名信息。点击下方任一 Zalo 号码，长按聊天框→粘贴→发送即可。',
        compose:function(x){return '您好日月，我想预约试听课。\n- 家长：'+x.parent+'\n- 电话/Zalo：'+x.phone+'\n- 班级：'+x.group+(x.age?'\n- 年龄：'+x.age:'')+'\n- 中文基础：'+x.experience+(x.message?'\n- 备注：'+x.message:'');}}
  };
  var MOBILE = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||'');
  /* gửi đăng ký về Lịch toàn năng SunMoon (tab Học thử) — sendBeacon để không mất khi chuyển sang Zalo */
  function sendLead(o){
    if(!FORM_ENDPOINT) return;
    o.nguon='Web chinesekidsvn.com';
    var body=JSON.stringify(o);
    try{ if(navigator.sendBeacon && navigator.sendBeacon(FORM_ENDPOINT, new Blob([body],{type:'text/plain'}))) return; }catch(e){}
    try{ fetch(FORM_ENDPOINT,{method:'POST',mode:'no-cors',keepalive:true,headers:{'Content-Type':'text/plain'},body:body}); }catch(e){}
  }
  /* 2 nút Zalo SunMoon — bấm nút nào cũng chép lại tin rồi mở đúng số đó */
  var ZALOS=[['039 630 8188','https://zalo.me/0396308188'],['039 400 9488','https://zalo.me/0394009488']];
  function zaloBtns(){ return ZALOS.map(function(z){ return '<a class="btn btn-zalo2" target="_blank" rel="noopener" href="'+z[1]+'">Zalo '+z[0]+'</a>'; }).join(''); }
  function bindZalo(root,text){ [].forEach.call(root.querySelectorAll('.btn-zalo2'), function(a){ a.addEventListener('click', function(){ try{ navigator.clipboard.writeText(text); }catch(e){} }); }); }
  var lang='vi';
  function esc(s){ return String(s).replace(/[&<>"']/g,function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }

  /* ---------- language switching ---------- */
  var app=d.getElementById('app');
  function pick(){
    var q=(location.search.match(/[?&]lang=(en|vi|zh)/)||[])[1]; if(q) return q;
    var h=(location.hash.match(/lang=(en|vi|zh)/)||[])[1]; if(h) return h;
    try{ var s=localStorage.getItem('sunmoon-lang'); if(s && LANGS[s]) return s; }catch(e){}
    var n=(navigator.language||'').toLowerCase();
    if(n.indexOf('zh')===0) return 'zh';
    return 'vi';
  }
  function setLang(code, keepScroll){
    if(!LANGS[code]) code='vi';
    var tpl=d.getElementById('tpl-'+code);
    if(tpl){ app.innerHTML=tpl.innerHTML; }
    lang=code;
    d.documentElement.lang = code==='zh'?'zh-Hans':code;
    d.documentElement.setAttribute('data-lang',code);
    try{ localStorage.setItem('sunmoon-lang',code); }catch(e){}
    if(w.PAGE_TITLES && w.PAGE_TITLES[code]) d.title=w.PAGE_TITLES[code];
    d.querySelectorAll('.langs button').forEach(function(b){ b.setAttribute('aria-pressed', b.dataset.lang===code?'true':'false'); });
    init();
  }
  function bindSwitch(){
    d.querySelectorAll('.langs button').forEach(function(b){
      b.addEventListener('click', function(){ if(b.dataset.lang!==lang){ var y=w.scrollY; setLang(b.dataset.lang); w.scrollTo(0,y); } });
    });
  }

  /* ---------- page behaviours (re-run after each language swap) ---------- */
  var scrollBound=false;
  function init(){
    var header=d.querySelector('.header');
    if(header) header.classList.toggle('scrolled', w.scrollY>8);
    if(!scrollBound){ w.addEventListener('scroll', function(){ var h=d.querySelector('.header'); if(h) h.classList.toggle('scrolled', w.scrollY>8); }, {passive:true}); scrollBound=true; }

    /* mobile drawer */
    var burger=d.querySelector('.burger'), drawer=d.getElementById('drawer');
    function setMenu(open){
      if(!burger||!drawer) return;
      burger.setAttribute('aria-expanded', open?'true':'false');
      burger.setAttribute('aria-label', open?MSG[lang].close:MSG[lang].open);
      drawer.classList.toggle('open', open);
      d.body.style.overflow = open?'hidden':'';
    }
    if(burger&&drawer){
      burger.addEventListener('click', function(){ setMenu(burger.getAttribute('aria-expanded')!=='true'); });
      drawer.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ setMenu(false); }); });
      d.addEventListener('keydown', function(e){ if(e.key==='Escape' && drawer.classList.contains('open')) setMenu(false); });
    }

    /* reveal on scroll — elements already in view are never hidden */
    var reveals=[].slice.call(d.querySelectorAll('.reveal'));
    if(!reduce && 'IntersectionObserver' in w){
      var vh=w.innerHeight;
      reveals.forEach(function(el){ if(el.getBoundingClientRect().top > vh*0.92) el.classList.add('pending'); });
      var io=new IntersectionObserver(function(entries){
        entries.forEach(function(en){
          if(en.isIntersecting){ en.target.classList.remove('pending'); en.target.classList.add('in'); io.unobserve(en.target); }
        });
      },{rootMargin:'0px 0px -8% 0px', threshold:0.08});
      reveals.forEach(function(el){ io.observe(el); });
      d.querySelectorAll('.prog-grid,.qcards,.tgrid,.sgrid').forEach(function(g){
        [].forEach.call(g.children, function(c,i){ c.style.transitionDelay=(i*90)+'ms'; });
      });
    }else{
      reveals.forEach(function(el){ el.classList.add('in'); });
    }

    /* timeline: light the dots one by one */
    var tl=d.getElementById('timeline');
    if(tl && 'IntersectionObserver' in w){
      var tio=new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting){
          tl.classList.add('in');
          [].forEach.call(tl.querySelectorAll('.tl'), function(item,i){ setTimeout(function(){ item.classList.add('lit'); }, reduce?0:200+i*220); });
          tio.disconnect();
        }
      },{threshold:0.25});
      tio.observe(tl);
    }

    /* floating CTA: show after the first screen, hide while the form is visible */
    var fc=d.getElementById('floatCta'), hero=d.querySelector('.hero, .pagehead'), form=d.getElementById('trial');
    if(fc){
      var heroGone=false, formVisible=false;
      function updateFloat(){ fc.classList.toggle('show', heroGone && !formVisible); }
      if('IntersectionObserver' in w && hero){
        new IntersectionObserver(function(e){ heroGone=!e[0].isIntersecting; updateFloat(); },{threshold:0.15}).observe(hero);
      } else { heroGone=true; updateFloat(); }
      if('IntersectionObserver' in w && form){
        new IntersectionObserver(function(e){ formVisible=e[0].isIntersecting; updateFloat(); },{threshold:0.1}).observe(form);
      }
    }

    /* accordion: close others when one opens */
    var acc=d.querySelectorAll('.acc details');
    acc.forEach(function(det){
      det.addEventListener('toggle', function(){ if(det.open) acc.forEach(function(o){ if(o!==det) o.open=false; }); });
    });

    /* gallery lightbox */
    var shots=[].slice.call(d.querySelectorAll('.gallery .shot, .hero-visual .shot'));
    shots.forEach(function(s){ s.addEventListener('click', function(){ openBox(s); }); });
    function openBox(s){
      var bg=getComputedStyle(s).backgroundImage; var big=(bg.match(/url\("?(.*?)"?\)/)||[])[1]; if(!big) return;
      var box=d.createElement('div'); box.className='lightbox';
      box.innerHTML='<button class="close" aria-label="Close">×</button><img src="'+big+'" alt="">';
      d.body.appendChild(box); d.body.style.overflow='hidden';
      function kill(){ box.remove(); d.body.style.overflow=''; d.removeEventListener('keydown',onk); }
      function onk(e){ if(e.key==='Escape') kill(); }
      box.addEventListener('click', kill); d.addEventListener('keydown', onk);
      requestAnimationFrame(function(){ box.classList.add('on'); });
    }


    /* class detail popup + quick trial sign-up */
    var DT={
      vi:{cta:'Đăng ký học thử',close:'Đóng',reg:'Đăng ký học thử',sub:'Gửi thông tin cho SunMoon qua Zalo',name:'Tên phụ huynh / học viên',phone:'Số điện thoại / Zalo',age:'Tuổi của con (nếu có)',send:'Gửi đăng ký qua Zalo',
          need:'Vui lòng nhập tên và số điện thoại',ask:'Nhắn Zalo để được tư vấn',
          msg:function(c,x){return 'Xin chào SunMoon, tôi muốn đăng ký học thử lớp '+c+'.\n- Họ tên: '+x.n+'\n- SĐT/Zalo: '+x.p+(x.a?'\n- Tuổi của con: '+x.a:'');}},
      en:{cta:'Book a trial',close:'Close',reg:'Book a trial lesson',sub:'Send your details to SunMoon via Zalo',name:'Parent / learner name',phone:'Phone / Zalo',age:"Child's age (if any)",send:'Send via Zalo',
          need:'Please enter your name and phone number',ask:'Message us on Zalo for advice',
          msg:function(c,x){return 'Hello SunMoon, I would like to book a trial for '+c+'.\n- Name: '+x.n+'\n- Phone/Zalo: '+x.p+(x.a?"\n- Child's age: "+x.a:'');}},
      zh:{cta:'预约试听',close:'关闭',reg:'预约试听',sub:'通过 Zalo 把信息发给日月',name:'家长 / 学员姓名',phone:'电话 / Zalo',age:'孩子年龄（如有）',send:'通过 Zalo 发送',
          need:'请填写姓名和电话',ask:'Zalo 咨询',
          msg:function(c,x){return '您好日月，我想预约'+c+'的试听课。\n- 姓名：'+x.n+'\n- 电话/Zalo：'+x.p+(x.a?'\n- 孩子年龄：'+x.a:'');}}
    };
    function openDetail(card){
      var t=DT[lang], more=card.querySelector('.more'); if(!more) return;
      var nameEl=card.querySelector('.name'); var clone=nameEl.cloneNode(true); var sm=clone.querySelector('small'); var kicker=sm?sm.textContent:''; if(sm) sm.remove();
      var cname=clone.textContent.trim(), age=(card.querySelector('.age')||{}).textContent||'';
      var box=d.createElement('div'); box.className='detail'; box.setAttribute('role','dialog'); box.setAttribute('aria-modal','true'); box.setAttribute('aria-label',cname);
      box.innerHTML='<div class="detail-panel"><button type="button" class="detail-x" aria-label="'+t.close+'">×</button>'
        +'<p class="detail-kicker">'+(more.dataset.kicker?esc(more.dataset.kicker)+'':'')+(more.dataset.kicker?'':esc(age))+(!more.dataset.kicker&&kicker&&kicker!==cname?' · '+esc(kicker):'')+'</p><h3 class="detail-title">'+esc(cname)+'</h3>'
        +'<div class="detail-body">'+more.innerHTML+'</div>'
        +'<div class="detail-sticky"><button type="button" class="btn btn-primary detail-go">'+t.cta+'</button></div>'
        +'<form class="detail-form" novalidate><h4>'+esc(more.dataset.reg||t.reg)+'</h4><p class="detail-sub">'+t.sub+'</p>'
        +'<input name="n" placeholder="'+t.name+'" autocomplete="name"><input name="p" type="tel" inputmode="tel" placeholder="'+t.phone+'" autocomplete="tel"><input name="a" placeholder="'+t.age+'">'
        +'<p class="detail-err" aria-live="polite"></p><div class="detail-actions"><button class="btn btn-primary" type="submit">'+t.send+'</button>'
        +'<a class="btn btn-ghost" target="_blank" rel="noopener" href="'+ZALO+'">'+esc(more.dataset.ask||t.ask)+'</a></div><div class="detail-done"></div></form></div>';
      d.body.appendChild(box); d.body.style.overflow='hidden';
      function kill(){ box.remove(); d.body.style.overflow=''; d.removeEventListener('keydown',onk); if(location.hash==='#'+card.id) history.replaceState(null,'',location.pathname+location.search); }
      function onk(e){ if(e.key==='Escape') kill(); }
      box.addEventListener('click', function(e){ if(e.target===box) kill(); });
      box.querySelector('.detail-x').addEventListener('click', kill); d.addEventListener('keydown', onk);
      var f=box.querySelector('form');
      var sticky=box.querySelector('.detail-sticky');
      box.querySelector('.detail-go').addEventListener('click', function(){ f.scrollIntoView({behavior: reduce?'auto':'smooth', block:'start'}); setTimeout(function(){ f.n.focus({preventScroll:true}); }, reduce?0:450); });
      if('IntersectionObserver' in w){ new IntersectionObserver(function(en){ sticky.classList.toggle('hide', en[0].isIntersecting); },{root:box.querySelector('.detail-panel'),threshold:0.15}).observe(f); }
      f.addEventListener('submit', function(e){
        e.preventDefault();
        var x={n:f.n.value.trim(),p:f.p.value.trim(),a:f.a.value.trim()};
        if(!x.n||!x.p){ f.querySelector('.detail-err').textContent=t.need; (x.n?f.p:f.n).focus(); return; }
        var text=t.msg(cname,x); f.querySelector('.detail-err').textContent='';
        var done=f.querySelector('.detail-done');
        done.innerHTML='<b>'+MSG[lang].title+'</b><pre class="msg">'+esc(text)+'</pre><p class="hint-line">'+MSG[lang].hint+'</p>'
          +'<div class="detail-actions zalo2">'+zaloBtns()+'<button type="button" class="btn btn-ghost copy">'+MSG[lang].copy+'</button></div><p class="copied" aria-live="polite"></p>';
        var flag=done.querySelector('.copied');
        function copy(){ try{ navigator.clipboard.writeText(text).then(function(){ flag.textContent=MSG[lang].copied; }); }catch(err){} }
        done.querySelector('.copy').addEventListener('click', copy); copy();
        done.scrollIntoView({behavior: reduce?'auto':'smooth', block:'nearest'});
        sendLead({tenBe:x.n,phuHuynh:x.n,sdt:x.p,tuoi:x.a,chuongTrinh:cname,ghiChu:'Đăng ký từ popup lớp · '+lang});
        bindZalo(done,text);
      });
      requestAnimationFrame(function(){ box.classList.add('on'); });
      if(card.id && location.hash!=='#'+card.id) history.replaceState(null,'','#'+card.id);
    }
    [].forEach.call(d.querySelectorAll('.prog, .xprog'), function(card){
      if(!card.querySelector('.more')) return;
      card.classList.add('has-more');
      card.addEventListener('click', function(e){ if(e.target.closest('a')) return; openDetail(card); });
    });
    var hid=(location.hash||'').slice(1);
    if(hid && /^[a-z]+$/.test(hid)){ var hc=d.getElementById(hid); if(hc && hc.querySelector('.more') && !d.querySelector('.detail')){ hc.scrollIntoView({block:'center'}); openDetail(hc); } }


    /* tài liệu: để lại SĐT 1 lần → tải tất cả (lưu về Lịch toàn năng) */
    var GT={vi:{t:'Nhận tài liệu miễn phí',s:'Để lại tên và số điện thoại một lần, sau đó ba mẹ tải được tất cả tài liệu.',n:'Tên phụ huynh / học viên',p:'Số điện thoại / Zalo',b:'Mở tài liệu',e:'Vui lòng nhập tên và số điện thoại',x:'Đóng'},
            en:{t:'Get the free materials',s:'Leave your name and phone number once, then download everything.',n:'Parent / learner name',p:'Phone / Zalo',b:'Open the file',e:'Please enter your name and phone number',x:'Close'},
            zh:{t:'免费领取资料',s:'留一次姓名和电话，即可下载全部资料。',n:'家长 / 学员姓名',p:'电话 / Zalo',b:'打开资料',e:'请填写姓名和电话',x:'关闭'}};
    function unlocked(){ try{ return localStorage.getItem('sunmoon-dl')==='1'; }catch(e){ return false; } }
    [].forEach.call(d.querySelectorAll('a.dl'), function(a){
      a.addEventListener('click', function(e){
        if(unlocked()) return;
        e.preventDefault();
        var t=GT[lang]||GT.vi, box=d.createElement('div'); box.className='detail'; box.setAttribute('role','dialog'); box.setAttribute('aria-modal','true');
        box.innerHTML='<div class="detail-panel gate"><button type="button" class="detail-x" aria-label="'+t.x+'">×</button><h3 class="detail-title">'+t.t+'</h3><p class="detail-sub">'+t.s+'</p>'
          +'<form class="detail-form" novalidate><input name="n" placeholder="'+t.n+'" autocomplete="name"><input name="p" type="tel" inputmode="tel" placeholder="'+t.p+'" autocomplete="tel">'
          +'<p class="detail-err" aria-live="polite"></p><div class="detail-actions"><button class="btn btn-primary" type="submit">'+t.b+'</button></div></form></div>';
        d.body.appendChild(box); d.body.style.overflow='hidden';
        function kill(){ box.remove(); d.body.style.overflow=''; }
        box.addEventListener('click', function(ev){ if(ev.target===box) kill(); });
        box.querySelector('.detail-x').addEventListener('click', kill);
        var f=box.querySelector('form'); setTimeout(function(){ f.n.focus(); },50);
        f.addEventListener('submit', function(ev){
          ev.preventDefault();
          var n=f.n.value.trim(), p=f.p.value.trim();
          if(!n||p.replace(/\D/g,'').length<9){ f.querySelector('.detail-err').textContent=t.e; return; }
          sendLead({tenBe:n,phuHuynh:n,sdt:p,chuongTrinh:'Tải tài liệu '+(a.dataset.lvl||''),ghiChu:'Tải tài liệu trên web · '+lang});
          try{ localStorage.setItem('sunmoon-dl','1'); }catch(err){}
          kill(); w.open(a.href,'_blank','noopener');
        });
        requestAnimationFrame(function(){ box.classList.add('on'); });
      });
    });
    /* trial form */
    if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var ok=true;
      ['f-parent','f-phone'].forEach(function(id){
        var inp=d.getElementById(id), f=inp.closest('.field');
        var bad = !inp.value.trim();
        f.classList.toggle('invalid', bad); if(bad) ok=false;
      });
      if(!ok){ form.querySelector('.invalid input').focus(); return; }
      var data={}; new FormData(form).forEach(function(v,k){ data[k]=(v||'').trim(); });
      var text=MSG[lang].compose(data);
      var done=form.querySelector('.done');
      form.classList.add('sent');
      done.innerHTML='<b>'+MSG[lang].title+'</b><pre class="msg">'+esc(text)+'</pre><p class="hint-line">'+MSG[lang].hint+'</p>'
        +'<div class="done-actions zalo2">'+zaloBtns()+'<button type="button" class="btn btn-ghost copy">'+MSG[lang].copy+'</button></div><p class="copied" aria-live="polite"></p>';
      var flag=done.querySelector('.copied');
      function copy(){ try{ navigator.clipboard.writeText(text).then(function(){ flag.textContent=MSG[lang].copied; }); }catch(e){} }
      done.querySelector('.copy').addEventListener('click', copy);
      copy();
      done.scrollIntoView({behavior: reduce?'auto':'smooth', block:'center'});
      sendLead({tenBe:data.parent,phuHuynh:data.parent,sdt:data.phone,tuoi:data.age,chuongTrinh:data.group,ghiChu:[data.experience?('Đã học: '+data.experience):'',data.message||'','form Liên hệ · '+lang].filter(Boolean).join(' · ')});
      bindZalo(done,text);
    });
    form.querySelectorAll('input').forEach(function(i){ i.addEventListener('input', function(){ i.closest('.field').classList.remove('invalid'); }); });
    }

    var yr=d.getElementById('year'); if(yr) yr.textContent=new Date().getFullYear();
    bindSwitch();
  }

  var first=pick();
  if(first!=='vi'){ setLang(first); } else { setLang('vi'); }
})();
</script>
