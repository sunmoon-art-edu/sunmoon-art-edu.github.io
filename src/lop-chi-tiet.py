# Nội dung "Xem chi tiết lớp" (popup) cho 9 lớp — 3 thứ tiếng.
# Không ghi giá, không ghi lịch cụ thể (chị Linh chốt 19/09/2026).
# Mỗi lớp: fit (phù hợp với), out (sau khoá con làm được), how (một buổi học), cls (lớp học), faq [(hỏi, đáp)]

H = {
 'vi': dict(fit='Phù hợp với', out='Sau khoá, con có thể', how='Một buổi học', cls='Lớp học', faq='Ba mẹ hay hỏi',
            note='Lịch học và học phí: SunMoon tư vấn riêng theo tuổi và trình độ của con.',
            more='Xem chi tiết lớp', out_adult='Sau khoá, bạn có thể'),
 'en': dict(fit='Right for', out='After the course, your child can', how='A typical lesson', cls='Class format', faq='Parents often ask',
            note='Schedule and fees: SunMoon advises you personally based on age and level.',
            more='See class details', out_adult='After the course, you can'),
 'zh': dict(fit='适合', out='学完后，孩子能够', how='一节课的安排', cls='班级形式', faq='家长常问',
            note='上课时间与学费：日月会根据孩子的年龄和水平单独为您介绍。',
            more='查看课程详情', out_adult='学完后，您能够'),
}

