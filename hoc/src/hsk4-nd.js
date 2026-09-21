/* Nghe – nói – đọc cho HSK 4: hội thoại + bài đọc từng bài */
const ND = {
  0: {
    dl: { lines: [
      {"r": "A", "z": "听说你和男朋友快要结婚了？真羡慕你们！", "p": "Tīngshuō nǐ hé nánpéngyou kuài yào jiéhūn le? Zhēn xiànmù nǐmen!", "v": "Nghe nói bạn và bạn trai sắp kết hôn rồi? Ngưỡng mộ hai bạn quá!"},
      {"r": "B", "z": "谢谢！我们俩认识三年了，互相都很熟悉。", "p": "Xièxie! Wǒmen liǎ rènshi sān nián le, hùxiāng dōu hěn shúxī.", "v": "Cảm ơn! Hai chúng tôi quen nhau ba năm rồi, đều rất hiểu nhau."},
      {"r": "A", "z": "他哪一点最吸引你？", "p": "Tā nǎ yì diǎn zuì xīyǐn nǐ?", "v": "Điểm nào ở anh ấy thu hút bạn nhất?"},
      {"r": "B", "z": "他很幽默，常常开玩笑，脾气也好。即使加班到很晚，他也会给我打电话。", "p": "Tā hěn yōumò, chángcháng kāi wánxiào, píqi yě hǎo. Jíshǐ jiā bān dào hěn wǎn, tā yě huì gěi wǒ dǎ diànhuà.", "v": "Anh ấy rất hài hước, hay đùa, tính tình cũng tốt. Dù có tăng ca đến khuya, anh ấy vẫn gọi điện cho tôi."},
      {"r": "A", "z": "他有什么缺点吗？", "p": "Tā yǒu shénme quēdiǎn ma?", "v": "Anh ấy có khuyết điểm gì không?"},
      {"r": "B", "z": "当然有，他从来不浪漫，不过我觉得他最适合我。", "p": "Dāngrán yǒu, tā cónglái bú làngmàn, búguò wǒ juéde tā zuì shìhé wǒ.", "v": "Tất nhiên là có, anh ấy chẳng bao giờ lãng mạn, nhưng tôi thấy anh ấy hợp với tôi nhất."},
    ],
      qs: [
        {"q": "他们俩认识多久了？", "v": "Hai người họ quen nhau bao lâu rồi?", "o": ["三年", "一年", "五年"], "a": 0},
        {"q": "B觉得男朋友有什么缺点？", "v": "B thấy bạn trai có khuyết điểm gì?", "o": ["不浪漫", "不幽默", "脾气不好"], "a": 0},
      ] },
    rd: { z: "王方和大卫的爱情很简单。刚认识的时候，王方对大卫的印象并不深。后来她发现，大卫虽然不浪漫，但是很关心她。两个人有很多共同的爱好，性格也很适合。结婚以后，他们的生活很幸福。王方说：“爱情不仅需要浪漫，更需要互相理解。”",
      p: "Wáng Fāng hé Dàwèi de àiqíng hěn jiǎndān. Gāng rènshi de shíhou, Wáng Fāng duì Dàwèi de yìnxiàng bìng bù shēn. Hòulái tā fāxiàn, Dàwèi suīrán bú làngmàn, dànshì hěn guānxīn tā. Liǎng ge rén yǒu hěn duō gòngtóng de àihào, xìnggé yě hěn shìhé. Jiéhūn yǐhòu, tāmen de shēnghuó hěn xìngfú. Wáng Fāng shuō: \"Àiqíng bùjǐn xūyào làngmàn, gèng xūyào hùxiāng lǐjiě.\"",
      v: "Tình yêu của Vương Phương và David rất giản dị. Lúc mới quen, Vương Phương không có ấn tượng sâu sắc với David. Về sau cô ấy phát hiện, David tuy không lãng mạn nhưng rất quan tâm cô. Hai người có nhiều sở thích chung, tính cách cũng rất hợp. Sau khi kết hôn, cuộc sống của họ rất hạnh phúc. Vương Phương nói: “Tình yêu không chỉ cần lãng mạn, mà càng cần hiểu nhau.”",
      qs: [
        {"q": "刚认识的时候，王方对大卫的印象怎么样？", "v": "Lúc mới quen, Vương Phương có ấn tượng thế nào về David?", "o": ["很不好", "不深", "很深"], "a": 1},
        {"q": "王方认为爱情更需要什么？", "v": "Vương Phương cho rằng tình yêu càng cần điều gì?", "o": ["钱", "互相理解", "浪漫"], "a": 1},
      ] }
  },
  1: {
    dl: { lines: [
      {"r": "A", "z": "抱歉，打扰一下，你能跟我谈谈吗？", "p": "Bàoqiàn, dǎrǎo yíxià, nǐ néng gēn wǒ tántan ma?", "v": "Xin lỗi, làm phiền một chút, bạn nói chuyện với tôi được không?"},
      {"r": "B", "z": "当然可以。什么事？", "p": "Dāngrán kěyǐ. Shénme shì?", "v": "Tất nhiên rồi. Chuyện gì vậy?"},
      {"r": "A", "z": "昨天聚会的时候，小明以为我故意不跟他打招呼，很不高兴。", "p": "Zuótiān jùhuì de shíhou, Xiǎomíng yǐwéi wǒ gùyì bù gēn tā dǎ zhāohu, hěn bù gāoxìng.", "v": "Hôm qua lúc tụ tập, Tiểu Minh tưởng tôi cố ý không chào cậu ấy, nên rất không vui."},
      {"r": "B", "z": "这可能是个误会。你们好好交流一下就好了。", "p": "Zhè kěnéng shì ge wùhuì. Nǐmen hǎohāor jiāoliú yíxià jiù hǎo le.", "v": "Đây có thể là hiểu lầm thôi. Hai bạn nói chuyện đàng hoàng với nhau là ổn."},
      {"r": "A", "z": "我想给他打电话道歉，但是怕他拒绝。", "p": "Wǒ xiǎng gěi tā dǎ diànhuà dào qiàn, dànshì pà tā jùjué.", "v": "Tôi muốn gọi điện xin lỗi cậu ấy, nhưng sợ cậu ấy từ chối."},
      {"r": "B", "z": "真正的朋友会互相理解，他一定会原谅你的。", "p": "Zhēnzhèng de péngyou huì hùxiāng lǐjiě, tā yídìng huì yuánliàng nǐ de.", "v": "Bạn thật sự sẽ hiểu cho nhau, cậu ấy nhất định sẽ tha thứ cho bạn."},
    ],
      qs: [
        {"q": "小明为什么不高兴？", "v": "Vì sao Tiểu Minh không vui?", "o": ["以为A故意不打招呼", "A没去聚会", "A骗了他"], "a": 0},
        {"q": "B认为小明会怎么做？", "v": "B cho rằng Tiểu Minh sẽ làm gì?", "o": ["不再联系A", "原谅A", "拒绝A"], "a": 1},
      ] },
    rd: { z: "李月和王方是大学同学，她们的友谊已经有十年了。虽然现在距离很远，但是她们经常联系。遇到问题的时候，她们总是互相商量，互相支持。李月说：“真正的朋友要诚实地说出自己的看法，也要尊重朋友的选择。”回忆起大学生活，她们都觉得很幸福。",
      p: "Lǐ Yuè hé Wáng Fāng shì dàxué tóngxué, tāmen de yǒuyì yǐjīng yǒu shí nián le. Suīrán xiànzài jùlí hěn yuǎn, dànshì tāmen jīngcháng liánxì. Yùdào wèntí de shíhou, tāmen zǒngshì hùxiāng shāngliang, hùxiāng zhīchí. Lǐ Yuè shuō: \"Zhēnzhèng de péngyou yào chéngshí de shuōchū zìjǐ de kànfǎ, yě yào zūnzhòng péngyou de xuǎnzé.\" Huíyì qǐ dàxué shēnghuó, tāmen dōu juéde hěn xìngfú.",
      v: "Lý Nguyệt và Vương Phương là bạn học đại học, tình bạn của họ đã được mười năm. Tuy bây giờ ở xa nhau, nhưng họ thường xuyên liên lạc. Khi gặp chuyện, họ luôn bàn bạc với nhau, ủng hộ nhau. Lý Nguyệt nói: “Bạn thật sự phải thành thật nói ra quan điểm của mình, cũng phải tôn trọng lựa chọn của bạn.” Nhớ lại thời đại học, họ đều thấy rất hạnh phúc.",
      qs: [
        {"q": "她们现在住得近吗？", "v": "Bây giờ họ sống gần nhau không?", "o": ["住在一起", "不近，距离很远", "很近"], "a": 1},
        {"q": "遇到问题的时候她们怎么做？", "v": "Khi gặp chuyện họ làm thế nào?", "o": ["互相商量", "不联系", "自己解决"], "a": 0},
      ] }
  },
  2: {
    dl: { lines: [
      {"r": "A", "z": "听说你去应聘了？顺利吗？", "p": "Tīngshuō nǐ qù yìngpìn le? Shùnlì ma?", "v": "Nghe nói bạn đi phỏng vấn xin việc rồi? Có suôn sẻ không?"},
      {"r": "B", "z": "挺顺利的。经理说我的专业很符合他们的要求。", "p": "Tǐng shùnlì de. Jīnglǐ shuō wǒ de zhuānyè hěn fúhé tāmen de yāoqiú.", "v": "Khá suôn sẻ. Giám đốc nói chuyên ngành của tôi rất phù hợp yêu cầu của họ."},
      {"r": "A", "z": "你紧张吗？", "p": "Nǐ jǐnzhāng ma?", "v": "Bạn có hồi hộp không?"},
      {"r": "B", "z": "开始有点儿紧张，不过经理态度很好。他说我虽然经验不多，但是能力不错。", "p": "Kāishǐ yǒudiǎnr jǐnzhāng, búguò jīnglǐ tàidu hěn hǎo. Tā shuō wǒ suīrán jīngyàn bù duō, dànshì nénglì búcuò.", "v": "Lúc đầu hơi hồi hộp, nhưng giám đốc thái độ rất tốt. Ông ấy nói tôi tuy chưa nhiều kinh nghiệm nhưng năng lực khá."},
      {"r": "A", "z": "什么时候通知你结果？", "p": "Shénme shíhou tōngzhī nǐ jiéguǒ?", "v": "Khi nào họ báo kết quả cho bạn?"},
      {"r": "B", "z": "下星期。如果顺利，下个月就能正式上班了。", "p": "Xià xīngqī. Rúguǒ shùnlì, xià ge yuè jiù néng zhèngshì shàngbān le.", "v": "Tuần sau. Nếu suôn sẻ, tháng sau là có thể chính thức đi làm."},
    ],
      qs: [
        {"q": "经理觉得B怎么样？", "v": "Giám đốc thấy B thế nào?", "o": ["太紧张了", "能力不错", "经验很多"], "a": 1},
        {"q": "什么时候通知结果？", "v": "Khi nào báo kết quả?", "o": ["下星期", "下个月", "明天"], "a": 0},
      ] },
    rd: { z: "我们公司正在招聘一位经理，负责管理二十个人的工作。申请的人必须硕士毕业，有三年以上的工作经验，还要能适应经常出差。有兴趣的人可以按照要求填好表格，提前把材料交给我们。工作优秀的人，年底还有奖金。",
      p: "Wǒmen gōngsī zhèngzài zhāopìn yí wèi jīnglǐ, fùzé guǎnlǐ èrshí ge rén de gōngzuò. Shēnqǐng de rén bìxū shuòshì bìyè, yǒu sān nián yǐshàng de gōngzuò jīngyàn, hái yào néng shìyìng jīngcháng chūchāi. Yǒu xìngqù de rén kěyǐ ànzhào yāoqiú tián hǎo biǎogé, tíqián bǎ cáiliào jiāo gěi wǒmen. Gōngzuò yōuxiù de rén, niándǐ hái yǒu jiǎngjīn.",
      v: "Công ty chúng tôi đang tuyển một quản lý, phụ trách quản lý công việc của hai mươi người. Người ứng tuyển phải tốt nghiệp thạc sĩ, có từ ba năm kinh nghiệm làm việc trở lên, còn phải thích nghi được với việc thường xuyên đi công tác. Ai quan tâm có thể điền mẫu đơn theo yêu cầu, nộp hồ sơ cho chúng tôi trước hạn. Người làm việc xuất sắc cuối năm còn có tiền thưởng.",
      qs: [
        {"q": "申请的人需要什么条件？", "v": "Người ứng tuyển cần điều kiện gì?", "o": ["硕士毕业", "大学没毕业也可以", "博士毕业"], "a": 0},
        {"q": "这个工作有什么特点？", "v": "Công việc này có đặc điểm gì?", "o": ["不用管理别人", "在家工作", "经常出差"], "a": 2},
      ] }
  },
  3: {
    dl: { lines: [
      {"r": "A", "z": "大学毕业以后，你有什么计划？", "p": "Dàxué bìyè yǐhòu, nǐ yǒu shénme jìhuà?", "v": "Tốt nghiệp đại học xong, bạn có kế hoạch gì?"},
      {"r": "B", "z": "我暂时不想找工作，想先做点儿生意。", "p": "Wǒ zànshí bù xiǎng zhǎo gōngzuò, xiǎng xiān zuò diǎnr shēngyi.", "v": "Tạm thời tôi không muốn tìm việc, muốn làm ăn buôn bán trước."},
      {"r": "A", "z": "做生意压力很大，现在竞争也这么厉害。", "p": "Zuò shēngyi yālì hěn dà, xiànzài jìngzhēng yě zhème lìhai.", "v": "Làm ăn áp lực lớn lắm, bây giờ cạnh tranh lại gay gắt như vậy."},
      {"r": "B", "z": "我知道，但是这是我的理想。", "p": "Wǒ zhīdào, dànshì zhè shì wǒ de lǐxiǎng.", "v": "Tôi biết, nhưng đây là ước mơ của tôi."},
      {"r": "A", "z": "我觉得你不要太着急赚钱，关键是先积累经验。", "p": "Wǒ juéde nǐ bú yào tài zháojí zhuàn qián, guānjiàn shì xiān jīlěi jīngyàn.", "v": "Tôi thấy bạn đừng quá vội kiếm tiền, điều mấu chốt là tích lũy kinh nghiệm trước."},
      {"r": "B", "z": "你说得对，我再考虑考虑。", "p": "Nǐ shuō de duì, wǒ zài kǎolǜ kǎolǜ.", "v": "Bạn nói đúng, để tôi suy nghĩ thêm."},
    ],
      qs: [
        {"q": "B毕业以后想做什么？", "v": "Tốt nghiệp xong B muốn làm gì?", "o": ["做生意", "读硕士", "找工作"], "a": 0},
        {"q": "A认为什么最关键？", "v": "A cho rằng điều gì mấu chốt nhất?", "o": ["赚钱", "存钱", "积累经验"], "a": 2},
      ] },
    rd: { z: "小明刚工作的时候工资不高，每个月只能存五百块钱。他觉得很辛苦，但是没有放弃。他通过努力，积累了很多经验，三年以后成为了公司的经理。现在他的工资已经超过了一万块。他说：“年轻的时候，经验比钱更值得积累。”",
      p: "Xiǎomíng gāng gōngzuò de shíhou gōngzī bù gāo, měi ge yuè zhǐ néng cún wǔbǎi kuài qián. Tā juéde hěn xīnkǔ, dànshì méiyǒu fàngqì. Tā tōngguò nǔlì, jīlěi le hěn duō jīngyàn, sān nián yǐhòu chéngwéi le gōngsī de jīnglǐ. Xiànzài tā de gōngzī yǐjīng chāoguò le yíwàn kuài. Tā shuō: \"Niánqīng de shíhou, jīngyàn bǐ qián gèng zhíde jīlěi.\"",
      v: "Lúc mới đi làm lương của Tiểu Minh không cao, mỗi tháng chỉ để dành được năm trăm tệ. Cậu ấy thấy rất vất vả nhưng không bỏ cuộc. Nhờ nỗ lực, cậu ấy tích lũy được nhiều kinh nghiệm, ba năm sau trở thành giám đốc của công ty. Bây giờ lương của cậu ấy đã vượt quá mười nghìn tệ. Cậu ấy nói: “Khi còn trẻ, kinh nghiệm đáng tích lũy hơn tiền bạc.”",
      qs: [
        {"q": "小明刚工作的时候怎么样？", "v": "Lúc mới đi làm Tiểu Minh thế nào?", "o": ["工资不高", "工资很高", "一点儿也不辛苦"], "a": 0},
        {"q": "现在小明的工资怎么样？", "v": "Bây giờ lương của Tiểu Minh thế nào?", "o": ["五百块", "跟以前一样", "超过一万块"], "a": 2},
      ] }
  },
  4: {
    dl: { lines: [
      {"r": "A", "z": "这个周末超市打折，我们去逛逛吧？", "p": "Zhège zhōumò chāoshì dǎzhé, wǒmen qù guàngguang ba?", "v": "Cuối tuần này siêu thị giảm giá, chúng ta đi dạo xem nhé?"},
      {"r": "B", "z": "好啊，我正好要买牙膏和毛巾。", "p": "Hǎo a, wǒ zhènghǎo yào mǎi yágāo hé máojīn.", "v": "Được đấy, tôi đang cần mua kem đánh răng và khăn mặt."},
      {"r": "A", "z": "广告上说，满两百块还免费送一盒巧克力。", "p": "Guǎnggào shàng shuō, mǎn liǎngbǎi kuài hái miǎnfèi sòng yì hé qiǎokèlì.", "v": "Quảng cáo nói mua đủ hai trăm tệ còn được tặng miễn phí một hộp sô-cô-la."},
      {"r": "B", "z": "太好了！不过周末人多，恐怕要排队。", "p": "Tài hǎo le! Búguò zhōumò rén duō, kǒngpà yào páiduì.", "v": "Tuyệt quá! Nhưng cuối tuần đông người, e là phải xếp hàng."},
      {"r": "A", "z": "那我们早点儿去，否则东西都被买完了。", "p": "Nà wǒmen zǎo diǎnr qù, fǒuzé dōngxi dōu bèi mǎi wán le.", "v": "Vậy chúng ta đi sớm một chút, nếu không đồ bị mua hết mất."},
      {"r": "B", "z": "行，我们九点在超市门口见。", "p": "Xíng, wǒmen jiǔ diǎn zài chāoshì ménkǒu jiàn.", "v": "Được, chín giờ chúng ta gặp nhau ở cửa siêu thị."},
    ],
      qs: [
        {"q": "B要买什么？", "v": "B cần mua gì?", "o": ["饼干和巧克力", "牙膏和毛巾", "袜子"], "a": 1},
        {"q": "买满两百块会怎么样？", "v": "Mua đủ hai trăm tệ thì sao?", "o": ["送一盒巧克力", "送一盒饼干", "便宜一百块"], "a": 0},
      ] },
    rd: { z: "很多顾客购物的时候只看价格，看到打折就买。其实，便宜的东西不一定合适。我购物的习惯是：只买对的，不买贵的。买东西以前，我先想好需要什么，否则很容易买很多用不上的东西。现在流行用手机付款，我身上几乎不带现金，也没有零钱了。",
      p: "Hěn duō gùkè gòuwù de shíhou zhǐ kàn jiàgé, kàn dào dǎzhé jiù mǎi. Qíshí, piányi de dōngxi bù yídìng héshì. Wǒ gòuwù de xíguàn shì: zhǐ mǎi duì de, bù mǎi guì de. Mǎi dōngxi yǐqián, wǒ xiān xiǎng hǎo xūyào shénme, fǒuzé hěn róngyì mǎi hěn duō yòng bu shàng de dōngxi. Xiànzài liúxíng yòng shǒujī fùkuǎn, wǒ shēnshang jīhū bú dài xiànjīn, yě méiyǒu língqián le.",
      v: "Nhiều khách hàng khi mua sắm chỉ nhìn giá, thấy giảm giá là mua. Thật ra, đồ rẻ chưa chắc đã phù hợp. Thói quen mua sắm của tôi là: chỉ mua đúng thứ cần, không mua đồ đắt. Trước khi mua, tôi nghĩ kỹ mình cần gì, nếu không rất dễ mua nhiều thứ không dùng đến. Bây giờ đang thịnh hành trả tiền bằng điện thoại, trên người tôi gần như không mang tiền mặt, cũng không có tiền lẻ nữa.",
      qs: [
        {"q": "“我”购物的习惯是什么？", "v": "Thói quen mua sắm của “tôi” là gì?", "o": ["看到打折就买", "只买贵的", "只买对的，不买贵的"], "a": 2},
        {"q": "“我”现在一般怎么付款？", "v": "Bây giờ “tôi” thường trả tiền bằng cách nào?", "o": ["用现金", "用零钱", "用手机"], "a": 2},
      ] }
  },
  5: {
    dl: { lines: [
      {"r": "A", "z": "这两个行李箱样子差不多，价格怎么差这么多？", "p": "Zhè liǎng ge xínglixiāng yàngzi chàbuduō, jiàgé zěnme chà zhème duō?", "v": "Hai chiếc vali này kiểu dáng gần giống nhau, sao giá chênh lệch nhiều thế?"},
      {"r": "B", "z": "左边这个更轻，质量也更好，您可以试试。", "p": "Zuǒbian zhège gèng qīng, zhìliàng yě gèng hǎo, nín kěyǐ shìshi.", "v": "Chiếc bên trái nhẹ hơn, chất lượng cũng tốt hơn, bạn có thể thử xem."},
      {"r": "A", "z": "左边的贵一倍，有什么区别吗？", "p": "Zuǒbian de guì yí bèi, yǒu shénme qūbié ma?", "v": "Chiếc bên trái đắt gấp đôi, có gì khác nhau không?"},
      {"r": "B", "z": "右边的比较重，用久了容易破。", "p": "Yòubian de bǐjiào zhòng, yòng jiǔ le róngyì pò.", "v": "Chiếc bên phải khá nặng, dùng lâu dễ hỏng."},
      {"r": "A", "z": "那左边的能保证质量吗？", "p": "Nà zuǒbian de néng bǎozhèng zhìliàng ma?", "v": "Vậy chiếc bên trái có đảm bảo chất lượng không?"},
      {"r": "B", "z": "能，一年内坏了可以免费修理。", "p": "Néng, yì nián nèi huài le kěyǐ miǎnfèi xiūlǐ.", "v": "Có, trong vòng một năm hỏng thì được sửa miễn phí."},
    ],
      qs: [
        {"q": "左边的行李箱有什么特点？", "v": "Chiếc vali bên trái có đặc điểm gì?", "o": ["更轻，质量更好", "更便宜", "更重"], "a": 0},
        {"q": "左边的行李箱坏了怎么办？", "v": "Chiếc vali bên trái hỏng thì làm sao?", "o": ["不能修理", "马上换一个新的", "一年内免费修理"], "a": 2},
      ] },
    rd: { z: "我的眼镜破了，想买新的。眼镜店里的眼镜价格区别很大，有的三百块左右，有的要三千块。售货员说，贵的眼镜更轻，效果也更好。我想了想，还是买了贵的。中国人常说“一分钱一分货”，意思是价格高的东西，质量一般也比较好。",
      p: "Wǒ de yǎnjìng pò le, xiǎng mǎi xīn de. Yǎnjìngdiàn lǐ de yǎnjìng jiàgé qūbié hěn dà, yǒu de sānbǎi kuài zuǒyòu, yǒu de yào sānqiān kuài. Shòuhuòyuán shuō, guì de yǎnjìng gèng qīng, xiàoguǒ yě gèng hǎo. Wǒ xiǎng le xiǎng, háishi mǎi le guì de. Zhōngguó rén cháng shuō \"yì fēn qián yì fēn huò\", yìsi shì jiàgé gāo de dōngxi, zhìliàng yìbān yě bǐjiào hǎo.",
      v: "Kính của tôi bị vỡ, tôi muốn mua cái mới. Giá kính trong cửa hàng chênh lệch rất lớn, có cái khoảng ba trăm tệ, có cái tới ba nghìn tệ. Nhân viên bán hàng nói kính đắt nhẹ hơn, hiệu quả cũng tốt hơn. Tôi nghĩ một lúc, cuối cùng vẫn mua cái đắt. Người Trung Quốc hay nói “tiền nào của nấy”, nghĩa là đồ giá cao thì chất lượng thường cũng khá tốt.",
      qs: [
        {"q": "眼镜的价格怎么样？", "v": "Giá kính thế nào?", "o": ["都差不多", "区别很大", "都很便宜"], "a": 1},
        {"q": "最后“我”买了什么样的眼镜？", "v": "Cuối cùng “tôi” mua loại kính nào?", "o": ["贵的", "没买", "便宜的"], "a": 0},
      ] }
  },
  6: {
    dl: { lines: [
      {"r": "A", "z": "大夫，我最近一直咳嗽，晚上也睡不好。", "p": "Dàifu, wǒ zuìjìn yìzhí késou, wǎnshang yě shuì bu hǎo.", "v": "Bác sĩ, dạo này tôi ho suốt, buổi tối cũng ngủ không ngon."},
      {"r": "B", "z": "你抽烟吗？", "p": "Nǐ chōuyān ma?", "v": "Anh có hút thuốc không?"},
      {"r": "A", "z": "抽，每天差不多一盒。", "p": "Chōu, měi tiān chàbuduō yì hé.", "v": "Có, mỗi ngày gần một bao."},
      {"r": "B", "z": "我建议你别抽烟了，否则咳嗽会越来越严重。", "p": "Wǒ jiànyì nǐ bié chōuyān le, fǒuzé késou huì yuè lái yuè yánzhòng.", "v": "Tôi khuyên anh bỏ thuốc đi, nếu không sẽ ho ngày càng nặng."},
      {"r": "A", "z": "需要打针吗？", "p": "Xūyào dǎzhēn ma?", "v": "Có cần tiêm không?"},
      {"r": "B", "z": "不用，按时吃药，多休息。每天至少散步半个小时。", "p": "Búyòng, ànshí chī yào, duō xiūxi. Měi tiān zhìshǎo sànbù bàn ge xiǎoshí.", "v": "Không cần, uống thuốc đúng giờ, nghỉ ngơi nhiều. Mỗi ngày đi bộ ít nhất nửa tiếng."},
    ],
      qs: [
        {"q": "A有什么问题？", "v": "A gặp vấn đề gì?", "o": ["胳膊疼", "肚子疼", "一直咳嗽"], "a": 2},
        {"q": "大夫建议A做什么？", "v": "Bác sĩ khuyên A làm gì?", "o": ["打针", "每天躺着", "别抽烟"], "a": 2},
      ] },
    rd: { z: "现在很多人工作压力大，经常感觉很困，没有力气。医生提醒我们：生病了要及时去医院，但是最好的医生是自己。每天按时吃饭，晚上早点儿睡，早上起来运动半个小时，对身体有很多好处。心情放松了，身体自然就健康了。",
      p: "Xiànzài hěn duō rén gōngzuò yālì dà, jīngcháng gǎnjué hěn kùn, méiyǒu lìqi. Yīshēng tíxǐng wǒmen: shēngbìng le yào jíshí qù yīyuàn, dànshì zuìhǎo de yīshēng shì zìjǐ. Měi tiān ànshí chī fàn, wǎnshang zǎo diǎnr shuì, zǎoshang qǐlai yùndòng bàn ge xiǎoshí, duì shēntǐ yǒu hěn duō hǎochu. Xīnqíng fàngsōng le, shēntǐ zìrán jiù jiànkāng le.",
      v: "Bây giờ nhiều người áp lực công việc lớn, thường thấy buồn ngủ, không có sức. Bác sĩ nhắc chúng ta: bị ốm phải đi bệnh viện kịp thời, nhưng bác sĩ tốt nhất là chính mình. Ngày nào cũng ăn đúng giờ, tối ngủ sớm một chút, sáng dậy vận động nửa tiếng, rất có lợi cho sức khỏe. Tâm trạng thoải mái thì cơ thể tự nhiên khỏe mạnh.",
      qs: [
        {"q": "这段话说，最好的医生是谁？", "v": "Đoạn văn nói bác sĩ tốt nhất là ai?", "o": ["护士", "自己", "大夫"], "a": 1},
        {"q": "这段话建议我们每天怎么做？", "v": "Đoạn văn khuyên chúng ta mỗi ngày làm gì?", "o": ["按时吃饭，早点儿睡", "工作到很晚", "多喝咖啡"], "a": 0},
      ] }
  },
  7: {
    dl: { lines: [
      {"r": "A", "z": "小明，你理发了？看起来真帅！", "p": "Xiǎomíng, nǐ lǐfà le? Kàn qǐlai zhēn shuài!", "v": "Tiểu Minh, bạn cắt tóc à? Trông đẹp trai thật!"},
      {"r": "B", "z": "谢谢！下午有网球比赛，得好好打扮一下。", "p": "Xièxie! Xiàwǔ yǒu wǎngqiú bǐsài, děi hǎohāor dǎban yíxià.", "v": "Cảm ơn! Chiều nay có trận đấu quần vợt, phải chải chuốt một chút."},
      {"r": "A", "z": "你平时除了网球，还有什么活动？", "p": "Nǐ píngshí chúle wǎngqiú, hái yǒu shénme huódòng?", "v": "Bình thường ngoài quần vợt, bạn còn hoạt động gì nữa?"},
      {"r": "B", "z": "我偶尔打乒乓球和羽毛球，周末还弹钢琴。", "p": "Wǒ ǒu'ěr dǎ pīngpāngqiú hé yǔmáoqiú, zhōumò hái tán gāngqín.", "v": "Thỉnh thoảng tôi chơi bóng bàn và cầu lông, cuối tuần còn chơi piano."},
      {"r": "A", "z": "你的生活真丰富！我每天下班就在家，挺无聊的。", "p": "Nǐ de shēnghuó zhēn fēngfù! Wǒ měi tiān xiàbān jiù zài jiā, tǐng wúliáo de.", "v": "Cuộc sống của bạn phong phú thật! Tôi ngày nào tan làm cũng ở nhà, khá chán."},
      {"r": "B", "z": "那下午跟我去看比赛吧，心情会轻松很多。", "p": "Nà xiàwǔ gēn wǒ qù kàn bǐsài ba, xīnqíng huì qīngsōng hěn duō.", "v": "Vậy chiều nay đi xem thi đấu với tôi đi, tâm trạng sẽ thoải mái hơn nhiều."},
    ],
      qs: [
        {"q": "小明下午要做什么？", "v": "Chiều nay Tiểu Minh sẽ làm gì?", "o": ["参加网球比赛", "去理发", "弹钢琴"], "a": 0},
        {"q": "A觉得自己的生活怎么样？", "v": "A thấy cuộc sống của mình thế nào?", "o": ["很丰富", "挺无聊的", "很轻松"], "a": 1},
      ] },
    rd: { z: "李月的奶奶七十岁了，但是她的生活一点儿也不无聊。每天早上，她在阳光下跟朋友们一起跳舞，动作比年轻人还漂亮。下午她去学画画儿，偶尔还给我们讲笑话。她常说：“生活中不缺少美，缺少的是发现美的眼睛。”奶奶真厉害！",
      p: "Lǐ Yuè de nǎinai qīshí suì le, dànshì tā de shēnghuó yìdiǎnr yě bù wúliáo. Měi tiān zǎoshang, tā zài yángguāng xià gēn péngyoumen yìqǐ tiàowǔ, dòngzuò bǐ niánqīng rén hái piàoliang. Xiàwǔ tā qù xué huà huàr, ǒu'ěr hái gěi wǒmen jiǎng xiàohua. Tā cháng shuō: \"Shēnghuó zhōng bù quēshǎo měi, quēshǎo de shì fāxiàn měi de yǎnjing.\" Nǎinai zhēn lìhai!",
      v: "Bà của Lý Nguyệt đã bảy mươi tuổi, nhưng cuộc sống của bà chẳng hề nhàm chán. Sáng nào bà cũng nhảy múa cùng bạn bè dưới nắng, động tác còn đẹp hơn cả người trẻ. Buổi chiều bà đi học vẽ, thỉnh thoảng còn kể chuyện cười cho chúng tôi nghe. Bà hay nói: “Cuộc sống không thiếu cái đẹp, cái thiếu là đôi mắt biết phát hiện cái đẹp.” Bà giỏi thật!",
      qs: [
        {"q": "奶奶每天早上做什么？", "v": "Sáng nào bà cũng làm gì?", "o": ["打网球", "跟朋友们跳舞", "弹钢琴"], "a": 1},
        {"q": "奶奶认为生活中缺少什么？", "v": "Bà cho rằng cuộc sống thiếu điều gì?", "o": ["朋友", "美", "发现美的眼睛"], "a": 2},
      ] }
  },
  8: {
    dl: { lines: [
      {"r": "A", "z": "我又失败了，实在不想继续了。", "p": "Wǒ yòu shībài le, shízài bù xiǎng jìxù le.", "v": "Tôi lại thất bại rồi, thật sự không muốn tiếp tục nữa."},
      {"r": "B", "z": "别伤心。遇到困难是正常的，你先冷静一下。", "p": "Bié shāngxīn. Yùdào kùnnan shì zhèngcháng de, nǐ xiān lěngjìng yíxià.", "v": "Đừng buồn. Gặp khó khăn là bình thường, bạn bình tĩnh lại đã."},
      {"r": "A", "z": "可是我已经试了三次，还是没成功。", "p": "Kěshì wǒ yǐjīng shì le sān cì, háishi méi chénggōng.", "v": "Nhưng tôi đã thử ba lần rồi, vẫn chưa thành công."},
      {"r": "B", "z": "既然你喜欢这件事，就别放弃。要是现在放弃，将来会后悔的。", "p": "Jìrán nǐ xǐhuan zhè jiàn shì, jiù bié fàngqì. Yàoshi xiànzài fàngqì, jiānglái huì hòuhuǐ de.", "v": "Đã thích việc này thì đừng bỏ cuộc. Nếu bây giờ bỏ, sau này sẽ hối hận."},
      {"r": "A", "z": "你说得对，我应该对自己有信心。", "p": "Nǐ shuō de duì, wǒ yīnggāi duì zìjǐ yǒu xìnxīn.", "v": "Bạn nói đúng, tôi nên tin vào bản thân."},
      {"r": "B", "z": "不管结果怎么样，这个过程也是一种经历。", "p": "Bùguǎn jiéguǒ zěnmeyàng, zhège guòchéng yě shì yì zhǒng jīnglì.", "v": "Dù kết quả thế nào, quá trình này cũng là một trải nghiệm."},
    ],
      qs: [
        {"q": "A试了几次？", "v": "A đã thử mấy lần?", "o": ["一次", "三次", "两次"], "a": 1},
        {"q": "B让A怎么做？", "v": "B khuyên A làm gì?", "o": ["放弃", "坚持，别放弃", "换一件事做"], "a": 1},
      ] },
    rd: { z: "大卫第一次考试的成绩很差，他很失望。然而他没有放弃，仍然每天坚持学习。尽管遇到了很多困难，他却一直很积极。第二年，他终于成功了。他说：“无论遇到什么问题，都要勇敢一点儿。阳光总在风雨后。”",
      p: "Dàwèi dì-yī cì kǎoshì de chéngjì hěn chà, tā hěn shīwàng. Rán'ér tā méiyǒu fàngqì, réngrán měi tiān jiānchí xuéxí. Jǐnguǎn yùdào le hěn duō kùnnan, tā què yìzhí hěn jījí. Dì-èr nián, tā zhōngyú chénggōng le. Tā shuō: \"Wúlùn yùdào shénme wèntí, dōu yào yǒnggǎn yìdiǎnr. Yángguāng zǒng zài fēngyǔ hòu.\"",
      v: "Lần thi đầu tiên David được điểm rất kém, cậu ấy rất thất vọng. Tuy nhiên cậu ấy không bỏ cuộc, vẫn kiên trì học mỗi ngày. Dù gặp nhiều khó khăn, cậu ấy vẫn luôn tích cực. Năm thứ hai, cuối cùng cậu ấy đã thành công. Cậu ấy nói: “Dù gặp vấn đề gì cũng phải dũng cảm một chút. Sau mưa trời lại sáng.”",
      qs: [
        {"q": "大卫第一次考试以后怎么样？", "v": "Sau lần thi đầu tiên David thế nào?", "o": ["很得意", "很失望", "放弃了"], "a": 1},
        {"q": "大卫什么时候成功了？", "v": "David thành công khi nào?", "o": ["第二年", "第一年", "第三年"], "a": 0},
      ] }
  },
  9: {
    dl: { lines: [
      {"r": "A", "z": "祝贺你！听说你当上律师了。", "p": "Zhùhè nǐ! Tīngshuō nǐ dāngshang lǜshī le.", "v": "Chúc mừng bạn! Nghe nói bạn trở thành luật sư rồi."},
      {"r": "B", "z": "谢谢！这是我从小的梦。", "p": "Xièxie! Zhè shì wǒ cóngxiǎo de mèng.", "v": "Cảm ơn! Đây là giấc mơ từ nhỏ của tôi."},
      {"r": "A", "z": "律师收入高，你父亲母亲一定很开心吧？", "p": "Lǜshī shōurù gāo, nǐ fùqīn mǔqīn yídìng hěn kāixīn ba?", "v": "Luật sư thu nhập cao, bố mẹ bạn chắc vui lắm nhỉ?"},
      {"r": "B", "z": "是啊。不过工作太忙了，礼拜天也很少有时间陪他们。", "p": "Shì a. Búguò gōngzuò tài máng le, lǐbàitiān yě hěn shǎo yǒu shíjiān péi tāmen.", "v": "Đúng vậy. Nhưng công việc bận quá, Chủ nhật cũng ít khi có thời gian ở bên bố mẹ."},
      {"r": "A", "z": "那你觉得现在幸福吗？", "p": "Nà nǐ juéde xiànzài xìngfú ma?", "v": "Vậy bạn thấy bây giờ có hạnh phúc không?"},
      {"r": "B", "z": "我觉得只要家人健康、愉快，就是最大的幸福。", "p": "Wǒ juéde zhǐyào jiārén jiànkāng, yúkuài, jiù shì zuì dà de xìngfú.", "v": "Tôi thấy chỉ cần gia đình khỏe mạnh, vui vẻ là hạnh phúc lớn nhất."},
    ],
      qs: [
        {"q": "B现在做什么工作？", "v": "Bây giờ B làm nghề gì?", "o": ["律师", "医生", "老师"], "a": 0},
        {"q": "B认为什么是最大的幸福？", "v": "B cho rằng hạnh phúc lớn nhất là gì?", "o": ["收入高", "家人健康、愉快", "工作忙"], "a": 1},
      ] },
    rd: { z: "每个人幸福的标准都不一样。有的人认为有钱才幸福，然而富人往往也有很多烦恼。我爷爷出生在一个穷人家，条件很差，但是他一直很愉快。现在他最开心的事，就是礼拜天抱着孙子在公园散步。他说：“一家人在一起，就是一切。”",
      p: "Měi ge rén xìngfú de biāozhǔn dōu bù yíyàng. Yǒu de rén rènwéi yǒu qián cái xìngfú, rán'ér fùrén wǎngwǎng yě yǒu hěn duō fánnǎo. Wǒ yéye chūshēng zài yí ge qióngrén jiā, tiáojiàn hěn chà, dànshì tā yìzhí hěn yúkuài. Xiànzài tā zuì kāixīn de shì, jiù shì lǐbàitiān bào zhe sūnzi zài gōngyuán sànbù. Tā shuō: \"Yì jiārén zài yìqǐ, jiù shì yíqiè.\"",
      v: "Tiêu chuẩn hạnh phúc của mỗi người không giống nhau. Có người cho rằng có tiền mới hạnh phúc, nhưng người giàu thường cũng có nhiều phiền não. Ông tôi sinh ra trong một gia đình nghèo, điều kiện rất kém, nhưng ông luôn vui vẻ. Bây giờ việc ông vui nhất là Chủ nhật bế cháu trai đi dạo công viên. Ông nói: “Cả nhà ở bên nhau là tất cả.”",
      qs: [
        {"q": "爷爷出生在什么样的家？", "v": "Ông sinh ra trong gia đình thế nào?", "o": ["穷人家", "律师家", "富人家"], "a": 0},
        {"q": "爷爷现在最开心的事是什么？", "v": "Việc ông vui nhất bây giờ là gì?", "o": ["抱着孙子散步", "赚很多钱", "跟亲戚聚会"], "a": 0},
      ] }
  },
  10: {
    dl: { lines: [
      {"r": "A", "z": "你的普通话说得真流利！有什么好办法吗？", "p": "Nǐ de Pǔtōnghuà shuō de zhēn liúlì! Yǒu shénme hǎo bànfǎ ma?", "v": "Bạn nói tiếng phổ thông lưu loát thật! Có cách gì hay không?"},
      {"r": "B", "z": "我每天都阅读，比如看中文小说和杂志。", "p": "Wǒ měi tiān dōu yuèdú, bǐrú kàn Zhōngwén xiǎoshuō hé zázhì.", "v": "Ngày nào tôi cũng đọc, ví dụ đọc tiểu thuyết và tạp chí tiếng Trung."},
      {"r": "A", "z": "看不懂的词语怎么办？", "p": "Kàn bu dǒng de cíyǔ zěnme bàn?", "v": "Gặp từ ngữ đọc không hiểu thì làm sao?"},
      {"r": "B", "z": "先猜一猜，再查词典。好文章我会读好几遍。", "p": "Xiān cāi yi cāi, zài chá cídiǎn. Hǎo wénzhāng wǒ huì dú hǎo jǐ biàn.", "v": "Đoán trước đã, rồi tra từ điển. Bài văn hay tôi đọc đi đọc lại mấy lần."},
      {"r": "A", "z": "我觉得语法最难，特别是词语的排列顺序。", "p": "Wǒ juéde yǔfǎ zuì nán, tèbié shì cíyǔ de páiliè shùnxù.", "v": "Tôi thấy ngữ pháp khó nhất, nhất là thứ tự sắp xếp từ ngữ."},
      {"r": "B", "z": "你可以每天写日记，写完以后请老师帮你看看。", "p": "Nǐ kěyǐ měi tiān xiě rìjì, xiě wán yǐhòu qǐng lǎoshī bāng nǐ kànkan.", "v": "Bạn có thể viết nhật ký mỗi ngày, viết xong nhờ thầy cô xem giúp."},
    ],
      qs: [
        {"q": "B每天做什么？", "v": "Mỗi ngày B làm gì?", "o": ["翻译文章", "阅读", "写小说"], "a": 1},
        {"q": "A觉得什么最难？", "v": "A thấy cái gì khó nhất?", "o": ["语法", "阅读", "写日记"], "a": 0},
      ] },
    rd: { z: "下个月学校有一个阅读比赛，我已经报名了。老师说，比赛的内容有三个部分：读一篇文章、回答问题和翻译。每天晚上，我都读二十页小说，然后总结一下文章的重点。我的同学也报名了，我们经常一起讨论。我相信我们会获得好成绩。",
      p: "Xià ge yuè xuéxiào yǒu yí ge yuèdú bǐsài, wǒ yǐjīng bàomíng le. Lǎoshī shuō, bǐsài de nèiróng yǒu sān ge bùfen: dú yì piān wénzhāng, huídá wèntí hé fānyì. Měi tiān wǎnshang, wǒ dōu dú èrshí yè xiǎoshuō, ránhòu zǒngjié yíxià wénzhāng de zhòngdiǎn. Wǒ de tóngxué yě bàomíng le, wǒmen jīngcháng yìqǐ tǎolùn. Wǒ xiāngxìn wǒmen huì huòdé hǎo chéngjì.",
      v: "Tháng sau trường có một cuộc thi đọc hiểu, tôi đã đăng ký rồi. Thầy cô nói nội dung thi có ba phần: đọc một bài văn, trả lời câu hỏi và dịch. Tối nào tôi cũng đọc hai mươi trang tiểu thuyết, sau đó tóm tắt ý chính của bài. Bạn học của tôi cũng đăng ký, chúng tôi thường thảo luận cùng nhau. Tôi tin chúng tôi sẽ đạt thành tích tốt.",
      qs: [
        {"q": "比赛有几个部分？", "v": "Cuộc thi có mấy phần?", "o": ["三个", "四个", "两个"], "a": 0},
        {"q": "“我”每天晚上读多少页小说？", "v": "Tối nào “tôi” cũng đọc bao nhiêu trang tiểu thuyết?", "o": ["两百页", "二十页", "十页"], "a": 1},
      ] }
  },
  11: {
    dl: { lines: [
      {"r": "A", "z": "你今天好像不太高兴，难道是我说错了什么？", "p": "Nǐ jīntiān hǎoxiàng bú tài gāoxìng, nándào shì wǒ shuō cuò le shénme?", "v": "Hôm nay hình như bạn không vui lắm, lẽ nào tôi đã nói sai điều gì?"},
      {"r": "B", "z": "没有，你别误会。我确实有点儿累。", "p": "Méiyǒu, nǐ bié wùhuì. Wǒ quèshí yǒudiǎnr lèi.", "v": "Không có, bạn đừng hiểu lầm. Tôi đúng là hơi mệt."},
      {"r": "A", "z": "我还以为你生我的气了。", "p": "Wǒ hái yǐwéi nǐ shēng wǒ de qì le.", "v": "Tôi còn tưởng bạn giận tôi."},
      {"r": "B", "z": "怎么会呢？我是在想一道数学题，太复杂了。", "p": "Zěnme huì ne? Wǒ shì zài xiǎng yí dào shùxué tí, tài fùzá le.", "v": "Sao lại thế được? Tôi đang nghĩ một bài toán, phức tạp quá."},
      {"r": "A", "z": "让我看看……我估计答案是二十。", "p": "Ràng wǒ kànkan… Wǒ gūjì dá'àn shì èrshí.", "v": "Để tôi xem nào… Tôi đoán đáp án là hai mươi."},
      {"r": "B", "z": "你肯定吗？我们再判断一下吧。", "p": "Nǐ kěndìng ma? Wǒmen zài pànduàn yíxià ba.", "v": "Bạn chắc không? Chúng ta phán đoán lại lần nữa đi."},
    ],
      qs: [
        {"q": "B刚才在想什么？", "v": "Vừa rồi B đang nghĩ gì?", "o": ["一道数学题", "A说错的话", "明天的考试"], "a": 0},
        {"q": "A估计答案是多少？", "v": "A đoán đáp án là bao nhiêu?", "o": ["十二", "二十", "两百"], "a": 1},
      ] },
    rd: { z: "很多人以为自己的看法都是正确的。其实，我们的判断也许会出现错误。比如，有人看到一个人穿得很简单，就判断他没有钱，而其实他可能是一位著名的作家。所以，遇到问题的时候，最好先了解清楚，不要马上判断。用心去发现，才能更准确地认识这个世界。",
      p: "Hěn duō rén yǐwéi zìjǐ de kànfǎ dōu shì zhèngquè de. Qíshí, wǒmen de pànduàn yěxǔ huì chūxiàn cuòwù. Bǐrú, yǒu rén kàn dào yí ge rén chuān de hěn jiǎndān, jiù pànduàn tā méiyǒu qián, ér qíshí tā kěnéng shì yí wèi zhùmíng de zuòjiā. Suǒyǐ, yùdào wèntí de shíhou, zuìhǎo xiān liǎojiě qīngchu, bú yào mǎshàng pànduàn. Yòng xīn qù fāxiàn, cái néng gèng zhǔnquè de rènshi zhège shìjiè.",
      v: "Nhiều người tưởng rằng quan điểm của mình đều đúng. Thật ra, phán đoán của chúng ta có thể sai. Ví dụ, có người thấy một người ăn mặc rất giản dị liền cho rằng người đó không có tiền, nhưng thật ra có thể đó là một nhà văn nổi tiếng. Vì vậy, khi gặp vấn đề, tốt nhất nên tìm hiểu rõ trước, đừng vội phán đoán. Dùng trái tim để khám phá mới có thể hiểu thế giới này chính xác hơn.",
      qs: [
        {"q": "这段话说，我们的判断怎么样？", "v": "Đoạn văn nói phán đoán của chúng ta thế nào?", "o": ["都是正确的", "非常准确", "也许会出现错误"], "a": 2},
        {"q": "遇到问题的时候，我们最好怎么做？", "v": "Khi gặp vấn đề, tốt nhất chúng ta nên làm gì?", "o": ["马上判断", "先了解清楚", "不去管它"], "a": 1},
      ] }
  },
  12: {
    dl: { lines: [
      {"r": "A", "z": "大卫，你来北京以后去了哪些地方？", "p": "Dàwèi, nǐ lái Běijīng yǐhòu qù le nǎxiē dìfang?", "v": "David, từ khi đến Bắc Kinh bạn đã đi những đâu rồi?"},
      {"r": "B", "z": "我参观了长城，还吃了著名的北京烤鸭。", "p": "Wǒ cānguān le Chángchéng, hái chī le zhùmíng de Běijīng kǎoyā.", "v": "Tôi đã tham quan Vạn Lý Trường Thành, còn ăn vịt quay Bắc Kinh nổi tiếng."},
      {"r": "A", "z": "今天晚上有一场京剧演出，咱们一起去看吧？", "p": "Jīntiān wǎnshang yǒu yì chǎng jīngjù yǎnchū, zánmen yìqǐ qù kàn ba?", "v": "Tối nay có một buổi diễn Kinh kịch, chúng ta cùng đi xem nhé?"},
      {"r": "B", "z": "太好了！我一直想看京剧。演出地点在哪儿？", "p": "Tài hǎo le! Wǒ yìzhí xiǎng kàn jīngjù. Yǎnchū dìdiǎn zài nǎr?", "v": "Tuyệt quá! Tôi luôn muốn xem Kinh kịch. Địa điểm biểu diễn ở đâu?"},
      {"r": "A", "z": "在一个茶馆，可以一边喝茶一边看。", "p": "Zài yí ge cháguǎn, kěyǐ yìbiān hē chá yìbiān kàn.", "v": "Ở một quán trà, có thể vừa uống trà vừa xem."},
      {"r": "B", "z": "真有意思！我已经有点儿兴奋了。", "p": "Zhēn yǒu yìsi! Wǒ yǐjīng yǒudiǎnr xīngfèn le.", "v": "Thú vị thật! Tôi đã thấy háo hức rồi đây."},
    ],
      qs: [
        {"q": "大卫来北京以后参观了哪儿？", "v": "Đến Bắc Kinh rồi David đã tham quan đâu?", "o": ["长城", "长江", "黄河"], "a": 0},
        {"q": "今天晚上他们要去做什么？", "v": "Tối nay họ sẽ đi làm gì?", "o": ["吃烤鸭", "看京剧", "看功夫表演"], "a": 1},
      ] },
    rd: { z: "上个周末，学校举办了一个民族文化节，邀请了来自各个国家的学生参加。那天有功夫表演，也有各个地方的小吃，尤其是饺子，特别受欢迎。演员们的表演非常精彩，观众们都很激动。最后，大家举起杯子一起干杯。那天真热闹！",
      p: "Shàng ge zhōumò, xuéxiào jǔbàn le yí ge mínzú wénhuàjié, yāoqǐng le láizì gègè guójiā de xuésheng cānjiā. Nà tiān yǒu gōngfu biǎoyǎn, yě yǒu gègè dìfang de xiǎochī, yóuqí shì jiǎozi, tèbié shòu huānyíng. Yǎnyuánmen de biǎoyǎn fēicháng jīngcǎi, guānzhòngmen dōu hěn jīdòng. Zuìhòu, dàjiā jǔqǐ bēizi yìqǐ gānbēi. Nà tiān zhēn rènao!",
      v: "Cuối tuần trước, trường tổ chức một lễ hội văn hóa dân tộc, mời sinh viên đến từ nhiều nước tham gia. Hôm đó có biểu diễn võ thuật, cũng có đồ ăn vặt của nhiều nơi, đặc biệt là sủi cảo rất được yêu thích. Các diễn viên biểu diễn vô cùng đặc sắc, khán giả đều rất xúc động. Cuối cùng, mọi người cùng nâng ly cạn chén. Hôm đó thật náo nhiệt!",
      qs: [
        {"q": "学校举办了什么活动？", "v": "Trường tổ chức hoạt động gì?", "o": ["民族文化节", "京剧演出", "功夫比赛"], "a": 0},
        {"q": "哪种小吃特别受欢迎？", "v": "Món ăn vặt nào đặc biệt được yêu thích?", "o": ["包子", "烤鸭", "饺子"], "a": 2},
      ] }
  },
  13: {
    dl: { lines: [
      {"r": "A", "z": "你怎么把瓶子扔在地上了？垃圾桶就在那儿。", "p": "Nǐ zěnme bǎ píngzi rēng zài dìshang le? Lājītǒng jiù zài nàr.", "v": "Sao bạn lại vứt chai xuống đất? Thùng rác ở ngay kia mà."},
      {"r": "B", "z": "对不起，我没注意。", "p": "Duìbuqǐ, wǒ méi zhùyì.", "v": "Xin lỗi, tôi không để ý."},
      {"r": "A", "z": "现在环境污染越来越严重，我们千万要注意。", "p": "Xiànzài huánjìng wūrǎn yuè lái yuè yánzhòng, wǒmen qiānwàn yào zhùyì.", "v": "Bây giờ ô nhiễm môi trường ngày càng nghiêm trọng, chúng ta nhất định phải chú ý."},
      {"r": "B", "z": "你说得对。听说超市也规定不能免费给塑料袋了。", "p": "Nǐ shuō de duì. Tīngshuō chāoshì yě guīdìng bù néng miǎnfèi gěi sùliàodài le.", "v": "Bạn nói đúng. Nghe nói siêu thị cũng quy định không được phát túi ni lông miễn phí nữa."},
      {"r": "A", "z": "是啊，这样能减少很多污染。", "p": "Shì a, zhèyàng néng jiǎnshǎo hěn duō wūrǎn.", "v": "Đúng vậy, như thế giảm được nhiều ô nhiễm."},
      {"r": "B", "z": "以后我去买东西，一定自己带购物袋。", "p": "Yǐhòu wǒ qù mǎi dōngxi, yídìng zìjǐ dài gòuwùdài.", "v": "Sau này đi mua đồ, tôi nhất định tự mang túi đi chợ."},
    ],
      qs: [
        {"q": "B把什么扔在地上了？", "v": "B vứt gì xuống đất?", "o": ["报纸", "塑料袋", "瓶子"], "a": 2},
        {"q": "B以后买东西会怎么做？", "v": "Sau này B mua đồ sẽ làm gì?", "o": ["自己带购物袋", "多要塑料袋", "不去超市"], "a": 0},
      ] },
    rd: { z: "地球是我们共同的家。然而，由于人们浪费太多，空气和海洋都受到了污染，很多动物也因此有了生命危险。为了保护地球，很多地方已经禁止使用塑料袋。节约用水、用电，少开车，都能起到很好的作用。保护地球，就是保护我们自己。",
      p: "Dìqiú shì wǒmen gòngtóng de jiā. Rán'ér, yóuyú rénmen làngfèi tài duō, kōngqì hé hǎiyáng dōu shòudào le wūrǎn, hěn duō dòngwù yě yīncǐ yǒu le shēngmìng wēixiǎn. Wèile bǎohù dìqiú, hěn duō dìfang yǐjīng jìnzhǐ shǐyòng sùliàodài. Jiéyuē yòng shuǐ, yòng diàn, shǎo kāi chē, dōu néng qǐdào hěn hǎo de zuòyòng. Bǎohù dìqiú, jiù shì bǎohù wǒmen zìjǐ.",
      v: "Trái Đất là ngôi nhà chung của chúng ta. Tuy nhiên, do con người lãng phí quá nhiều, không khí và biển đều bị ô nhiễm, nhiều loài động vật vì thế cũng bị nguy hiểm đến tính mạng. Để bảo vệ Trái Đất, nhiều nơi đã cấm dùng túi ni lông. Tiết kiệm nước, điện, ít đi ô tô đều có tác dụng rất tốt. Bảo vệ Trái Đất chính là bảo vệ chính chúng ta.",
      qs: [
        {"q": "空气和海洋为什么受到了污染？", "v": "Vì sao không khí và biển bị ô nhiễm?", "o": ["动物太多", "人们浪费太多", "下雨太多"], "a": 1},
        {"q": "很多地方禁止使用什么？", "v": "Nhiều nơi cấm dùng cái gì?", "o": ["垃圾桶", "塑料袋", "自行车"], "a": 1},
      ] }
  },
  14: {
    dl: { lines: [
      {"r": "A", "z": "我儿子这学期数学考得不好，我批评了他。", "p": "Wǒ érzi zhè xuéqī shùxué kǎo de bù hǎo, wǒ pīpíng le tā.", "v": "Học kỳ này con trai tôi thi Toán không tốt, tôi đã phê bình cháu."},
      {"r": "B", "z": "你别总是批评，孩子更需要鼓励。", "p": "Nǐ bié zǒngshì pīpíng, háizi gèng xūyào gǔlì.", "v": "Bạn đừng lúc nào cũng phê bình, trẻ con cần được khích lệ hơn."},
      {"r": "A", "z": "可是他太粗心了，做题很马虎。", "p": "Kěshì tā tài cūxīn le, zuò tí hěn mǎhu.", "v": "Nhưng cháu cẩu thả quá, làm bài rất qua loa."},
      {"r": "B", "z": "你可以耐心地帮他养成好习惯，比如先预习再上课。", "p": "Nǐ kěyǐ nàixīn de bāng tā yǎngchéng hǎo xíguàn, bǐrú xiān yùxí zài shàng kè.", "v": "Bạn có thể kiên nhẫn giúp cháu hình thành thói quen tốt, ví dụ xem bài trước rồi mới lên lớp."},
      {"r": "A", "z": "对，他的基础也不太好，放暑假的时候我陪他好好复习。", "p": "Duì, tā de jīchǔ yě bú tài hǎo, fàng shǔjià de shíhou wǒ péi tā hǎohāor fùxí.", "v": "Đúng, nền tảng của cháu cũng không tốt lắm, nghỉ hè tôi sẽ cùng cháu ôn tập kỹ."},
      {"r": "B", "z": "他做得好的时候，记得表扬他，这样他会更自信。", "p": "Tā zuò de hǎo de shíhou, jìde biǎoyáng tā, zhèyàng tā huì gèng zìxìn.", "v": "Khi cháu làm tốt, nhớ khen cháu, như vậy cháu sẽ tự tin hơn."},
    ],
      qs: [
        {"q": "A的儿子有什么问题？", "v": "Con trai A có vấn đề gì?", "o": ["太骄傲", "不礼貌", "太粗心"], "a": 2},
        {"q": "B认为孩子更需要什么？", "v": "B cho rằng trẻ con cần gì hơn?", "o": ["考试", "鼓励", "批评"], "a": 1},
      ] },
    rd: { z: "王教授研究儿童教育已经二十年了。他认为，对于孩子，父母既要严格，也要有耐心。孩子做得棒的时候，要及时表扬；做错了，不要说他笨，而要帮他找到原因。王教授说：“每个孩子都不一样，教育孩子也是一种艺术。”",
      p: "Wáng jiàoshòu yánjiū értóng jiàoyù yǐjīng èrshí nián le. Tā rènwéi, duìyú háizi, fùmǔ jì yào yángé, yě yào yǒu nàixīn. Háizi zuò de bàng de shíhou, yào jíshí biǎoyáng; zuò cuò le, bú yào shuō tā bèn, ér yào bāng tā zhǎo dào yuányīn. Wáng jiàoshòu shuō: \"Měi ge háizi dōu bù yíyàng, jiàoyù háizi yě shì yì zhǒng yìshù.\"",
      v: "Giáo sư Vương nghiên cứu giáo dục trẻ em đã hai mươi năm. Ông cho rằng, với con cái, cha mẹ vừa phải nghiêm khắc, vừa phải kiên nhẫn. Khi con làm tốt, phải khen kịp thời; khi con làm sai, đừng nói con ngốc, mà phải giúp con tìm ra nguyên nhân. Giáo sư Vương nói: “Mỗi đứa trẻ đều khác nhau, dạy con cũng là một nghệ thuật.”",
      qs: [
        {"q": "王教授认为父母对孩子应该怎么样？", "v": "Giáo sư Vương cho rằng cha mẹ nên đối xử với con thế nào?", "o": ["既严格又有耐心", "什么都允许", "只要严格"], "a": 0},
        {"q": "孩子做错了，父母应该怎么做？", "v": "Khi con làm sai, cha mẹ nên làm gì?", "o": ["不管他", "帮他找原因", "说他笨"], "a": 1},
      ] }
  },
  15: {
    dl: { lines: [
      {"r": "A", "z": "你新租的房子怎么样？", "p": "Nǐ xīn zū de fángzi zěnmeyàng?", "v": "Căn nhà bạn mới thuê thế nào?"},
      {"r": "B", "z": "挺好的，客厅很大，厨房和卫生间也很干净。", "p": "Tǐng hǎo de, kètīng hěn dà, chúfáng hé wèishēngjiān yě hěn gānjìng.", "v": "Khá tốt, phòng khách rộng, bếp và nhà vệ sinh cũng rất sạch."},
      {"r": "A", "z": "家具多吗？", "p": "Jiājù duō ma?", "v": "Có nhiều đồ đạc không?"},
      {"r": "B", "z": "房东留了一个沙发和一张桌子，就是窗户有点儿脏。", "p": "Fángdōng liú le yí ge shāfā hé yì zhāng zhuōzi, jiù shì chuānghu yǒudiǎnr zāng.", "v": "Chủ nhà để lại một bộ sofa và một cái bàn, chỉ có cửa sổ hơi bẩn."},
      {"r": "A", "z": "周末我去帮你收拾吧，顺便帮你擦窗户。", "p": "Zhōumò wǒ qù bāng nǐ shōushi ba, shùnbiàn bāng nǐ cā chuānghu.", "v": "Cuối tuần tôi qua giúp bạn dọn dẹp nhé, tiện thể lau cửa sổ giúp bạn."},
      {"r": "B", "z": "太好了！谢谢你！", "p": "Tài hǎo le! Xièxie nǐ!", "v": "Tuyệt quá! Cảm ơn bạn!"},
    ],
      qs: [
        {"q": "B的房子怎么样？", "v": "Nhà của B thế nào?", "o": ["厨房很脏", "没有家具", "客厅很大"], "a": 2},
        {"q": "周末A要帮B做什么？", "v": "Cuối tuần A sẽ giúp B làm gì?", "o": ["找房子", "收拾房子，擦窗户", "买沙发"], "a": 1},
      ] },
    rd: { z: "大卫以前很懒，房间总是很乱，衣服脱了就扔在沙发上，垃圾也不倒。有一天，房东来敲门，看到房间这么脏，给他提了意见。大卫觉得很不好意思。从那以后，他每天都整理房间，把衣服挂好，每个星期还打扫厨房和厕所。他发现，房间干净了，生活也更美好了。",
      p: "Dàwèi yǐqián hěn lǎn, fángjiān zǒngshì hěn luàn, yīfu tuō le jiù rēng zài shāfā shàng, lājī yě bú dào. Yǒu yì tiān, fángdōng lái qiāo mén, kàn dào fángjiān zhème zāng, gěi tā tí le yìjiàn. Dàwèi juéde hěn bù hǎoyìsi. Cóng nà yǐhòu, tā měi tiān dōu zhěnglǐ fángjiān, bǎ yīfu guà hǎo, měi ge xīngqī hái dǎsǎo chúfáng hé cèsuǒ. Tā fāxiàn, fángjiān gānjìng le, shēnghuó yě gèng měihǎo le.",
      v: "Trước đây David rất lười, phòng lúc nào cũng bừa bộn, quần áo cởi ra là vứt lên sofa, rác cũng không đổ. Một hôm, chủ nhà đến gõ cửa, thấy phòng bẩn như vậy liền góp ý với cậu. David thấy rất ngại. Từ đó trở đi, ngày nào cậu cũng sắp xếp phòng, treo quần áo gọn gàng, tuần nào cũng dọn bếp và nhà vệ sinh. Cậu phát hiện, phòng sạch rồi thì cuộc sống cũng tốt đẹp hơn.",
      qs: [
        {"q": "大卫以前怎么样？", "v": "Trước đây David thế nào?", "o": ["经常擦窗户", "很懒，房间很乱", "很爱干净"], "a": 1},
        {"q": "房东来了以后，大卫有什么变化？", "v": "Sau khi chủ nhà đến, David thay đổi thế nào?", "o": ["每天整理房间", "换了房东", "搬家了"], "a": 0},
      ] }
  },
  16: {
    dl: { lines: [
      {"r": "A", "z": "周末天气很好，我们去郊区玩儿吧？", "p": "Zhōumò tiānqì hěn hǎo, wǒmen qù jiāoqū wánr ba?", "v": "Cuối tuần thời tiết đẹp, chúng ta ra ngoại ô chơi nhé?"},
      {"r": "B", "z": "好啊，听说那儿有一座山，景色特别美。", "p": "Hǎo a, tīngshuō nàr yǒu yí zuò shān, jǐngsè tèbié měi.", "v": "Được đấy, nghe nói ở đó có một ngọn núi, phong cảnh đặc biệt đẹp."},
      {"r": "A", "z": "山上有森林，夏天也很凉快。", "p": "Shān shàng yǒu sēnlín, xiàtiān yě hěn liángkuai.", "v": "Trên núi có rừng, mùa hè cũng rất mát."},
      {"r": "B", "z": "听说那儿有许多植物，有的叶子比手还大。", "p": "Tīngshuō nàr yǒu xǔduō zhíwù, yǒu de yèzi bǐ shǒu hái dà.", "v": "Nghe nói ở đó có rất nhiều loài thực vật, có loại lá còn to hơn bàn tay."},
      {"r": "A", "z": "真有意思！我们带点儿吃的，在大树下休息。", "p": "Zhēn yǒu yìsi! Wǒmen dài diǎnr chī de, zài dà shù xià xiūxi.", "v": "Thú vị thật! Chúng ta mang ít đồ ăn, nghỉ dưới gốc cây to."},
      {"r": "B", "z": "好，那我们早上七点出发吧。", "p": "Hǎo, nà wǒmen zǎoshang qī diǎn chūfā ba.", "v": "Được, vậy bảy giờ sáng chúng ta xuất phát nhé."},
    ],
      qs: [
        {"q": "他们打算去哪儿？", "v": "Họ định đi đâu?", "o": ["郊区的山上", "动物园", "长江"], "a": 0},
        {"q": "他们几点出发？", "v": "Mấy giờ họ xuất phát?", "o": ["早上七点", "早上九点", "中午"], "a": 0},
      ] },
    rd: { z: "长江是亚洲最长的河。长江周围的气候比较暖和，许多植物都长得很好。以前那儿的森林里甚至有老虎。可是，由于人们不注意保护环境，许多动物都死了，老虎也几乎看不到了。于是，人们开始保护那里的自然环境。",
      p: "Cháng Jiāng shì Yàzhōu zuì cháng de hé. Cháng Jiāng zhōuwéi de qìhòu bǐjiào nuǎnhuo, xǔduō zhíwù dōu zhǎng de hěn hǎo. Yǐqián nàr de sēnlín lǐ shènzhì yǒu lǎohǔ. Kěshì, yóuyú rénmen bú zhùyì bǎohù huánjìng, xǔduō dòngwù dōu sǐ le, lǎohǔ yě jīhū kàn bu dào le. Yúshì, rénmen kāishǐ bǎohù nàli de zìrán huánjìng.",
      v: "Trường Giang là con sông dài nhất châu Á. Khí hậu quanh Trường Giang khá ấm áp, nhiều loài thực vật mọc rất tốt. Trước đây trong rừng ở đó thậm chí còn có hổ. Nhưng do con người không chú ý bảo vệ môi trường, nhiều loài động vật đã chết, hổ cũng gần như không còn thấy nữa. Vì thế, con người bắt đầu bảo vệ môi trường tự nhiên ở đó.",
      qs: [
        {"q": "长江周围的气候怎么样？", "v": "Khí hậu quanh Trường Giang thế nào?", "o": ["非常冷", "特别干", "比较暖和"], "a": 2},
        {"q": "为什么许多动物死了？", "v": "Vì sao nhiều loài động vật đã chết?", "o": ["人们不注意保护环境", "天气太冷", "老虎太多"], "a": 0},
      ] }
  },
  17: {
    dl: { lines: [
      {"r": "A", "z": "我给你打了好几次电话，一直占线。", "p": "Wǒ gěi nǐ dǎ le hǎo jǐ cì diànhuà, yìzhí zhànxiàn.", "v": "Tôi gọi cho bạn mấy lần, máy toàn bận."},
      {"r": "B", "z": "不好意思，我在跟一位记者谈工作。有什么消息吗？", "p": "Bù hǎoyìsi, wǒ zài gēn yí wèi jìzhě tán gōngzuò. Yǒu shénme xiāoxi ma?", "v": "Xin lỗi, tôi đang bàn công việc với một nhà báo. Có tin gì không?"},
      {"r": "A", "z": "那家公司让我们把详细的材料寄过去。", "p": "Nà jiā gōngsī ràng wǒmen bǎ xiángxì de cáiliào jì guòqu.", "v": "Công ty kia bảo chúng ta gửi tài liệu chi tiết qua."},
      {"r": "B", "z": "现在谁还去邮局啊？用电子邮件发过去，几秒就到了。", "p": "Xiànzài shéi hái qù yóujú a? Yòng diànzǐ yóujiàn fā guòqu, jǐ miǎo jiù dào le.", "v": "Bây giờ ai còn đến bưu điện nữa? Gửi email qua, vài giây là tới."},
      {"r": "A", "z": "他们的邮件地址是什么？", "p": "Tāmen de yóujiàn dìzhǐ shì shénme?", "v": "Địa chỉ email của họ là gì?"},
      {"r": "B", "z": "他们的网站上有，我马上发短信告诉你。", "p": "Tāmen de wǎngzhàn shàng yǒu, wǒ mǎshàng fā duǎnxìn gàosu nǐ.", "v": "Trên trang web của họ có, tôi nhắn tin báo bạn ngay."},
    ],
      qs: [
        {"q": "A给B打电话的时候怎么了？", "v": "Khi A gọi cho B thì sao?", "o": ["手机坏了", "一直占线", "没人接"], "a": 1},
        {"q": "B认为应该怎么把材料给那家公司？", "v": "B cho rằng nên gửi tài liệu cho công ty kia bằng cách nào?", "o": ["发传真", "去邮局寄", "发电子邮件"], "a": 2},
      ] },
    rd: { z: "随着科学技术的发展，人们交流的方式也发生了很大的变化。二十世纪的时候，人们经常写信，寄一次信要好几天。后来有了传真和手机短信。现在，互联网能提供各种信息，打开手机就能看到国际新闻。根据调查，现在几乎每个年轻人每天都使用互联网。",
      p: "Suízhe kēxué jìshù de fāzhǎn, rénmen jiāoliú de fāngshì yě fāshēng le hěn dà de biànhuà. Èrshí shìjì de shíhou, rénmen jīngcháng xiě xìn, jì yí cì xìn yào hǎo jǐ tiān. Hòulái yǒu le chuánzhēn hé shǒujī duǎnxìn. Xiànzài, hùliánwǎng néng tígōng gè zhǒng xìnxī, dǎkāi shǒujī jiù néng kàn dào guójì xīnwén. Gēnjù diàochá, xiànzài jīhū měi ge niánqīng rén měi tiān dōu shǐyòng hùliánwǎng.",
      v: "Cùng với sự phát triển của khoa học kỹ thuật, cách con người giao tiếp cũng thay đổi rất lớn. Vào thế kỷ hai mươi, người ta thường viết thư, gửi một lá thư mất mấy ngày. Sau đó có fax và tin nhắn điện thoại. Bây giờ Internet cung cấp đủ loại thông tin, mở điện thoại là xem được tin tức quốc tế. Theo khảo sát, hiện nay gần như người trẻ nào cũng dùng Internet mỗi ngày.",
      qs: [
        {"q": "二十世纪的时候，人们经常怎么交流？", "v": "Vào thế kỷ hai mươi, người ta thường giao tiếp bằng cách nào?", "o": ["发电子邮件", "写信", "用互联网"], "a": 1},
        {"q": "根据调查，现在的年轻人怎么样？", "v": "Theo khảo sát, người trẻ bây giờ thế nào?", "o": ["不看新闻", "每天使用互联网", "经常写信"], "a": 1},
      ] }
  },
  18: {
    dl: { lines: [
      {"r": "A", "z": "服务员，请问你们餐厅有什么好吃的？", "p": "Fúwùyuán, qǐngwèn nǐmen cāntīng yǒu shénme hǎochī de?", "v": "Phục vụ ơi, cho hỏi nhà hàng mình có món gì ngon?"},
      {"r": "B", "z": "我们的西红柿鸡蛋汤很有名，味道酸酸甜甜的。", "p": "Wǒmen de xīhóngshì jīdàn tāng hěn yǒumíng, wèidao suānsuān tiántián de.", "v": "Canh cà chua trứng của chúng tôi rất nổi tiếng, vị chua chua ngọt ngọt."},
      {"r": "A", "z": "好，来一个。菜别太辣，也别太咸。", "p": "Hǎo, lái yí ge. Cài bié tài là, yě bié tài xián.", "v": "Được, cho một bát. Món ăn đừng cay quá, cũng đừng mặn quá."},
      {"r": "B", "z": "没问题。您要喝点儿什么？我们有葡萄汁和苹果汁。", "p": "Méi wèntí. Nín yào hē diǎnr shénme? Wǒmen yǒu pútaozhī hé píngguǒzhī.", "v": "Không vấn đề gì. Bạn muốn uống gì? Chúng tôi có nước ép nho và nước ép táo."},
      {"r": "A", "z": "一杯葡萄汁，稍微少放点儿糖。", "p": "Yì bēi pútaozhī, shāowēi shǎo fàng diǎnr táng.", "v": "Một cốc nước ép nho, cho ít đường một chút."},
      {"r": "B", "z": "好的，马上就来。", "p": "Hǎo de, mǎshàng jiù lái.", "v": "Vâng, có ngay ạ."},
    ],
      qs: [
        {"q": "这个餐厅什么菜很有名？", "v": "Món nào của nhà hàng này nổi tiếng?", "o": ["烤鸭", "包子", "西红柿鸡蛋汤"], "a": 2},
        {"q": "A要喝什么？", "v": "A muốn uống gì?", "o": ["苹果汁", "葡萄汁", "矿泉水"], "a": 1},
      ] },
    rd: { z: "我妈妈做饭很好吃。她说，做菜首先要选择新鲜的东西，其次要仔细，盐和糖放多少都很重要。她做的包子特别香，我一次能吃五个。可惜我现在在别的城市工作，很少能吃到妈妈做的饭。有时候想起家里的味道，我心里有点儿酸。",
      p: "Wǒ māma zuò fàn hěn hǎochī. Tā shuō, zuò cài shǒuxiān yào xuǎnzé xīnxiān de dōngxi, qícì yào zǐxì, yán hé táng fàng duōshao dōu hěn zhòngyào. Tā zuò de bāozi tèbié xiāng, wǒ yí cì néng chī wǔ ge. Kěxī wǒ xiànzài zài bié de chéngshì gōngzuò, hěn shǎo néng chī dào māma zuò de fàn. Yǒu shíhou xiǎngqǐ jiāli de wèidao, wǒ xīnli yǒudiǎnr suān.",
      v: "Mẹ tôi nấu ăn rất ngon. Mẹ nói, nấu ăn trước hết phải chọn đồ tươi, sau đó phải tỉ mỉ, cho bao nhiêu muối và đường đều rất quan trọng. Bánh bao mẹ làm đặc biệt thơm, tôi một lần ăn được năm cái. Tiếc là bây giờ tôi làm việc ở thành phố khác, ít khi được ăn cơm mẹ nấu. Có lúc nhớ đến hương vị ở nhà, trong lòng tôi thấy hơi chạnh lòng.",
      qs: [
        {"q": "妈妈认为做菜首先要注意什么？", "v": "Mẹ cho rằng nấu ăn trước hết phải chú ý điều gì?", "o": ["多放盐", "选择新鲜的东西", "多放糖"], "a": 1},
        {"q": "“我”为什么很少能吃到妈妈做的饭？", "v": "Vì sao “tôi” ít khi được ăn cơm mẹ nấu?", "o": ["在别的城市工作", "不喜欢吃", "妈妈不做饭了"], "a": 0},
      ] }
  },
  19: {
    dl: { lines: [
      {"r": "A", "z": "快点儿！我们的航班十点起飞，恐怕来不及了。", "p": "Kuài diǎnr! Wǒmen de hángbān shí diǎn qǐfēi, kǒngpà láibují le.", "v": "Nhanh lên! Chuyến bay của chúng ta mười giờ cất cánh, e là không kịp mất."},
      {"r": "B", "z": "别着急，现在才八点，来得及。", "p": "Bié zháojí, xiànzài cái bā diǎn, láidejí.", "v": "Đừng sốt ruột, bây giờ mới tám giờ, vẫn kịp."},
      {"r": "A", "z": "可是高速公路上堵车很严重。", "p": "Kěshì gāosù gōnglù shàng dǔchē hěn yánzhòng.", "v": "Nhưng trên đường cao tốc tắc đường nghiêm trọng lắm."},
      {"r": "B", "z": "我问问司机……司机说前面有一条路，可以直接到机场。", "p": "Wǒ wènwen sījī… Sījī shuō qiánmian yǒu yì tiáo lù, kěyǐ zhíjiē dào jīchǎng.", "v": "Để tôi hỏi tài xế… Tài xế nói phía trước có một con đường, có thể đi thẳng tới sân bay."},
      {"r": "A", "z": "太好了。到了机场我们先去换登机牌。", "p": "Tài hǎo le. Dào le jīchǎng wǒmen xiān qù huàn dēngjīpái.", "v": "Tốt quá. Đến sân bay chúng ta đi đổi thẻ lên máy bay trước."},
      {"r": "B", "z": "好的。而且我刚收到短信，航班推迟了半个小时。", "p": "Hǎo de. Érqiě wǒ gāng shōudào duǎnxìn, hángbān tuīchí le bàn ge xiǎoshí.", "v": "Được. Mà tôi vừa nhận được tin nhắn, chuyến bay bị hoãn nửa tiếng."},
    ],
      qs: [
        {"q": "路上有什么问题？", "v": "Trên đường có vấn đề gì?", "o": ["迷路了", "堵车很严重", "车坏了"], "a": 1},
        {"q": "他们的航班怎么了？", "v": "Chuyến bay của họ làm sao?", "o": ["已经起飞了", "推迟了半个小时", "准时起飞"], "a": 1},
      ] },
    rd: { z: "去年夏天，我和朋友乘坐飞机去中国南方旅行。飞机准时降落以后，导游带我们去了很多地方。有一天我们自己出去玩儿，在城市里迷路了。一位警察很热情地帮我们找到了方向。那趟旅行，路上的景色和人都给我留下了很深的印象。",
      p: "Qùnián xiàtiān, wǒ hé péngyou chéngzuò fēijī qù Zhōngguó nánfāng lǚxíng. Fēijī zhǔnshí jiàngluò yǐhòu, dǎoyóu dài wǒmen qù le hěn duō dìfang. Yǒu yì tiān wǒmen zìjǐ chūqu wánr, zài chéngshì lǐ mílù le. Yí wèi jǐngchá hěn rèqíng de bāng wǒmen zhǎo dào le fāngxiàng. Nà tàng lǚxíng, lùshang de jǐngsè hé rén dōu gěi wǒ liúxià le hěn shēn de yìnxiàng.",
      v: "Mùa hè năm ngoái, tôi và bạn đi máy bay đến miền Nam Trung Quốc du lịch. Máy bay hạ cánh đúng giờ, hướng dẫn viên đưa chúng tôi đi nhiều nơi. Có một hôm chúng tôi tự đi chơi, bị lạc đường trong thành phố. Một anh cảnh sát rất nhiệt tình giúp chúng tôi tìm được hướng đi. Chuyến du lịch đó, phong cảnh và con người trên đường đều để lại cho tôi ấn tượng rất sâu sắc.",
      qs: [
        {"q": "“我们”迷路的时候，谁帮了“我们”？", "v": "Khi “chúng tôi” bị lạc, ai đã giúp?", "o": ["导游", "司机", "一位警察"], "a": 2},
        {"q": "“我们”是怎么去南方的？", "v": "“Chúng tôi” đến miền Nam bằng gì?", "o": ["开车", "坐火车", "坐飞机"], "a": 2},
      ] }
  }
};
