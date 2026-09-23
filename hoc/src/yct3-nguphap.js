/* Câu hỏi ngữ pháp YCT 3 — 11 bài (bỏ bài 12 ôn tập), mỗi bài 3 câu.
   k: "cau" (chọn câu đúng) | "dien" (điền từ) | "xep" (sắp xếp trật tự từ)
   Chỉ dùng chữ Hán thuộc từ vựng YCT 1–2–3. Tên người: 明明, 大卫, 小月, 丁丁. */
const NGUPHAP = {
  /* Bài 1 — 我三年级。 : hỏi bằng 几, lượng từ 个, tính từ + danh từ */
  0: [
    { k: "cau", q: "Câu nào đúng?",
      o: ["你年级几？", "你几年级？", "年级你几？"], a: 1,
      g: "Hỏi số lượng thì 几 đứng ngay trước danh từ: 几 + 年级. Không được để 几 ra sau." },
    { k: "dien", q: "老师，我有一＿问题。", v: "Thưa cô, con có một câu hỏi.",
      o: ["口", "个", "岁"], a: 1,
      g: "Giữa số từ và danh từ phải có lượng từ. 问题 đi với lượng từ 个: 一个问题." },
    { k: "xep", q: "Sắp xếp: 欢迎 / 新 / 同学",
      o: ["新同学欢迎！", "同学新欢迎！", "欢迎新同学！"], a: 2,
      g: "Động từ 欢迎 đứng đầu câu, tân ngữ theo sau. Tính từ 新 luôn đứng trước danh từ 同学." }
  ],
  /* Bài 2 — 你喜欢什么运动？ : phó từ 最 / 都, rủ rê 一起…吧 */
  1: [
    { k: "dien", q: "我＿喜欢游泳。", v: "Mình thích bơi nhất.",
      o: ["太", "最", "真"], a: 1,
      g: "最 đứng trước động từ hoặc tính từ để nói 'nhất'. 太 và 真 chỉ mức độ, không so sánh nhất." },
    { k: "cau", q: "Câu nào đúng?",
      o: ["我们一起去跑步吧！", "我们去一起跑步吧！", "一起我们去跑步吧！"], a: 0,
      g: "一起 là phó từ, đứng sau chủ ngữ và trước động từ 去. 吧 đặt cuối câu để rủ rê." },
    { k: "xep", q: "Sắp xếp: 我们 / 都 / 喜欢 / 打篮球",
      o: ["都我们喜欢打篮球。", "我们喜欢都打篮球。", "我们都喜欢打篮球。"], a: 2,
      g: "都 là phó từ, luôn đứng sau chủ ngữ và trước động từ: 我们 + 都 + 喜欢." }
  ],
  /* Bài 3 — 我在画画儿呢。 : 在 + động từ … 呢 (đang làm) */
  2: [
    { k: "dien", q: "爷爷＿看电影呢。", v: "Ông đang xem phim.",
      o: ["在", "了", "会"], a: 0,
      g: "Việc đang diễn ra dùng 在 + động từ, cuối câu thêm 呢. 了 nói việc đã xong nên không hợp." },
    { k: "cau", q: "Câu nào đúng?",
      o: ["妹妹洗澡在呢。", "妹妹在洗澡呢。", "在妹妹洗澡呢。"], a: 1,
      g: "在 đứng giữa chủ ngữ và động từ: 妹妹 + 在 + 洗澡 + 呢." },
    { k: "xep", q: "Sắp xếp: 我 / 在 / 上网 / 呢",
      o: ["我上网在呢。", "我呢在上网。", "我在上网呢。"], a: 2,
      g: "Thứ tự cố định: chủ ngữ + 在 + động từ + 呢. 呢 luôn ở cuối câu." }
  ],
  /* Bài 4 — 喂，您好！ : 出去/回来, 了 cuối câu, 就 */
  3: [
    { k: "cau", q: "Câu nào đúng?",
      o: ["妈妈出去了。", "妈妈了出去。", "出去妈妈了。"], a: 0,
      g: "了 đặt sau động từ 出去 và ở cuối câu để nói việc đã xảy ra." },
    { k: "dien", q: "她中午＿回来。", v: "Trưa là chị ấy về ngay.",
      o: ["还", "就", "别"], a: 1,
      g: "就 đứng trước động từ, ý 'là… ngay, liền'. 还 nghĩa 'còn, vẫn', 别 nghĩa 'đừng'." },
    { k: "xep", q: "Sắp xếp: 您 / 找 / 谁",
      o: ["您谁找？", "找谁您？", "您找谁？"], a: 2,
      g: "Câu hỏi với 谁 giữ nguyên trật tự chủ ngữ + động từ + tân ngữ, 谁 nằm đúng chỗ tân ngữ." }
  ],
  /* Bài 5 — 再吃几个。 : 太…了, 再 + động từ, 还 + 想 */
  4: [
    { k: "dien", q: "饺子＿好吃了！", v: "Sủi cảo ngon quá!",
      o: ["太", "很", "最"], a: 0,
      g: "Khen mức độ cao dùng cặp 太…了. 很 và 最 không đi cùng 了 theo kiểu này." },
    { k: "cau", q: "Câu nào đúng?",
      o: ["吃再几个吧！", "几个吃再吧！", "再吃几个吧！"], a: 2,
      g: "再 (thêm nữa) là phó từ, đứng trước động từ 吃. Số lượng 几个 đứng sau động từ." },
    { k: "xep", q: "Sắp xếp: 我 / 还 / 想 / 喝果汁",
      o: ["我还想喝果汁。", "还我想喝果汁。", "我想还喝果汁。"], a: 0,
      g: "还 và 想 đều đứng trước động từ, thứ tự là 还 + 想 + động từ." }
  ],
  /* Bài 6 — 我能自己穿。 : 能 + động từ, 让 + người + động từ, 这 + 件 + danh từ */
  5: [
    { k: "cau", q: "Câu nào đúng?",
      o: ["我穿能自己衣服。", "我能自己穿衣服。", "能我自己穿衣服。"], a: 1,
      g: "能 đứng sau chủ ngữ, trước 自己 và động từ: 我 + 能 + 自己 + 穿 + 衣服." },
    { k: "dien", q: "＿我帮助你吧！", v: "Để mình giúp bạn nhé!",
      o: ["让", "把", "给"], a: 0,
      g: "让 + người + động từ nghĩa là 'để/bảo ai làm gì'. Ở đây là 'để mình giúp bạn'." },
    { k: "xep", q: "Sắp xếp: 这 / 件 / 衣服 / 很漂亮",
      o: ["这衣服件很漂亮。", "衣服这件很漂亮。", "这件衣服很漂亮。"], a: 2,
      g: "Trật tự cố định: từ chỉ định 这 + lượng từ 件 + danh từ 衣服." }
  ],
  /* Bài 7 — 生日快乐！ : lượng từ 本, động từ hai tân ngữ 送, giá tiền làm vị ngữ */
  6: [
    { k: "dien", q: "我买了一＿书。", v: "Mình mua một quyển sách.",
      o: ["件", "本", "个"], a: 1,
      g: "Sách đếm bằng lượng từ 本: 一本书. 件 dùng cho áo quần, việc." },
    { k: "cau", q: "Câu nào đúng?",
      o: ["妈妈送我一个蛋糕。", "妈妈送一个蛋糕我。", "妈妈我送一个蛋糕。"], a: 0,
      g: "送 nhận hai tân ngữ, thứ tự là 送 + người + đồ vật: 送我一个蛋糕." },
    { k: "xep", q: "Sắp xếp: 这个 / 蛋糕 / 一百块",
      o: ["这个一百块蛋糕。", "一百块这个蛋糕。", "这个蛋糕一百块。"], a: 2,
      g: "Nói giá thì số tiền đứng sau danh từ, làm vị ngữ: 这个蛋糕 + 一百块." }
  ],
  /* Bài 8 — 下雪了。 : 因为…所以…, 别 + động từ, 了 báo việc mới xảy ra */
  7: [
    { k: "dien", q: "＿我感冒了，所以没有去学校。", v: "Vì mình bị cảm nên không đi học.",
      o: ["因为", "但是", "所以"], a: 0,
      g: "Cặp 因为…所以…: 因为 nêu lý do ở vế trước, 所以 nêu kết quả ở vế sau." },
    { k: "cau", q: "Câu nào đúng?",
      o: ["你着急别。", "你别着急。", "别着急你。"], a: 1,
      g: "别 (đừng) đứng ngay trước từ chỉ hành động hoặc trạng thái: 别 + 着急." },
    { k: "xep", q: "Sắp xếp: 外面 / 下雪 / 了",
      o: ["外面了下雪。", "了外面下雪。", "外面下雪了。"], a: 2,
      g: "了 đứng cuối câu báo việc mới xảy ra: bên ngoài vừa đổ tuyết." }
  ],
  /* Bài 9 — 笑一笑！ : lặp động từ V一V, từ chỉ vị trí + 在 */
  8: [
    { k: "cau", q: "Câu nào đúng?",
      o: ["爸爸在我旁边。", "爸爸旁边在我。", "在爸爸我旁边。"], a: 0,
      g: "Nói vị trí: chủ ngữ + 在 + nơi chốn. 旁边 đứng sau 我 để thành 'bên cạnh mình'." },
    { k: "dien", q: "猴子＿老虎的旁边。", v: "Con khỉ ở bên cạnh con hổ.",
      o: ["是", "在", "有"], a: 1,
      g: "在 dùng khi nói ai/cái gì ở đâu. 是 để nói 'là', 有 để nói 'có'." },
    { k: "xep", q: "Sắp xếp: 我们 / 笑 / 一 / 笑",
      o: ["我们一笑笑。", "笑一笑我们。", "我们笑一笑。"], a: 2,
      g: "Kiểu lặp động từ 'V 一 V' (笑一笑) nghĩa là làm nhẹ nhàng, một chút." }
  ],
  /* Bài 10 — 谁跑得快？ : bổ ngữ mức độ 得, phương tiện 坐…去… */
  9: [
    { k: "dien", q: "他走＿很快。", v: "Anh ấy đi rất nhanh.",
      o: ["得", "的", "了"], a: 0,
      g: "Nói làm việc gì ở mức nào thì dùng 得: động từ + 得 + 很 + tính từ." },
    { k: "cau", q: "Câu nào đúng?",
      o: ["他得跑很快。", "他跑得很快。", "很快他跑得。"], a: 1,
      g: "得 đứng ngay sau động từ 跑, phần nói mức độ 很快 ở phía sau." },
    { k: "xep", q: "Sắp xếp: 我 / 坐公共汽车 / 去 / 学校",
      o: ["我坐公共汽车学校去。", "我去坐公共汽车学校。", "我坐公共汽车去学校。"], a: 2,
      g: "Phương tiện nói trước, nơi đến nói sau: 坐 + xe + 去 + nơi đến." }
  ],
  /* Bài 11 — 妈妈把糖给弟弟了。 : câu 把, 过 chỉ từng trải */
  10: [
    { k: "cau", q: "Câu nào đúng?",
      o: ["妈妈把苹果给弟弟了。", "妈妈给苹果把弟弟了。", "把妈妈苹果给弟弟了。"], a: 0,
      g: "Câu 把: chủ ngữ + 把 + đồ vật + động từ. Đồ vật 苹果 được đưa lên trước động từ 给." },
    { k: "dien", q: "你去＿北京吗？", v: "Bạn từng đi Bắc Kinh chưa?",
      o: ["完", "过", "把"], a: 1,
      g: "过 đặt ngay sau động từ để nói việc 'đã từng' làm: 去过北京." },
    { k: "xep", q: "Sắp xếp: 我 / 把 / 果汁 / 喝完了",
      o: ["我喝完了把果汁。", "把我果汁喝完了。", "我把果汁喝完了。"], a: 2,
      g: "Câu 把 luôn theo thứ tự: chủ ngữ + 把 + đồ vật + động từ + 完/了." }
  ]
};