C = {
'little': {
 'adult': False,
 'vi': dict(
  fit=['Bé <b>3–7 tuổi</b>, mới bắt đầu làm quen tiếng Trung', 'Bé chưa cần biết chữ, chưa cần biết pinyin'],
  out=['<b>Nghe hiểu</b> và đáp lại câu đơn giản', 'Nói được <b>từ vựng quen thuộc</b>: màu sắc, con vật, gia đình, đồ ăn…', 'Hát, kể lại truyện ngắn bằng tiếng Trung', '<b>Thích</b> tiếng Trung, tự tin mở miệng'],
  how=['Khởi động bằng bài hát, vận động', 'Học từ mới qua thẻ hình, đồ vật thật', 'Trò chơi và kể chuyện để luyện nói', 'Hoạt động sáng tạo: tô, vẽ, làm thủ công'],
  cls=['Lớp nhỏ, <b>tối đa 6 bé</b>', 'Giáo viên theo sát từng bé', 'Sau buổi học, ba mẹ nhận <b>nhận xét riêng</b> của con'],
  faq=[('Con chưa biết gì về tiếng Trung có học được không?', 'Được. Lớp dành cho bé bắt đầu từ con số 0.'),
       ('Con nhút nhát, ít nói thì sao?', 'Lớp nhỏ nên cô để ý từng bé, cho con làm quen dần qua trò chơi.')]),
 'en': dict(
  fit=['Children <b>aged 3–7</b> starting Chinese', 'No reading or pinyin needed'],
  out=['<b>Understand</b> and answer simple sentences', 'Use <b>everyday words</b>: colours, animals, family, food…', 'Sing songs and retell short stories in Chinese', '<b>Enjoy</b> Chinese and speak with confidence'],
  how=['Warm-up with songs and movement', 'New words with picture cards and real objects', 'Games and storytelling to practise speaking', 'Creative time: colouring, drawing, crafts'],
  cls=['Small groups, <b>max 6 children</b>', 'The teacher follows each child closely', 'Parents receive <b>personal feedback</b> after each lesson'],
  faq=[('My child has never learnt Chinese. Is that OK?', 'Yes. This class starts from zero.'),
       ('My child is shy. Will they cope?', 'Groups are small, so the teacher helps each child warm up through games.')]),
 'zh': dict(
  fit=['<b>3–7 岁</b>、刚开始接触中文的孩子', '不需要识字，不需要会拼音'],
  out=['<b>听懂</b>并回应简单句子', '说出<b>常用词汇</b>：颜色、动物、家人、食物……', '用中文唱儿歌、复述小故事', '<b>喜欢</b>中文，敢于开口'],
  how=['儿歌和律动热身', '通过图卡和实物学新词', '游戏和讲故事练口语', '创意活动：涂色、画画、手工'],
  cls=['小班教学，<b>每班最多 6 名孩子</b>', '老师关注每一个孩子', '课后家长会收到孩子的<b>个人点评</b>'],
  faq=[('孩子完全没学过中文可以吗？', '可以。本班从零开始。'),
       ('孩子比较内向怎么办？', '小班上课，老师会通过游戏帮助孩子慢慢适应。')]),
},
'kids': {
 'adult': False,
 'vi': dict(
  fit=['Bé <b>7–13 tuổi</b>', 'Bé mới bắt đầu hoặc đã học một ít, muốn học bài bản hơn'],
  out=['<b>Nghe – nói – đọc – viết</b> đều tay theo cấp độ', 'Đọc pinyin, nhận mặt và viết <b>chữ Hán</b>', 'Giao tiếp các chủ đề hằng ngày', 'Có nền để thi <b>YCT / HSK</b> khi cần'],
  how=['Ôn bài cũ bằng trò chơi nhanh', 'Học từ, mẫu câu mới theo chủ đề', 'Luyện hội thoại theo cặp, theo nhóm', 'Luyện đọc, viết chữ Hán và giao bài về nhà vừa sức'],
  cls=['Lớp nhỏ, <b>tối đa 6 bé</b>', 'Xếp lớp theo trình độ sau buổi học thử', 'Ba mẹ nhận <b>nhận xét riêng</b> sau buổi học'],
  faq=[('Con đã học ở nơi khác rồi thì vào lớp nào?', 'Con học thử 1 buổi, cô sẽ kiểm tra và xếp đúng trình độ.'),
       ('Có bài tập về nhà không?', 'Có, bài vừa sức để con ôn lại, không quá nặng.')]),
 'en': dict(
  fit=['Children <b>aged 7–13</b>', 'Beginners, or children with some Chinese who want a solid programme'],
  out=['Balanced <b>listening, speaking, reading and writing</b>', 'Read pinyin, recognise and write <b>Chinese characters</b>', 'Talk about everyday topics', 'A foundation for <b>YCT / HSK</b> exams when needed'],
  how=['Quick review games', 'New words and sentence patterns by topic', 'Pair and group conversation practice', 'Reading, character writing and light homework'],
  cls=['Small groups, <b>max 6 children</b>', 'Placed by level after the trial lesson', 'Parents receive <b>personal feedback</b> after lessons'],
  faq=[('My child studied elsewhere. Which class fits?', 'Join a trial lesson; the teacher checks the level and places your child.'),
       ('Is there homework?', 'Yes, light and manageable, just enough to review.')]),
 'zh': dict(
  fit=['<b>7–13 岁</b>的孩子', '零基础或有一点基础、想系统学习的孩子'],
  out=['<b>听说读写</b>全面发展', '会拼音，认读并书写<b>汉字</b>', '能就日常话题交流', '需要时可备考 <b>YCT / HSK</b>'],
  how=['游戏快速复习', '按主题学习新词和句型', '两人或小组会话练习', '阅读、汉字书写，适量作业'],
  cls=['小班教学，<b>每班最多 6 名孩子</b>', '试听后按水平分班', '课后家长会收到<b>个人点评</b>'],
  faq=[('孩子在别处学过，该上哪个班？', '先来试听一节，老师测评后安排合适的班级。'),
       ('有家庭作业吗？', '有，分量适中，帮助孩子复习。')]),
},
'work': {
 'adult': True,
 'vi': dict(
  fit=['Người đi làm, chủ kinh doanh', 'Làm việc với <b>đối tác, nhà cung cấp, khách hàng Trung Quốc</b>'],
  out=['<b>Trao đổi giá</b>, đặt hàng, theo dõi đơn', 'Nhắn tin, email công việc bằng tiếng Trung', 'Nắm <b>thuật ngữ</b> đúng ngành của mình', 'Tự tin gọi điện, gặp mặt đối tác'],
  how=['Học theo <b>tình huống thật</b> trong công việc của bạn', 'Luyện mẫu câu, từ vựng chuyên ngành', 'Đóng vai: đàm phán, chốt đơn, xử lý sự cố'],
  cls=['Nhóm nhỏ hoặc <b>1 kèm 1</b>', 'Nội dung điều chỉnh theo ngành nghề của bạn'],
  faq=[('Tôi chưa biết tiếng Trung có học được không?', 'Được. Giáo viên sẽ bắt đầu từ nền tảng rồi đi vào tiếng Trung công việc.'),
       ('Học xong bao lâu thì dùng được?', 'Tuỳ trình độ và mục tiêu. Giáo viên sẽ tư vấn lộ trình sau buổi trao đổi đầu tiên.')]),
 'en': dict(
  fit=['Professionals and business owners', 'Working with <b>Chinese partners, suppliers or customers</b>'],
  out=['<b>Negotiate prices</b>, place and track orders', 'Write work messages and emails in Chinese', 'Use the <b>right terms</b> for your industry', 'Speak confidently on calls and in meetings'],
  how=['Built around <b>real situations</b> in your work', 'Industry vocabulary and key phrases', 'Role-play: negotiating, closing deals, solving problems'],
  cls=['Small groups or <b>one-to-one</b>', 'Content adapted to your industry'],
  faq=[('I have no Chinese at all. Can I join?', 'Yes. The teacher starts with the basics, then moves into business Chinese.'),
       ('How soon can I use it at work?', 'It depends on your level and goals; the teacher suggests a plan after the first session.')]),
 'zh': dict(
  fit=['职场人士、企业主', '需要与<b>中国伙伴、供应商、客户</b>打交道'],
  out=['<b>谈价格</b>、下订单、跟进订单', '用中文写工作消息和邮件', '掌握本行业的<b>专业术语</b>', '自信地打电话、见客户'],
  how=['围绕您工作中的<b>真实情境</b>', '行业词汇与常用句型', '角色扮演：谈判、成交、处理问题'],
  cls=['小组或<b>一对一</b>', '内容根据您的行业调整'],
  faq=[('我完全不会中文可以学吗？', '可以。老师会从基础开始，再进入商务中文。'),
       ('多久能在工作中用上？', '取决于水平和目标，第一次沟通后老师会给出学习路径。')]),
},
'custom': {
 'adult': True,
 'vi': dict(
  fit=['Người học có <b>mục tiêu riêng</b>: du học, công việc, thi cử, giao tiếp gấp…', 'Người bận, cần <b>lịch linh hoạt</b>', 'Bé cần kèm riêng, bù kiến thức'],
  out=['Đạt đúng <b>mục tiêu bạn đặt ra</b>', 'Tiến bộ theo tốc độ của riêng mình'],
  how=['Giáo viên trao đổi trước để hiểu mục tiêu', 'Xây <b>nội dung riêng</b> cho từng người', 'Đánh giá tiến bộ, điều chỉnh sau mỗi giai đoạn'],
  cls=['<b>1 kèm 1</b> hoặc nhóm nhỏ tự chọn', 'Lịch học thoả thuận theo thời gian của bạn'],
  faq=[('Học online được không?', 'Được. Ba mẹ hoặc học viên nhắn SunMoon để sắp xếp.'),
       ('Chọn giáo viên được không?', 'SunMoon gợi ý giáo viên phù hợp với mục tiêu, bạn có thể học thử trước.')]),
 'en': dict(
  fit=['Learners with <b>specific goals</b>: study abroad, work, exams, urgent conversation…', 'Busy people who need a <b>flexible schedule</b>', 'Children who need one-to-one support'],
  out=['Reach <b>the goal you set</b>', 'Progress at your own pace'],
  how=['The teacher first talks with you about your goals', '<b>Custom content</b> for each learner', 'Progress checks and adjustments along the way'],
  cls=['<b>One-to-one</b> or a small group of your choice', 'Schedule agreed around your time'],
  faq=[('Can I learn online?', 'Yes. Message SunMoon to arrange it.'),
       ('Can I choose my teacher?', 'SunMoon suggests a teacher who fits your goals, and you can try a lesson first.')]),
 'zh': dict(
  fit=['有<b>明确目标</b>的学员：留学、工作、考试、急需口语……', '工作忙、需要<b>灵活时间</b>的人', '需要一对一辅导的孩子'],
  out=['达成<b>您设定的目标</b>', '按自己的节奏进步'],
  how=['老师先与您沟通目标', '为每位学员设计<b>专属内容</b>', '阶段性评估并调整'],
  cls=['<b>一对一</b>或自选小组', '上课时间按您的安排协商'],
  faq=[('可以线上上课吗？', '可以。请联系日月安排。'),
       ('可以选择老师吗？', '日月会推荐适合您目标的老师，您也可以先试听。')]),
},
'comm': {
 'adult': True,
 'vi': dict(
  fit=['<b>Thiếu niên và người lớn</b>', 'Muốn nói tiếng Trung trong đời sống, du lịch, công việc'],
  out=['<b>Phát âm đúng</b>, nghe hiểu người bản xứ nói chậm', 'Chào hỏi, hỏi đường, mua sắm, gọi món', 'Giới thiệu bản thân, nói chuyện về công việc, sở thích', '<b>Phản xạ</b> nói nhanh hơn, bớt ngại'],
  how=['Học mẫu câu theo tình huống', 'Luyện nói theo cặp, đóng vai', 'Sửa phát âm trực tiếp từng người'],
  cls=['Nhóm nhỏ, ai cũng được nói nhiều', 'Có thể học thử trước khi đăng ký'],
  faq=[('Tôi chỉ muốn nói, không cần viết chữ được không?', 'Được. Lớp tập trung nghe – nói, chữ Hán chỉ học phần cần thiết.'),
       ('Tôi đã quên gần hết thì sao?', 'Học thử 1 buổi, giáo viên sẽ xếp bạn vào nhóm phù hợp.')]),
 'en': dict(
  fit=['<b>Teens and adults</b>', 'Wanting to speak Chinese in daily life, travel and work'],
  out=['<b>Correct pronunciation</b>; understand slow native speech', 'Greetings, directions, shopping, ordering food', 'Introduce yourself; talk about work and hobbies', 'Faster <b>speaking reflexes</b>, less hesitation'],
  how=['Phrases built around real situations', 'Pair practice and role-play', 'Individual pronunciation correction'],
  cls=['Small groups so everyone speaks a lot', 'Try a lesson before you enrol'],
  faq=[('I only want to speak, not write. Is that OK?', 'Yes. The class focuses on listening and speaking; characters only as needed.'),
       ('I have forgotten most of my Chinese.', 'Join a trial lesson and the teacher will place you in the right group.')]),
 'zh': dict(
  fit=['<b>青少年与成人</b>', '想在生活、旅行、工作中说中文'],
  out=['<b>发音正确</b>，听懂母语者慢速说话', '问候、问路、购物、点餐', '介绍自己，聊工作和爱好', '<b>口语反应</b>更快，不再怕开口'],
  how=['按情境学习常用句型', '两人练习、角色扮演', '老师逐一纠正发音'],
  cls=['小组教学，每个人都有充分开口机会', '报名前可先试听'],
  faq=[('我只想学说，不学写可以吗？', '可以。本班以听说为主，汉字只学必要部分。'),
       ('我以前学过但都忘了怎么办？', '先试听一节，老师会安排合适的小组。')]),
},
'hsk': {
 'adult': True,
 'vi': dict(
  fit=['<b>Thiếu niên và người lớn</b> cần chứng chỉ HSK', 'Chuẩn bị du học, học bổng, xin việc'],
  out=['Nắm chắc <b>từ vựng và ngữ pháp</b> đúng cấp độ', 'Quen <b>dạng đề</b>, làm bài đúng thời gian', 'Tự tin đi thi <b>HSK 1 → HSK 6</b>'],
  how=['Học kiến thức theo giáo trình HSK', 'Luyện đề theo từng kỹ năng: nghe, đọc, viết', 'Chữa bài, chỉ ra lỗi hay sai'],
  cls=['Nhóm nhỏ theo cấp độ', 'Kiểm tra trình độ đầu vào miễn phí khi học thử'],
  faq=[('Tôi nên thi HSK mấy?', 'Tuỳ mục tiêu (du học, học bổng, công việc). Giáo viên sẽ tư vấn khi bạn học thử.'),
       ('Có luyện HSKK (thi nói) không?', 'Có thể kết hợp. Bạn nhắn SunMoon để được tư vấn.')]),
 'en': dict(
  fit=['<b>Teens and adults</b> who need an HSK certificate', 'Preparing for study abroad, scholarships or jobs'],
  out=['Solid <b>vocabulary and grammar</b> for your level', 'Familiar with the <b>exam format</b> and timing', 'Ready to sit <b>HSK 1 → HSK 6</b>'],
  how=['Lessons following the HSK syllabus', 'Practice tests by skill: listening, reading, writing', 'Error review and common-mistake coaching'],
  cls=['Small groups by level', 'Free placement check at your trial lesson'],
  faq=[('Which HSK level should I take?', 'It depends on your goal; the teacher advises you at the trial lesson.'),
       ('Do you prepare for HSKK (speaking)?', 'It can be combined. Message SunMoon for advice.')]),
 'zh': dict(
  fit=['需要 HSK 证书的<b>青少年与成人</b>', '准备留学、申请奖学金或求职'],
  out=['掌握对应级别的<b>词汇与语法</b>', '熟悉<b>题型</b>和答题时间', '自信参加 <b>HSK 1–6 级</b>考试'],
  how=['按 HSK 大纲学习', '分技能练题：听力、阅读、书写', '讲评试卷，纠正常见错误'],
  cls=['按级别小组教学', '试听时免费测评水平'],
  faq=[('我应该考几级？', '取决于目标（留学、奖学金、工作），试听时老师会给建议。'),
       ('有 HSKK（口语考试）辅导吗？', '可以结合学习，请联系日月咨询。')]),
},
'math': {
 'adult': False,
 'vi': dict(
  fit=['Bé <b>3–6 tuổi</b>', 'Chuẩn bị nền tư duy trước khi vào lớp 1'],
  out=['Hiểu <b>số và lượng</b>, không chỉ đếm thuộc lòng', 'Nhận biết <b>hình khối, quy luật</b>', 'Biết suy luận, giải câu đố đơn giản', 'Tập trung và kiên nhẫn hơn'],
  how=['Học bằng <b>đồ vật thật</b> và mô hình', 'Trò chơi tư duy, câu đố', 'Tình huống thực tế: chia kẹo, xếp hình…'],
  cls=['Lớp nhỏ, <b>tối đa 6 bé</b>', 'Ba mẹ nhận <b>nhận xét riêng</b> sau buổi học'],
  faq=[('Toán tư duy khác học toán ở trường thế nào?', 'Con học cách suy nghĩ qua đồ vật và trò chơi, không học thuộc bảng tính.')]),
 'en': dict(
  fit=['Children <b>aged 3–6</b>', 'Building thinking skills before primary school'],
  out=['Understand <b>numbers and quantity</b>, not just counting', 'Recognise <b>shapes and patterns</b>', 'Reason and solve simple puzzles', 'Better focus and patience'],
  how=['Learning with <b>real objects</b> and models', 'Logic games and puzzles', 'Real-life situations: sharing sweets, building shapes…'],
  cls=['Small groups, <b>max 6 children</b>', 'Parents receive <b>personal feedback</b> after lessons'],
  faq=[('How is this different from school maths?', 'Children learn how to think through objects and games, not by memorising tables.')]),
 'zh': dict(
  fit=['<b>3–6 岁</b>的孩子', '为上小学打好思维基础'],
  out=['理解<b>数与量</b>，而不只是背数', '认识<b>图形与规律</b>', '学会推理，解决简单谜题', '更专注、更有耐心'],
  how=['用<b>实物</b>和教具学习', '思维游戏与谜题', '生活情境：分糖果、拼图形……'],
  cls=['小班教学，<b>每班最多 6 名孩子</b>', '课后家长会收到<b>个人点评</b>'],
  faq=[('思维数学和学校数学有什么不同？', '孩子通过实物和游戏学会思考，而不是背算式。')]),
},
'writing': {
 'adult': False,
 'vi': dict(
  fit=['Bé <b>5–7 tuổi</b>', 'Chuẩn bị vào lớp 1 hoặc đang học lớp 1'],
  out=['<b>Cầm bút đúng</b>, ngồi đúng tư thế', 'Viết đúng <b>nét cơ bản</b>, chữ đều và sạch', 'Kiên nhẫn, cẩn thận hơn'],
  how=['Khởi động tay, tập tư thế ngồi', 'Luyện từng nét, từng chữ cùng cô', 'Khen và sửa riêng cho từng bé'],
  cls=['Lớp nhỏ, cô cầm tay sửa cho từng bé', 'Ba mẹ nhận <b>nhận xét riêng</b> sau buổi học'],
  faq=[('Con viết chữ tiếng Việt hay tiếng Trung?', 'Ba mẹ nhắn SunMoon để được tư vấn nội dung phù hợp với con.')]),
 'en': dict(
  fit=['Children <b>aged 5–7</b>', 'Getting ready for, or already in, Grade 1'],
  out=['<b>Correct pen grip</b> and sitting posture', 'Neat <b>basic strokes</b> and even handwriting', 'More patience and care'],
  how=['Hand warm-ups and posture practice', 'Stroke-by-stroke practice with the teacher', 'Individual praise and correction'],
  cls=['Small groups; the teacher guides each child by hand', 'Parents receive <b>personal feedback</b> after lessons'],
  faq=[('Vietnamese or Chinese handwriting?', 'Message SunMoon and we will suggest the right content for your child.')]),
 'zh': dict(
  fit=['<b>5–7 岁</b>的孩子', '准备上小学或正在读一年级'],
  out=['<b>正确握笔</b>，坐姿端正', '写好<b>基本笔画</b>，字迹工整', '更有耐心、更细心'],
  how=['手部热身，练习坐姿', '跟老师一笔一画练习', '老师逐一表扬与纠正'],
  cls=['小班，老师手把手指导', '课后家长会收到<b>个人点评</b>'],
  faq=[('练的是越南文还是中文书写？', '请联系日月，我们会根据孩子情况推荐合适内容。')]),
},
'camp': {
 'adult': False,
 'vi': dict(
  fit=['Các bé muốn <b>trải nghiệm</b> trong kỳ nghỉ hè, đông, xuân', 'Bé chưa học hoặc đã học tiếng Trung đều tham gia được'],
  out=['Dùng tiếng Trung qua <b>hoạt động thật</b>', 'Hiểu thêm <b>văn hoá Trung Hoa</b>', 'Kết bạn, tự tin làm việc nhóm'],
  how=['Mỗi ngày một chủ đề', 'Trò chơi, thủ công, nấu ăn, biểu diễn…', 'Tổng kết, ba mẹ xem lại hoạt động của con'],
  cls=['Khoá ngắn theo mùa', 'Lịch và nội dung <b>thông báo trước khi mở đăng ký</b>'],
  faq=[('Khi nào có Camp?', 'SunMoon thông báo trên Fanpage và Zalo trước mỗi mùa. Ba mẹ nhắn để được báo sớm.')]),
 'en': dict(
  fit=['Children who want a <b>holiday experience</b> in summer, winter or spring', 'Open to beginners and children already learning Chinese'],
  out=['Use Chinese through <b>real activities</b>', 'Learn more about <b>Chinese culture</b>', 'Make friends and grow confident in teams'],
  how=['A new theme each day', 'Games, crafts, cooking, performances…', 'A wrap-up so parents can see what their child did'],
  cls=['Short seasonal programmes', 'Dates and content <b>announced before registration opens</b>'],
  faq=[('When are the camps?', 'SunMoon announces them on Facebook and Zalo before each season. Message us to hear first.')]),
 'zh': dict(
  fit=['想在暑假、寒假、春假<b>体验</b>学习的孩子', '零基础或已学过中文的孩子都可参加'],
  out=['在<b>真实活动</b>中使用中文', '了解<b>中华文化</b>', '结交朋友，学会团队合作'],
  how=['每天一个主题', '游戏、手工、烹饪、表演……', '结营展示，家长可看到孩子的成果'],
  cls=['按季节开设的短期营', '时间和内容<b>在开放报名前公布</b>'],
  faq=[('什么时候有营地课程？', '每季开营前会在 Facebook 和 Zalo 公布，欢迎留言提前获取通知。')]),
},
}
