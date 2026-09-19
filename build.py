#!/usr/bin/env python3
"""Build the SunMoon multi-page site from src/.

  python3 build.py            -> 6 pages, photos referenced as assets/photos/*.jpg (for hosting)
  python3 build.py --inline   -> same pages, photos embedded as data URIs (one-file preview)

Content lives in src/body-{vi,en,zh}.html (one long document); this script slices it into
sections and reassembles them into pages. Never edit the generated *.html by hand.
"""
import re, json, base64, os, sys

os.chdir(os.path.dirname(os.path.abspath(__file__)))
INLINE = '--inline' in sys.argv
R = lambda p: open(p, encoding='utf-8').read()
LANGS = ('vi', 'en', 'zh')

head_tpl = R('src/head.html')
script = R('src/script.js')
logo_full = R('src/logo-full.b64'); logo_mark = R('src/logo-mark.b64'); fav = R('src/favicon.b64')
photos = json.load(open('src/photos.json')) if os.path.exists('src/photos.json') else {}

def photo_src(name):
    p = f'assets/photos/{name}'
    if INLINE and os.path.exists(p):
        return 'data:image/jpeg;base64,' + base64.b64encode(open(p, 'rb').read()).decode()
    if os.path.exists(p):  # cache-bust: a replaced photo gets a new URL
        import hashlib
        return p + '?v=' + hashlib.md5(open(p, 'rb').read()).hexdigest()[:8]
    return p

# ---------------------------------------------------------------- slice source
def slice_body(b):
    """-> (header_html, {section_key: html}, tail_html)"""
    i, j = b.index('<main>'), b.index('</main>')
    header, tail = b[:i], b[j + len('</main>'):]
    out = {}
    for chunk in re.split(r'\n(?=<!-- =+ [A-Z])', b[i + len('<main>'):j]):
        if not chunk.strip():
            continue
        m = re.search(r'<section([^>]*)>', chunk)
        if not m:
            continue
        attrs = m.group(1)
        key = (re.search(r'id="([a-z]+)"', attrs) or [None, None])[1]
        if not key:
            key = re.search(r'class="(?:section )?([a-z]+)', attrs).group(1)
        out[key] = chunk.rstrip()
    return header, out, tail

BODIES = {l: slice_body(R(f'src/body-{l}.html')) for l in LANGS}

# ------------------------------------------------------------------ page model
# section key -> page it now lives on (used to rewrite in-page anchors)
HOME, ABOUT, CLASSES, PARENTS, FAQ, CONTACT, DOCS = (
    'index.html', 'gioi-thieu.html', 'lop-hoc.html', 'ba-me.html', 'hoi-dap.html', 'lien-he.html', 'tai-lieu.html')
ANCHOR_PAGE = {
    'about': ABOUT, 'approach': ABOUT, 'teachers': ABOUT,
    'programs': CLASSES, 'math': CLASSES, 'writing': CLASSES, 'camp': CLASSES, 'little': CLASSES, 'kids': CLASSES, 'hsk': CLASSES, 'custom': CLASSES, 'comm': CLASSES,
    'work': CLASSES, 'more': CLASSES, 'journey': CLASSES,
    'parents': PARENTS, 'stories': PARENTS, 'guide': PARENTS,
    'faq': PARENTS, 'docs': DOCS, 'modes': CLASSES, 'contact': CONTACT, 'trial': CONTACT,
}
NAV = [(HOME, 'home'), (ABOUT, 'about'), (CLASSES, 'classes'), (PARENTS, 'parents'),
       (DOCS, 'docs'), (CONTACT, 'contact')]   # 19/09: bỏ trang Hỏi đáp (chị Linh) — câu hỏi gộp vào Dành cho ba mẹ

