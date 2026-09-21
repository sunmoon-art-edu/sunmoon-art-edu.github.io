/* Nghe – nói – đọc cho YCT 4: hội thoại + bài đọc từng bài */
const ND = {
  0: {  // 你对中国功夫感兴趣吗？
    dl: { lines: [
      {"r": "A", "z": "大卫，你对中国功夫感兴趣吗？", "p": "Dàwèi, nǐ duì Zhōngguó gōngfu gǎn xìngqù ma?", "v": "David, bạn có thích võ Trung Quốc không?"},
      {"r": "B", "z": "非常感兴趣！我每个星期都学功夫。", "p": "Fēicháng gǎn xìngqù! Wǒ měi ge xīngqī dōu xué gōngfu.", "v": "Thích lắm! Tuần nào mình cũng học võ."},
      {"r": "A", "z": "真厉害！我对弹钢琴感兴趣。", "p": "Zhēn lìhai! Wǒ duì tán gāngqín gǎn xìngqù.", "v": "Giỏi ghê! Mình thì thích chơi piano."},
      {"r": "B", "z": "明天学校有表演，你参加吗？", "p": "Míngtiān xuéxiào yǒu biǎoyǎn, nǐ cānjiā ma?", "v": "Mai trường có buổi biểu diễn, bạn có tham gia không?"},
      {"r": "A", "z": "参加！我的节目是弹钢琴。", "p": "Cānjiā! Wǒ de jiémù shì tán gāngqín.", "v": "Có! Tiết mục của mình là chơi piano."},
      {"r": "B", "z": "太好了，我一定去看！", "p": "Tài hǎo le, wǒ yídìng qù kàn!", "v": "Tuyệt quá, mình nhất định sẽ đi xem!"}
    ],
      qs: [
        {"q": "大卫对什么感兴趣？", "v": "David thích gì?", "o": ["弹钢琴", "中国功夫", "打网球"], "a": 1},
        {"q": "明天学校有什么？", "v": "Ngày mai trường có gì?", "o": ["考试", "比赛", "表演"], "a": 2}
      ] },
    rd: { z: "小月特别喜欢运动。她会打乒乓球，也会打网球和排球。上个星期，她参加了学校的乒乓球比赛，得了第一。大家都说她非常厉害。",
      p: "Xiǎoyuè tèbié xǐhuan yùndòng. Tā huì dǎ pīngpāngqiú, yě huì dǎ wǎngqiú hé páiqiú. Shàng ge xīngqī, tā cānjiāle xuéxiào de pīngpāngqiú bǐsài, déle dì-yī. Dàjiā dōu shuō tā fēicháng lìhai.",
      v: "Tiểu Nguyệt đặc biệt thích thể thao. Bạn ấy biết chơi bóng bàn, cũng biết chơi quần vợt và bóng chuyền. Tuần trước, bạn ấy thi bóng bàn ở trường và được giải nhất. Ai cũng khen bạn ấy giỏi ghê.",
      qs: [
        {"q": "小月参加了什么比赛？", "v": "Tiểu Nguyệt đã thi môn gì?", "o": ["乒乓球比赛", "网球比赛", "排球比赛"], "a": 0},
        {"q": "小月在比赛中得了第几？", "v": "Tiểu Nguyệt được giải mấy?", "o": ["第二", "第一", "第三"], "a": 1}
      ] }
  },
  1: {  // 兔子更可爱。
    dl: { lines: [
      {"r": "A", "z": "你喜欢什么动物？", "p": "Nǐ xǐhuan shénme dòngwù?", "v": "Bạn thích con vật nào?"},
      {"r": "B", "z": "我喜欢猫，猫很可爱。", "p": "Wǒ xǐhuan māo, māo hěn kě'ài.", "v": "Mình thích mèo, mèo đáng yêu lắm."},
      {"r": "A", "z": "我觉得兔子更可爱。", "p": "Wǒ juéde tùzi gèng kě'ài.", "v": "Mình thấy thỏ còn đáng yêu hơn."},
      {"r": "B", "z": "为什么？", "p": "Wèi shénme?", "v": "Tại sao?"},
      {"r": "A", "z": "兔子的脸圆圆的，耳朵特别长。", "p": "Tùzi de liǎn yuányuán de, ěrduo tèbié cháng.", "v": "Mặt thỏ tròn tròn, tai lại rất dài."},
      {"r": "B", "z": "大象的耳朵更大！", "p": "Dàxiàng de ěrduo gèng dà!", "v": "Tai voi còn to hơn!"}
    ],
      qs: [
        {"q": "兔子的耳朵怎么样？", "v": "Tai thỏ thế nào?", "o": ["特别长", "特别短", "圆圆的"], "a": 0},
        {"q": "什么动物的耳朵更大？", "v": "Con vật nào tai to hơn?", "o": ["兔子", "大象", "猫"], "a": 1}
      ] },
    rd: { z: "草地上有很多花，花上有很多蝴蝶。一只小兔子在草地上吃草。它的腿很短，但是跑得快极了。它的眼睛红红的，可爱极了。",
      p: "Cǎodì shang yǒu hěn duō huā, huā shang yǒu hěn duō húdié. Yì zhī xiǎo tùzi zài cǎodì shang chī cǎo. Tā de tuǐ hěn duǎn, dànshì pǎo de kuài jí le. Tā de yǎnjing hónghóng de, kě'ài jí le.",
      v: "Trên bãi cỏ có nhiều hoa, trên hoa có nhiều bướm. Một chú thỏ con đang ăn cỏ trên bãi cỏ. Chân nó ngắn nhưng chạy nhanh cực kỳ. Mắt nó đỏ đỏ, đáng yêu quá đi.",
      qs: [
        {"q": "花上有什么？", "v": "Trên hoa có gì?", "o": ["兔子", "虫子", "蝴蝶"], "a": 2},
        {"q": "小兔子的腿怎么样？", "v": "Chân thỏ con thế nào?", "o": ["很长", "很短", "很胖"], "a": 1}
      ] }
  },
  2: {  // 电梯坏了。
    dl: { lines: [
      {"r": "A", "z": "你家住在几层？", "p": "Nǐ jiā zhù zài jǐ céng?", "v": "Nhà bạn ở tầng mấy?"},
      {"r": "B", "z": "我家住在十层。", "p": "Wǒ jiā zhù zài shí céng.", "v": "Nhà mình ở tầng 10."},
      {"r": "A", "z": "电梯坏了，怎么办？", "p": "Diàntī huài le, zěnme bàn?", "v": "Thang máy hỏng rồi, làm sao đây?"},
      {"r": "B", "z": "没关系，我们走上去吧。", "p": "Méi guānxi, wǒmen zǒu shangqu ba.", "v": "Không sao, tụi mình đi bộ lên nhé."},
      {"r": "A", "z": "好。你的钥匙呢？", "p": "Hǎo. Nǐ de yàoshi ne?", "v": "Được. Chìa khoá của bạn đâu?"},
      {"r": "B", "z": "在我的书包里。", "p": "Zài wǒ de shūbāo li.", "v": "Trong cặp của mình."}
    ],
      qs: [
        {"q": "他家住在几层？", "v": "Nhà bạn ấy ở tầng mấy?", "o": ["四层", "一层", "十层"], "a": 2},
        {"q": "电梯怎么了？", "v": "Thang máy làm sao?", "o": ["很新", "坏了", "很干净"], "a": 1}
      ] },
    rd: { z: "我们搬家了，新家在学校附近，很安静。我的房间不大，但是很干净。窗户旁边有一张床，床和桌子中间有一个小沙发。我们的邻居是明明家，他经常来找我玩。",
      p: "Wǒmen bān jiā le, xīn jiā zài xuéxiào fùjìn, hěn ānjìng. Wǒ de fángjiān bú dà, dànshì hěn gānjìng. Chuānghu pángbiān yǒu yì zhāng chuáng, chuáng hé zhuōzi zhōngjiān yǒu yí ge xiǎo shāfā. Wǒmen de línjū shì Míngming jiā, tā jīngcháng lái zhǎo wǒ wán.",
      v: "Nhà mình chuyển nhà rồi, nhà mới ở gần trường, rất yên tĩnh. Phòng mình không to nhưng rất sạch. Cạnh cửa sổ có một cái giường, giữa giường và bàn có một chiếc sô pha nhỏ. Hàng xóm là nhà Minh Minh, bạn ấy thường sang tìm mình chơi.",
      qs: [
        {"q": "新家在哪儿？", "v": "Nhà mới ở đâu?", "o": ["商店附近", "学校附近", "医院附近"], "a": 1},
        {"q": "床和桌子中间有什么？", "v": "Giữa giường và bàn có gì?", "o": ["冰箱", "椅子", "小沙发"], "a": 2}
      ] }
  },
  3: {  // 每个人都有自己的习惯。
    dl: { lines: [
      {"r": "A", "z": "小月，你每天几点醒？", "p": "Xiǎoyuè, nǐ měi tiān jǐ diǎn xǐng?", "v": "Tiểu Nguyệt, mỗi ngày bạn thức dậy lúc mấy giờ?"},
      {"r": "B", "z": "我六点就醒了，已经习惯了。", "p": "Wǒ liù diǎn jiù xǐng le, yǐjīng xíguàn le.", "v": "Sáu giờ mình đã dậy rồi, quen rồi."},
      {"r": "A", "z": "醒了以后你先做什么？", "p": "Xǐngle yǐhòu nǐ xiān zuò shénme?", "v": "Dậy rồi thì bạn làm gì trước?"},
      {"r": "B", "z": "先刷牙，然后吃早饭。", "p": "Xiān shuāyá, ránhòu chī zǎofàn.", "v": "Đánh răng trước, sau đó ăn sáng."},
      {"r": "A", "z": "我经常七点才醒，有时候会迟到。", "p": "Wǒ jīngcháng qī diǎn cái xǐng, yǒu shíhou huì chídào.", "v": "Mình hay bảy giờ mới dậy, có lúc bị muộn."},
      {"r": "B", "z": "那你要早一点儿睡觉。", "p": "Nà nǐ yào zǎo yìdiǎnr shuìjiào.", "v": "Vậy bạn phải đi ngủ sớm hơn một chút."}
    ],
      qs: [
        {"q": "小月每天几点醒？", "v": "Mỗi ngày Tiểu Nguyệt dậy lúc mấy giờ?", "o": ["七点", "六点", "八点"], "a": 1},
        {"q": "小月醒了以后先做什么？", "v": "Dậy rồi Tiểu Nguyệt làm gì trước?", "o": ["吃早饭", "看书", "刷牙"], "a": 2}
      ] },
    rd: { z: "爷爷有很多好习惯。他每天早上五点就起床，先去散步，然后回家吃早饭。吃完早饭，他戴上眼镜看报纸。晚上九点，他准时睡觉。",
      p: "Yéye yǒu hěn duō hǎo xíguàn. Tā měi tiān zǎoshang wǔ diǎn jiù qǐchuáng, xiān qù sànbù, ránhòu huí jiā chī zǎofàn. Chī wán zǎofàn, tā dàishang yǎnjìng kàn bàozhǐ. Wǎnshang jiǔ diǎn, tā zhǔnshí shuìjiào.",
      v: "Ông có nhiều thói quen tốt. Mỗi sáng ông dậy từ năm giờ, đi dạo trước, sau đó về nhà ăn sáng. Ăn sáng xong, ông đeo kính đọc báo. Chín giờ tối, ông đi ngủ đúng giờ.",
      qs: [
        {"q": "爷爷起床以后先做什么？", "v": "Ông dậy rồi làm gì trước?", "o": ["散步", "看报纸", "吃早饭"], "a": 0},
        {"q": "爷爷晚上几点睡觉？", "v": "Buổi tối ông đi ngủ lúc mấy giờ?", "o": ["五点", "十点", "九点"], "a": 2}
      ] }
  },
  4: {  // 他们多么年轻啊！
    dl: { lines: [
      {"r": "A", "z": "你看，这是我家的照片。", "p": "Nǐ kàn, zhè shì wǒ jiā de zhàopiàn.", "v": "Bạn xem, đây là ảnh nhà mình."},
      {"r": "B", "z": "这两个人是谁？他们多么年轻啊！", "p": "Zhè liǎng ge rén shì shéi? Tāmen duōme niánqīng a!", "v": "Hai người này là ai? Họ trẻ quá!"},
      {"r": "A", "z": "是我爷爷奶奶，那时候他们二十岁。", "p": "Shì wǒ yéye nǎinai, nà shíhou tāmen èrshí suì.", "v": "Là ông bà mình, hồi đó ông bà 20 tuổi."},
      {"r": "B", "z": "这个孩子是谁？", "p": "Zhège háizi shì shéi?", "v": "Đứa bé này là ai?"},
      {"r": "A", "z": "是我叔叔，他是爷爷的儿子。", "p": "Shì wǒ shūshu, tā shì yéye de érzi.", "v": "Là chú mình, chú là con trai của ông."},
      {"r": "B", "z": "你们家真幸福！", "p": "Nǐmen jiā zhēn xìngfú!", "v": "Nhà bạn hạnh phúc thật!"}
    ],
      qs: [
        {"q": "照片上的两个人是谁？", "v": "Hai người trong ảnh là ai?", "o": ["爸爸妈妈", "叔叔阿姨", "爷爷奶奶"], "a": 2},
        {"q": "那个孩子是谁？", "v": "Đứa bé đó là ai?", "o": ["爸爸", "叔叔", "哥哥"], "a": 1}
      ] },
    rd: { z: "阿姨有两个孩子，一个儿子，一个女儿。儿子叫丁丁，女儿叫小月。他们俩互相照顾，也很有礼貌。见到别人的时候，他们都会说“您好”。大家都很喜欢他们。",
      p: "Āyí yǒu liǎng ge háizi, yí ge érzi, yí ge nǚ'ér. Érzi jiào Dīngding, nǚ'ér jiào Xiǎoyuè. Tāmen liǎ hùxiāng zhàogù, yě hěn yǒu lǐmào. Jiàndào biérén de shíhou, tāmen dōu huì shuō “Nín hǎo”. Dàjiā dōu hěn xǐhuan tāmen.",
      v: "Cô có hai người con, một trai một gái. Con trai tên Đinh Đinh, con gái tên Tiểu Nguyệt. Hai bạn chăm sóc lẫn nhau, lại rất lễ phép. Gặp người khác, hai bạn đều chào “Cháu chào ạ”. Ai cũng quý hai bạn.",
      qs: [
        {"q": "阿姨的女儿叫什么？", "v": "Con gái của cô tên gì?", "o": ["小月", "丁丁", "明明"], "a": 0},
        {"q": "见到别人的时候，他们说什么？", "v": "Gặp người khác, hai bạn nói gì?", "o": ["再见", "您好", "谢谢"], "a": 1}
      ] }
  },
  5: {  // 我经常去体育馆锻炼身体。
    dl: { lines: [
      {"r": "A", "z": "大卫，你的身体真好！", "p": "Dàwèi, nǐ de shēntǐ zhēn hǎo!", "v": "David, bạn khoẻ thật đấy!"},
      {"r": "B", "z": "因为我经常去体育馆锻炼身体。", "p": "Yīnwèi wǒ jīngcháng qù tǐyùguǎn duànliàn shēntǐ.", "v": "Vì mình thường đến nhà thi đấu tập thể dục."},
      {"r": "A", "z": "锻炼的时候累吗？", "p": "Duànliàn de shíhou lèi ma?", "v": "Lúc tập có mệt không?"},
      {"r": "B", "z": "很累，流很多汗，但是要坚持。", "p": "Hěn lèi, liú hěn duō hàn, dànshì yào jiānchí.", "v": "Mệt lắm, đổ nhiều mồ hôi, nhưng phải kiên trì."},
      {"r": "A", "z": "我也应该努力锻炼。", "p": "Wǒ yě yīnggāi nǔlì duànliàn.", "v": "Mình cũng nên chăm tập."},
      {"r": "B", "z": "明天我们一起去吧！", "p": "Míngtiān wǒmen yìqǐ qù ba!", "v": "Mai tụi mình cùng đi nhé!"}
    ],
      qs: [
        {"q": "大卫经常去哪儿锻炼？", "v": "David thường tập ở đâu?", "o": ["体育馆", "公园", "学校"], "a": 0},
        {"q": "大卫说锻炼身体要怎么样？", "v": "David nói tập thể dục phải thế nào?", "o": ["要坚持", "要停", "要休息"], "a": 0}
      ] },
    rd: { z: "昨天弟弟发烧了，妈妈带他去医院。护士说要打针。弟弟以前很害怕打针，但是这次他很勇敢，一点儿也没哭。",
      p: "Zuótiān dìdi fāshāo le, māma dài tā qù yīyuàn. Hùshi shuō yào dǎzhēn. Dìdi yǐqián hěn hàipà dǎzhēn, dànshì zhè cì tā hěn yǒnggǎn, yìdiǎnr yě méi kū.",
      v: "Hôm qua em trai bị sốt, mẹ đưa em đi bệnh viện. Cô y tá nói phải tiêm. Trước đây em rất sợ tiêm, nhưng lần này em rất dũng cảm, không khóc chút nào.",
      qs: [
        {"q": "弟弟怎么了？", "v": "Em trai bị làm sao?", "o": ["迟到了", "迷路了", "发烧了"], "a": 2},
        {"q": "这次打针的时候弟弟怎么样？", "v": "Lần này lúc tiêm em trai thế nào?", "o": ["很勇敢", "哭了", "很害怕"], "a": 0}
      ] }
  },
  6: {  // 北京一共有四个季节。
    dl: { lines: [
      {"r": "A", "z": "北京一年有几个季节？", "p": "Běijīng yì nián yǒu jǐ ge jìjié?", "v": "Bắc Kinh một năm có mấy mùa?"},
      {"r": "B", "z": "有四个：春季、夏季、秋季、冬季。", "p": "Yǒu sì ge: chūnjì, xiàjì, qiūjì, dōngjì.", "v": "Có bốn mùa: xuân, hạ, thu, đông."},
      {"r": "A", "z": "你最喜欢哪个季节？", "p": "Nǐ zuì xǐhuan nǎge jìjié?", "v": "Bạn thích mùa nào nhất?"},
      {"r": "B", "z": "我喜欢秋季，天气很凉快。", "p": "Wǒ xǐhuan qiūjì, tiānqì hěn liángkuai.", "v": "Mình thích mùa thu, trời mát mẻ."},
      {"r": "A", "z": "听说北京最近很冷。", "p": "Tīngshuō Běijīng zuìjìn hěn lěng.", "v": "Nghe nói dạo này Bắc Kinh lạnh lắm."},
      {"r": "B", "z": "对，可能要下雪了。", "p": "Duì, kěnéng yào xià xuě le.", "v": "Ừ, có thể sắp có tuyết rồi."}
    ],
      qs: [
        {"q": "北京一年有几个季节？", "v": "Bắc Kinh một năm có mấy mùa?", "o": ["三个", "两个", "四个"], "a": 2},
        {"q": "他最喜欢哪个季节？", "v": "Bạn ấy thích mùa nào nhất?", "o": ["春季", "秋季", "冬季"], "a": 1}
      ] },
    rd: { z: "北方的冬天很冷，到处都是雪。我住在南方，这里的冬天很暖和，没有雪。夏天很热，但是晚上很凉快，可以在外面看星星。",
      p: "Běifāng de dōngtiān hěn lěng, dàochù dōu shì xuě. Wǒ zhù zài nánfāng, zhèli de dōngtiān hěn nuǎnhuo, méiyǒu xuě. Xiàtiān hěn rè, dànshì wǎnshang hěn liángkuai, kěyǐ zài wàimiàn kàn xīngxing.",
      v: "Mùa đông miền Bắc rất lạnh, khắp nơi đều là tuyết. Mình sống ở miền Nam, mùa đông ở đây rất ấm, không có tuyết. Mùa hè rất nóng, nhưng buổi tối mát mẻ, có thể ra ngoài ngắm sao.",
      qs: [
        {"q": "北方的冬天怎么样？", "v": "Mùa đông miền Bắc thế nào?", "o": ["很暖和", "很冷", "很热"], "a": 1},
        {"q": "夏天晚上可以做什么？", "v": "Tối mùa hè có thể làm gì?", "o": ["看雪", "爬山", "看星星"], "a": 2}
      ] }
  },
  7: {  // 冰激凌既好吃又便宜。
    dl: { lines: [
      {"r": "A", "z": "这个冰激凌多少钱？", "p": "Zhège bīngjīlíng duōshao qián?", "v": "Cây kem này bao nhiêu tiền?"},
      {"r": "B", "z": "五元一个，既好吃又便宜。", "p": "Wǔ yuán yí ge, jì hǎochī yòu piányi.", "v": "Năm tệ một cây, vừa ngon vừa rẻ."},
      {"r": "A", "z": "我要两个，还要一些饼干。", "p": "Wǒ yào liǎng ge, hái yào yìxiē bǐnggān.", "v": "Cháu lấy hai cây, lấy thêm ít bánh quy nữa."},
      {"r": "B", "z": "饼干十元，一共二十元。", "p": "Bǐnggān shí yuán, yígòng èrshí yuán.", "v": "Bánh quy mười tệ, tổng cộng hai mươi tệ."},
      {"r": "A", "z": "好，给您钱。", "p": "Hǎo, gěi nín qián.", "v": "Vâng, cháu gửi tiền ạ."}
    ],
      qs: [
        {"q": "一个冰激凌多少钱？", "v": "Một cây kem bao nhiêu tiền?", "o": ["十元", "二十元", "五元"], "a": 2},
        {"q": "他一共花了多少钱？", "v": "Bạn ấy tiêu hết tổng cộng bao nhiêu tiền?", "o": ["十五元", "二十元", "十元"], "a": 1}
      ] },
    rd: { z: "周末，我和妈妈去超市买东西。我喜欢一条红裙子，但是它太贵了，要三百元。我的钱不够，所以我选择了一条蓝裙子。这条蓝裙子既合适又便宜。",
      p: "Zhōumò, wǒ hé māma qù chāoshì mǎi dōngxi. Wǒ xǐhuan yì tiáo hóng qúnzi, dànshì tā tài guì le, yào sānbǎi yuán. Wǒ de qián bú gòu, suǒyǐ wǒ xuǎnzéle yì tiáo lán qúnzi. Zhè tiáo lán qúnzi jì héshì yòu piányi.",
      v: "Cuối tuần, mình và mẹ đi siêu thị mua đồ. Mình thích một chiếc váy đỏ, nhưng nó đắt quá, những 300 tệ. Mình không đủ tiền nên chọn một chiếc váy xanh. Chiếc váy xanh này vừa vặn lại rẻ.",
      qs: [
        {"q": "红裙子多少钱？", "v": "Chiếc váy đỏ bao nhiêu tiền?", "o": ["三十元", "一百元", "三百元"], "a": 2},
        {"q": "我买了什么颜色的裙子？", "v": "Mình đã mua váy màu gì?", "o": ["红色", "蓝色", "白色"], "a": 1}
      ] }
  },
  8: {  // 来一盘羊肉饺子。
    dl: { lines: [
      {"r": "A", "z": "服务员，来一盘羊肉饺子。", "p": "Fúwùyuán, lái yì pán yángròu jiǎozi.", "v": "Anh phục vụ ơi, cho một đĩa sủi cảo thịt cừu."},
      {"r": "B", "z": "好的。你们还要什么？", "p": "Hǎo de. Nǐmen hái yào shénme?", "v": "Vâng. Mọi người còn gọi gì nữa không?"},
      {"r": "A", "z": "我们还要一只烤鸭和一个汤。", "p": "Wǒmen hái yào yì zhī kǎoyā hé yí ge tāng.", "v": "Chúng tôi lấy thêm một con vịt quay và một bát canh."},
      {"r": "B", "z": "这个汤有一点儿辣，行吗？", "p": "Zhège tāng yǒu yìdiǎnr là, xíng ma?", "v": "Canh này hơi cay một chút, được không ạ?"},
      {"r": "A", "z": "行！我们都喜欢吃辣的。", "p": "Xíng! Wǒmen dōu xǐhuan chī là de.", "v": "Được! Chúng tôi đều thích ăn cay."},
      {"r": "B", "z": "喝什么饮料？果汁还是茶？", "p": "Hē shénme yǐnliào? Guǒzhī háishi chá?", "v": "Uống gì ạ? Nước ép hay trà?"}
    ],
      qs: [
        {"q": "他们要了什么饺子？", "v": "Họ gọi sủi cảo gì?", "o": ["鸡蛋饺子", "羊肉饺子", "西红柿饺子"], "a": 1},
        {"q": "那个汤怎么样？", "v": "Bát canh đó thế nào?", "o": ["有一点儿辣", "很甜", "不好吃"], "a": 0}
      ] },
    rd: { z: "小月喜欢吃甜的东西。除了蛋糕，她还喜欢吃水果。她最喜欢吃葡萄和桃。她还不会用筷子，她觉得用筷子吃饭太难了。",
      p: "Xiǎoyuè xǐhuan chī tián de dōngxi. Chúle dàngāo, tā hái xǐhuan chī shuǐguǒ. Tā zuì xǐhuan chī pútao hé táo. Tā hái bú huì yòng kuàizi, tā juéde yòng kuàizi chī fàn tài nán le.",
      v: "Tiểu Nguyệt thích ăn đồ ngọt. Ngoài bánh ngọt, bạn ấy còn thích ăn hoa quả. Bạn ấy thích nhất là nho và đào. Bạn ấy chưa biết dùng đũa, bạn ấy thấy ăn cơm bằng đũa khó quá.",
      qs: [
        {"q": "小月最喜欢吃什么水果？", "v": "Tiểu Nguyệt thích ăn quả gì nhất?", "o": ["葡萄和桃", "梨和西瓜", "苹果和香蕉"], "a": 0},
        {"q": "小月觉得什么太难了？", "v": "Tiểu Nguyệt thấy việc gì khó quá?", "o": ["吃辣的", "用筷子吃饭", "做蛋糕"], "a": 1}
      ] }
  },
  9: {  // 坐飞机或者坐火车都可以。
    dl: { lines: [
      {"r": "A", "z": "周末我们去北京，坐飞机还是坐火车？", "p": "Zhōumò wǒmen qù Běijīng, zuò fēijī háishi zuò huǒchē?", "v": "Cuối tuần mình đi Bắc Kinh, đi máy bay hay tàu hoả?"},
      {"r": "B", "z": "坐飞机或者坐火车都可以。", "p": "Zuò fēijī huòzhě zuò huǒchē dōu kěyǐ.", "v": "Đi máy bay hay tàu hoả đều được."},
      {"r": "A", "z": "坐火车吧，火车站离我家很近。", "p": "Zuò huǒchē ba, huǒchēzhàn lí wǒ jiā hěn jìn.", "v": "Đi tàu hoả đi, ga tàu gần nhà mình lắm."},
      {"r": "B", "z": "好，我们几点出发？", "p": "Hǎo, wǒmen jǐ diǎn chūfā?", "v": "Được, mấy giờ mình xuất phát?"},
      {"r": "A", "z": "早上八点，你来我家接我吧。", "p": "Zǎoshang bā diǎn, nǐ lái wǒ jiā jiē wǒ ba.", "v": "Tám giờ sáng, bạn đến nhà đón mình nhé."},
      {"r": "B", "z": "好，我带地图去。", "p": "Hǎo, wǒ dài dìtú qù.", "v": "Ừ, mình mang theo bản đồ."}
    ],
      qs: [
        {"q": "他们怎么去北京？", "v": "Họ đi Bắc Kinh bằng gì?", "o": ["坐火车", "坐飞机", "坐地铁"], "a": 0},
        {"q": "他们几点出发？", "v": "Mấy giờ họ xuất phát?", "o": ["七点", "八点", "九点"], "a": 1}
      ] },
    rd: { z: "学校离我家三公里。每天早上，我从家坐地铁去学校，又快又方便。地铁站里人很多，大家都排队上车。下午，爸爸开车来学校接我。",
      p: "Xuéxiào lí wǒ jiā sān gōnglǐ. Měi tiān zǎoshang, wǒ cóng jiā zuò dìtiě qù xuéxiào, yòu kuài yòu fāngbiàn. Dìtiězhàn li rén hěn duō, dàjiā dōu páiduì shàng chē. Xiàwǔ, bàba kāi chē lái xuéxiào jiē wǒ.",
      v: "Trường cách nhà mình 3 cây số. Mỗi sáng, mình đi tàu điện ngầm từ nhà đến trường, vừa nhanh vừa tiện. Ga tàu điện rất đông người, mọi người đều xếp hàng lên tàu. Buổi chiều, bố lái xe đến trường đón mình.",
      qs: [
        {"q": "学校离我家多远？", "v": "Trường cách nhà mình bao xa?", "o": ["两公里", "三公里", "十公里"], "a": 1},
        {"q": "下午谁来接我？", "v": "Buổi chiều ai đến đón mình?", "o": ["爸爸", "妈妈", "爷爷"], "a": 0}
      ] }
  },
  10: {  // 你的汉语会越来越好。
    dl: { lines: [
      {"r": "A", "z": "明天考试，我们一起复习吧。", "p": "Míngtiān kǎoshì, wǒmen yìqǐ fùxí ba.", "v": "Mai thi rồi, tụi mình cùng ôn bài nhé."},
      {"r": "B", "z": "好！我们去图书馆吧，那儿很安静。", "p": "Hǎo! Wǒmen qù túshūguǎn ba, nàr hěn ānjìng.", "v": "Được! Mình đi thư viện đi, ở đó yên tĩnh."},
      {"r": "A", "z": "这个句子我不明白，你能给我讲讲吗？", "p": "Zhège jùzi wǒ bù míngbai, nǐ néng gěi wǒ jiǎngjiang ma?", "v": "Câu này mình không hiểu, bạn giảng cho mình được không?"},
      {"r": "B", "z": "当然可以，我们看一下儿词典。", "p": "Dāngrán kěyǐ, wǒmen kàn yíxiàr cídiǎn.", "v": "Tất nhiên rồi, tụi mình xem từ điển một chút."},
      {"r": "A", "z": "我明白了！谢谢你。", "p": "Wǒ míngbai le! Xièxie nǐ.", "v": "Mình hiểu rồi! Cảm ơn bạn."},
      {"r": "B", "z": "不客气。你的汉语会越来越好的！", "p": "Bú kèqi. Nǐ de Hànyǔ huì yuè lái yuè hǎo de!", "v": "Không có gì. Tiếng Trung của bạn sẽ ngày càng giỏi!"}
    ],
      qs: [
        {"q": "他们去哪儿复习？", "v": "Họ đi đâu ôn bài?", "o": ["图书馆", "教室", "公园"], "a": 0},
        {"q": "明天有什么？", "v": "Ngày mai có gì?", "o": ["比赛", "考试", "表演"], "a": 1}
      ] },
    rd: { z: "丁丁学习很认真。每天回家以后，他先写作业，然后练习汉语。他写作业的时候不马虎，很少写错。这次考试他的成绩是第一，老师和同学都祝贺他。",
      p: "Dīngding xuéxí hěn rènzhēn. Měi tiān huí jiā yǐhòu, tā xiān xiě zuòyè, ránhòu liànxí Hànyǔ. Tā xiě zuòyè de shíhou bù mǎhu, hěn shǎo xiě cuò. Zhè cì kǎoshì tā de chéngjì shì dì-yī, lǎoshī hé tóngxué dōu zhùhè tā.",
      v: "Đinh Đinh học rất chăm. Mỗi ngày về nhà, bạn ấy làm bài tập trước, sau đó luyện tiếng Trung. Làm bài bạn ấy không cẩu thả, rất ít khi viết sai. Kỳ thi này bạn ấy đứng thứ nhất, thầy cô và các bạn đều chúc mừng bạn ấy.",
      qs: [
        {"q": "丁丁回家以后先做什么？", "v": "Về nhà Đinh Đinh làm gì trước?", "o": ["练习汉语", "写作业", "看电视"], "a": 1},
        {"q": "这次考试丁丁的成绩怎么样？", "v": "Kỳ thi này điểm của Đinh Đinh thế nào?", "o": ["不好", "第三", "第一"], "a": 2}
      ] }
  },
  11: {  // 我打算去中国旅游。
    dl: { lines: [
      {"r": "A", "z": "暑假你打算做什么？", "p": "Shǔjià nǐ dǎsuàn zuò shénme?", "v": "Nghỉ hè bạn định làm gì?"},
      {"r": "B", "z": "我打算去中国旅游。", "p": "Wǒ dǎsuàn qù Zhōngguó lǚyóu.", "v": "Mình định đi du lịch Trung Quốc."},
      {"r": "A", "z": "你想去哪儿？", "p": "Nǐ xiǎng qù nǎr?", "v": "Bạn muốn đi đâu?"},
      {"r": "B", "z": "先去北京参观长城，然后去上海。", "p": "Xiān qù Běijīng cānguān Chángchéng, ránhòu qù Shànghǎi.", "v": "Đi Bắc Kinh thăm Vạn Lý Trường Thành trước, sau đó đi Thượng Hải."},
      {"r": "A", "z": "太好了！我也希望将来去中国。", "p": "Tài hǎo le! Wǒ yě xīwàng jiānglái qù Zhōngguó.", "v": "Hay quá! Mình cũng mong sau này được đi Trung Quốc."},
      {"r": "B", "z": "那我们一起学好汉语吧！", "p": "Nà wǒmen yìqǐ xuéhǎo Hànyǔ ba!", "v": "Vậy tụi mình cùng học giỏi tiếng Trung nhé!"}
    ],
      qs: [
        {"q": "他暑假打算做什么？", "v": "Nghỉ hè bạn ấy định làm gì?", "o": ["在家复习", "去中国旅游", "去公园玩"], "a": 1},
        {"q": "在北京他想参观什么？", "v": "Ở Bắc Kinh bạn ấy muốn thăm gì?", "o": ["公园", "长城", "图书馆"], "a": 1}
      ] },
    rd: { z: "这个周末是节日，我们放假三天。爸爸妈妈决定带我去看大海。我们先准备了很多吃的和喝的。在海边，我和弟弟玩了一天，心情好极了。",
      p: "Zhège zhōumò shì jiérì, wǒmen fàngjià sān tiān. Bàba māma juédìng dài wǒ qù kàn dàhǎi. Wǒmen xiān zhǔnbèile hěn duō chī de hé hē de. Zài hǎibiān, wǒ hé dìdi wánle yì tiān, xīnqíng hǎo jí le.",
      v: "Cuối tuần này là ngày lễ, cả nhà được nghỉ ba ngày. Bố mẹ quyết định đưa mình đi biển. Cả nhà chuẩn bị trước thật nhiều đồ ăn thức uống. Ở biển, mình và em trai chơi cả ngày, vui ơi là vui.",
      qs: [
        {"q": "我们放假几天？", "v": "Cả nhà được nghỉ mấy ngày?", "o": ["两天", "七天", "三天"], "a": 2},
        {"q": "爸爸妈妈决定带我去哪儿？", "v": "Bố mẹ quyết định đưa mình đi đâu?", "o": ["看大海", "爬山", "参观长城"], "a": 0}
      ] }
  },
  12: {  // 小鸟正在唱歌。
    dl: { lines: [
      {"r": "A", "z": "你听，什么声音？", "p": "Nǐ tīng, shénme shēngyīn?", "v": "Bạn nghe xem, tiếng gì thế?"},
      {"r": "B", "z": "是小鸟，它们正在唱歌呢。", "p": "Shì xiǎo niǎo, tāmen zhèngzài chànggē ne.", "v": "Là chim non, chúng đang hót đấy."},
      {"r": "A", "z": "丁丁今天怎么了？他好像很难过。", "p": "Dīngding jīntiān zěnme le? Tā hǎoxiàng hěn nánguò.", "v": "Hôm nay Đinh Đinh làm sao thế? Hình như bạn ấy buồn lắm."},
      {"r": "B", "z": "他的小狗丢了，他很担心。", "p": "Tā de xiǎo gǒu diū le, tā hěn dānxīn.", "v": "Chú chó nhỏ của bạn ấy bị lạc, bạn ấy lo lắm."},
      {"r": "A", "z": "我们一起去帮他找吧。", "p": "Wǒmen yìqǐ qù bāng tā zhǎo ba.", "v": "Tụi mình cùng đi giúp bạn ấy tìm đi."},
      {"r": "B", "z": "好，我们现在就去！", "p": "Hǎo, wǒmen xiànzài jiù qù!", "v": "Ừ, mình đi ngay bây giờ!"}
    ],
      qs: [
        {"q": "丁丁为什么难过？", "v": "Vì sao Đinh Đinh buồn?", "o": ["他生病了", "他的小狗丢了", "他没有钱"], "a": 1},
        {"q": "他们要去做什么？", "v": "Họ định đi làm gì?", "o": ["听小鸟唱歌", "帮丁丁找小狗", "去看电影"], "a": 1}
      ] },
    rd: { z: "晚上，我一边写作业，一边听音乐。突然，电话响了，是妈妈打来的。她说她要开会，晚一点儿回家。我一个人在家，有一点儿紧张。十点，妈妈回来了，我的心情马上就好了。",
      p: "Wǎnshang, wǒ yìbiān xiě zuòyè, yìbiān tīng yīnyuè. Tūrán, diànhuà xiǎng le, shì māma dǎlai de. Tā shuō tā yào kāihuì, wǎn yìdiǎnr huí jiā. Wǒ yí ge rén zài jiā, yǒu yìdiǎnr jǐnzhāng. Shí diǎn, māma huílai le, wǒ de xīnqíng mǎshàng jiù hǎo le.",
      v: "Buổi tối, mình vừa làm bài tập vừa nghe nhạc. Đột nhiên điện thoại reo, là mẹ gọi. Mẹ nói mẹ phải họp, về nhà muộn một chút. Mình ở nhà một mình, hơi hồi hộp. Mười giờ mẹ về, mình vui lại ngay.",
      qs: [
        {"q": "电话是谁打来的？", "v": "Ai gọi điện đến?", "o": ["妈妈", "爸爸", "老师"], "a": 0},
        {"q": "妈妈为什么晚一点儿回家？", "v": "Vì sao mẹ về muộn một chút?", "o": ["她去超市了", "她迷路了", "她要开会"], "a": 2}
      ] }
  },
  13: {  // 小鱼被小猫吃了。
    dl: { lines: [
      {"r": "A", "z": "你怎么了？为什么这么生气？", "p": "Nǐ zěnme le? Wèi shénme zhème shēngqì?", "v": "Bạn sao thế? Sao giận vậy?"},
      {"r": "B", "z": "我的鱼被小猫吃了！", "p": "Wǒ de yú bèi xiǎo māo chī le!", "v": "Con cá của mình bị mèo con ăn mất rồi!"},
      {"r": "A", "z": "你把鱼放在哪儿了？", "p": "Nǐ bǎ yú fàng zài nǎr le?", "v": "Bạn để cá ở đâu?"},
      {"r": "B", "z": "桌子上。我以为那儿很安全。", "p": "Zhuōzi shang. Wǒ yǐwéi nàr hěn ānquán.", "v": "Trên bàn. Mình tưởng ở đó an toàn."},
      {"r": "A", "z": "如果你把鱼放进冰箱，就没问题了。", "p": "Rúguǒ nǐ bǎ yú fàngjìn bīngxiāng, jiù méi wèntí le.", "v": "Nếu bạn cho cá vào tủ lạnh thì đã không sao rồi."},
      {"r": "B", "z": "对，下次我一定记得。", "p": "Duì, xià cì wǒ yídìng jìde.", "v": "Ừ, lần sau mình nhất định nhớ."}
    ],
      qs: [
        {"q": "他的鱼怎么了？", "v": "Con cá của bạn ấy làm sao?", "o": ["丢了", "被弟弟拿走了", "被小猫吃了"], "a": 2},
        {"q": "他把鱼放在哪儿了？", "v": "Bạn ấy để cá ở đâu?", "o": ["桌子上", "冰箱里", "盒子里"], "a": 0}
      ] },
    rd: { z: "小月不但聪明，而且很努力。虽然汉语很难，但是她每天都练习。她说：“只要每天学一点儿，汉语就不难了。”现在她的汉语越来越好。",
      p: "Xiǎoyuè búdàn cōngming, érqiě hěn nǔlì. Suīrán Hànyǔ hěn nán, dànshì tā měi tiān dōu liànxí. Tā shuō: “Zhǐyào měi tiān xué yìdiǎnr, Hànyǔ jiù bù nán le.” Xiànzài tā de Hànyǔ yuè lái yuè hǎo.",
      v: "Tiểu Nguyệt không những thông minh mà còn rất chăm chỉ. Tuy tiếng Trung khó, nhưng ngày nào bạn ấy cũng luyện tập. Bạn ấy nói: “Chỉ cần mỗi ngày học một chút là tiếng Trung không khó nữa.” Giờ tiếng Trung của bạn ấy ngày càng giỏi.",
      qs: [
        {"q": "小月每天做什么？", "v": "Mỗi ngày Tiểu Nguyệt làm gì?", "o": ["练习汉语", "看电视", "打网球"], "a": 0},
        {"q": "小月的汉语现在怎么样？", "v": "Tiếng Trung của Tiểu Nguyệt bây giờ thế nào?", "o": ["不太好", "还不会", "越来越好"], "a": 2}
      ] }
  },
  14: {  // 以后要注意。
    dl: { lines: [
      {"r": "A", "z": "小心！这儿很危险。", "p": "Xiǎoxīn! Zhèr hěn wēixiǎn.", "v": "Cẩn thận! Chỗ này nguy hiểm lắm."},
      {"r": "B", "z": "对不起，我没注意。", "p": "Duìbuqǐ, wǒ méi zhùyì.", "v": "Xin lỗi, mình không để ý."},
      {"r": "A", "z": "过马路的时候一定要注意安全。", "p": "Guò mǎlù de shíhou yídìng yào zhùyì ānquán.", "v": "Khi qua đường nhất định phải chú ý an toàn."},
      {"r": "B", "z": "我知道了。如果我迷路了怎么办？", "p": "Wǒ zhīdao le. Rúguǒ wǒ mílù le zěnme bàn?", "v": "Mình biết rồi. Nếu mình bị lạc đường thì làm sao?"},
      {"r": "A", "z": "可以找警察，告诉他你家的地址。", "p": "Kěyǐ zhǎo jǐngchá, gàosu tā nǐ jiā de dìzhǐ.", "v": "Có thể tìm cảnh sát, nói cho chú ấy địa chỉ nhà bạn."},
      {"r": "B", "z": "我还记得妈妈的电话号码。", "p": "Wǒ hái jìde māma de diànhuà hàomǎ.", "v": "Mình còn nhớ số điện thoại của mẹ nữa."}
    ],
      qs: [
        {"q": "迷路了可以找谁？", "v": "Bị lạc đường có thể tìm ai?", "o": ["警察", "售票员", "服务员"], "a": 0},
        {"q": "过马路的时候要注意什么？", "v": "Khi qua đường phải chú ý điều gì?", "o": ["时间", "安全", "新闻"], "a": 1}
      ] },
    rd: { z: "爸爸每天早上八点上班。上班以前，他先看报纸上的新闻。他工作很忙，经常开会。但是他说：“工作重要，家人更重要。”周末他经常带我们去公园散步。",
      p: "Bàba měi tiān zǎoshang bā diǎn shàngbān. Shàngbān yǐqián, tā xiān kàn bàozhǐ shang de xīnwén. Tā gōngzuò hěn máng, jīngcháng kāihuì. Dànshì tā shuō: “Gōngzuò zhòngyào, jiārén gèng zhòngyào.” Zhōumò tā jīngcháng dài wǒmen qù gōngyuán sànbù.",
      v: "Bố đi làm lúc tám giờ sáng mỗi ngày. Trước khi đi làm, bố đọc tin tức trên báo. Bố làm việc rất bận, thường xuyên họp. Nhưng bố nói: “Công việc quan trọng, gia đình còn quan trọng hơn.” Cuối tuần bố hay đưa cả nhà đi dạo công viên.",
      qs: [
        {"q": "爸爸上班以前做什么？", "v": "Trước khi đi làm bố làm gì?", "o": ["散步", "开会", "看报纸"], "a": 2},
        {"q": "周末爸爸带我们去哪儿？", "v": "Cuối tuần bố đưa cả nhà đi đâu?", "o": ["公园", "超市", "图书馆"], "a": 0}
      ] }
  }
};
