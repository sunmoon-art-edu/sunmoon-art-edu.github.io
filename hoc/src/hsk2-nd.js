/* Nghe – nói – đọc cho HSK 2: hội thoại + bài đọc từng bài */
const ND = {
  0: {  // 九月去北京旅游最好
    dl: { lines: [
      { r: "A", z: "王方，我想去北京旅游，几月去最好？", p: "Wáng Fāng, wǒ xiǎng qù Běijīng lǚyóu, jǐ yuè qù zuì hǎo?", v: "Vương Phương, tôi muốn đi du lịch Bắc Kinh, tháng mấy đi là đẹp nhất?" },
      { r: "B", z: "我觉得九月最好，不冷也不热。", p: "Wǒ juéde jiǔ yuè zuì hǎo, bù lěng yě bú rè.", v: "Tôi thấy tháng 9 là đẹp nhất, không lạnh cũng không nóng." },
      { r: "A", z: "你喜欢运动吗？", p: "Nǐ xǐhuan yùndòng ma?", v: "Bạn có thích thể thao không?" },
      { r: "B", z: "喜欢，我最喜欢踢足球。", p: "Xǐhuan, wǒ zuì xǐhuan tī zúqiú.", v: "Thích chứ, tôi thích nhất là đá bóng." },
      { r: "A", z: "明天我们一起去踢足球吧！", p: "Míngtiān wǒmen yìqǐ qù tī zúqiú ba!", v: "Mai mình cùng đi đá bóng nhé!" },
      { r: "B", z: "好，我也要去！", p: "Hǎo, wǒ yě yào qù!", v: "Được, tôi cũng muốn đi!" } ],
      qs: [
        { q: "B觉得几月去北京最好？", v: "B thấy tháng mấy đi Bắc Kinh là đẹp nhất?", o: ["九月", "十月", "七月"], a: 0 },
        { q: "B最喜欢什么运动？", v: "B thích môn thể thao nào nhất?", o: ["跑步", "游泳", "踢足球"], a: 2 } ] },
    rd: { z: "小明很喜欢旅游。他觉得九月去北京旅游最好，因为那时候天气不冷也不热。他也喜欢运动，每个星期都和朋友一起踢足球。",
      p: "Xiǎomíng hěn xǐhuan lǚyóu. Tā juéde jiǔ yuè qù Běijīng lǚyóu zuì hǎo, yīnwèi nà shíhou tiānqì bù lěng yě bú rè. Tā yě xǐhuan yùndòng, měi ge xīngqī dōu hé péngyou yìqǐ tī zúqiú.",
      v: "Tiểu Minh rất thích du lịch. Cậu ấy thấy tháng 9 đi Bắc Kinh là đẹp nhất, vì lúc đó trời không lạnh cũng không nóng. Cậu ấy cũng thích thể thao, tuần nào cũng đá bóng cùng bạn bè.",
      qs: [
        { q: "小明为什么觉得九月去北京最好？", v: "Vì sao Tiểu Minh thấy tháng 9 đi Bắc Kinh là đẹp nhất?", o: ["九月不上班", "天气不冷也不热", "北京人很少"], a: 1 },
        { q: "小明每个星期和朋友一起做什么？", v: "Tuần nào Tiểu Minh cũng làm gì cùng bạn bè?", o: ["旅游", "跑步", "踢足球"], a: 2 } ] }
  },
  1: {  // 我每天六点起床
    dl: { lines: [
      { r: "A", z: "李月，你每天早上几点起床？", p: "Lǐ Yuè, nǐ měi tiān zǎoshang jǐ diǎn qǐchuáng?", v: "Lý Nguyệt, mỗi sáng bạn dậy lúc mấy giờ?" },
      { r: "B", z: "我每天六点起床，起床以后去跑步。", p: "Wǒ měi tiān liù diǎn qǐchuáng, qǐchuáng yǐhòu qù pǎobù.", v: "Ngày nào tôi cũng dậy lúc 6 giờ, dậy xong đi chạy bộ." },
      { r: "A", z: "你跑多长时间？", p: "Nǐ pǎo duō cháng shíjiān?", v: "Bạn chạy bao lâu?" },
      { r: "B", z: "跑一个小时。跑步对身体很好。", p: "Pǎo yí ge xiǎoshí. Pǎobù duì shēntǐ hěn hǎo.", v: "Chạy một tiếng. Chạy bộ rất tốt cho sức khỏe." },
      { r: "A", z: "我也想跑步，但是我早上起不来。", p: "Wǒ yě xiǎng pǎobù, dànshì wǒ zǎoshang qǐ bu lái.", v: "Tôi cũng muốn chạy bộ, nhưng buổi sáng tôi không dậy nổi." },
      { r: "B", z: "那你晚上跑吧！", p: "Nà nǐ wǎnshang pǎo ba!", v: "Vậy bạn chạy buổi tối đi!" } ],
      qs: [
        { q: "李月每天几点起床？", v: "Mỗi ngày Lý Nguyệt dậy lúc mấy giờ?", o: ["五点", "六点", "七点"], a: 1 },
        { q: "李月每天跑多长时间？", v: "Mỗi ngày Lý Nguyệt chạy bao lâu?", o: ["两个小时", "十分钟", "一个小时"], a: 2 } ] },
    rd: { z: "王方在一个公司上班。她每天早上七点起床，八点去上班，晚上六点回家。上个星期她生病了，在家休息了三天。现在她身体好了，每天晚上都去跑步。",
      p: "Wáng Fāng zài yí ge gōngsī shàngbān. Tā měi tiān zǎoshang qī diǎn qǐchuáng, bā diǎn qù shàngbān, wǎnshang liù diǎn huí jiā. Shàng ge xīngqī tā shēngbìng le, zài jiā xiūxi le sān tiān. Xiànzài tā shēntǐ hǎo le, měi tiān wǎnshang dōu qù pǎobù.",
      v: "Vương Phương làm việc ở một công ty. Mỗi sáng cô ấy dậy lúc 7 giờ, 8 giờ đi làm, 6 giờ tối về nhà. Tuần trước cô ấy bị ốm, nghỉ ở nhà ba ngày. Giờ cô ấy khỏe rồi, tối nào cũng đi chạy bộ.",
      qs: [
        { q: "王方每天早上几点起床？", v: "Mỗi sáng Vương Phương dậy lúc mấy giờ?", o: ["七点", "八点", "六点"], a: 0 },
        { q: "王方上个星期为什么在家休息？", v: "Vì sao tuần trước Vương Phương nghỉ ở nhà?", o: ["她去旅游了", "她生病了", "公司没有工作"], a: 1 } ] }
  },
  2: {  // 左边那个红色的是我的
    dl: { lines: [
      { r: "A", z: "服务员，我想看看那个手表。", p: "Fúwùyuán, wǒ xiǎng kànkan nàge shǒubiǎo.", v: "Bạn ơi, tôi muốn xem cái đồng hồ kia." },
      { r: "B", z: "左边那个红色的吗？", p: "Zuǒbian nàge hóngsè de ma?", v: "Cái màu đỏ bên trái à?" },
      { r: "A", z: "不是，右边那个黑色的。多少钱？", p: "Bú shì, yòubian nàge hēisè de. Duōshao qián?", v: "Không, cái màu đen bên phải. Bao nhiêu tiền?" },
      { r: "B", z: "这个一千二百块。", p: "Zhège yìqiān èrbǎi kuài.", v: "Cái này 1.200 tệ." },
      { r: "A", z: "太贵了！白色的呢？", p: "Tài guì le! Báisè de ne?", v: "Đắt quá! Còn cái màu trắng?" },
      { r: "B", z: "白色的八百块。", p: "Báisè de bābǎi kuài.", v: "Cái màu trắng 800 tệ." } ],
      qs: [
        { q: "A先想看什么颜色的手表？", v: "Lúc đầu A muốn xem đồng hồ màu gì?", o: ["红色的", "黑色的", "白色的"], a: 1 },
        { q: "白色的手表多少钱？", v: "Đồng hồ màu trắng bao nhiêu tiền?", o: ["八百块", "一千二百块", "八十块"], a: 0 } ] },
    rd: { z: "这是我的房间。桌子左边有一个电脑，右边有一个手机。我的手机是红色的，是爸爸去年送给我的。电脑旁边有一个白色的杯子。我最喜欢的颜色是红色。",
      p: "Zhè shì wǒ de fángjiān. Zhuōzi zuǒbian yǒu yí ge diànnǎo, yòubian yǒu yí ge shǒujī. Wǒ de shǒujī shì hóngsè de, shì bàba qùnián sòng gěi wǒ de. Diànnǎo pángbiān yǒu yí ge báisè de bēizi. Wǒ zuì xǐhuan de yánsè shì hóngsè.",
      v: "Đây là phòng của tôi. Bên trái bàn có một cái máy tính, bên phải có một cái điện thoại. Điện thoại của tôi màu đỏ, là bố tặng tôi năm ngoái. Cạnh máy tính có một cái cốc màu trắng. Màu tôi thích nhất là màu đỏ.",
      qs: [
        { q: "手机是什么颜色的？", v: "Điện thoại màu gì?", o: ["白色的", "红色的", "黑色的"], a: 1 },
        { q: "电脑旁边有什么？", v: "Cạnh máy tính có gì?", o: ["手机", "手表", "杯子"], a: 2 } ] }
  },
  3: {  // 这个工作是他帮我介绍的
    dl: { lines: [
      { r: "A", z: "您好！请问，您贵姓？", p: "Nín hǎo! Qǐngwèn, nín guì xìng?", v: "Chào bạn! Xin hỏi, bạn họ gì?" },
      { r: "B", z: "您好，我叫王方，是新来的。", p: "Nín hǎo, wǒ jiào Wáng Fāng, shì xīn lái de.", v: "Chào bạn, tôi tên là Vương Phương, tôi mới đến." },
      { r: "A", z: "你好，王方！这个工作是谁帮你介绍的？", p: "Nǐ hǎo, Wáng Fāng! Zhège gōngzuò shì shéi bāng nǐ jièshào de?", v: "Chào Vương Phương! Công việc này là ai giới thiệu giúp bạn vậy?" },
      { r: "B", z: "是我朋友大卫介绍的。你知道他吗？", p: "Shì wǒ péngyou Dàwèi jièshào de. Nǐ zhīdào tā ma?", v: "Là bạn tôi, David, giới thiệu. Bạn biết anh ấy không?" },
      { r: "A", z: "知道，他去年在我们公司工作。", p: "Zhīdào, tā qùnián zài wǒmen gōngsī gōngzuò.", v: "Biết chứ, năm ngoái anh ấy làm ở công ty mình." },
      { r: "B", z: "他帮助了我很多。", p: "Tā bāngzhù le wǒ hěn duō.", v: "Anh ấy giúp tôi rất nhiều." } ],
      qs: [
        { q: "王方的工作是谁介绍的？", v: "Công việc của Vương Phương là ai giới thiệu?", o: ["大卫", "李月", "小明"], a: 0 },
        { q: "大卫去年在哪儿工作？", v: "Năm ngoái David làm việc ở đâu?", o: ["学校", "医院", "这个公司"], a: 2 } ] },
    rd: { z: "小明去年来北京工作，这个工作是大卫帮他介绍的。今天是小明的生日，晚上大家一起去饭店给他过生日。小明很高兴，他说：“谢谢大家！”",
      p: "Xiǎomíng qùnián lái Běijīng gōngzuò, zhège gōngzuò shì Dàwèi bāng tā jièshào de. Jīntiān shì Xiǎomíng de shēngrì, wǎnshang dàjiā yìqǐ qù fàndiàn gěi tā guò shēngrì. Xiǎomíng hěn gāoxìng, tā shuō: “Xièxie dàjiā!”",
      v: "Năm ngoái Tiểu Minh đến Bắc Kinh làm việc, công việc này là David giới thiệu giúp. Hôm nay là sinh nhật Tiểu Minh, buổi tối mọi người cùng đến nhà hàng tổ chức sinh nhật cho cậu ấy. Tiểu Minh rất vui, nói: “Cảm ơn mọi người!”",
      qs: [
        { q: "小明是什么时候来北京工作的？", v: "Tiểu Minh đến Bắc Kinh làm việc khi nào?", o: ["今年", "去年", "上个月"], a: 1 },
        { q: "今天是谁的生日？", v: "Hôm nay là sinh nhật của ai?", o: ["大卫", "王方", "小明"], a: 2 } ] }
  },
  4: {  // 就买这件吧
    dl: { lines: [
      { r: "A", z: "你好，西瓜怎么卖？", p: "Nǐ hǎo, xīguā zěnme mài?", v: "Chào bạn, dưa hấu bán thế nào?" },
      { r: "B", z: "一个十五块。", p: "Yí ge shíwǔ kuài.", v: "15 tệ một quả." },
      { r: "A", z: "太贵了，便宜一点儿吧！", p: "Tài guì le, piányi yìdiǎnr ba!", v: "Đắt quá, bớt chút đi!" },
      { r: "B", z: "好，十二块，怎么样？", p: "Hǎo, shí'èr kuài, zěnmeyàng?", v: "Được, 12 tệ, thế nào?" },
      { r: "A", z: "好，我要两个。还要一些鸡蛋。", p: "Hǎo, wǒ yào liǎng ge. Hái yào yìxiē jīdàn.", v: "Được, tôi lấy hai quả. Lấy thêm ít trứng gà nữa." },
      { r: "B", z: "好的，鸡蛋在右边。", p: "Hǎo de, jīdàn zài yòubian.", v: "Vâng, trứng ở bên phải." } ],
      qs: [
        { q: "西瓜最后卖多少钱一个？", v: "Cuối cùng dưa hấu bán bao nhiêu tiền một quả?", o: ["十二块", "十五块", "二十块"], a: 0 },
        { q: "A买了几个西瓜？", v: "A mua mấy quả dưa hấu?", o: ["一个", "两个", "三个"], a: 1 } ] },
    rd: { z: "星期六上午，妈妈去商店买东西。她买了一些羊肉、十个鸡蛋和牛奶。她还想买一件衣服，可是那件衣服太贵了，她没有买。",
      p: "Xīngqīliù shàngwǔ, māma qù shāngdiàn mǎi dōngxi. Tā mǎi le yìxiē yángròu, shí ge jīdàn hé niúnǎi. Tā hái xiǎng mǎi yí jiàn yīfu, kěshì nà jiàn yīfu tài guì le, tā méiyǒu mǎi.",
      v: "Sáng thứ Bảy, mẹ đi cửa hàng mua đồ. Mẹ mua ít thịt dê, mười quả trứng gà và sữa. Mẹ còn muốn mua một cái áo, nhưng cái áo đó đắt quá, mẹ không mua.",
      qs: [
        { q: "妈妈买了什么？", v: "Mẹ đã mua gì?", o: ["衣服和西瓜", "羊肉、鸡蛋和牛奶", "西瓜和鸡蛋"], a: 1 },
        { q: "妈妈为什么没有买衣服？", v: "Vì sao mẹ không mua áo?", o: ["衣服太贵了", "她不喜欢", "颜色不好"], a: 0 } ] }
  },
  5: {  // 你怎么不吃了
    dl: { lines: [
      { r: "A", z: "你怎么不吃了？", p: "Nǐ zěnme bù chī le?", v: "Sao bạn không ăn nữa?" },
      { r: "B", z: "我身体不太好，不想吃。", p: "Wǒ shēntǐ bú tài hǎo, bù xiǎng chī.", v: "Tôi thấy người không khỏe lắm, không muốn ăn." },
      { r: "A", z: "你生病了吗？吃药了吗？", p: "Nǐ shēngbìng le ma? Chī yào le ma?", v: "Bạn ốm à? Uống thuốc chưa?" },
      { r: "B", z: "已经吃了。可能是太累了。", p: "Yǐjīng chī le. Kěnéng shì tài lèi le.", v: "Uống rồi. Chắc là mệt quá thôi." },
      { r: "A", z: "你最近太忙了，要多休息。", p: "Nǐ zuìjìn tài máng le, yào duō xiūxi.", v: "Dạo này bạn bận quá, phải nghỉ ngơi nhiều vào." },
      { r: "B", z: "好。服务员，请给我一杯水。", p: "Hǎo. Fúwùyuán, qǐng gěi wǒ yì bēi shuǐ.", v: "Ừ. Bạn ơi, cho tôi một cốc nước." } ],
      qs: [
        { q: "B为什么不吃了？", v: "Vì sao B không ăn nữa?", o: ["面条不好吃", "身体不太好", "已经吃完了"], a: 1 },
        { q: "B吃药了吗？", v: "B đã uống thuốc chưa?", o: ["还没吃", "不想吃", "已经吃了"], a: 2 } ] },
    rd: { z: "公司旁边有一个饭店，这儿的面条和鱼都很好吃。王方工作很忙，每天中午都来这儿吃饭。吃完饭，她还要喝一杯咖啡。这儿的服务员都认识她。",
      p: "Gōngsī pángbiān yǒu yí ge fàndiàn, zhèr de miàntiáo hé yú dōu hěn hǎochī. Wáng Fāng gōngzuò hěn máng, měi tiān zhōngwǔ dōu lái zhèr chī fàn. Chī wán fàn, tā hái yào hē yì bēi kāfēi. Zhèr de fúwùyuán dōu rènshi tā.",
      v: "Cạnh công ty có một nhà hàng, mì và cá ở đây đều rất ngon. Vương Phương làm việc rất bận, trưa nào cũng đến đây ăn cơm. Ăn xong, cô ấy còn uống một cốc cà phê. Nhân viên phục vụ ở đây đều quen cô ấy.",
      qs: [
        { q: "饭店在哪儿？", v: "Nhà hàng ở đâu?", o: ["公司旁边", "学校旁边", "医院旁边"], a: 0 },
        { q: "吃完饭王方要喝什么？", v: "Ăn xong Vương Phương uống gì?", o: ["茶", "牛奶", "咖啡"], a: 2 } ] }
  },
  6: {  // 你家离公司远吗
    dl: { lines: [
      { r: "A", z: "请问，火车站离这儿远吗？", p: "Qǐngwèn, huǒchēzhàn lí zhèr yuǎn ma?", v: "Xin hỏi, ga tàu cách đây có xa không?" },
      { r: "B", z: "不远，很近。", p: "Bù yuǎn, hěn jìn.", v: "Không xa, gần lắm." },
      { r: "A", z: "我能走路去吗？", p: "Wǒ néng zǒu lù qù ma?", v: "Tôi đi bộ đến được không?" },
      { r: "B", z: "能，从这儿往前走，十分钟就到了。", p: "Néng, cóng zhèr wǎng qián zǒu, shí fēnzhōng jiù dào le.", v: "Được, từ đây đi thẳng về phía trước, 10 phút là tới." },
      { r: "A", z: "机场呢？机场远吗？", p: "Jīchǎng ne? Jīchǎng yuǎn ma?", v: "Còn sân bay? Sân bay có xa không?" },
      { r: "B", z: "机场很远，你坐公共汽车去吧。", p: "Jīchǎng hěn yuǎn, nǐ zuò gōnggòng qìchē qù ba.", v: "Sân bay xa lắm, bạn đi xe buýt nhé." } ],
      qs: [
        { q: "走路到火车站要多长时间？", v: "Đi bộ đến ga tàu mất bao lâu?", o: ["五分钟", "十分钟", "一个小时"], a: 1 },
        { q: "B说去机场坐什么？", v: "B bảo đi sân bay bằng gì?", o: ["公共汽车", "出租车", "飞机"], a: 0 } ] },
    rd: { z: "我住的宾馆离火车站很近，走路五分钟就到了。但是宾馆离机场很远，坐出租车要一个多小时。明天我要坐飞机回家，我想早上六点就从宾馆走。",
      p: "Wǒ zhù de bīnguǎn lí huǒchēzhàn hěn jìn, zǒu lù wǔ fēnzhōng jiù dào le. Dànshì bīnguǎn lí jīchǎng hěn yuǎn, zuò chūzūchē yào yí ge duō xiǎoshí. Míngtiān wǒ yào zuò fēijī huí jiā, wǒ xiǎng zǎoshang liù diǎn jiù cóng bīnguǎn zǒu.",
      v: "Khách sạn tôi ở rất gần ga tàu, đi bộ 5 phút là tới. Nhưng khách sạn cách sân bay rất xa, đi taxi mất hơn một tiếng. Mai tôi đi máy bay về nhà, tôi định 6 giờ sáng đã rời khách sạn.",
      qs: [
        { q: "宾馆离哪儿很近？", v: "Khách sạn gần chỗ nào?", o: ["机场", "火车站", "公司"], a: 1 },
        { q: "从宾馆坐出租车到机场要多长时间？", v: "Từ khách sạn đi taxi đến sân bay mất bao lâu?", o: ["五分钟", "十分钟", "一个多小时"], a: 2 } ] }
  },
  7: {  // 让我想想再告诉你
    dl: { lines: [
      { r: "A", z: "大卫，星期六我们一起去看电影，好吗？", p: "Dàwèi, xīngqīliù wǒmen yìqǐ qù kàn diànyǐng, hǎo ma?", v: "David, thứ Bảy mình cùng đi xem phim nhé?" },
      { r: "B", z: "让我想想，明天再告诉你。", p: "Ràng wǒ xiǎngxiang, míngtiān zài gàosu nǐ.", v: "Để tôi nghĩ đã, mai tôi báo bạn." },
      { r: "A", z: "好，我等你的电话。", p: "Hǎo, wǒ děng nǐ de diànhuà.", v: "Được, tôi chờ điện thoại của bạn." },
      { r: "B", z: "喂，王方，星期六我能去！", p: "Wèi, Wáng Fāng, xīngqīliù wǒ néng qù!", v: "A lô, Vương Phương, thứ Bảy tôi đi được!" },
      { r: "A", z: "太好了！我去买票。", p: "Tài hǎo le! Wǒ qù mǎi piào.", v: "Tuyệt quá! Tôi đi mua vé." },
      { r: "B", z: "好，我在电影院前面等你。", p: "Hǎo, wǒ zài diànyǐngyuàn qiánmian děng nǐ.", v: "Được, tôi đợi bạn trước cửa rạp chiếu phim." } ],
      qs: [
        { q: "他们星期六想去做什么？", v: "Thứ Bảy họ định đi làm gì?", o: ["去旅游", "看电影", "找朋友"], a: 1 },
        { q: "大卫在哪儿等王方？", v: "David đợi Vương Phương ở đâu?", o: ["电影院前面", "火车站", "王方家"], a: 0 } ] },
    rd: { z: "小明想买明天去北京的火车票，但是已经没有票了。他的朋友告诉他：“你等一下，我帮你找找。”下午，朋友帮他买到了票，小明非常高兴。",
      p: "Xiǎomíng xiǎng mǎi míngtiān qù Běijīng de huǒchēpiào, dànshì yǐjīng méiyǒu piào le. Tā de péngyou gàosu tā: “Nǐ děng yíxià, wǒ bāng nǐ zhǎozhao.” Xiàwǔ, péngyou bāng tā mǎi dào le piào, Xiǎomíng fēicháng gāoxìng.",
      v: "Tiểu Minh muốn mua vé tàu đi Bắc Kinh ngày mai, nhưng đã hết vé rồi. Bạn cậu ấy nói: “Bạn đợi chút, tôi tìm giúp bạn.” Buổi chiều, bạn ấy đã mua được vé giúp, Tiểu Minh vô cùng vui.",
      qs: [
        { q: "小明想去哪儿？", v: "Tiểu Minh muốn đi đâu?", o: ["机场", "朋友家", "北京"], a: 2 },
        { q: "谁帮小明买到了票？", v: "Ai đã mua được vé giúp Tiểu Minh?", o: ["小明", "他的朋友", "他妈妈"], a: 1 } ] }
  },
  8: {  // 题太多，我没做完
    dl: { lines: [
      { r: "A", z: "今天的考试怎么样？", p: "Jīntiān de kǎoshì zěnmeyàng?", v: "Bài thi hôm nay thế nào?" },
      { r: "B", z: "题太多了，我没做完。", p: "Tí tài duō le, wǒ méi zuò wán.", v: "Nhiều câu quá, tôi làm chưa xong." },
      { r: "A", z: "你有不懂的题吗？", p: "Nǐ yǒu bù dǒng de tí ma?", v: "Có câu nào bạn không hiểu không?" },
      { r: "B", z: "有一个题我没看懂意思，可能做错了。", p: "Yǒu yí ge tí wǒ méi kàn dǒng yìsi, kěnéng zuò cuò le.", v: "Có một câu tôi đọc không hiểu ý, chắc làm sai rồi." },
      { r: "A", z: "下午上课的时候问问老师吧。", p: "Xiàwǔ shàngkè de shíhou wènwen lǎoshī ba.", v: "Chiều nay lúc lên lớp hỏi thầy cô xem." },
      { r: "B", z: "好，下午两点教室见！", p: "Hǎo, xiàwǔ liǎng diǎn jiàoshì jiàn!", v: "Được, 2 giờ chiều gặp ở lớp nhé!" } ],
      qs: [
        { q: "B做完题了吗？", v: "B đã làm xong bài chưa?", o: ["做完了", "没做完", "没开始做"], a: 1 },
        { q: "B什么时候去问老师？", v: "Khi nào B đi hỏi thầy cô?", o: ["下午上课的时候", "明天上午", "考试的时候"], a: 0 } ] },
    rd: { z: "今天上午九点，我们在教室开始考试。考试的时候，大卫的铅笔找不到了，李月帮他找到了。考试的题不太多，大卫都做完了，也都做对了。他非常高兴。",
      p: "Jīntiān shàngwǔ jiǔ diǎn, wǒmen zài jiàoshì kāishǐ kǎoshì. Kǎoshì de shíhou, Dàwèi de qiānbǐ zhǎo bu dào le, Lǐ Yuè bāng tā zhǎo dào le. Kǎoshì de tí bú tài duō, Dàwèi dōu zuò wán le, yě dōu zuò duì le. Tā fēicháng gāoxìng.",
      v: "9 giờ sáng nay, chúng tôi bắt đầu thi ở lớp. Lúc thi, David không tìm thấy bút chì, Lý Nguyệt đã tìm giúp. Đề thi không nhiều câu lắm, David làm xong hết, lại đúng hết. Anh ấy vô cùng vui.",
      qs: [
        { q: "考试几点开始？", v: "Mấy giờ bắt đầu thi?", o: ["八点", "九点", "十点"], a: 1 },
        { q: "大卫考得怎么样？", v: "David thi thế nào?", o: ["没做完", "做错了很多", "都做完了，也都做对了"], a: 2 } ] }
  },
  9: {  // 别找了，手机在桌子上呢
    dl: { lines: [
      { r: "A", z: "妈妈，你看见我的手机了吗？", p: "Māma, nǐ kànjiàn wǒ de shǒujī le ma?", v: "Mẹ ơi, mẹ có thấy điện thoại của con không?" },
      { r: "B", z: "别找了，手机在桌子上呢。", p: "Bié zhǎo le, shǒujī zài zhuōzi shang ne.", v: "Đừng tìm nữa, điện thoại ở trên bàn kìa." },
      { r: "A", z: "谢谢妈妈！我出去玩一下。", p: "Xièxie māma! Wǒ chūqu wán yíxià.", v: "Con cảm ơn mẹ! Con ra ngoài chơi một lát." },
      { r: "B", z: "别出去了，外面在下雨呢。", p: "Bié chūqu le, wàimian zài xià yǔ ne.", v: "Đừng ra ngoài nữa, ngoài trời đang mưa đấy." },
      { r: "A", z: "那我在房间里看书吧。", p: "Nà wǒ zài fángjiān li kàn shū ba.", v: "Vậy con ở trong phòng đọc sách vậy." },
      { r: "B", z: "好，先去洗手，再来吃饭。", p: "Hǎo, xiān qù xǐ shǒu, zài lái chī fàn.", v: "Ừ, đi rửa tay trước đã, rồi ra ăn cơm." } ],
      qs: [
        { q: "手机在哪儿？", v: "Điện thoại ở đâu?", o: ["房间里", "外面", "桌子上"], a: 2 },
        { q: "妈妈为什么不让他出去？", v: "Vì sao mẹ không cho bạn ấy ra ngoài?", o: ["他要洗衣服", "外面在下雨", "他要看报纸"], a: 1 } ] },
    rd: { z: "星期天上午，爸爸在房间里看报纸，妈妈在洗衣服。我想出去玩，妈妈问我：“你的书看完了吗？”我说：“还没有。”妈妈说：“那你先别出去，看完再玩。”",
      p: "Xīngqītiān shàngwǔ, bàba zài fángjiān li kàn bàozhǐ, māma zài xǐ yīfu. Wǒ xiǎng chūqu wán, māma wèn wǒ: “Nǐ de shū kàn wán le ma?” Wǒ shuō: “Hái méiyǒu.” Māma shuō: “Nà nǐ xiān bié chūqu, kàn wán zài wán.”",
      v: "Sáng Chủ nhật, bố đọc báo trong phòng, mẹ đang giặt quần áo. Tôi muốn ra ngoài chơi, mẹ hỏi tôi: “Con đọc xong sách chưa?” Tôi nói: “Chưa ạ.” Mẹ nói: “Vậy con đừng ra ngoài vội, đọc xong rồi hãy chơi.”",
      qs: [
        { q: "爸爸在做什么？", v: "Bố đang làm gì?", o: ["看报纸", "洗衣服", "看书"], a: 0 },
        { q: "妈妈让我什么时候出去玩？", v: "Mẹ cho tôi ra ngoài chơi khi nào?", o: ["现在", "看完书以后", "下午"], a: 1 } ] }
  },
  10: {  // 他比我大三岁
    dl: { lines: [
      { r: "A", z: "这是你哥哥吗？他真高！", p: "Zhè shì nǐ gēge ma? Tā zhēn gāo!", v: "Đây là anh trai bạn à? Anh ấy cao thật!" },
      { r: "B", z: "是，他比我大三岁，也比我高。", p: "Shì, tā bǐ wǒ dà sān suì, yě bǐ wǒ gāo.", v: "Đúng, anh ấy hơn tôi ba tuổi, cũng cao hơn tôi." },
      { r: "A", z: "你家有几个孩子？", p: "Nǐ jiā yǒu jǐ ge háizi?", v: "Nhà bạn có mấy anh chị em?" },
      { r: "B", z: "三个，我还有一个妹妹。", p: "Sān ge, wǒ hái yǒu yí ge mèimei.", v: "Ba, tôi còn có một em gái." },
      { r: "A", z: "你妹妹多大了？", p: "Nǐ mèimei duō dà le?", v: "Em gái bạn bao nhiêu tuổi rồi?" },
      { r: "B", z: "她十岁，眼睛很大，非常漂亮。", p: "Tā shí suì, yǎnjing hěn dà, fēicháng piàoliang.", v: "Em ấy mười tuổi, mắt to, rất xinh." } ],
      qs: [
        { q: "哥哥比B大几岁？", v: "Anh trai hơn B mấy tuổi?", o: ["两岁", "三岁", "十岁"], a: 1 },
        { q: "B家有几个孩子？", v: "Nhà B có mấy người con?", o: ["两个", "四个", "三个"], a: 2 } ] },
    rd: { z: "我姐姐今年二十五岁，比我大五岁。她很高，眼睛很大。她有两个孩子，一个男孩子，一个女孩子。男孩子比女孩子大两岁。",
      p: "Wǒ jiějie jīnnián èrshíwǔ suì, bǐ wǒ dà wǔ suì. Tā hěn gāo, yǎnjing hěn dà. Tā yǒu liǎng ge háizi, yí ge nán háizi, yí ge nǚ háizi. Nán háizi bǐ nǚ háizi dà liǎng suì.",
      v: "Chị gái tôi năm nay 25 tuổi, hơn tôi 5 tuổi. Chị ấy cao, mắt to. Chị ấy có hai con, một bé trai và một bé gái. Bé trai hơn bé gái hai tuổi.",
      qs: [
        { q: "姐姐比我大几岁？", v: "Chị gái hơn tôi mấy tuổi?", o: ["五岁", "两岁", "三岁"], a: 0 },
        { q: "姐姐有几个孩子？", v: "Chị gái có mấy con?", o: ["一个", "两个", "三个"], a: 1 } ] }
  },
  11: {  // 你穿得太少了
    dl: { lines: [
      { r: "A", z: "今天很冷，你穿得太少了！", p: "Jīntiān hěn lěng, nǐ chuān de tài shǎo le!", v: "Hôm nay lạnh lắm, bạn mặc ít quá!" },
      { r: "B", z: "没关系，我不冷。我要去打篮球。", p: "Méi guānxi, wǒ bù lěng. Wǒ yào qù dǎ lánqiú.", v: "Không sao, tôi không lạnh. Tôi đi chơi bóng rổ đây." },
      { r: "A", z: "你篮球打得怎么样？", p: "Nǐ lánqiú dǎ de zěnmeyàng?", v: "Bạn chơi bóng rổ thế nào?" },
      { r: "B", z: "打得还可以，我跑得非常快！", p: "Dǎ de hái kěyǐ, wǒ pǎo de fēicháng kuài!", v: "Cũng tạm được, tôi chạy rất nhanh!" },
      { r: "A", z: "你会游泳吗？", p: "Nǐ huì yóuyǒng ma?", v: "Bạn biết bơi không?" },
      { r: "B", z: "会，但是游得很慢。", p: "Huì, dànshì yóu de hěn màn.", v: "Biết, nhưng bơi chậm lắm." } ],
      qs: [
        { q: "B要去做什么？", v: "B định đi làm gì?", o: ["游泳", "打篮球", "跳舞"], a: 1 },
        { q: "B游泳游得怎么样？", v: "B bơi thế nào?", o: ["很快", "很好", "很慢"], a: 2 } ] },
    rd: { z: "王方非常喜欢唱歌和跳舞。她唱歌唱得很好听，上个月学校的唱歌考试，她是第一名。她跳舞也跳得很好，同学们都很喜欢她。",
      p: "Wáng Fāng fēicháng xǐhuan chànggē hé tiàowǔ. Tā chànggē chàng de hěn hǎotīng, shàng ge yuè xuéxiào de chànggē kǎoshì, tā shì dì-yī míng. Tā tiàowǔ yě tiào de hěn hǎo, tóngxuémen dōu hěn xǐhuan tā.",
      v: "Vương Phương rất thích hát và nhảy. Cô ấy hát rất hay, tháng trước trong bài thi hát của trường, cô ấy đứng thứ nhất. Cô ấy nhảy cũng rất giỏi, các bạn cùng lớp đều rất quý cô ấy.",
      qs: [
        { q: "王方喜欢做什么？", v: "Vương Phương thích làm gì?", o: ["唱歌和跳舞", "游泳和跑步", "打篮球"], a: 0 },
        { q: "唱歌考试王方是第几名？", v: "Trong bài thi hát, Vương Phương đứng thứ mấy?", o: ["第二名", "第一名", "第三名"], a: 1 } ] }
  },
  12: {  // 门开着呢
    dl: { lines: [
      { r: "A", z: "你好！门开着，我就进来了。", p: "Nǐ hǎo! Mén kāizhe, wǒ jiù jìnlai le.", v: "Chào bạn! Cửa đang mở nên tôi vào luôn." },
      { r: "B", z: "请进！请坐。", p: "Qǐng jìn! Qǐng zuò.", v: "Mời vào! Mời ngồi." },
      { r: "A", z: "你妻子在家吗？", p: "Nǐ qīzi zài jiā ma?", v: "Vợ bạn có nhà không?" },
      { r: "B", z: "在，她正在洗衣服呢。", p: "Zài, tā zhèngzài xǐ yīfu ne.", v: "Có, cô ấy đang giặt quần áo." },
      { r: "A", z: "你们家真漂亮！", p: "Nǐmen jiā zhēn piàoliang!", v: "Nhà các bạn đẹp thật!" },
      { r: "B", z: "虽然不大，但是我们很喜欢。", p: "Suīrán bú dà, dànshì wǒmen hěn xǐhuan.", v: "Tuy không to, nhưng chúng tôi rất thích." } ],
      qs: [
        { q: "B的妻子在做什么？", v: "Vợ của B đang làm gì?", o: ["睡觉", "做饭", "洗衣服"], a: 2 },
        { q: "B觉得他们的家怎么样？", v: "B thấy nhà của họ thế nào?", o: ["很大", "不大，但是很喜欢", "不漂亮"], a: 1 } ] },
    rd: { z: "李月的丈夫是医生。他虽然工作很忙，但是每天都回家吃晚饭。吃饭的时候，大家笑着说话，非常高兴。李月觉得她的丈夫真好。",
      p: "Lǐ Yuè de zhàngfu shì yīshēng. Tā suīrán gōngzuò hěn máng, dànshì měi tiān dōu huí jiā chī wǎnfàn. Chī fàn de shíhou, dàjiā xiàozhe shuōhuà, fēicháng gāoxìng. Lǐ Yuè juéde tā de zhàngfu zhēn hǎo.",
      v: "Chồng của Lý Nguyệt là bác sĩ. Tuy công việc rất bận, nhưng ngày nào anh ấy cũng về nhà ăn tối. Lúc ăn cơm, cả nhà vừa cười vừa nói chuyện, rất vui. Lý Nguyệt thấy chồng mình thật tốt.",
      qs: [
        { q: "李月的丈夫做什么工作？", v: "Chồng Lý Nguyệt làm nghề gì?", o: ["老师", "医生", "服务员"], a: 1 },
        { q: "吃饭的时候大家怎么样？", v: "Lúc ăn cơm mọi người thế nào?", o: ["笑着说话", "都不说话", "看着电视"], a: 0 } ] }
  },
  13: {  // 你看过那个电影吗
    dl: { lines: [
      { r: "A", z: "你看过这个电影吗？", p: "Nǐ kànguo zhège diànyǐng ma?", v: "Bạn xem phim này chưa?" },
      { r: "B", z: "看过，我看过两次。", p: "Kànguo, wǒ kànguo liǎng cì.", v: "Xem rồi, tôi xem hai lần rồi." },
      { r: "A", z: "我还没看过。因为太忙了，所以没时间。", p: "Wǒ hái méi kànguo. Yīnwèi tài máng le, suǒyǐ méi shíjiān.", v: "Tôi chưa xem. Vì bận quá nên không có thời gian." },
      { r: "B", z: "这个电影非常好看，你可以星期日去看。", p: "Zhège diànyǐng fēicháng hǎokàn, nǐ kěyǐ xīngqīrì qù kàn.", v: "Phim này hay lắm, bạn có thể đi xem vào Chủ nhật." },
      { r: "A", z: "你还想再看一次吗？", p: "Nǐ hái xiǎng zài kàn yí cì ma?", v: "Bạn còn muốn xem thêm lần nữa không?" },
      { r: "B", z: "想！我们一起去吧。", p: "Xiǎng! Wǒmen yìqǐ qù ba.", v: "Muốn chứ! Mình cùng đi nhé." } ],
      qs: [
        { q: "B看过几次这个电影？", v: "B đã xem phim này mấy lần?", o: ["一次", "两次", "三次"], a: 1 },
        { q: "A为什么还没看？", v: "Vì sao A vẫn chưa xem?", o: ["太忙了", "不喜欢", "没有票"], a: 0 } ] },
    rd: { z: "我家有一只小狗，它今年三岁了。它非常可爱，也很喜欢跑步。因为我每天要上班，所以只能晚上和它玩。",
      p: "Wǒ jiā yǒu yì zhī xiǎogǒu, tā jīnnián sān suì le. Tā fēicháng kě'ài, yě hěn xǐhuan pǎobù. Yīnwèi wǒ měi tiān yào shàngbān, suǒyǐ zhǐ néng wǎnshang hé tā wán.",
      v: "Nhà tôi có một chú chó con, năm nay nó ba tuổi rồi. Nó rất đáng yêu, cũng rất thích chạy nhảy. Vì ngày nào tôi cũng phải đi làm, nên chỉ có thể chơi với nó vào buổi tối.",
      qs: [
        { q: "小狗多大了？", v: "Chó con bao nhiêu tuổi?", o: ["两岁", "一岁", "三岁"], a: 2 },
        { q: "我什么时候和小狗玩？", v: "Tôi chơi với chó con khi nào?", o: ["早上", "晚上", "中午"], a: 1 } ] }
  },
  14: {  // 新年就要到了
    dl: { lines: [
      { r: "A", z: "新年就要到了，你准备好了吗？", p: "Xīnnián jiù yào dào le, nǐ zhǔnbèi hǎo le ma?", v: "Sắp đến năm mới rồi, bạn chuẩn bị xong chưa?" },
      { r: "B", z: "准备好了。我给妈妈买了一件新衣服。", p: "Zhǔnbèi hǎo le. Wǒ gěi māma mǎi le yí jiàn xīn yīfu.", v: "Xong rồi. Tôi mua cho mẹ một bộ quần áo mới." },
      { r: "A", z: "这是我送给你的，新年快乐！", p: "Zhè shì wǒ sòng gěi nǐ de, xīnnián kuàilè!", v: "Đây là quà tôi tặng bạn, chúc mừng năm mới!" },
      { r: "B", z: "谢谢！新年快乐！", p: "Xièxie! Xīnnián kuàilè!", v: "Cảm ơn bạn! Chúc mừng năm mới!" },
      { r: "A", z: "明天天气怎么样？", p: "Míngtiān tiānqì zěnmeyàng?", v: "Mai thời tiết thế nào?" },
      { r: "B", z: "明天是阴天，可能会下雪。", p: "Míngtiān shì yīntiān, kěnéng huì xià xuě.", v: "Mai trời âm u, có thể sẽ có tuyết." } ],
      qs: [
        { q: "B给妈妈买了什么？", v: "B mua gì cho mẹ?", o: ["一件新衣服", "一个手机", "一些水果"], a: 0 },
        { q: "明天天气怎么样？", v: "Ngày mai thời tiết thế nào?", o: ["晴天", "阴天，可能下雪", "下雨"], a: 1 } ] },
    rd: { z: "新年就要到了，大家都在准备。小明给爸爸送了一个手表，给妈妈送了一件衣服。今天是晴天，但是天气很冷。小明希望新年的时候下雪。",
      p: "Xīnnián jiù yào dào le, dàjiā dōu zài zhǔnbèi. Xiǎomíng gěi bàba sòng le yí ge shǒubiǎo, gěi māma sòng le yí jiàn yīfu. Jīntiān shì qíngtiān, dànshì tiānqì hěn lěng. Xiǎomíng xīwàng xīnnián de shíhou xià xuě.",
      v: "Sắp đến năm mới, mọi người đều đang chuẩn bị. Tiểu Minh tặng bố một chiếc đồng hồ, tặng mẹ một bộ quần áo. Hôm nay trời nắng, nhưng rất lạnh. Tiểu Minh mong đến Tết sẽ có tuyết rơi.",
      qs: [
        { q: "小明送给爸爸什么？", v: "Tiểu Minh tặng bố cái gì?", o: ["衣服", "手机", "手表"], a: 2 },
        { q: "小明希望新年的时候怎么样？", v: "Tiểu Minh mong đến năm mới thời tiết thế nào?", o: ["是晴天", "下雪", "不冷"], a: 1 } ] }
  }
};