L = {
 'vi': dict(nav=dict(home='Trang chủ', about='Giới thiệu', classes='Các lớp học',
                     parents='Dành cho ba mẹ', faq='Hỏi đáp', docs='Tài liệu', contact='Liên hệ'),
            cta='Đăng ký học thử', menu='Điều hướng chính', home_label='SunMoon Art & Education — trang chủ',
            strap='Tiếng Trung · Văn hoá · Sáng tạo · Trưởng thành',
            titles={ABOUT: ('Giới thiệu', 'Về SunMoon', 'Một trung tâm tiếng Trung được xây quanh cách trẻ thật sự học một ngôn ngữ.'),
                    CLASSES: ('Các lớp học', 'Chương trình tại SunMoon', 'Tiếng Trung cho bé theo độ tuổi, tiếng Trung thương mại, giao tiếp, HSK, lớp cá nhân hoá, cùng Toán tư duy, Luyện chữ đẹp và các chương trình Camp.'),
                    PARENTS: ('Dành cho ba mẹ', 'Đồng hành cùng ba mẹ', 'Những câu hỏi thật, câu chuyện thật, và những điều nên biết trước khi con bắt đầu.'),
                    FAQ: ('Hỏi đáp', 'Câu hỏi thường gặp', 'Những điều ba mẹ hay hỏi SunMoon nhất.'),
                    DOCS: ('Tài liệu', 'Tài liệu học miễn phí', 'Đề thi mẫu, từ vựng và file nghe YCT, HSK chính thức. Để lại số điện thoại 1 lần là tải được tất cả.'),
                    CONTACT: ('Liên hệ', 'Đăng ký học thử', 'Kể cho SunMoon một chút về con, chúng tôi sẽ gợi ý lớp phù hợp và hẹn buổi học thử.')}),
 'en': dict(nav=dict(home='Home', about='About', classes='Classes',
                     parents='For parents', faq='FAQ', docs='Resources', contact='Contact'),
            cta='Book a trial class', menu='Primary', home_label='SunMoon Art & Education — home',
            strap='Chinese Language · Culture · Creativity · Growth',
            titles={ABOUT: ('About', 'About SunMoon', 'A Chinese language centre built around the way children actually learn a language.'),
                    CLASSES: ('Classes', 'Programmes at SunMoon', 'Chinese for children by age, Business Chinese, conversation, HSK and personalised classes, plus Logical Maths, Handwriting and seasonal Camps.'),
                    PARENTS: ('For parents', 'Walking with parents', 'Real questions, real stories, and what is worth knowing before your child starts.'),
                    FAQ: ('FAQ', 'Questions parents ask', 'The things parents ask us most often.'),
                    DOCS: ('Resources', 'Free learning resources', 'Official YCT and HSK sample tests, vocabulary and audio. Leave your phone number once to download everything.'),
                    CONTACT: ('Contact', 'Book a trial class', 'Tell us a little about your child. We will suggest a programme and arrange a trial.')}),
 'zh': dict(nav=dict(home='首页', about='关于日月', classes='课程',
                     parents='家长须知', faq='常见问题', docs='学习资料', contact='联系我们'),
            cta='预约试听课', menu='主导航', home_label='SunMoon Art & Education — 首页',
            strap='中文语言 · 文化 · 创造力 · 成长',
            titles={ABOUT: ('关于日月', '关于日月', '一所围绕孩子真实学习方式而建立的中文学习中心。'),
                    CLASSES: ('课程', '日月的课程', '按年龄划分的少儿中文、商务中文、口语交际、HSK 与个性化定制课程，以及逻辑思维数学、书写练习和营地课程。'),
                    PARENTS: ('家长须知', '与家长同行', '真实的问题、真实的故事，以及孩子开始学习前值得了解的事。'),
                    FAQ: ('常见问题', '家长常问的问题', '家长最常问我们的问题。'),
                    DOCS: ('学习资料', '免费学习资料', 'YCT、HSK 官方样卷、词汇和听力。留一次电话即可下载全部资料。'),
                    CONTACT: ('联系我们', '预约试听课', '简单介绍一下孩子，我们会推荐合适的课程并安排试听。')}),
}

PAGES = {
    HOME:    ['hero', 'why', 'homeclasses', 'approach', 'inside', 'trial', 'final'],
    ABOUT:   ['about', 'approach', 'teachers', 'inside', 'final'],
    CLASSES: ['programs', 'modes', 'journey', 'trial', 'final'],
    PARENTS: ['parents', 'stories', 'guide', 'faq', 'trial', 'final'],
    CONTACT: ['contact', 'final'],
    DOCS:    ['docs', 'final'],
}

# ------------------------------------------------------- rewrite links & photos
def rewrite_links(html, page):
    def sub(m):
        anchor = m.group(1)
        target = ANCHOR_PAGE.get(anchor)
        if anchor == 'top' or target is None or target == page:
            return f'href="#{anchor}"'
        return f'href="{target}#{anchor}"'
    return re.sub(r'href="#([a-z]+)"', sub, html)

