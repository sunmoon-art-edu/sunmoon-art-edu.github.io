/* Câu hỏi ngữ pháp YCT 4 — 15 bài (bỏ bài 16 ôn tập), mỗi bài 3 câu.
   k: "cau" (chọn câu đúng) | "dien" (điền từ) | "xep" (sắp xếp trật tự từ)
   Chỉ dùng chữ Hán thuộc từ vựng YCT 1–2–3–4. Tên người: 明明, 大卫, 小月, 丁丁. */
const NGUPHAP = {
  /* Bài 1 — 你对中国功夫感兴趣吗？ : 对…感兴趣, 了 sau động từ, phó từ mức độ */
  0: [
    { k: "dien", q: "我＿弹钢琴非常感兴趣。", v: "Mình rất thích chơi đàn piano.",
      o: ["对", "把", "被"], a: 0,
      g: "Nói thích cái gì dùng cấu trúc 对 + đối tượng + 感兴趣. 把 và 被 là câu khác hẳn." },
    { k: "cau", q: "Câu nào đúng?",
      o: ["哥哥参加乒乓球了比赛。", "哥哥参加了乒乓球比赛。", "了哥哥参加乒乓球比赛。"], a: 1,
      g: "了 đứng ngay sau động từ 参加, rồi mới tới tân ngữ 乒乓球比赛." },
    { k: "xep", q: "Sắp xếp: 我 / 非常 / 喜欢 / 网球",
      o: ["我喜欢非常网球。", "非常我喜欢网球。", "我非常喜欢网球。"], a: 2,
      g: "Phó từ mức độ 非常 đứng sau chủ ngữ và trước động từ 喜欢." }
  ],
  /* Bài 2 — 兔子更可爱。 : 更, …极了, 好像 */
  1: [
    { k: "cau", q: "Câu nào đúng?",
      o: ["猫很可爱，兔子更可爱。", "猫很可爱，更兔子可爱。", "猫很可爱，兔子可爱更。"], a: 0,
      g: "更 (càng, hơn) là phó từ, đứng sau chủ ngữ 兔子 và trước tính từ 可爱." },
    { k: "dien", q: "熊猫的脸圆＿了！", v: "Mặt gấu trúc tròn cực kỳ!",
      o: ["很", "非常", "极"], a: 2,
      g: "Cặp …极了 đứng SAU tính từ: 圆极了. 很 và 非常 phải đứng trước tính từ." },
    { k: "xep", q: "Sắp xếp: 这两只兔子 / 好像 / 不 / 一样",
      o: ["这两只兔子不好像一样。", "这两只兔子好像不一样。", "这两只兔子一样不好像。"], a: 1,
      g: "好像 (hình như) đứng trước cả phần phỏng đoán: 好像 + 不一样." }
  ],
  /* Bài 3 — 电梯坏了。 : động từ + 在 + nơi chốn, 在 A 和 B 中间 */
  2: [
    { k: "dien", q: "我的钥匙放＿桌子上。", v: "Chìa khoá của mình để trên bàn.",
      o: ["在", "到", "从"], a: 0,
      g: "Các động từ 放, 住, 挂 kết hợp 在 + nơi chốn để nói đặt/ở chỗ nào." },
    { k: "cau", q: "Câu nào đúng?",
      o: ["我住家在十层。", "我家住在十层。", "我家住十层在。"], a: 1,
      g: "Chủ ngữ 我家 + động từ 住 + 在 + nơi chốn 十层. 在 không tách khỏi nơi chốn." },
    { k: "xep", q: "Sắp xếp: 猫 / 在沙发 / 和椅子 / 中间",
      o: ["猫在沙发和椅子中间。", "猫中间在沙发和椅子。", "在沙发和椅子猫中间。"], a: 0,
      g: "Trật tự: 在 + A 和 B + 中间. Từ 中间 luôn đứng cuối cụm chỉ nơi chốn." }
  ],
  /* Bài 4 — 每个人都有自己的习惯。 : 先…然后…, 已经…了, bổ ngữ thời lượng 一会儿 */
  3: [
    { k: "dien", q: "我早上＿刷牙，然后喝牛奶。", v: "Sáng mình đánh răng trước, sau đó uống sữa.",
      o: ["先", "刚才", "马上"], a: 0,
      g: "Cặp 先…然后… nói thứ tự hai việc: làm việc này trước, rồi mới việc kia." },
    { k: "cau", q: "Câu nào đúng?",
      o: ["我习惯已经早上六点起床了。", "我已经习惯早上六点起床了。", "已经我习惯早上六点起床了。"], a: 1,
      g: "已经 là phó từ, đứng sau chủ ngữ và trước động từ 习惯; cuối câu có 了." },
    { k: "xep", q: "Sắp xếp: 请 / 等 / 一会儿",
      o: ["请一会儿等。", "等请一会儿。", "请等一会儿。"], a: 2,
      g: "一会儿 chỉ thời lượng nên đứng SAU động từ 等: 等一会儿." }
  ],
  /* Bài 5 — 他们多么年轻啊！ : 多么…啊, động từ + 一下儿, 互相 */
  4: [
    { k: "cau", q: "Câu nào đúng?",
      o: ["爷爷奶奶多么年轻啊！", "爷爷奶奶年轻多么啊！", "多么爷爷奶奶年轻啊！"], a: 0,
      g: "Câu cảm thán: chủ ngữ + 多么 + tính từ + 啊. 多么 đứng ngay trước tính từ." },
    { k: "dien", q: "我来介绍＿，这是我叔叔。", v: "Mình giới thiệu một chút, đây là chú mình.",
      o: ["一会儿", "一下儿", "一点儿"], a: 1,
      g: "Động từ + 一下儿 nghĩa là làm việc gì đó một chút. 一会儿 chỉ thời gian, 一点儿 chỉ số lượng." },
    { k: "xep", q: "Sắp xếp: 我们俩 / 要 / 互相 / 照顾",
      o: ["我们俩互相要照顾。", "我们俩照顾要互相。", "我们俩要互相照顾。"], a: 2,
      g: "Thứ tự: chủ ngữ + 要 + 互相 + động từ. 互相 luôn đứng sát trước động từ." }
  ],
  /* Bài 6 — 我经常去体育馆锻炼身体。 : 必须, …的时候, bổ ngữ xu hướng 起来 */
  5: [
    { k: "dien", q: "锻炼身体＿坚持，不能停。", v: "Tập thể dục thì phải kiên trì, không được dừng.",
      o: ["已经", "必须", "一共"], a: 1,
      g: "必须 (bắt buộc phải) đứng trước động từ 坚持. 已经 nói việc đã xong, 一共 nói tổng số." },
    { k: "cau", q: "Câu nào đúng?",
      o: ["打针的时候他不害怕。", "打针的时候他害怕不。", "打针他的时候不害怕。"], a: 0,
      g: "…的时候 làm trạng ngữ đứng đầu câu; 不 luôn đứng trước từ nó phủ định (害怕)." },
    { k: "xep", q: "Sắp xếp: 请 / 站 / 起来",
      o: ["请起来站。", "站请起来。", "请站起来。"], a: 2,
      g: "起来 là bổ ngữ xu hướng, đứng ngay sau động từ 站." }
  ],
  /* Bài 7 — 北京一共有四个季节。 : 听说, 一定, 一共 */
  6: [
    { k: "dien", q: "＿北京最近很冷。", v: "Nghe nói dạo này Bắc Kinh rất lạnh.",
      o: ["听说", "告诉", "知道"], a: 0,
      g: "听说 đứng đầu câu, nghĩa 'nghe nói rằng…'. 告诉 và 知道 cần có chủ ngữ đi kèm." },
    { k: "cau", q: "Câu nào đúng?",
      o: ["今天晚上能一定看星星。", "今天晚上一定能看星星。", "今天晚上能看星星一定。"], a: 1,
      g: "一定 đứng trước động từ năng nguyện 能: 一定 + 能 + động từ." },
    { k: "xep", q: "Sắp xếp: 北京 / 一共 / 有 / 四个季节",
      o: ["北京有一共四个季节。", "一共北京有四个季节。", "北京一共有四个季节。"], a: 2,
      g: "一共 là phó từ, đứng sau chủ ngữ và trước động từ 有." }
  ],
  /* Bài 8 — 冰激凌既好吃又便宜。 : 既…又…, lượng từ 双/条, 不够 + động từ */
  7: [
    { k: "cau", q: "Câu nào đúng?",
      o: ["这个冰激凌既好吃又便宜。", "这个冰激凌好吃既又便宜。", "这个冰激凌既好吃便宜又。"], a: 0,
      g: "Cặp 既…又… : mỗi từ đứng trước một tính từ — 既 + 好吃 + 又 + 便宜." },
    { k: "dien", q: "这＿鞋不合适，我想换一双。", v: "Đôi giày này không vừa, mình muốn đổi đôi khác.",
      o: ["条", "双", "张"], a: 1,
      g: "Giày đi thành đôi nên dùng lượng từ 双. 条 cho quần/váy, 张 cho tờ giấy, tấm ảnh." },
    { k: "xep", q: "Sắp xếp: 我的钱 / 不够 / 买 / 这条裙子",
      o: ["我的钱买不够这条裙子。", "我的钱不够这条裙子买。", "我的钱不够买这条裙子。"], a: 2,
      g: "不够 đứng trước động từ 买: 'không đủ (tiền) để mua'." }
  ],
  /* Bài 9 — 来一盘羊肉饺子。 : 还是 trong câu hỏi, 有一点儿, 除了…还… */
  8: [
    { k: "dien", q: "你要羊肉饺子＿烤鸭？", v: "Bạn muốn sủi cảo thịt dê hay vịt quay?",
      o: ["还是", "或者", "而且"], a: 0,
      g: "Câu hỏi lựa chọn dùng 还是. 或者 chỉ dùng trong câu kể, không dùng để hỏi." },
    { k: "cau", q: "Câu nào đúng?",
      o: ["这个汤一点儿有辣。", "这个汤有一点儿辣。", "这个汤辣有一点儿。"], a: 1,
      g: "有一点儿 + tính từ, dùng khi thấy hơi không vừa ý: 有一点儿辣." },
    { k: "xep", q: "Sắp xếp: 除了 / 葡萄 / 我 / 还喜欢吃桃",
      o: ["我除了还喜欢吃桃葡萄。", "葡萄除了，我还喜欢吃桃。", "除了葡萄，我还喜欢吃桃。"], a: 2,
      g: "除了 + danh từ đứng đầu câu, vế sau dùng 还 để nói 'ngoài ra còn…'." }
  ],
  /* Bài 10 — 坐飞机或者坐火车都可以。 : 离, 从, 或者 */
  9: [
    { k: "dien", q: "学校＿我家两公里。", v: "Trường cách nhà mình hai cây số.",
      o: ["离", "从", "向"], a: 0,
      g: "Nói khoảng cách dùng A 离 B + số đo. 从 chỉ điểm xuất phát, 向 chỉ hướng." },
    { k: "cau", q: "Câu nào đúng?",
      o: ["我家从坐地铁很方便。", "从我家坐地铁很方便。", "坐地铁很方便从我家。"], a: 1,
      g: "从 + nơi xuất phát đứng đầu câu, rồi mới tới động từ: 从我家 + 坐地铁." },
    { k: "xep", q: "Sắp xếp: 坐飞机 / 或者 / 坐火车 / 都可以",
      o: ["坐飞机坐火车或者都可以。", "或者坐飞机坐火车都可以。", "坐飞机或者坐火车都可以。"], a: 2,
      g: "或者 nối hai lựa chọn, đứng GIỮA chúng; 都可以 ở cuối câu." }
  ],
  /* Bài 11 — 你的汉语会越来越好。 : 越来越, 地, bổ ngữ mức độ 得 */
  10: [
    { k: "cau", q: "Câu nào đúng?",
      o: ["你的汉语会越来越好。", "你的汉语会越好越来。", "你的汉语越来越会好。"], a: 0,
      g: "越来越 là một khối cố định, đứng trước tính từ 好 và sau động từ năng nguyện 会." },
    { k: "dien", q: "他在图书馆认真＿写作业。", v: "Bạn ấy chăm chú làm bài tập ở thư viện.",
      o: ["得", "地", "的"], a: 1,
      g: "地 nối tính từ với động từ đứng sau: 认真地写. 得 thì đứng sau động từ, 的 đứng trước danh từ." },
    { k: "xep", q: "Sắp xếp: 老师 / 讲 / 得 / 很清楚",
      o: ["老师得讲很清楚。", "老师讲很清楚得。", "老师讲得很清楚。"], a: 2,
      g: "Bổ ngữ mức độ: động từ + 得 + phần nói mức độ (讲得很清楚)." }
  ],
  /* Bài 12 — 我打算去中国旅游。 : 打算 + động từ, 希望, 为了 */
  11: [
    { k: "dien", q: "暑假我＿去北京旅游。", v: "Nghỉ hè mình định đi Bắc Kinh du lịch.",
      o: ["打算", "以为", "听说"], a: 0,
      g: "打算 + động từ nói dự định sắp làm. 以为 là 'tưởng nhầm', 听说 là 'nghe nói'." },
    { k: "cau", q: "Câu nào đúng?",
      o: ["我希望去将来很多国家。", "我希望将来去很多国家。", "我希望将来国家去很多。"], a: 1,
      g: "Từ chỉ thời gian 将来 đứng trước động từ 去, sau đó mới tới tân ngữ 很多国家." },
    { k: "xep", q: "Sắp xếp: 为了 / 考试 / 我 / 每天练习",
      o: ["我为了每天练习考试。", "考试为了，我每天练习。", "为了考试，我每天练习。"], a: 2,
      g: "为了 + mục đích đứng đầu câu, vế sau nói việc mình làm." }
  ],
  /* Bài 13 — 小鸟正在唱歌。 : 正在, 一边…一边…, động từ + 着 */
  12: [
    { k: "cau", q: "Câu nào đúng?",
      o: ["小鸟正在唱歌。", "小鸟唱歌正在。", "正在小鸟唱歌。"], a: 0,
      g: "正在 (đang) đứng sau chủ ngữ và ngay trước động từ 唱歌." },
    { k: "dien", q: "妹妹一边唱歌＿跳舞。", v: "Em gái vừa hát vừa nhảy.",
      o: ["然后", "一边", "或者"], a: 1,
      g: "一边…一边… nói hai việc làm cùng lúc, mỗi vế phải có một 一边." },
    { k: "xep", q: "Sắp xếp: 他 / 看 / 着 / 电视",
      o: ["他着看电视。", "他看电视着。", "他看着电视。"], a: 2,
      g: "着 đặt ngay sau động từ 看, chỉ trạng thái đang tiếp diễn." }
  ],
  /* Bài 14 — 小鱼被小猫吃了。 : 被, 虽然…但是…, 如果…就… */
  13: [
    { k: "cau", q: "Câu nào đúng?",
      o: ["小鱼被小猫吃了。", "小鱼吃被小猫了。", "被小鱼小猫吃了。"], a: 0,
      g: "Câu 被: người/vật chịu tác động + 被 + người gây ra + động từ + 了." },
    { k: "dien", q: "＿汉语很难，但是我很喜欢。", v: "Tuy tiếng Trung khó nhưng mình rất thích.",
      o: ["因为", "虽然", "如果"], a: 1,
      g: "Cặp 虽然…但是… nghĩa 'tuy… nhưng…'. 因为 phải đi với 所以, 如果 đi với 就." },
    { k: "xep", q: "Sắp xếp: 如果 / 下雪 / 我们 / 就不去公园",
      o: ["如果下雪，我们不去就公园。", "下雪如果，我们就不去公园。", "如果下雪，我们就不去公园。"], a: 2,
      g: "如果…就…: 如果 nêu điều kiện ở vế trước, 就 đứng sau chủ ngữ ở vế sau." }
  ],
  /* Bài 15 — 以后要注意。 : 要 + động từ, 可以 + động từ, 很 + tính từ */
  14: [
    { k: "dien", q: "考试的时候＿注意，别马虎。", v: "Lúc thi phải chú ý, đừng cẩu thả.",
      o: ["要", "过", "着"], a: 0,
      g: "要 + động từ nghĩa 'phải/cần làm gì'. 过 và 着 đều đứng sau động từ, không dùng ở đây." },
    { k: "cau", q: "Câu nào đúng?",
      o: ["有问题找可以警察。", "有问题可以找警察。", "有问题找警察可以。"], a: 1,
      g: "Động từ năng nguyện 可以 đứng trước động từ chính 找." },
    { k: "xep", q: "Sắp xếp: 这儿 / 很危险 / 要小心",
      o: ["很危险这儿，要小心！", "这儿危险很，要小心！", "这儿很危险，要小心！"], a: 2,
      g: "Tính từ làm vị ngữ: chủ ngữ + 很 + tính từ. 很 luôn đứng trước 危险." }
  ]
};
