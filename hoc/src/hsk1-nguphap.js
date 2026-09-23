/* Câu hỏi ngữ pháp HSK 1 — 15 bài (bỏ bài ôn tập), mỗi bài 3 câu: chọn câu đúng / điền từ / sắp xếp */
const NGUPHAP = {
  0: [
    { k: "cau",  q: "Câu nào đúng?", o: ["吗你好？", "你吗好？", "你好吗？"], a: 2, g: "吗 luôn đứng ở CUỐI câu hỏi, không đặt đầu câu hay giữa câu." },
    { k: "dien", q: "你好＿？", v: "Bạn khoẻ không?", o: ["吗", "呢", "的"], a: 0, g: "吗 đặt cuối câu để hỏi có/không. 呢 chỉ dùng khi hỏi lại “còn… thì sao?”." },
    { k: "xep",  q: "Sắp xếp: 我 / 对不起 / 说", o: ["我对不起说。", "我说对不起。", "说我对不起。"], a: 1, g: "Trật tự cơ bản là chủ ngữ – động từ – tân ngữ: 我 + 说 + 对不起." }
  ],
  1: [
    { k: "dien", q: "我＿喝茶，谢谢。", v: "Tôi không uống trà, cảm ơn.", o: ["没关系", "不", "吗"], a: 1, g: "不 đứng ngay trước động từ để phủ định: 不喝 = không uống." },
    { k: "cau",  q: "Câu nào đúng?", o: ["我不喝茶。", "我喝不茶。", "不我喝茶。"], a: 0, g: "不 đứng trước động từ, không đứng sau động từ và không đứng đầu câu." },
    { k: "xep",  q: "Sắp xếp: 我们 / 明天 / 再见", o: ["我们再见明天。", "再见我们明天。", "我们明天再见。"], a: 2, g: "Từ chỉ thời gian 明天 đứng trước động từ; 再见 nằm cuối câu." }
  ],
  2: [
    { k: "xep",  q: "Sắp xếp: 你 / 叫 / 什么 / 名字", o: ["你什么叫名字？", "你叫什么名字？", "你叫名字什么？"], a: 1, g: "什么 nằm đúng chỗ của câu trả lời: sau 叫 và trước 名字." },
    { k: "cau",  q: "Câu nào đúng?", o: ["小明是不老师。", "不小明是老师。", "小明不是老师。"], a: 2, g: "Phủ định của 是 là 不是 — bạn đặt 不 ngay trước 是." },
    { k: "dien", q: "你叫＿名字？", v: "Bạn tên là gì?", o: ["什么", "谁", "哪"], a: 0, g: "Hỏi tên dùng 什么名字. 谁 chỉ dùng để hỏi người nào." }
  ],
  3: [
    { k: "cau",  q: "Câu nào đúng?", o: ["她是汉语我的老师。", "她是我的汉语老师。", "她我的是汉语老师。"], a: 1, g: "Phần sở hữu 我的 đứng ngay trước danh từ: 我的汉语老师." },
    { k: "dien", q: "这是老师＿书。", v: "Đây là sách của thầy.", o: ["呢", "吗", "的"], a: 2, g: "的 đứng giữa người sở hữu và vật: 老师的书 = sách của thầy." },
    { k: "xep",  q: "Sắp xếp: 大卫 / 是 / 谁", o: ["大卫是谁？", "大卫谁是？", "是谁大卫？"], a: 0, g: "谁 đứng ở chỗ của câu trả lời, tức sau 是: 大卫是谁？" }
  ],
  4: [
    { k: "dien", q: "你女儿＿大了？", v: "Con gái bạn bao nhiêu tuổi rồi?", o: ["几", "多", "什么"], a: 1, g: "Hỏi tuổi dùng 多大. 几 phải đi kèm lượng từ (几岁, 几个)." },
    { k: "cau",  q: "Câu nào đúng?", o: ["我家有三个人。", "我家三个人有。", "有我家三个人。"], a: 0, g: "Câu chữ 有: nơi/người có + 有 + cái được có. 有 đứng trước 三个人." },
    { k: "xep",  q: "Sắp xếp: 你 / 有 / 几个 / 女儿", o: ["你有女儿几个？", "几个你有女儿？", "你有几个女儿？"], a: 2, g: "几 + 个 đứng trước danh từ; cả cụm 几个女儿 làm tân ngữ của 有." }
  ],
  5: [
    { k: "cau",  q: "Câu nào đúng?", o: ["我会不说汉语。", "我不会说汉语。", "不我会说汉语。"], a: 1, g: "会 đứng trước động từ; muốn phủ định thì đặt 不 trước 会: 不会说." },
    { k: "dien", q: "这个字＿读？", v: "Chữ này đọc thế nào?", o: ["怎么", "什么", "谁"], a: 0, g: "怎么 + động từ để hỏi cách làm: 怎么读 = đọc thế nào." },
    { k: "xep",  q: "Sắp xếp: 妈妈 / 会 / 做 / 中国菜", o: ["妈妈做会中国菜。", "会妈妈做中国菜。", "妈妈会做中国菜。"], a: 2, g: "会 luôn đứng trước động từ chính: 会做 = biết nấu." }
  ],
  6: [
    { k: "dien", q: "明天星期＿？", v: "Ngày mai thứ mấy?", o: ["多少", "什么", "几"], a: 2, g: "Hỏi thứ dùng 星期几. 多少 chỉ dùng cho số lượng lớn hoặc giá tiền." },
    { k: "cau",  q: "Câu nào đúng?", o: ["今天几月几号？", "今天几号几月？", "几月几号今天？"], a: 0, g: "Tiếng Trung nói từ lớn đến nhỏ: 月 trước, 号 sau." },
    { k: "xep",  q: "Sắp xếp: 昨天 / 我 / 去 / 学校", o: ["我去昨天学校。", "昨天我去学校。", "我学校去昨天。"], a: 1, g: "Từ chỉ thời gian đứng đầu câu hoặc ngay sau chủ ngữ, luôn trước động từ." }
  ],
  7: [
    { k: "cau",  q: "Câu nào đúng?", o: ["这个杯子多少钱？", "这个杯子钱多少？", "多少钱这个杯子？"], a: 0, g: "多少钱 nằm cuối câu, sau đồ vật bạn muốn hỏi giá." },
    { k: "dien", q: "下午我＿去商店买东西。", v: "Chiều nay tôi muốn đi cửa hàng mua đồ.", o: ["吗", "想", "呢"], a: 1, g: "想 + động từ = muốn làm gì: 想去 = muốn đi." },
    { k: "xep",  q: "Sắp xếp: 我 / 想 / 去 / 商店", o: ["我想去商店。", "我去想商店。", "我商店想去。"], a: 0, g: "想 đứng trước động từ 去, nơi đến 商店 đứng sau 去." }
  ],
  8: [
    { k: "cau",  q: "Câu nào đúng?", o: ["我儿子工作在医院。", "我儿子在医院工作。", "我儿子在工作医院。"], a: 1, g: "在 + địa điểm đứng TRƯỚC động từ: 在医院工作." },
    { k: "dien", q: "你爸爸在＿工作？", v: "Bố bạn làm việc ở đâu?", o: ["什么", "谁", "哪儿"], a: 2, g: "Hỏi nơi nào dùng 哪儿, đặt ngay sau 在." },
    { k: "xep",  q: "Sắp xếp: 我的小猫 / 在 / 椅子上", o: ["我的小猫在椅子上。", "我的小猫椅子上在。", "在椅子上我的小猫。"], a: 0, g: "Nói đồ/con vật ở đâu: chủ ngữ + 在 + nơi. 上 đứng sau 椅子." }
  ],
  9: [
    { k: "dien", q: "桌子上＿电脑和书。", v: "Trên bàn có máy tính và sách.", o: ["有", "是", "在"], a: 0, g: "Nói ở một nơi có gì thì dùng 有: 桌子上有…. 在 dùng khi nói đồ nằm ở đâu." },
    { k: "cau",  q: "Câu nào đúng?", o: ["我后面有没人。", "没有我后面人。", "我后面没有人。"], a: 2, g: "Phủ định của 有 là 没有, đứng trước tân ngữ 人." },
    { k: "xep",  q: "Sắp xếp: 我 / 能 / 坐这儿 / 吗", o: ["我坐能这儿吗？", "我能坐这儿吗？", "能我坐这儿吗？"], a: 1, g: "能 đứng trước động từ 坐; 吗 ở cuối câu." }
  ],
  10: [
    { k: "cau",  q: "Câu nào đúng?", o: ["我们回家十二点。", "中午十二点我们回家。", "我们十二点回家中午。"], a: 1, g: "Thời gian đứng trước động từ và nói từ lớn đến nhỏ: 中午 rồi 十二点." },
    { k: "dien", q: "你＿时候去看电影？", v: "Khi nào bạn đi xem phim?", o: ["几", "多少", "什么"], a: 2, g: "什么时候 = khi nào. 几 chỉ đi với 点, 号, 星期." },
    { k: "xep",  q: "Sắp xếp: 现在 / 几 / 点", o: ["现在几点？", "几点现在？", "现在点几？"], a: 0, g: "几 đứng trước lượng từ 点; thời gian 现在 đứng đầu câu." }
  ],
  11: [
    { k: "dien", q: "今天＿热了，我想喝水。", v: "Hôm nay nóng quá, tôi muốn uống nước.", o: ["很", "太", "多"], a: 1, g: "太…了 là cặp cố định nói mức quá: 太热了." },
    { k: "cau",  q: "Câu nào đúng?", o: ["明天天气怎么样？", "明天怎么样天气？", "怎么样明天天气？"], a: 0, g: "怎么样 đứng cuối câu để hỏi “thế nào”." },
    { k: "xep",  q: "Sắp xếp: 明天 / 会 / 下雨", o: ["明天下雨会。", "会明天下雨。", "明天会下雨。"], a: 2, g: "会 ở đây nói việc sắp xảy ra, đứng trước động từ 下雨." }
  ],
  12: [
    { k: "dien", q: "你在做什么＿？", v: "Bạn đang làm gì thế?", o: ["呢", "吗", "的"], a: 0, g: "Câu 在…呢 hỏi việc đang làm. Đã có 什么 thì không dùng 吗." },
    { k: "cau",  q: "Câu nào đúng?", o: ["他睡觉在呢。", "他在睡觉呢。", "呢他在睡觉。"], a: 1, g: "在 đứng trước động từ, 呢 đứng cuối câu: 在睡觉呢 = đang ngủ." },
    { k: "xep",  q: "Sắp xếp: 我 / 喜欢 / 在家 / 看电视", o: ["我喜欢看电视在家。", "在家看电视我喜欢。", "我喜欢在家看电视。"], a: 2, g: "在家 chỉ nơi nên đứng trước động từ 看; cả cụm đặt sau 喜欢." }
  ],
  13: [
    { k: "cau",  q: "Câu nào đúng?", o: ["她买了不少衣服。", "她了买不少衣服。", "她买不少了衣服。"], a: 0, g: "了 đứng ngay sau động từ để nói việc đã xảy ra: 买了." },
    { k: "dien", q: "这些衣服＿很漂亮。", v: "Những bộ quần áo này đều rất đẹp.", o: ["太", "都", "的"], a: 1, g: "都 đứng sau chủ ngữ số nhiều và trước 很漂亮." },
    { k: "xep",  q: "Sắp xếp: 我 / 想 / 买 / 一点儿苹果", o: ["我买想一点儿苹果。", "我想一点儿买苹果。", "我想买一点儿苹果。"], a: 2, g: "一点儿 đứng trước danh từ 苹果; 想 đứng trước động từ 买." }
  ],
  14: [
    { k: "cau",  q: "Câu nào đúng?", o: ["我是坐飞机来的。", "我坐飞机是来的。", "我是坐飞机的来。"], a: 0, g: "Câu 是…的 nhấn cách thức: 是 trước cụm 坐飞机, 的 ở cuối câu." },
    { k: "dien", q: "你是什么时候来北京＿？", v: "Bạn đến Bắc Kinh khi nào?", o: ["了", "吗", "的"], a: 2, g: "Câu nhấn 是…的 bắt buộc có 的 ở cuối, không dùng 了." },
    { k: "xep",  q: "Sắp xếp: 我们 / 坐出租车 / 去饭店", o: ["我们坐去饭店出租车。", "我们坐出租车去饭店。", "我们出租车坐去饭店。"], a: 1, g: "Hai động từ liên tiếp: phương tiện 坐出租车 nói trước, mục đích 去饭店 nói sau." }
  ]
};