def fill_photos(html):
    if not photos:
        return html
    def shot(name, cap, cls='ph shot', extra=''):
        key = name.rsplit('.', 1)[0]
        return (f'<figure class="{cls}"{extra} data-photo="{key}" role="img" '
                f'aria-label="{cap}"><span class="cap">{cap}</span></figure>')
    m = re.search(r'<div class="ph main">.*?</div>\s*<div class="ph small">.*?</div>', html, re.S)
    if m and photos.get('hero-main'):
        cap_main = re.search(r'<div class="ph main">.*?<span class="cap">(.*?)</span>', m.group(0), re.S).group(1)
        cap_small = re.search(r'<div class="ph small">.*?<span class="cap">(.*?)</span>', m.group(0), re.S).group(1)
        rep = shot(photos['hero-main'], cap_main, 'ph main shot')
        if photos.get('hero-small'):
            rep += shot(photos['hero-small'], cap_small, 'ph small shot')
        html = html[:m.start()] + rep + html[m.end():]
    g = re.search(r'(<div class="gallery reveal">)(.*?)(</div>\s*<p class="hint">)', html, re.S)
    if g and photos.get('gallery'):
        tiles = re.findall(r'<div class="ph">.*?<span class="cap">(.*?)</span></div>', g.group(2), re.S)
        raw = re.findall(r'<div class="ph">.*?</div>', g.group(2), re.S)
        out = ''
        for i, cap in enumerate(tiles):
            out += shot(photos['gallery'][i], cap) if i < len(photos['gallery']) else raw[i]
        html = html[:g.start()] + g.group(1) + out + g.group(3) + html[g.end():]
    return html


# ---------------------------------------------------------- class detail popups
_ns = {}
exec(open('src/lop-chi-tiet.py', encoding='utf-8').read(), _ns)
DETAIL_H, DETAIL_C = _ns['H'], _ns['C']

# 19/09 chị Linh: các lớp có học online và offline (tạm áp cho 6 lớp tiếng Trung)
ONLINE_OK = {'little', 'kids', 'hsk', 'comm', 'work', 'custom'}
MODES = {'vi': ('Offline tại P1 & L6', 'Online'), 'en': ('In person at P1 & L6', 'Online'), 'zh': ('线下 · P1 & L6', '线上')}

def detail_html(cid, lang):
    c, h = DETAIL_C[cid], DETAIL_H[lang]
    x = c[lang]
    ul = lambda items: '<ul>' + ''.join(f'<li>{i}</li>' for i in items) + '</ul>'
    para = lambda k, cls: f'<p class="{cls}">{x[k]}</p>' if x.get(k) else ''
    # bớt in đậm (chị Linh 19/09): mỗi popup chỉ giữ tối đa 2 chỗ đậm — 1 ở "Sau khoá", 1 ở "Lớp học"
    plain = lambda s: re.sub(r'</?b>', '', s)
    def keep_one(items, last=False):
        idx = [i for i, s in enumerate(items) if '<b>' in s]
        pick = (idx[-1] if last else idx[0]) if idx else None
        out = [s if i == pick else plain(s) for i, s in enumerate(items)]
        if pick is not None:
            out[pick] = re.sub(r'(<b>.*?</b>)(.*)', lambda m: m.group(1) + plain(m.group(2)), out[pick], count=1)
        return out
    skills = cid == 'kids'   # danh sách kỹ năng: giữ đậm tên kỹ năng (Nghe – Nói, Đọc…) như chị viết
    x = dict(x, fit=[plain(s) for s in x.get('fit', [])], how=[plain(s) for s in x.get('how', [])],
             out=(x.get('out', []) if skills else keep_one(x.get('out', []), last=(cid == 'little'))), cls=keep_one(x.get('cls', [])))
    t_out = x.get('t_out') or (h['out_adult'] if c['adult'] else h['out'])
    faq = ''.join(f'<details><summary>{q}</summary><p>{a}</p></details>' for q, a in x['faq'])
    tag = ('<p class="more-tag">' + '<br>'.join(x['tag']) + '</p>') if x.get('tag') else ''
    if x.get('steps'):
        how_list = '<ol class="more-steps">' + ''.join(f'<li><b>{t}</b><span>{d}</span></li>' for t, d in x['steps']) + '</ol>'
    else:
        how_list = ul(x['how'])
    secs = []
    if x['fit']:
        secs.append(f'<section><h4>{x.get("t_fit") or h["fit"]}</h4>{ul(x["fit"])}</section>')
    if x['out']:
        secs.append(f'<section><h4>{t_out}</h4>{para("out_intro","more-intro")}{ul(x["out"])}{para("out_outro","more-outro")}</section>')
    secs.append(f'<section><h4>{x.get("t_how") or h["how"]}</h4>{para("how_intro","more-intro")}{how_list}{para("how_outro","more-outro")}</section>')
    for title, intro, items in x.get('extra', []):
        secs.append(f'<section><h4>{title}</h4><p class="more-intro">{intro}</p>{ul(items)}</section>')
    if x['cls']:
        secs.append(f'<section><h4>{x.get("t_cls") or h["cls"]}</h4>{ul(x["cls"])}</section>')
    elif x.get('cls_text'):
        secs.append(f'<section class="more-text"><h4>{x["t_cls"]}</h4>' + ''.join(f'<p>{t}</p>' for t in x['cls_text']) + '</section>')
    if x.get('forms'):
        secs.append(f'<section><h4>{x["t_forms"]}</h4><div class="more-forms">' + ''.join(f'<div><b>{t}</b><span>{d}</span></div>' for t, d in x['forms']) + '</div></section>')
    stack = x.get('steps') or x.get('extra') or x.get('forms')
    grid = 'more-stack' if stack else 'more-grid'
    faq_sec = f'<section class="more-faq"><h4>{x.get("t_faq") or h["faq"]}</h4>{faq}</section>' if x['faq'] else ''
    if x.get('t_note'):
        note = (f'<section class="more-end"><h4>{x["t_note"]}</h4>'
                + (f'<p class="more-endlead">{x["note_lead"]}</p>' if x.get('note_lead') else '')
                + f'<p class="more-note">{x["note"]}</p></section>')
    else:
        note = f'<p class="more-note">{x.get("note") or h["note"]}</p>'
    attrs = ''.join(f' data-{k}="{x[k]}"' for k in ('kicker', 'reg', 'ask') if x.get(k))
    modes = (f'<p class="modes"><span>{MODES[lang][0]}</span><span>{MODES[lang][1]}</span></p>' if cid in ONLINE_OK else '')
    return (f'<div class="more" hidden{attrs}>{modes}{tag}{para("lead","more-lead")}'
            f'<div class="{grid}">' + ''.join(secs) + '</div>'
            f'{faq_sec}{note}</div>')

