/* Câu hỏi ngữ pháp YCT 1 — mỗi bài 3 câu, bám điểm ngữ pháp của bài.
   k: "cau" chọn câu đúng · "dien" điền từ · "xep" sắp xếp.
   Chỉ dùng chữ trong 80 từ YCT 1 + tên riêng 明明 / 大卫 / 小月 / 丁丁. */
const NGUPHAP = {
  // Bài 1 你好！ — chào hỏi: (người) + 好, 谢谢 + người
  0: [
    { k: "cau", q: "Câu chào nào đúng?", o: ["好老师！", "老师好！", "好老师你！"], a: 1, g: "Chào ai thì gọi tên người đó trước, rồi mới nói 好." },
    { k: "dien", q: "＿好！", v: "Con chào cô ạ!", o: ["再见", "老师", "谢谢"], a: 1, g: "Đứng trước chữ 好 là người mình chào: 老师好 = chào thầy cô." },
    { k: "xep", q: "Sắp xếp: 谢谢 / 老师 / 你", o: ["你谢谢老师！", "谢谢你，老师！", "老师你谢谢！"], a: 1, g: "谢谢 đứng trước người được cảm ơn; tên gọi để ở cuối câu." }
  ],
  // Bài 2 你叫什么？ — 什么, 是 / 不是, 吗
  1: [
    { k: "dien", q: "你是中国人＿？", v: "Bạn là người Trung Quốc phải không?", o: ["什么", "不", "吗"], a: 2, g: "Hỏi 'phải không' thì thêm 吗 vào cuối câu. 吗 không bao giờ đứng đầu." },
    { k: "cau", q: "Câu nào đúng?", o: ["我不是中国人。", "我是不中国人。", "不我是中国人。"], a: 0, g: "不 đứng ngay trước 是: 不是 = không phải." },
    { k: "xep", q: "Sắp xếp: 叫 / 你 / 什么", o: ["什么你叫？", "叫你什么？", "你叫什么？"], a: 2, g: "Chủ ngữ + động từ + từ để hỏi. 什么 nằm đúng chỗ cần hỏi, không đảo lên đầu." }
  ],
  // Bài 3 他是谁？ — 谁, 是 + người thân, 认识 ... 吗
  2: [
    { k: "dien", q: "他是＿？", v: "Bạn ấy là ai?", o: ["谁", "吗", "的"], a: 0, g: "Hỏi 'ai' dùng 谁, đặt vào chỗ cần hỏi — ở đây là sau 是." },
    { k: "cau", q: "Câu nào đúng?", o: ["她我姐姐是。", "她是我姐姐。", "是她我姐姐。"], a: 1, g: "Trật tự: người + 是 + người thân. 是 luôn đứng ở giữa." },
    { k: "xep", q: "Sắp xếp: 你 / 认识 / 她 / 吗", o: ["吗你认识她？", "你她认识吗？", "你认识她吗？"], a: 2, g: "Động từ 认识 đứng trước người, còn 吗 luôn ở cuối câu." }
  ],
  // Bài 4 我家有四口人。 — 有, 几 + lượng từ 口, 和
  3: [
    { k: "dien", q: "你家有＿口人？", v: "Nhà bạn có mấy người?", o: ["吗", "什么", "几"], a: 2, g: "Hỏi số lượng nhỏ dùng 几, đứng ngay trước lượng từ 口." },
    { k: "cau", q: "Câu nào đúng?", o: ["我家四口人有。", "有我家四口人。", "我家有四口人。"], a: 2, g: "Trật tự: nhà + 有 + số + lượng từ 口 + 人." },
    { k: "xep", q: "Sắp xếp: 妈妈 / 和 / 爸爸 / 我", o: ["爸爸和妈妈我。", "爸爸、妈妈和我。", "和爸爸妈妈我。"], a: 1, g: "和 đứng trước người cuối cùng trong dãy, không đứng đầu câu." }
  ],
  // Bài 5 我6岁。 — 几岁, số + 岁 (không dùng 是)
  4: [
    { k: "cau", q: "Câu nào đúng?", o: ["我是六岁。", "我六岁。", "六岁我。"], a: 1, g: "Nói tuổi chỉ cần: người + số + 岁, không thêm 是." },
    { k: "dien", q: "你几＿？", v: "Bạn mấy tuổi?", o: ["岁", "口", "个"], a: 0, g: "Hỏi tuổi là 几岁. 口 để đếm người trong nhà, 个 để đếm đồ vật." },
    { k: "xep", q: "Sắp xếp: 十 / 岁 / 哥哥", o: ["十岁哥哥。", "哥哥岁十。", "哥哥十岁。"], a: 2, g: "Nói người trước, số tuổi sau: số đi liền trước 岁." }
  ],
  // Bài 6 你的个子真高！ — 的 (của), 很 + tính từ
  5: [
    { k: "dien", q: "姐姐＿头发很长。", v: "Tóc của chị gái rất dài.", o: ["和", "的", "吗"], a: 1, g: "的 đứng giữa người và đồ của người đó: 姐姐的头发 = tóc của chị." },
    { k: "cau", q: "Câu nào đúng?", o: ["哥哥的个子很高。", "哥哥的个子高很。", "很哥哥的个子高。"], a: 0, g: "很 đứng ngay trước tính từ, không đứng sau tính từ, không đứng đầu câu." },
    { k: "xep", q: "Sắp xếp: 大 / 手 / 爸爸的", o: ["手爸爸的大。", "爸爸的手大。", "大爸爸的手。"], a: 1, g: "Thứ tự: của ai + đồ vật + tính từ." }
  ],
  // Bài 7 这是谁的狗？ — 这 / 那, 谁的, 不是
  6: [
    { k: "xep", q: "Sắp xếp: 是 / 这 / 谁的 / 狗", o: ["这是谁的狗？", "谁的这是狗？", "这谁的是狗？"], a: 0, g: "谁的 đứng ngay trước đồ vật: 谁的狗 = chó của ai." },
    { k: "dien", q: "这是猫，不＿小狗。", v: "Đây là mèo, không phải cún con.", o: ["很", "的", "是"], a: 2, g: "不是 = không phải; 不 luôn đi liền ngay trước 是." },
    { k: "cau", q: "Câu nào đúng?", o: ["喜欢我小鸟。", "我小鸟喜欢。", "我喜欢小鸟。"], a: 2, g: "Trật tự: chủ ngữ + động từ 喜欢 + thứ mình thích." }
  ],
  // Bài 8 我去商店。 — 去 + nơi đến, 在 + nơi chốn, 哪儿
  7: [
    { k: "dien", q: "你去＿？", v: "Bạn đi đâu thế?", o: ["谁", "哪儿", "什么"], a: 1, g: "Hỏi nơi đến dùng 哪儿, đặt ngay sau động từ 去." },
    { k: "cau", q: "Câu nào đúng?", o: ["老师学校在。", "在老师学校。", "老师在学校。"], a: 2, g: "Trật tự: người + 在 + nơi chốn. 在 đứng giữa." },
    { k: "xep", q: "Sắp xếp: 商店 / 大卫 / 去", o: ["大卫去商店。", "去大卫商店。", "大卫商店去。"], a: 0, g: "Động từ 去 đứng trước nơi đến." }
  ],
  // Bài 9 今天星期几？ — thời gian đứng đầu, 星期几, 月 + 号
  8: [
    { k: "cau", q: "Câu nào đúng?", o: ["星期几今天？", "今天几星期？", "今天星期几？"], a: 2, g: "Hỏi thứ: 今天 + 星期几. Từ để hỏi 几 đứng ngay trước chỗ cần hỏi." },
    { k: "dien", q: "今天八月七＿。", v: "Hôm nay ngày 7 tháng 8.", o: ["点", "号", "岁"], a: 1, g: "Ngày trong tháng dùng 号. 点 là giờ, 岁 là tuổi." },
    { k: "xep", q: "Sắp xếp: 四 / 明天 / 星期", o: ["明天星期四。", "星期四明天。", "明天四星期。"], a: 0, g: "Từ chỉ thời gian 明天 nói trước, rồi mới nói thứ mấy." }
  ],
  // Bài 10 现在几点？ — 几点, 现在 + giờ, 很 + tính từ
  9: [
    { k: "dien", q: "现在几＿？", v: "Bây giờ mấy giờ?", o: ["号", "点", "口"], a: 1, g: "Hỏi giờ dùng 几点. 号 là ngày, 口 để đếm người." },
    { k: "xep", q: "Sắp xếp: 点 / 四 / 现在", o: ["四点现在。", "现在四点。", "现在点四。"], a: 1, g: "现在 nói trước, sau đó là số + 点." },
    { k: "cau", q: "Câu nào đúng?", o: ["小月高兴很。", "很小月高兴。", "小月很高兴。"], a: 2, g: "很 đứng sau chủ ngữ và ngay trước tính từ 高兴." }
  ],
  // Bài 11 你吃什么？ — động từ + tân ngữ, 爱 / 喜欢 + động từ, 一 + 个 + danh từ
  10: [
    { k: "cau", q: "Câu nào đúng?", o: ["我爱吃面条。", "我吃爱面条。", "爱我吃面条。"], a: 0, g: "爱 đứng trước động từ 吃: 爱吃 = thích ăn." },
    { k: "dien", q: "我有一＿苹果。", v: "Mình có một quả táo.", o: ["口", "点", "个"], a: 2, g: "Đếm đồ vật như quả táo dùng lượng từ 个: 一个苹果." },
    { k: "xep", q: "Sắp xếp: 牛奶 / 喝 / 丁丁", o: ["喝丁丁牛奶。", "丁丁牛奶喝。", "丁丁喝牛奶。"], a: 2, g: "Trật tự: chủ ngữ + động từ + thứ được uống." }
  ]
};
