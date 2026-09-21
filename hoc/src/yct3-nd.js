/* Nghe – nói – đọc cho YCT 3: hội thoại + bài đọc từng bài */
const ND = {
  0: {  // 我三年级。
    dl: { lines: [
      {"r": "A", "z": "你好！你是新同学吗？", "p": "Nǐ hǎo! Nǐ shì xīn tóngxué ma?", "v": "Chào bạn! Bạn là bạn mới à?"},
      {"r": "B", "z": "是，我叫小月，我三年级。", "p": "Shì, wǒ jiào Xiǎoyuè, wǒ sān niánjí.", "v": "Ừ, mình tên Tiểu Nguyệt, mình học lớp 3."},
      {"r": "A", "z": "欢迎你！我叫明明，我也三年级。", "p": "Huānyíng nǐ! Wǒ jiào Míngming, wǒ yě sān niánjí.", "v": "Chào mừng bạn! Mình tên Minh Minh, mình cũng học lớp 3."},
      {"r": "B", "z": "我们的教室在哪儿？", "p": "Wǒmen de jiàoshì zài nǎr?", "v": "Phòng học của tụi mình ở đâu?"},
      {"r": "A", "z": "在那儿。第一课是汉语课。", "p": "Zài nàr. Dì-yī kè shì Hànyǔ kè.", "v": "Ở đằng kia. Tiết đầu tiên là tiết tiếng Trung."},
      {"r": "B", "z": "太好了！我喜欢汉语课。", "p": "Tài hǎo le! Wǒ xǐhuan Hànyǔ kè.", "v": "Hay quá! Mình thích tiết tiếng Trung."}
    ],
      qs: [
        {"q": "小月几年级？", "v": "Tiểu Nguyệt học lớp mấy?", "o": ["三年级", "二年级", "四年级"], "a": 0},
        {"q": "第一课是什么课？", "v": "Tiết đầu tiên là tiết gì?", "o": ["唱歌课", "汉语课", "画画儿课"], "a": 1}
      ] },
    rd: { z: "我叫丁丁，今年九岁，三年级。我们教室里有二十个同学，十个男同学，十个女同学。老师每天教我们听、说、读、写。我有问题的时候就问老师。老师说：“不懂就问！”",
      p: "Wǒ jiào Dīngding, jīnnián jiǔ suì, sān niánjí. Wǒmen jiàoshì li yǒu èrshí ge tóngxué, shí ge nán tóngxué, shí ge nǚ tóngxué. Lǎoshī měi tiān jiāo wǒmen tīng, shuō, dú, xiě. Wǒ yǒu wèntí de shíhou jiù wèn lǎoshī. Lǎoshī shuō: “Bù dǒng jiù wèn!”",
      v: "Mình tên Đinh Đinh, năm nay 9 tuổi, học lớp 3. Lớp mình có 20 bạn, 10 bạn nam, 10 bạn nữ. Mỗi ngày cô dạy tụi mình nghe, nói, đọc, viết. Khi có câu hỏi, mình hỏi cô ngay. Cô nói: “Không hiểu thì hỏi!”",
      qs: [
        {"q": "教室里有几个女同学？", "v": "Lớp có mấy bạn nữ?", "o": ["二十个", "十个", "九个"], "a": 1},
        {"q": "丁丁有问题的时候做什么？", "v": "Khi có câu hỏi, Đinh Đinh làm gì?", "o": ["问老师", "问妈妈", "看书"], "a": 0}
      ] }
  },
  1: {  // 你喜欢什么运动？
    dl: { lines: [
      {"r": "A", "z": "大卫，你喜欢什么运动？", "p": "Dàwèi, nǐ xǐhuan shénme yùndòng?", "v": "David, bạn thích môn thể thao nào?"},
      {"r": "B", "z": "我喜欢踢足球，也喜欢游泳。你呢？", "p": "Wǒ xǐhuan tī zúqiú, yě xǐhuan yóuyǒng. Nǐ ne?", "v": "Mình thích đá bóng, cũng thích bơi. Còn bạn?"},
      {"r": "A", "z": "我最喜欢打篮球。", "p": "Wǒ zuì xǐhuan dǎ lánqiú.", "v": "Mình thích chơi bóng rổ nhất."},
      {"r": "B", "z": "明天下午我们一起去打篮球吧！", "p": "Míngtiān xiàwǔ wǒmen yìqǐ qù dǎ lánqiú ba!", "v": "Chiều mai tụi mình cùng đi chơi bóng rổ nhé!"},
      {"r": "A", "z": "好！明天下午我有时间。", "p": "Hǎo! Míngtiān xiàwǔ wǒ yǒu shíjiān.", "v": "Được! Chiều mai mình rảnh."}
    ],
      qs: [
        {"q": "大卫喜欢什么运动？", "v": "David thích môn thể thao nào?", "o": ["踢足球", "打篮球", "跑步"], "a": 0},
        {"q": "他们明天下午做什么？", "v": "Chiều mai họ làm gì?", "o": ["打篮球", "游泳", "跑步"], "a": 0}
      ] },
    rd: { z: "小月每天早上都去跑步。她说跑步对身体好。星期六，她和妈妈一起去游泳。游泳很累，但是她很快乐。",
      p: "Xiǎoyuè měi tiān zǎoshang dōu qù pǎobù. Tā shuō pǎobù duì shēntǐ hǎo. Xīngqīliù, tā hé māma yìqǐ qù yóuyǒng. Yóuyǒng hěn lèi, dànshì tā hěn kuàilè.",
      v: "Sáng nào Tiểu Nguyệt cũng đi chạy bộ. Bạn ấy nói chạy bộ tốt cho sức khoẻ. Thứ Bảy, bạn ấy cùng mẹ đi bơi. Bơi rất mệt, nhưng bạn ấy rất vui.",
      qs: [
        {"q": "小月每天早上做什么？", "v": "Mỗi sáng Tiểu Nguyệt làm gì?", "o": ["跑步", "游泳", "踢足球"], "a": 0},
        {"q": "星期六小月和谁去游泳？", "v": "Thứ Bảy Tiểu Nguyệt đi bơi với ai?", "o": ["妈妈", "爸爸", "姐姐"], "a": 0}
      ] }
  },
  2: {  // 我在画画儿呢。
    dl: { lines: [
      {"r": "A", "z": "明明，你在做什么呢？", "p": "Míngming, nǐ zài zuò shénme ne?", "v": "Minh Minh, con đang làm gì đấy?"},
      {"r": "B", "z": "我在画画儿呢。", "p": "Wǒ zài huà huàr ne.", "v": "Con đang vẽ tranh ạ."},
      {"r": "A", "z": "爷爷奶奶在做什么？", "p": "Yéye nǎinai zài zuò shénme?", "v": "Ông bà đang làm gì?"},
      {"r": "B", "z": "爷爷在看电影呢，奶奶在唱歌。", "p": "Yéye zài kàn diànyǐng ne, nǎinai zài chànggē.", "v": "Ông đang xem phim, bà đang hát ạ."},
      {"r": "A", "z": "你画的是什么？", "p": "Nǐ huà de shì shénme?", "v": "Con vẽ cái gì thế?"},
      {"r": "B", "z": "是我的小猫。它是白的。", "p": "Shì wǒ de xiǎo māo. Tā shì bái de.", "v": "Là con mèo nhỏ của con. Nó màu trắng ạ."}
    ],
      qs: [
        {"q": "爷爷在做什么？", "v": "Ông đang làm gì?", "o": ["唱歌", "画画儿", "看电影"], "a": 2},
        {"q": "明明的小猫是什么颜色的？", "v": "Con mèo của Minh Minh màu gì?", "o": ["黑的", "白的", "蓝的"], "a": 1}
      ] },
    rd: { z: "今天是星期天，我家的人都在家。爸爸在上网，妈妈在唱歌，妹妹在跳舞。我在画画儿，我画了一只黑狗和一只白猫。",
      p: "Jīntiān shì xīngqītiān, wǒ jiā de rén dōu zài jiā. Bàba zài shàngwǎng, māma zài chànggē, mèimei zài tiàowǔ. Wǒ zài huà huàr, wǒ huàle yì zhī hēi gǒu hé yì zhī bái māo.",
      v: "Hôm nay là Chủ nhật, cả nhà mình đều ở nhà. Bố đang lên mạng, mẹ đang hát, em gái đang nhảy. Mình đang vẽ, mình vẽ một con chó đen và một con mèo trắng.",
      qs: [
        {"q": "妹妹在做什么？", "v": "Em gái đang làm gì?", "o": ["唱歌", "上网", "跳舞"], "a": 2},
        {"q": "我画了什么？", "v": "Mình đã vẽ gì?", "o": ["白狗和黑猫", "两只熊猫", "黑狗和白猫"], "a": 2}
      ] }
  },
  3: {  // 喂，您好！
    dl: { lines: [
      {"r": "A", "z": "喂，您好！", "p": "Wéi, nín hǎo!", "v": "A lô, cháu chào bác ạ!"},
      {"r": "B", "z": "您好！您找谁？", "p": "Nín hǎo! Nín zhǎo shéi?", "v": "Chào cháu! Cháu tìm ai?"},
      {"r": "A", "z": "我是小月，我找丁丁。", "p": "Wǒ shì Xiǎoyuè, wǒ zhǎo Dīngding.", "v": "Cháu là Tiểu Nguyệt, cháu tìm Đinh Đinh ạ."},
      {"r": "B", "z": "丁丁不在家，他出去了。", "p": "Dīngding bú zài jiā, tā chūqu le.", "v": "Đinh Đinh không có nhà, bạn ấy ra ngoài rồi."},
      {"r": "A", "z": "他什么时候回来？", "p": "Tā shénme shíhou huílai?", "v": "Khi nào bạn ấy về ạ?"},
      {"r": "B", "z": "他中午就回来。", "p": "Tā zhōngwǔ jiù huílai.", "v": "Trưa là bạn ấy về."}
    ],
      qs: [
        {"q": "小月找谁？", "v": "Tiểu Nguyệt tìm ai?", "o": ["明明", "丁丁", "大卫"], "a": 1},
        {"q": "丁丁什么时候回来？", "v": "Khi nào Đinh Đinh về?", "o": ["晚上", "明天", "中午"], "a": 2}
      ] },
    rd: { z: "中午，姐姐出去买水果了。一点半，有人打电话找她。我说：“她不在家，两点就回来。”两点，姐姐回来了，我就让她回电话。",
      p: "Zhōngwǔ, jiějie chūqu mǎi shuǐguǒ le. Yī diǎn bàn, yǒu rén dǎ diànhuà zhǎo tā. Wǒ shuō: “Tā bú zài jiā, liǎng diǎn jiù huílai.” Liǎng diǎn, jiějie huílai le, wǒ jiù ràng tā huí diànhuà.",
      v: "Buổi trưa, chị gái ra ngoài mua hoa quả. Một giờ rưỡi, có người gọi điện tìm chị. Mình nói: “Chị ấy không có nhà, hai giờ là về.” Hai giờ, chị về rồi, mình liền bảo chị gọi lại.",
      qs: [
        {"q": "姐姐出去做什么？", "v": "Chị gái ra ngoài làm gì?", "o": ["买水果", "买衣服", "看电影"], "a": 0},
        {"q": "姐姐几点回来了？", "v": "Mấy giờ chị gái về?", "o": ["两点", "一点半", "十二点"], "a": 0}
      ] }
  },
  4: {  // 再吃几个。
    dl: { lines: [
      {"r": "A", "z": "奶奶，我饿了。", "p": "Nǎinai, wǒ è le.", "v": "Bà ơi, cháu đói rồi."},
      {"r": "B", "z": "我做了饺子，快来吃吧！", "p": "Wǒ zuòle jiǎozi, kuài lái chī ba!", "v": "Bà làm sủi cảo rồi, mau lại ăn đi!"},
      {"r": "A", "z": "饺子太好吃了！", "p": "Jiǎozi tài hǎochī le!", "v": "Sủi cảo ngon quá!"},
      {"r": "B", "z": "再吃几个吧。", "p": "Zài chī jǐ ge ba.", "v": "Ăn thêm mấy cái nữa đi."},
      {"r": "A", "z": "我饱了。我想喝一杯果汁。", "p": "Wǒ bǎo le. Wǒ xiǎng hē yì bēi guǒzhī.", "v": "Cháu no rồi. Cháu muốn uống một cốc nước ép."},
      {"r": "B", "z": "好，还有西瓜，你也吃一些吧。", "p": "Hǎo, hái yǒu xīguā, nǐ yě chī yìxiē ba.", "v": "Được, còn có dưa hấu nữa, cháu ăn một ít nhé."}
    ],
      qs: [
        {"q": "奶奶做了什么？", "v": "Bà đã làm món gì?", "o": ["饺子", "面包", "鸡蛋"], "a": 0},
        {"q": "他想喝什么？", "v": "Bạn nhỏ muốn uống gì?", "o": ["牛奶", "果汁", "茶"], "a": 1}
      ] },
    rd: { z: "我早上吃面包和鸡蛋，喝一杯牛奶。中午在学校吃米饭和菜。晚上妈妈做饺子，我吃了十五个，太饱了！吃完饭，我们还吃了一些水果。",
      p: "Wǒ zǎoshang chī miànbāo hé jīdàn, hē yì bēi niúnǎi. Zhōngwǔ zài xuéxiào chī mǐfàn hé cài. Wǎnshang māma zuò jiǎozi, wǒ chīle shíwǔ ge, tài bǎo le! Chī wán fàn, wǒmen hái chīle yìxiē shuǐguǒ.",
      v: "Buổi sáng mình ăn bánh mì và trứng, uống một cốc sữa. Buổi trưa ăn cơm và rau ở trường. Buổi tối mẹ làm sủi cảo, mình ăn 15 cái, no quá! Ăn cơm xong, cả nhà còn ăn chút hoa quả.",
      qs: [
        {"q": "我早上喝什么？", "v": "Buổi sáng mình uống gì?", "o": ["牛奶", "果汁", "茶"], "a": 0},
        {"q": "晚上我吃了几个饺子？", "v": "Buổi tối mình ăn mấy cái sủi cảo?", "o": ["五个", "十个", "十五个"], "a": 2}
      ] }
  },
  5: {  // 我能自己穿。
    dl: { lines: [
      {"r": "A", "z": "妹妹，我帮助你穿衣服吧。", "p": "Mèimei, wǒ bāngzhù nǐ chuān yīfu ba.", "v": "Em ơi, để chị giúp em mặc quần áo nhé."},
      {"r": "B", "z": "谢谢，我能自己穿。", "p": "Xièxie, wǒ néng zìjǐ chuān.", "v": "Cảm ơn chị, em tự mặc được."},
      {"r": "A", "z": "你今天穿什么？", "p": "Nǐ jīntiān chuān shénme?", "v": "Hôm nay em mặc gì?"},
      {"r": "B", "z": "我穿这件红裙子。", "p": "Wǒ chuān zhè jiàn hóng qúnzi.", "v": "Em mặc chiếc váy đỏ này."},
      {"r": "A", "z": "外面下雨了，你拿雨伞吧。", "p": "Wàimiàn xià yǔ le, nǐ ná yǔsǎn ba.", "v": "Bên ngoài mưa rồi, em cầm ô đi."},
      {"r": "B", "z": "好，我还要穿新鞋。", "p": "Hǎo, wǒ hái yào chuān xīn xié.", "v": "Vâng, em còn muốn đi giày mới nữa."}
    ],
      qs: [
        {"q": "妹妹今天穿什么？", "v": "Hôm nay em gái mặc gì?", "o": ["红裙子", "红裤子", "白裙子"], "a": 0},
        {"q": "外面天气怎么样？", "v": "Thời tiết bên ngoài thế nào?", "o": ["下雪了", "刮风了", "下雨了"], "a": 2}
      ] },
    rd: { z: "弟弟六岁了。每天早上，他自己起床，自己穿衣服和鞋。去学校的时候，他想让妈妈拿书包。妈妈说：“你能自己拿！”",
      p: "Dìdi liù suì le. Měi tiān zǎoshang, tā zìjǐ qǐchuáng, zìjǐ chuān yīfu hé xié. Qù xuéxiào de shíhou, tā xiǎng ràng māma ná shūbāo. Māma shuō: “Nǐ néng zìjǐ ná!”",
      v: "Em trai 6 tuổi rồi. Sáng nào em cũng tự dậy, tự mặc quần áo và đi giày. Lúc đi học, em muốn mẹ cầm cặp giúp. Mẹ nói: “Con tự cầm được mà!”",
      qs: [
        {"q": "弟弟几岁了？", "v": "Em trai mấy tuổi?", "o": ["五岁", "六岁", "九岁"], "a": 1},
        {"q": "妈妈想让弟弟做什么？", "v": "Mẹ muốn em trai làm gì?", "o": ["自己拿书包", "自己起床", "穿新鞋"], "a": 0}
      ] }
  },
  6: {  // 生日快乐！
    dl: { lines: [
      {"r": "A", "z": "小月，生日快乐！这是我送你的礼物。", "p": "Xiǎoyuè, shēngrì kuàilè! Zhè shì wǒ sòng nǐ de lǐwù.", "v": "Tiểu Nguyệt, chúc mừng sinh nhật! Đây là quà mình tặng bạn."},
      {"r": "B", "z": "谢谢你！是什么东西？", "p": "Xièxie nǐ! Shì shénme dōngxi?", "v": "Cảm ơn bạn! Là gì thế?"},
      {"r": "A", "z": "是一本书，还有一些玫瑰花。", "p": "Shì yì běn shū, hái yǒu yìxiē méiguihuā.", "v": "Là một quyển sách, còn có mấy bông hoa hồng nữa."},
      {"r": "B", "z": "太漂亮了！我们一起吃蛋糕吧！", "p": "Tài piàoliang le! Wǒmen yìqǐ chī dàngāo ba!", "v": "Đẹp quá! Tụi mình cùng ăn bánh kem nhé!"},
      {"r": "A", "z": "好！你今年几岁了？", "p": "Hǎo! Nǐ jīnnián jǐ suì le?", "v": "Ừ! Năm nay bạn mấy tuổi rồi?"},
      {"r": "B", "z": "我十岁了。", "p": "Wǒ shí suì le.", "v": "Mình 10 tuổi rồi."}
    ],
      qs: [
        {"q": "他送小月什么礼物？", "v": "Bạn ấy tặng Tiểu Nguyệt quà gì?", "o": ["一个蛋糕", "一件衣服", "书和玫瑰花"], "a": 2},
        {"q": "小月今年几岁？", "v": "Năm nay Tiểu Nguyệt mấy tuổi?", "o": ["九岁", "十岁", "八岁"], "a": 1}
      ] },
    rd: { z: "明天是妈妈的生日。今天我和爸爸去商店买礼物。蛋糕一百块一个，玫瑰花五十块。我们买了一个蛋糕和一些玫瑰花。",
      p: "Míngtiān shì māma de shēngrì. Jīntiān wǒ hé bàba qù shāngdiàn mǎi lǐwù. Dàngāo yìbǎi kuài yí ge, méiguihuā wǔshí kuài. Wǒmen mǎile yí ge dàngāo hé yìxiē méiguihuā.",
      v: "Ngày mai là sinh nhật mẹ. Hôm nay mình và bố đi cửa hàng mua quà. Bánh kem 100 tệ một cái, hoa hồng 50 tệ. Bố con mình mua một cái bánh kem và mấy bông hoa hồng.",
      qs: [
        {"q": "明天是谁的生日？", "v": "Ngày mai là sinh nhật của ai?", "o": ["爸爸", "妈妈", "姐姐"], "a": 1},
        {"q": "蛋糕多少钱一个？", "v": "Bánh kem bao nhiêu tiền một cái?", "o": ["五十块", "一千块", "一百块"], "a": 2}
      ] }
  },
  7: {  // 下雪了。
    dl: { lines: [
      {"r": "A", "z": "大卫，你今天为什么没有去学校？", "p": "Dàwèi, nǐ jīntiān wèi shénme méiyǒu qù xuéxiào?", "v": "David, sao hôm nay bạn không đi học?"},
      {"r": "B", "z": "因为我感冒了，头很疼。", "p": "Yīnwèi wǒ gǎnmào le, tóu hěn téng.", "v": "Vì mình bị cảm, đau đầu lắm."},
      {"r": "A", "z": "你吃药了吗？", "p": "Nǐ chī yào le ma?", "v": "Bạn uống thuốc chưa?"},
      {"r": "B", "z": "吃了，现在舒服多了。", "p": "Chī le, xiànzài shūfu duō le.", "v": "Uống rồi, giờ dễ chịu hơn nhiều rồi."},
      {"r": "A", "z": "外面下雪了，还刮风，别出去。", "p": "Wàimiàn xià xuě le, hái guā fēng, bié chūqu.", "v": "Bên ngoài tuyết rơi, lại còn gió nữa, đừng ra ngoài nhé."},
      {"r": "B", "z": "好，我在家休息。", "p": "Hǎo, wǒ zài jiā xiūxi.", "v": "Ừ, mình ở nhà nghỉ."}
    ],
      qs: [
        {"q": "大卫为什么没有去学校？", "v": "Vì sao David không đi học?", "o": ["他去北京了", "他不想去", "他感冒了"], "a": 2},
        {"q": "外面天气怎么样？", "v": "Thời tiết bên ngoài thế nào?", "o": ["有太阳", "很热", "下雪，刮风"], "a": 2}
      ] },
    rd: { z: "昨天很冷，外面下雪了。妹妹在外面玩了一个小时，晚上就生病了。她哭了，说：“妈妈，我头疼。”妈妈说：“别着急，吃了药就舒服了。”",
      p: "Zuótiān hěn lěng, wàimiàn xià xuě le. Mèimei zài wàimiàn wánle yí ge xiǎoshí, wǎnshang jiù shēngbìng le. Tā kū le, shuō: “Māma, wǒ tóu téng.” Māma shuō: “Bié zháojí, chīle yào jiù shūfu le.”",
      v: "Hôm qua rất lạnh, bên ngoài tuyết rơi. Em gái chơi ngoài trời một tiếng, tối thì bị ốm. Em khóc và nói: “Mẹ ơi, con đau đầu.” Mẹ nói: “Đừng lo, uống thuốc là khỏe thôi.”",
      qs: [
        {"q": "昨天天气怎么样？", "v": "Hôm qua thời tiết thế nào?", "o": ["很热", "下雪了", "有太阳"], "a": 1},
        {"q": "妹妹哪儿疼？", "v": "Em gái đau ở đâu?", "o": ["脚", "头", "耳朵"], "a": 1}
      ] }
  },
  8: {  // 笑一笑！
    dl: { lines: [
      {"r": "A", "z": "星期天我们去动物园吧！", "p": "Xīngqītiān wǒmen qù dòngwùyuán ba!", "v": "Chủ nhật mình đi sở thú nhé!"},
      {"r": "B", "z": "好！我想看猴子和老虎。", "p": "Hǎo! Wǒ xiǎng kàn hóuzi hé lǎohǔ.", "v": "Được! Mình muốn xem khỉ và hổ."},
      {"r": "A", "z": "你看，那只老虎真胖！", "p": "Nǐ kàn, nà zhī lǎohǔ zhēn pàng!", "v": "Bạn xem, con hổ kia béo thật!"},
      {"r": "B", "z": "左边的猴子很瘦。", "p": "Zuǒbian de hóuzi hěn shòu.", "v": "Con khỉ bên trái thì gầy lắm."},
      {"r": "A", "z": "来，我们都笑一笑！", "p": "Lái, wǒmen dōu xiào yi xiào!", "v": "Nào, tụi mình cùng cười lên nào!"}
    ],
      qs: [
        {"q": "他们星期天去哪儿？", "v": "Chủ nhật họ đi đâu?", "o": ["学校", "动物园", "商店"], "a": 1},
        {"q": "什么动物很瘦？", "v": "Con vật nào gầy?", "o": ["猴子", "老虎", "熊猫"], "a": 0}
      ] },
    rd: { z: "动物园里有很多动物。熊猫很胖，它们在吃东西。熊猫旁边是猴子，猴子很瘦，跑得很快。我最喜欢猴子，看了它们，我就笑了。",
      p: "Dòngwùyuán li yǒu hěn duō dòngwù. Xióngmāo hěn pàng, tāmen zài chī dōngxi. Xióngmāo pángbiān shì hóuzi, hóuzi hěn shòu, pǎo de hěn kuài. Wǒ zuì xǐhuan hóuzi, kànle tāmen, wǒ jiù xiào le.",
      v: "Sở thú có rất nhiều con vật. Gấu trúc rất béo, chúng đang ăn. Cạnh gấu trúc là khỉ, khỉ rất gầy, chạy rất nhanh. Mình thích khỉ nhất, nhìn chúng là mình bật cười.",
      qs: [
        {"q": "熊猫旁边是什么动物？", "v": "Cạnh gấu trúc là con vật gì?", "o": ["老虎", "狗", "猴子"], "a": 2},
        {"q": "熊猫在做什么？", "v": "Gấu trúc đang làm gì?", "o": ["跑", "笑", "吃东西"], "a": 2}
      ] }
  },
  9: {  // 谁跑得快？
    dl: { lines: [
      {"r": "A", "z": "丁丁，你为什么迟到了？", "p": "Dīngding, nǐ wèi shénme chídào le?", "v": "Đinh Đinh, sao con đến muộn?"},
      {"r": "B", "z": "对不起，老师。我家很远。", "p": "Duìbuqǐ, lǎoshī. Wǒ jiā hěn yuǎn.", "v": "Con xin lỗi cô. Nhà con xa lắm."},
      {"r": "A", "z": "你怎么来学校？", "p": "Nǐ zěnme lái xuéxiào?", "v": "Con đến trường bằng gì?"},
      {"r": "B", "z": "我坐公共汽车来。今天车很慢。", "p": "Wǒ zuò gōnggòng qìchē lái. Jīntiān chē hěn màn.", "v": "Con đi xe buýt ạ. Hôm nay xe chạy chậm lắm."},
      {"r": "A", "z": "明天六点半起床吧。", "p": "Míngtiān liù diǎn bàn qǐchuáng ba.", "v": "Mai con dậy lúc sáu rưỡi nhé."},
      {"r": "B", "z": "好的，老师。", "p": "Hǎo de, lǎoshī.", "v": "Vâng ạ, thưa cô."}
    ],
      qs: [
        {"q": "丁丁为什么迟到了？", "v": "Vì sao Đinh Đinh đến muộn?", "o": ["他生病了", "他家很远", "他去买东西了"], "a": 1},
        {"q": "丁丁怎么来学校？", "v": "Đinh Đinh đến trường bằng gì?", "o": ["坐飞机", "坐爸爸的车", "坐公共汽车"], "a": 2}
      ] },
    rd: { z: "我家很近，我每天走去学校，十分钟就到了。明明家很远，他坐公共汽车去学校，要一个小时。大卫坐爸爸的车，车开得很快。今天大卫七点半就到了，他是第一个。",
      p: "Wǒ jiā hěn jìn, wǒ měi tiān zǒu qù xuéxiào, shí fēnzhōng jiù dào le. Míngming jiā hěn yuǎn, tā zuò gōnggòng qìchē qù xuéxiào, yào yí ge xiǎoshí. Dàwèi zuò bàba de chē, chē kāi de hěn kuài. Jīntiān Dàwèi qī diǎn bàn jiù dào le, tā shì dì-yī ge.",
      v: "Nhà mình gần, ngày nào mình cũng đi bộ đến trường, mười phút là tới. Nhà Minh Minh xa, bạn ấy đi xe buýt đến trường, mất một tiếng. David đi xe của bố, xe chạy rất nhanh. Hôm nay mới bảy rưỡi David đã đến, bạn ấy là người đầu tiên.",
      qs: [
        {"q": "明明怎么去学校？", "v": "Minh Minh đến trường bằng gì?", "o": ["坐公共汽车", "走去", "坐爸爸的车"], "a": 0},
        {"q": "今天谁第一个到学校？", "v": "Hôm nay ai đến trường đầu tiên?", "o": ["明明", "我", "大卫"], "a": 2}
      ] }
  },
  10: {  // 妈妈把糖给弟弟了。
    dl: { lines: [
      {"r": "A", "z": "明明，你的铅笔呢？", "p": "Míngming, nǐ de qiānbǐ ne?", "v": "Minh Minh, bút chì của bạn đâu?"},
      {"r": "B", "z": "我的铅笔丢了。", "p": "Wǒ de qiānbǐ diū le.", "v": "Bút chì của mình mất rồi."},
      {"r": "A", "z": "我把我的铅笔给你吧。", "p": "Wǒ bǎ wǒ de qiānbǐ gěi nǐ ba.", "v": "Mình đưa bút chì của mình cho bạn nhé."},
      {"r": "B", "z": "谢谢！这个问题太难了，你懂吗？", "p": "Xièxie! Zhège wèntí tài nán le, nǐ dǒng ma?", "v": "Cảm ơn! Câu hỏi này khó quá, bạn hiểu không?"},
      {"r": "A", "z": "我懂，我来帮助你。", "p": "Wǒ dǒng, wǒ lái bāngzhù nǐ.", "v": "Mình hiểu, để mình giúp bạn."}
    ],
      qs: [
        {"q": "明明的铅笔怎么了？", "v": "Bút chì của Minh Minh làm sao?", "o": ["坏了", "丢了", "在书包里"], "a": 1},
        {"q": "那个问题怎么样？", "v": "Câu hỏi đó thế nào?", "o": ["不难", "很有意思", "太难了"], "a": 2}
      ] },
    rd: { z: "妈妈买了很多苹果。她把大苹果给了弟弟，把小苹果给了我。每次弟弟都拿大的，我不高兴了。妈妈说：“下次大的给你。”",
      p: "Māma mǎile hěn duō píngguǒ. Tā bǎ dà píngguǒ gěile dìdi, bǎ xiǎo píngguǒ gěile wǒ. Měi cì dìdi dōu ná dà de, wǒ bù gāoxìng le. Māma shuō: “Xià cì dà de gěi nǐ.”",
      v: "Mẹ mua rất nhiều táo. Mẹ đưa quả to cho em trai, quả nhỏ cho mình. Lần nào em cũng lấy quả to, mình không vui. Mẹ nói: “Lần sau quả to cho con.”",
      qs: [
        {"q": "妈妈把大苹果给了谁？", "v": "Mẹ đưa quả táo to cho ai?", "o": ["我", "爸爸", "弟弟"], "a": 2},
        {"q": "妈妈说下次大的给谁？", "v": "Mẹ nói lần sau quả to cho ai?", "o": ["弟弟", "妈妈", "我"], "a": 2}
      ] }
  }
};