def add_details(html, lang):
    btn = DETAIL_H[lang]['more']
    def sub(m):
        art, cid = m.group(0), m.group(2)
        if cid not in DETAIL_C:
            return art
        if cid in ONLINE_OK:
            art = re.sub(r'(<h3 class="name">.*?</h3>)', lambda mm: mm.group(1) + f'\n        <p class="modes"><span>{MODES[lang][0]}</span><span>{MODES[lang][1]}</span></p>', art, count=1, flags=re.S)
        art = re.sub(r'(\s*<a class="link" href="[^"]*#trial">)',
                     lambda mm: f'\n        <button type="button" class="more-btn">{btn} <span aria-hidden="true">+</span></button>' + mm.group(1),
                     art, count=1)
        return art.replace('</article>', detail_html(cid, lang) + '\n      </article>')
    return re.sub(r'<article class="(x?prog)[^"]*" id="(\w+)"[^>]*>.*?</article>', sub, html, flags=re.S)


# ------------------------------------------------------------ trang Tài liệu (19/09)
DOCS_T = {
 'vi': dict(badge='Miễn phí · Tài liệu chính thức · Để lại SĐT 1 lần là tải được tất cả',
            yct='YCT — Thi tiếng Trung cho học sinh', yct_sub='Kỳ thi chuẩn quốc tế dành cho học sinh tiểu học, THCS. 4 cấp.',
            hsk='HSK — Thi năng lực tiếng Trung', hsk_sub='Chứng chỉ dùng cho du học, học bổng, xin việc. 6 cấp.',
            lvl='Cấp', words='từ', pages='trang', mins='phút',
            f_yct='Đề cương + từ vựng + đề mẫu', f_mau='Đề thi mẫu + đáp án', f_dc='Đề cương + từ vựng', f_nghe='File nghe',
            vocab_all='Từ vựng HSK 1–6 (file Excel)',
            bt='Bài tập SunMoon tự soạn', bt_d='Có tranh, pinyin, luyện chữ — làm ở lớp và ở nhà.', bt_alt='Phiếu bài tập SunMoon', pre='Giáo trình SunMoon PreChinese', pre_d='Giáo trình trung tâm tự soạn cho bé 3–7 tuổi. Bản xem thử sắp có.',
            comm='Tài liệu Giao tiếp', comm_d='Bộ mẫu câu giao tiếp theo tình huống do SunMoon biên soạn. Sắp có.',
            paid='Sách bài tập online', paid_d='Bài tập luyện thêm YCT · HSK · Giao tiếp, có đáp án. Có phí.', soon='Sắp ra mắt', ask='Nhắn Zalo để được báo sớm',
            src='Nguồn: tài liệu chính thức, miễn phí do Chinese Testing International (chinesetest.cn) phát hành. SunMoon sắp xếp lại và thêm hướng dẫn tiếng Việt.'),
 'en': dict(badge='Free · Official materials · Leave your number once to download everything',
            yct='YCT — Youth Chinese Test', yct_sub='The international Chinese test for primary and secondary students. 4 levels.',
            hsk='HSK — Chinese Proficiency Test', hsk_sub='The certificate for study abroad, scholarships and jobs. 6 levels.',
            lvl='Level', words='words', pages='pages', mins='min',
            f_yct='Syllabus + vocabulary + sample test', f_mau='Sample test + answers', f_dc='Syllabus + vocabulary', f_nghe='Listening audio',
            vocab_all='HSK 1–6 vocabulary (Excel)',
            bt='SunMoon\'s own worksheets', bt_d='Pictures, pinyin and character practice — for class and home.', bt_alt='SunMoon worksheet', pre='SunMoon PreChinese course book', pre_d='Our own course book for ages 3–7. Preview pages coming soon.',
            comm='Conversation materials', comm_d='Situational phrase sets written by SunMoon. Coming soon.',
            paid='Online workbooks', paid_d='Extra YCT · HSK · conversation practice with answers. Paid.', soon='Coming soon', ask='Message us on Zalo to hear first',
            src='Source: official free materials published by Chinese Testing International (chinesetest.cn). Organised by SunMoon with Vietnamese guidance.'),
 'zh': dict(badge='免费 · 官方资料 · 留一次电话即可下载全部',
            yct='YCT — 中小学生汉语考试', yct_sub='面向中小学生的国际标准化中文考试，共 4 级。',
            hsk='HSK — 汉语水平考试', hsk_sub='用于留学、奖学金和求职的证书，共 6 级。',
            lvl='级', words='词', pages='页', mins='分钟',
            f_yct='大纲 + 词汇 + 样卷', f_mau='样卷 + 答案', f_dc='大纲 + 词汇', f_nghe='听力音频',
            vocab_all='HSK 1–6 级词汇表（Excel）',
            bt='日月自编练习', bt_d='配图、拼音、写字练习——课堂和家里都能用。', bt_alt='日月练习单', pre='日月 PreChinese 教材', pre_d='中心自编的 3–7 岁教材，试读页即将上线。',
            comm='口语交际资料', comm_d='日月编写的情境句型资料，即将上线。',
            paid='线上练习册', paid_d='YCT · HSK · 口语额外练习，附答案，收费。', soon='即将推出', ask='Zalo 留言，第一时间通知您',
            src='来源：Chinese Testing International（chinesetest.cn）免费发布的官方资料，由日月整理并附越南语说明。'),
}
YCT_INFO = [(1, 80, 32, 11), (2, 150, 39, 15), (3, 300, 47, 21), (4, 600, 50, 30)]
HSK_INFO = [(1, 150, 14, 25, 15), (2, 300, 18, 32, 26), (3, 600, 22, 33, 36), (4, 1200, 24, 35, 31), (5, 2500, 25, 36, 30), (6, 5000, 30, 41, 36)]
IC_PDF = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></svg>'
IC_AUD = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/></svg>'

def docs_section(lang):
    t = DOCS_T[lang]
    dl = lambda href, ic, label, meta, lvl: (f'<a class="dl" href="{href}" data-lvl="{lvl}" target="_blank" rel="noopener">'
                                            f'{ic}<span>{label}</span><small>{meta}</small></a>')
    yct = ''.join(f'<article class="doc"><h4>YCT {n}</h4><p class="doc-meta">~{w} {t["words"]}</p>'
                  + dl(f'tailieu/yct/YCT{n}-de-cuong-tu-vung-de-mau.pdf', IC_PDF, t['f_yct'], f'{p} {t["pages"]}', f'YCT{n}')
                  + dl(f'tailieu/yct/YCT{n}-file-nghe.m4a', IC_AUD, t['f_nghe'], f'{m} {t["mins"]}', f'YCT{n}')
                  + '</article>' for n, w, p, m in YCT_INFO)
    hsk = ''.join(f'<article class="doc"><h4>HSK {n}</h4><p class="doc-meta">{"≥" if n == 6 else "~"}{w} {t["words"]}</p>'
                  + dl(f'tailieu/hsk/HSK{n}-de-thi-mau.pdf', IC_PDF, t['f_mau'], f'{p} {t["pages"]}', f'HSK{n}')
                  + dl(f'tailieu/hsk/HSK{n}-file-nghe.m4a', IC_AUD, t['f_nghe'], f'{m} {t["mins"]}', f'HSK{n}')
                  + dl(f'tailieu/hsk/HSK{n}-de-cuong-tu-vung.pdf', IC_PDF, t['f_dc'], f'{pd} {t["pages"]}', f'HSK{n}')
                  + '</article>' for n, w, p, pd, m in HSK_INFO)
    soon = lambda title, desc, extra='': (f'<article class="doc doc-soon"><span class="soon">{t["soon"]}</span><h4>{title}</h4>'
                                          f'<p class="doc-meta">{desc}</p>{extra}</article>')
    return f"""<section class="section docs" id="docs">
  <div class="wrap">
    <p class="docs-badge reveal">{t['badge']}</p>
    <div class="docs-group reveal"><h3 class="h3">{t['yct']}</h3><p class="lede">{t['yct_sub']}</p><div class="docs-grid">{yct}</div></div>
    <div class="docs-group reveal"><h3 class="h3">{t['hsk']}</h3><p class="lede">{t['hsk_sub']}</p><div class="docs-grid">{hsk}</div>
      <p class="docs-extra">{dl('tailieu/hsk/HSK-tu-vung-1-6.xlsx', IC_PDF, t['vocab_all'], 'Excel', 'HSK')}</p></div>
    <div class="docs-group reveal"><h3 class="h3">{t['bt']}</h3><p class="lede">{t['bt_d']}</p>
      <div class="bt-strip">{''.join(f'<img src="{photo_src(f"baitap-{i}.jpg")}" alt="{t["bt_alt"]}" loading="lazy">' for i in (1, 2, 3))}</div>
      <div class="docs-grid">
      {soon(t['pre'], t['pre_d'])}{soon(t['comm'], t['comm_d'])}{soon(t['paid'], t['paid_d'], f'<a class="link" href="https://zalo.me/0396308188" target="_blank" rel="noopener">{t["ask"]}</a>')}
    </div></div>
    <p class="docs-src">{t['src']}</p>
  </div>
</section>"""


# ------------------------------------------------------------ mục Hình thức học (20/09)
MODES_T = {
 'vi': dict(eyebrow='Hình thức học', h='Chọn cách học phù hợp với bạn', cta='Tư vấn ngay', cards=[
   ('Học tại trung tâm', 'Tại P1 & L6, Vinhomes Central Park', ['Lớp nhỏ, tối đa 6 học viên', 'Học qua trò chơi, tương tác và thực hành thật', 'Kiểm tra trình độ trước khi xếp lớp']),
   ('Học online', 'Dành cho học viên bận rộn, ở xa', ['Học trực tiếp với giáo viên qua Zoom', 'Tiết kiệm thời gian và chi phí đi lại', 'Nội dung điều chỉnh cho phù hợp học online']),
   ('Học kèm 1-1', 'Cá nhân hoá hoàn toàn', ['Lộ trình riêng theo mục tiêu và trình độ', 'Lịch học linh hoạt theo thời gian của bạn', 'Học tại trung tâm hoặc online'])]),
 'en': dict(eyebrow='Ways to learn', h='Choose the way that suits you', cta='Get advice', cards=[
   ('At the centre', 'At P1 & L6, Vinhomes Central Park', ['Small classes, max 6 learners', 'Learning through games, interaction and real practice', 'Level check before placement']),
   ('Online', 'For busy learners or those far away', ['Live lessons with a teacher on Zoom', 'Save time and travel costs', 'Content adapted for online learning']),
   ('One-to-one', 'Fully personalised', ['Your own pathway by goal and level', 'Flexible schedule around your time', 'At the centre or online'])]),
 'zh': dict(eyebrow='上课形式', h='选择适合您的学习方式', cta='立即咨询', cards=[
   ('中心上课', 'Vinhomes Central Park 的 P1 和 L6', ['小班教学，每班最多 6 人', '在游戏、互动和实践中学习', '分班前进行水平测试']),
   ('线上上课', '适合忙碌或住得远的学员', ['通过 Zoom 与老师实时上课', '节省时间和交通费用', '内容针对线上学习调整']),
   ('一对一', '完全个性化', ['按目标和水平定制学习路径', '上课时间灵活', '可在中心或线上上课'])]),
}
MODE_IC = [
 '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 42h36M10 42V20l14-10 14 10v22"/><path d="M20 42V30h8v12M15 24h4M29 24h4"/></svg>',
 '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="8" y="10" width="32" height="22" rx="2"/><path d="M4 38h40"/><circle cx="24" cy="19" r="3.5"/><path d="M18 28c1-3 3.5-4.5 6-4.5s5 1.5 6 4.5"/></svg>',
 '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="17" cy="16" r="6"/><circle cx="33" cy="18" r="5"/><path d="M6 40c1-8 5.5-12 11-12s10 4 11 12M27 40c.5-6 3-9 6-9s6 3 7 9"/></svg>',
]
CHECK = '<svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true"><circle cx="10" cy="10" r="9" fill="currentColor"/><path d="M6 10.5l2.6 2.6L14 7.6" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'

def modes_section(lang):
    t = MODES_T[lang]
    cards = ''.join(f"""
      <article class="mcard">
        <div class="mcard-top"><span class="mcard-ic">{MODE_IC[i]}</span><div><h3>{title}</h3><p>{sub}</p></div></div>
        <ul>{''.join(f'<li>{CHECK}<span>{x}</span></li>' for x in items)}</ul>
        <a class="btn btn-primary" href="#trial">{t['cta']}</a>
      </article>""" for i, (title, sub, items) in enumerate(t['cards']))
    return f"""<section class="section modes" id="modes">
  <div class="wrap">
    <div class="reveal why-head"><p class="eyebrow"><span class="sc">形式</span> {t['eyebrow']}</p><h2 class="h2">{t['h']}</h2></div>
    <div class="mgrid reveal">{cards}
    </div>
  </div>
</section>"""

# ------------------------------------------------------------------ page chrome
def nav_html(lang, page):
    t = L[lang]
    out = []
    for href, key in NAV:
        here = ' class="is-here" aria-current="page"' if href == page else ''
        out.append('<a href="%s"%s>%s</a>' % (href, here, t['nav'][key]))
    return '\n      '.join(out)

SWITCH = ('<div class="langs" role="group" aria-label="Language">'
          '<button type="button" data-lang="vi" lang="vi">VI</button>'
          '<button type="button" data-lang="en" lang="en">EN</button>'
          '<button type="button" data-lang="zh" lang="zh">中文</button></div>')

def chrome(lang, page):
    t = L[lang]
    header = f'''<header class="header" id="top">
  <div class="wrap">
    <a class="brand" href="{HOME}" aria-label="{t['home_label']}"><span class="logo" role="img" aria-label="SunMoon Art &amp; Education"></span></a>
    <nav class="nav" aria-label="{t['menu']}">
      {nav_html(lang, page)}
    </nav>
    {SWITCH}
    <a class="btn btn-primary cta-desktop" href="{CONTACT}#trial">{t['cta']}</a>
    <button class="burger" aria-label="Menu" aria-expanded="false" aria-controls="drawer"><span></span></button>
  </div>
</header>
<div class="drawer" id="drawer">
  {''.join(f'<a class="item" href="{href}">{t["nav"][key]}</a>' for href, key in NAV)}
  <a class="btn btn-primary" href="{CONTACT}#trial">{t['cta']}</a>
  {SWITCH}
  <p class="fine">{t['strap']}</p>
</div>'''
    return header

def page_head(lang, page):
    t = L[lang]
    if page == HOME:
        return ''
    eyebrow, title, lede = t['titles'][page]
    return f'''<section class="pagehead">
  <div class="wrap">
    <p class="eyebrow"><span class="sc">日月</span> {eyebrow}</p>
    <h1 class="h2">{title}</h1>
    <p class="lede">{lede}</p>
  </div>
</section>'''

def footer_for(lang, page):
    _, _, tail = BODIES[lang]
    tail = rewrite_links(tail, page)
    # footer "Explore" list -> real page links
    t = L[lang]
    items = ''.join(f'<li><a href="{href}">{t["nav"][key]}</a></li>' for href, key in NAV if href != page) \
            or ''.join(f'<li><a href="{href}">{t["nav"][key]}</a></li>' for href, key in NAV)
    tail = re.sub(r'(<h4>[^<]*</h4>\s*)<ul>.*?</ul>', lambda m: m.group(1) + f'<ul>{items}</ul>', tail, count=1, flags=re.S)
    return tail

def home_classes(lang):
    return R(f'src/homeclasses-{lang}.html')

# --------------------------------------------------------------------- assemble
extra_css_tpl = R('src/pages.css') if os.path.exists('src/pages.css') else ''

def build_head(lang, page):
    t = L[lang]
    h = head_tpl
    title = 'SunMoon Art & Education' if page == HOME else f'{t["titles"][page][1]} · SunMoon'
    h = re.sub(r'<title>[^<]*</title>',
               f'<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<title>{title}</title>', h, 1)
    h = h.replace('<link rel="preconnect" href="https://fonts.googleapis.com">',
                  f'<link rel="icon" type="image/png" href="{fav}">\n<link rel="preconnect" href="https://fonts.googleapis.com">', 1)
    css = f'''
.brand .logo{{display:block;height:56px;aspect-ratio:600/547;background:url("{logo_full}") center/contain no-repeat;transition:transform .3s ease}}
.brand:hover .logo{{transform:translateY(-1px)}}
.footer .brand-row{{display:flex;align-items:center;gap:1rem}}
.footer .logo-mark{{display:block;height:64px;aspect-ratio:400/333;background:url("{logo_mark}") center/contain no-repeat}}
.langs{{display:flex;align-items:center;gap:.2rem;border:1px solid var(--line-strong);border-radius:999px;padding:.2rem}}
.langs button{{font-size:.68rem;font-weight:600;letter-spacing:.08em;padding:.35rem .6rem;border-radius:999px;color:var(--ink-2);transition:background .2s,color .2s}}
.langs button:hover{{color:var(--ink)}}
.langs button[aria-pressed="true"]{{background:var(--vermilion);color:#fff}}
.header .langs{{margin-left:auto}}
@media (min-width:1120px){{.header .langs{{margin-left:0}}}}
.drawer .langs{{align-self:flex-start;margin-top:1.2rem}}
.drawer .langs button{{font-size:.85rem;padding:.5rem .9rem}}
.nav a.is-here{{color:var(--ink)}}
.nav a.is-here::after{{transform:scaleX(1)}}
.pagehead{{padding-block:clamp(2.5rem,6vw,4.5rem) clamp(1.5rem,3vw,2.5rem);border-bottom:1px solid var(--line)}}
.pagehead .h2{{margin-top:.8rem}}
.pagehead .lede{{margin-top:1.2rem}}
.pagehead + .section{{padding-top:clamp(3rem,6vw,4.5rem)}}
.homeclasses .grid{{display:grid;gap:1px;background:var(--line);border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;margin-top:2.5rem}}
@media (min-width:640px){{.homeclasses .grid{{grid-template-columns:1fr 1fr}}}}
@media (min-width:1000px){{.homeclasses .grid{{grid-template-columns:repeat(3,1fr)}}}}
.hc{{background:var(--ivory);padding:1.6rem 1.4rem;display:flex;flex-direction:column;gap:.5rem;min-height:11rem;transition:background .3s ease}}
.hc:hover{{background:var(--ivory-2)}}
.hc .age{{font-size:.66rem;letter-spacing:.16em;text-transform:uppercase;color:var(--ink-3);font-weight:600}}
.hc h3{{font-size:1.35rem;line-height:1.1}}
.hc p{{font-size:.94rem;color:var(--ink-2);line-height:1.5}}
.hc .sc{{margin-top:auto;color:var(--vermilion);font-size:1.1rem}}
.homeclasses .more-link{{margin-top:2rem;display:inline-flex}}
:root[data-lang="zh"] .pagehead .h2{{font-weight:600}}
</style>'''
    h = re.sub(r'\.brand img\.logo\{.*?\.float-cta \.btn-zalo\{[^}]*\}\n', '', h, flags=re.S)
    photo_css = ''
    for name in ([v for k, v in photos.items() if k != 'gallery'] + list(photos.get('gallery', []))):
        if name:
            photo_css += f'.shot[data-photo="{name.rsplit(".",1)[0]}"]{{background-image:url("{photo_src(name)}")}}\n'
    return h.replace('</style>', css.replace('</style>', photo_css + '</style>'), 1)

def build_page(page):
    per_lang = {}
    for lang in LANGS:
        _, sec, _ = BODIES[lang]
        parts = [chrome(lang, page), '<main>', page_head(lang, page)]
        for key in PAGES[page]:
            html = home_classes(lang) if key == 'homeclasses' else (docs_section(lang) if key == 'docs' else (modes_section(lang) if key == 'modes' else sec[key]))
            if page != HOME and key == 'about':
                html = html.replace('<section class="section intro" id="about">',
                                    '<section class="section intro no-top" id="about">')
            html = rewrite_links(fill_photos(html), page)
            if key == 'programs':
                html = add_details(html, lang)
            parts.append(html)
        parts += ['</main>', footer_for(lang, page)]
        per_lang[lang] = '\n'.join(p for p in parts if p)
    head = build_head('vi', page)
    titles = {l: ('SunMoon Art & Education' if page == HOME else f'{L[l]["titles"][page][1]} · SunMoon') for l in LANGS}
    head += '\n<script>window.PAGE_TITLES=' + json.dumps(titles, ensure_ascii=False) + ';</script>'
    out = (head + '\n\n<div id="app">\n' + per_lang['vi'] + '\n</div>\n'
           + ''.join(f'<template id="tpl-{l}">\n{per_lang[l]}\n</template>\n' for l in LANGS)
           + '\n' + script)
    open(page, 'w', encoding='utf-8').write(out)
    return len(out)

total = 0
for page in PAGES:
    n = build_page(page); total += n
    print(f'{page:16} {n:>9,} bytes')
print(f'{"total":16} {total:>9,} bytes', '(inline photos)' if INLINE else '(assets/photos paths)')
