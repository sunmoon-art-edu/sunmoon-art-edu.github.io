/* Nghe – nói – đọc cho HSK 3: hội thoại + bài đọc từng bài */
const ND = {
  0: {
    dl: { lines: [
      {"r": "A", "z": "李月，这个周末你有什么打算？", "p": "Lǐ Yuè, zhège zhōumò nǐ yǒu shénme dǎsuan?", "v": "Lý Nguyệt, cuối tuần này bạn có dự định gì?"},
      {"r": "B", "z": "我打算跟朋友去爬山。你呢？", "p": "Wǒ dǎsuan gēn péngyou qù pá shān. Nǐ ne?", "v": "Tôi định đi leo núi với bạn bè. Còn bạn?"},
      {"r": "A", "z": "我的作业还没写完，下星期还有考试，要在家复习。", "p": "Wǒ de zuòyè hái méi xiě wán, xià xīngqī hái yǒu kǎoshì, yào zài jiā fùxí.", "v": "Bài tập của tôi chưa làm xong, tuần sau còn có bài thi, phải ở nhà ôn tập."},
      {"r": "B", "z": "别着急，你星期六复习，星期天跟我们一起去吧。", "p": "Bié zháojí, nǐ xīngqīliù fùxí, xīngqītiān gēn wǒmen yìqǐ qù ba.", "v": "Đừng sốt ruột, thứ Bảy bạn ôn bài, Chủ nhật đi cùng chúng tôi nhé."},
      {"r": "A", "z": "好啊！要带什么东西？", "p": "Hǎo a! Yào dài shénme dōngxi?", "v": "Được đấy! Cần mang theo gì?"},
      {"r": "B", "z": "带点儿面包和水就可以，我来带地图。", "p": "Dài diǎnr miànbāo hé shuǐ jiù kěyǐ, wǒ lái dài dìtú.", "v": "Mang ít bánh mì và nước là được, tôi sẽ mang bản đồ."},
    ],
      qs: [
        {"q": "李月周末打算做什么？", "v": "Cuối tuần Lý Nguyệt định làm gì?", "o": ["在家玩游戏", "去北方", "去爬山"], "a": 2},
        {"q": "他们要带什么？", "v": "Họ cần mang theo gì?", "o": ["蛋糕和啤酒", "面包和水", "电脑和书"], "a": 1},
      ] },
    rd: { z: "小明家以前住在南方，上个月搬到了北方。周末他一直在家玩游戏，很少出去。妈妈说：“你不能总在家里，应该出去走走。”这个周末，他打算跟新同学一起去爬山。他已经准备好了地图和面包。",
      p: "Xiǎomíng jiā yǐqián zhù zài nánfāng, shàng ge yuè bān dào le běifāng. Zhōumò tā yìzhí zài jiā wán yóuxì, hěn shǎo chūqu. Māma shuō: \"Nǐ bù néng zǒng zài jiāli, yīnggāi chūqu zǒuzou.\" Zhège zhōumò, tā dǎsuan gēn xīn tóngxué yìqǐ qù pá shān. Tā yǐjīng zhǔnbèi hǎo le dìtú hé miànbāo.",
      v: "Nhà Tiểu Minh trước đây ở miền Nam, tháng trước đã chuyển lên miền Bắc. Cuối tuần cậu ấy toàn ở nhà chơi game, ít khi ra ngoài. Mẹ nói: “Con không thể cứ ở trong nhà mãi, nên ra ngoài đi dạo.” Cuối tuần này, cậu ấy định đi leo núi với các bạn học mới. Cậu ấy đã chuẩn bị sẵn bản đồ và bánh mì.",
      qs: [
        {"q": "小明家以前住在哪儿？", "v": "Trước đây nhà Tiểu Minh ở đâu?", "o": ["北京", "南方", "北方"], "a": 1},
        {"q": "这个周末小明打算做什么？", "v": "Cuối tuần này Tiểu Minh định làm gì?", "o": ["去爬山", "在家玩游戏", "搬家"], "a": 0},
      ] }
  },
  1: {
    dl: { lines: [
      {"r": "A", "z": "喂，你好！请问王经理在办公室吗？", "p": "Wèi, nǐ hǎo! Qǐngwèn Wáng jīnglǐ zài bàngōngshì ma?", "v": "A lô, xin chào! Cho hỏi giám đốc Vương có ở văn phòng không?"},
      {"r": "B", "z": "他刚才离开了，去机场接客人了。", "p": "Tā gāngcái líkāi le, qù jīchǎng jiē kèrén le.", "v": "Anh ấy vừa đi rồi, ra sân bay đón khách."},
      {"r": "A", "z": "他什么时候回来？下午三点有会议。", "p": "Tā shénme shíhou huílai? Xiàwǔ sān diǎn yǒu huìyì.", "v": "Khi nào anh ấy về? Ba giờ chiều có cuộc họp."},
      {"r": "B", "z": "客人的飞机十二点到，他一会儿就回来。", "p": "Kèrén de fēijī shí'èr diǎn dào, tā yíhuìr jiù huílai.", "v": "Máy bay của khách đến lúc mười hai giờ, lát nữa anh ấy sẽ về."},
      {"r": "A", "z": "我下午想请假，能给他发个电子邮件吗？", "p": "Wǒ xiàwǔ xiǎng qǐngjià, néng gěi tā fā ge diànzǐ yóujiàn ma?", "v": "Chiều nay tôi muốn xin nghỉ, tôi gửi email cho anh ấy được không?"},
      {"r": "B", "z": "可以，你马上写吧。他回来我告诉他。", "p": "Kěyǐ, nǐ mǎshàng xiě ba. Tā huílai wǒ gàosu tā.", "v": "Được, bạn viết ngay đi. Anh ấy về tôi sẽ báo."},
    ],
      qs: [
        {"q": "王经理去哪儿了？", "v": "Giám đốc Vương đi đâu rồi?", "o": ["去开会了", "去机场接客人了", "回家了"], "a": 1},
        {"q": "下午几点有会议？", "v": "Mấy giờ chiều có cuộc họp?", "o": ["十二点", "三点", "两点"], "a": 1},
      ] },
    rd: { z: "李月是一家公司的司机。每天早上七点，她开车去接经理。今天路上车很多，她迟到了十分钟。经理没有生气，说：“没关系，会议九点才开始。”下午经理要坐飞机去北京，李月还要送他去机场。",
      p: "Lǐ Yuè shì yì jiā gōngsī de sījī. Měi tiān zǎoshang qī diǎn, tā kāi chē qù jiē jīnglǐ. Jīntiān lùshang chē hěn duō, tā chídào le shí fēnzhōng. Jīnglǐ méiyǒu shēngqì, shuō: \"Méi guānxi, huìyì jiǔ diǎn cái kāishǐ.\" Xiàwǔ jīnglǐ yào zuò fēijī qù Běijīng, Lǐ Yuè hái yào sòng tā qù jīchǎng.",
      v: "Lý Nguyệt là tài xế của một công ty. Bảy giờ sáng hằng ngày, cô ấy lái xe đi đón giám đốc. Hôm nay đường đông xe, cô ấy đến muộn mười phút. Giám đốc không giận, nói: “Không sao, chín giờ cuộc họp mới bắt đầu.” Chiều nay giám đốc đi máy bay tới Bắc Kinh, Lý Nguyệt còn phải đưa anh ấy ra sân bay.",
      qs: [
        {"q": "李月今天为什么迟到了？", "v": "Vì sao hôm nay Lý Nguyệt đến muộn?", "o": ["她起床晚了", "路上车很多", "她请假了"], "a": 1},
        {"q": "会议几点开始？", "v": "Cuộc họp mấy giờ bắt đầu?", "o": ["九点", "十点", "七点"], "a": 0},
      ] }
  },
  2: {
    dl: { lines: [
      {"r": "A", "z": "桌子上放着这么多东西！今天是谁的生日？", "p": "Zhuōzi shàng fàng zhe zhème duō dōngxi! Jīntiān shì shéi de shēngrì?", "v": "Trên bàn bày nhiều đồ thế! Hôm nay sinh nhật ai vậy?"},
      {"r": "B", "z": "是大卫的生日。你看，有蛋糕、香蕉，还有很多饮料。", "p": "Shì Dàwèi de shēngrì. Nǐ kàn, yǒu dàngāo, xiāngjiāo, hái yǒu hěn duō yǐnliào.", "v": "Sinh nhật David. Bạn xem, có bánh kem, chuối, còn có nhiều đồ uống nữa."},
      {"r": "A", "z": "冰箱里还有啤酒吗？", "p": "Bīngxiāng lǐ hái yǒu píjiǔ ma?", "v": "Trong tủ lạnh còn bia không?"},
      {"r": "B", "z": "有，但是大卫不喝啤酒，他喜欢喝甜的饮料。", "p": "Yǒu, dànshì Dàwèi bù hē píjiǔ, tā xǐhuan hē tián de yǐnliào.", "v": "Có, nhưng David không uống bia, cậu ấy thích uống đồ ngọt."},
      {"r": "A", "z": "我有点儿饿了，能先尝一下蛋糕吗？", "p": "Wǒ yǒudiǎnr è le, néng xiān cháng yíxià dàngāo ma?", "v": "Tôi hơi đói rồi, nếm thử bánh kem trước được không?"},
      {"r": "B", "z": "别着急，等大卫来了再吃。你先帮我拿盘子和筷子吧。", "p": "Bié zháojí, děng Dàwèi lái le zài chī. Nǐ xiān bāng wǒ ná pánzi hé kuàizi ba.", "v": "Đừng vội, đợi David đến rồi ăn. Bạn giúp tôi lấy đĩa và đũa trước nhé."},
    ],
      qs: [
        {"q": "今天是谁的生日？", "v": "Hôm nay là sinh nhật ai?", "o": ["大卫", "王方", "小明"], "a": 0},
        {"q": "大卫喜欢喝什么？", "v": "David thích uống gì?", "o": ["啤酒", "咖啡", "甜的饮料"], "a": 2},
      ] },
    rd: { z: "我家附近有一个小饭店，菜不贵，也很好吃。服务员很热情，客人一来，她就把菜单放在桌子上。我最喜欢那儿的面条，一大碗只要十五块钱，吃完很饱。饭后我常常再要一个甜的蛋糕。",
      p: "Wǒ jiā fùjìn yǒu yí ge xiǎo fàndiàn, cài bú guì, yě hěn hǎochī. Fúwùyuán hěn rèqíng, kèrén yì lái, tā jiù bǎ càidān fàng zài zhuōzi shàng. Wǒ zuì xǐhuan nàr de miàntiáo, yí dà wǎn zhǐyào shíwǔ kuài qián, chī wán hěn bǎo. Fàn hòu wǒ chángcháng zài yào yí ge tián de dàngāo.",
      v: "Gần nhà tôi có một quán ăn nhỏ, món ăn không đắt mà lại ngon. Nhân viên phục vụ rất nhiệt tình, khách vừa đến là cô ấy đặt thực đơn lên bàn. Tôi thích nhất món mì ở đó, một bát to chỉ mười lăm tệ, ăn xong rất no. Ăn xong tôi thường gọi thêm một chiếc bánh ngọt.",
      qs: [
        {"q": "那个饭店怎么样？", "v": "Quán ăn đó thế nào?", "o": ["不贵，也好吃", "很贵，不好吃", "很贵，但是好吃"], "a": 0},
        {"q": "一碗面条多少钱？", "v": "Một bát mì bao nhiêu tiền?", "o": ["十块", "五十块", "十五块"], "a": 2},
      ] }
  },
  3: {
    dl: { lines: [
      {"r": "A", "z": "这是你家的照片吗？这个可爱的小女孩是谁？", "p": "Zhè shì nǐ jiā de zhàopiàn ma? Zhège kě'ài de xiǎo nǚhái shì shéi?", "v": "Đây là ảnh nhà bạn à? Cô bé đáng yêu này là ai?"},
      {"r": "B", "z": "是我邻居家的孩子。旁边那个年轻的阿姨是她妈妈。", "p": "Shì wǒ línjū jiā de háizi. Pángbiān nàge niánqīng de āyí shì tā māma.", "v": "Là con nhà hàng xóm tôi. Cô trẻ bên cạnh là mẹ bé."},
      {"r": "A", "z": "她妈妈头发长长的，真漂亮。孩子长得很像她。", "p": "Tā māma tóufa chángcháng de, zhēn piàoliang. Háizi zhǎng de hěn xiàng tā.", "v": "Mẹ bé tóc dài, đẹp thật. Bé trông rất giống mẹ."},
      {"r": "B", "z": "是啊，她们两个都很爱笑。", "p": "Shì a, tāmen liǎng ge dōu hěn ài xiào.", "v": "Đúng vậy, hai mẹ con đều hay cười."},
      {"r": "A", "z": "这个个子不太高的是她爸爸吗？", "p": "Zhège gèzi bú tài gāo de shì tā bàba ma?", "v": "Người không cao lắm này là bố bé à?"},
      {"r": "B", "z": "不是，是她叔叔。他很热情，总是笑着跟客人说话。", "p": "Bú shì, shì tā shūshu. Tā hěn rèqíng, zǒngshì xiào zhe gēn kèrén shuōhuà.", "v": "Không, là chú của bé. Chú ấy rất nhiệt tình, lúc nào cũng tươi cười nói chuyện với khách."},
    ],
      qs: [
        {"q": "照片上的小女孩是谁？", "v": "Cô bé trong ảnh là ai?", "o": ["B的女儿", "B的妹妹", "邻居家的孩子"], "a": 2},
        {"q": "叔叔是一个什么样的人？", "v": "Chú của bé là người thế nào?", "o": ["很热情", "不爱说话", "个子很高"], "a": 0},
      ] },
    rd: { z: "王方是一家宾馆的服务员。她很年轻，个子不高，头发短短的。她总是笑着说：“欢迎，欢迎！”客人们都说她很热情。有的客人还用照相机跟她一起照相。",
      p: "Wáng Fāng shì yì jiā bīnguǎn de fúwùyuán. Tā hěn niánqīng, gèzi bù gāo, tóufa duǎnduǎn de. Tā zǒngshì xiào zhe shuō: \"Huānyíng, huānyíng!\" Kèrenmen dōu shuō tā hěn rèqíng. Yǒu de kèrén hái yòng zhàoxiàngjī gēn tā yìqǐ zhàoxiàng.",
      v: "Vương Phương là nhân viên phục vụ của một khách sạn. Cô ấy còn trẻ, không cao, tóc ngắn. Cô ấy luôn tươi cười nói: “Xin chào mừng!” Khách đều nói cô ấy rất nhiệt tình. Có vị khách còn dùng máy ảnh chụp ảnh chung với cô ấy.",
      qs: [
        {"q": "王方做什么工作？", "v": "Vương Phương làm nghề gì?", "o": ["老师", "医生", "宾馆服务员"], "a": 2},
        {"q": "客人们觉得王方怎么样？", "v": "Khách thấy Vương Phương thế nào?", "o": ["很热情", "不爱笑", "个子很高"], "a": 0},
      ] }
  },
  4: {
    dl: { lines: [
      {"r": "A", "z": "大卫，你最近怎么越来越瘦了？", "p": "Dàwèi, nǐ zuìjìn zěnme yuè lái yuè shòu le?", "v": "David, dạo này sao bạn ngày càng gầy vậy?"},
      {"r": "B", "z": "我每天早上都去跑步，已经瘦了五公斤。", "p": "Wǒ měi tiān zǎoshang dōu qù pǎobù, yǐjīng shòu le wǔ gōngjīn.", "v": "Sáng nào tôi cũng đi chạy bộ, đã giảm được năm cân rồi."},
      {"r": "A", "z": "真好！我最近越来越胖了，也想锻炼。", "p": "Zhēn hǎo! Wǒ zuìjìn yuè lái yuè pàng le, yě xiǎng duànliàn.", "v": "Hay quá! Dạo này tôi ngày càng béo, tôi cũng muốn tập thể dục."},
      {"r": "B", "z": "那明天早上跟我一起去跑步吧。", "p": "Nà míngtiān zǎoshang gēn wǒ yìqǐ qù pǎobù ba.", "v": "Vậy sáng mai đi chạy bộ với tôi nhé."},
      {"r": "A", "z": "但是我上次跑步以后，腿疼了三天。", "p": "Dànshì wǒ shàng cì pǎobù yǐhòu, tuǐ téng le sān tiān.", "v": "Nhưng lần trước chạy bộ xong, chân tôi đau mất ba ngày."},
      {"r": "B", "z": "开始别跑太快，慢慢来。锻炼是为了健康。", "p": "Kāishǐ bié pǎo tài kuài, mànmàn lái. Duànliàn shì wèile jiànkāng.", "v": "Lúc đầu đừng chạy nhanh quá, cứ từ từ. Tập thể dục là vì sức khỏe mà."},
    ],
      qs: [
        {"q": "大卫最近怎么了？", "v": "Dạo này David làm sao?", "o": ["瘦了", "胖了", "生病了"], "a": 0},
        {"q": "大卫瘦了多少？", "v": "David gầy đi bao nhiêu?", "o": ["十公斤", "三公斤", "五公斤"], "a": 2},
      ] },
    rd: { z: "小明很喜欢体育，每天下午都去打篮球。上个星期打篮球的时候，他的脚疼了，不能走路。医生说他要休息两个星期。现在他不能运动，只能在家看电视，越来越胖了。他说：“脚好了以后，我要多锻炼。”",
      p: "Xiǎomíng hěn xǐhuan tǐyù, měi tiān xiàwǔ dōu qù dǎ lánqiú. Shàng ge xīngqī dǎ lánqiú de shíhou, tā de jiǎo téng le, bù néng zǒu lù. Yīshēng shuō tā yào xiūxi liǎng ge xīngqī. Xiànzài tā bù néng yùndòng, zhǐ néng zài jiā kàn diànshì, yuè lái yuè pàng le. Tā shuō: \"Jiǎo hǎo le yǐhòu, wǒ yào duō duànliàn.\"",
      v: "Tiểu Minh rất thích thể thao, chiều nào cũng đi chơi bóng rổ. Tuần trước lúc chơi bóng rổ, chân cậu ấy bị đau, không đi được. Bác sĩ nói cậu ấy phải nghỉ hai tuần. Bây giờ cậu ấy không vận động được, chỉ ở nhà xem tivi, ngày càng béo. Cậu ấy nói: “Chân khỏi rồi, tôi sẽ tập thể dục nhiều hơn.”",
      qs: [
        {"q": "小明怎么了？", "v": "Tiểu Minh bị làm sao?", "o": ["脚疼了", "耳朵疼了", "感冒了"], "a": 0},
        {"q": "医生让他怎么做？", "v": "Bác sĩ bảo cậu ấy làm gì?", "o": ["休息两个星期", "多吃东西", "每天打篮球"], "a": 0},
      ] }
  },
  5: {
    dl: { lines: [
      {"r": "A", "z": "我的信用卡怎么突然找不到了？", "p": "Wǒ de xìnyòngkǎ zěnme tūrán zhǎo bu dào le?", "v": "Sao tự nhiên tôi không tìm thấy thẻ tín dụng nhỉ?"},
      {"r": "B", "z": "别着急，你记得最后一次是什么时候用的吗？", "p": "Bié zháojí, nǐ jìde zuìhòu yí cì shì shénme shíhou yòng de ma?", "v": "Đừng sốt ruột, bạn có nhớ lần cuối dùng là lúc nào không?"},
      {"r": "A", "z": "昨天下午买衬衫和裤子的时候用过。", "p": "Zuótiān xiàwǔ mǎi chènshān hé kùzi de shíhou yòng guo.", "v": "Chiều qua lúc mua áo sơ mi và quần có dùng."},
      {"r": "B", "z": "是不是放在包里了？你再找找。", "p": "Shì bu shì fàng zài bāo lǐ le? Nǐ zài zhǎozhao.", "v": "Có phải để trong túi không? Bạn tìm lại xem."},
      {"r": "A", "z": "没有……啊，在那条旧裤子里！我忘记拿出来了。", "p": "Méiyǒu… A, zài nà tiáo jiù kùzi lǐ! Wǒ wàngjì ná chūlai le.", "v": "Không có… À, trong cái quần cũ kia! Tôi quên lấy ra."},
      {"r": "B", "z": "找到就好，下次别再忘了。", "p": "Zhǎo dào jiù hǎo, xià cì bié zài wàng le.", "v": "Tìm thấy là tốt rồi, lần sau đừng quên nữa nhé."},
    ],
      qs: [
        {"q": "他在找什么？", "v": "Anh ấy đang tìm gì?", "o": ["伞", "帽子", "信用卡"], "a": 2},
        {"q": "最后在哪儿找到了？", "v": "Cuối cùng tìm thấy ở đâu?", "o": ["旧裤子里", "桌子上", "包里"], "a": 0},
      ] },
    rd: { z: "今天早上天阴了，妈妈对李月说：“带上伞吧，可能要下雨。”李月说：“知道了。”但是出门的时候，她忘记拿伞了。下午突然下起了大雨，李月在商店里等了一个小时。回家以后，她马上换了衣服和皮鞋。",
      p: "Jīntiān zǎoshang tiān yīn le, māma duì Lǐ Yuè shuō: \"Dài shàng sǎn ba, kěnéng yào xià yǔ.\" Lǐ Yuè shuō: \"Zhīdào le.\" Dànshì chūmén de shíhou, tā wàngjì ná sǎn le. Xiàwǔ tūrán xià qǐ le dà yǔ, Lǐ Yuè zài shāngdiàn lǐ děng le yí ge xiǎoshí. Huí jiā yǐhòu, tā mǎshàng huàn le yīfu hé píxié.",
      v: "Sáng nay trời âm u, mẹ nói với Lý Nguyệt: “Mang ô theo đi, có thể sẽ mưa.” Lý Nguyệt nói: “Con biết rồi.” Nhưng lúc ra khỏi nhà, cô ấy quên cầm ô. Buổi chiều trời bỗng mưa to, Lý Nguyệt phải đợi trong cửa hàng một tiếng. Về đến nhà, cô ấy lập tức thay quần áo và giày da.",
      qs: [
        {"q": "妈妈让李月带什么？", "v": "Mẹ bảo Lý Nguyệt mang theo gì?", "o": ["伞", "包", "帽子"], "a": 0},
        {"q": "下午天气怎么样？", "v": "Buổi chiều thời tiết thế nào?", "o": ["下雪了", "下大雨了", "很晴"], "a": 1},
      ] }
  },
  6: {
    dl: { lines: [
      {"r": "A", "z": "你跟李月是什么关系？", "p": "Nǐ gēn Lǐ Yuè shì shénme guānxi?", "v": "Bạn và Lý Nguyệt có quan hệ gì?"},
      {"r": "B", "z": "我们是好朋友。大学一年级的时候我们在一个班，认识五年了。", "p": "Wǒmen shì hǎo péngyou. Dàxué yī niánjí de shíhou wǒmen zài yí ge bān, rènshi wǔ nián le.", "v": "Chúng tôi là bạn thân. Năm nhất đại học chúng tôi học cùng lớp, quen nhau năm năm rồi."},
      {"r": "A", "z": "她去北京以后，你们很久没见面了吧？", "p": "Tā qù Běijīng yǐhòu, nǐmen hěn jiǔ méi jiànmiàn le ba?", "v": "Từ khi cô ấy đi Bắc Kinh, hai bạn lâu rồi chưa gặp nhau nhỉ?"},
      {"r": "B", "z": "是啊，但是我们常常在网上聊天。", "p": "Shì a, dànshì wǒmen chángcháng zài wǎngshang liáotiān.", "v": "Đúng vậy, nhưng chúng tôi hay nói chuyện trên mạng."},
      {"r": "A", "z": "下个月她要结婚了，你知道吗？", "p": "Xià ge yuè tā yào jiéhūn le, nǐ zhīdào ma?", "v": "Tháng sau cô ấy kết hôn, bạn biết không?"},
      {"r": "B", "z": "知道，我已经给她准备好礼物了。", "p": "Zhīdào, wǒ yǐjīng gěi tā zhǔnbèi hǎo lǐwù le.", "v": "Biết chứ, tôi đã chuẩn bị quà cho cô ấy rồi."},
    ],
      qs: [
        {"q": "他们认识多久了？", "v": "Họ quen nhau bao lâu rồi?", "o": ["五年", "十年", "一年"], "a": 0},
        {"q": "下个月李月要做什么？", "v": "Tháng sau Lý Nguyệt sẽ làm gì?", "o": ["去北京", "上大学", "结婚"], "a": 2},
      ] },
    rd: { z: "我的爷爷奶奶结婚五十年了。过去爷爷工作很忙，奶奶一个人照顾孩子。现在他们都不工作了，每天一起去公园走走，一起聊天。每个节日，爷爷都会自己做一个小礼物送给奶奶。奶奶说：“我最了解他了。”",
      p: "Wǒ de yéye nǎinai jiéhūn wǔshí nián le. Guòqù yéye gōngzuò hěn máng, nǎinai yí ge rén zhàogù háizi. Xiànzài tāmen dōu bù gōngzuò le, měi tiān yìqǐ qù gōngyuán zǒuzou, yìqǐ liáotiān. Měi ge jiérì, yéye dōu huì zìjǐ zuò yí ge xiǎo lǐwù sòng gěi nǎinai. Nǎinai shuō: \"Wǒ zuì liǎojiě tā le.\"",
      v: "Ông bà tôi kết hôn đã năm mươi năm. Ngày trước ông bận công việc, một mình bà chăm con. Bây giờ ông bà đều không đi làm nữa, ngày nào cũng cùng đi dạo công viên, cùng trò chuyện. Mỗi dịp lễ, ông đều tự làm một món quà nhỏ tặng bà. Bà nói: “Bà hiểu ông nhất.”",
      qs: [
        {"q": "爷爷奶奶结婚多久了？", "v": "Ông bà kết hôn bao lâu rồi?", "o": ["十五年", "五十年", "五年"], "a": 1},
        {"q": "节日的时候爷爷做什么？", "v": "Vào ngày lễ ông làm gì?", "o": ["照顾孩子", "给奶奶做礼物", "去北京工作"], "a": 1},
      ] }
  },
  7: {
    dl: { lines: [
      {"r": "A", "z": "你住的地方方便吗？", "p": "Nǐ zhù de dìfang fāngbiàn ma?", "v": "Chỗ bạn ở có tiện không?"},
      {"r": "B", "z": "很方便。附近有超市、银行，还有一个大公园。", "p": "Hěn fāngbiàn. Fùjìn yǒu chāoshì, yínháng, hái yǒu yí ge dà gōngyuán.", "v": "Rất tiện. Gần đó có siêu thị, ngân hàng, còn có một công viên lớn."},
      {"r": "A", "z": "离地铁站远吗？", "p": "Lí dìtiě zhàn yuǎn ma?", "v": "Có xa ga tàu điện ngầm không?"},
      {"r": "B", "z": "不远，走路五分钟就到了。", "p": "Bù yuǎn, zǒu lù wǔ fēnzhōng jiù dào le.", "v": "Không xa, đi bộ năm phút là tới."},
      {"r": "A", "z": "我想去图书馆看书，坐地铁还是骑自行车？", "p": "Wǒ xiǎng qù túshūguǎn kàn shū, zuò dìtiě háishi qí zìxíngchē?", "v": "Tôi muốn đến thư viện đọc sách, đi tàu điện ngầm hay đạp xe?"},
      {"r": "B", "z": "骑自行车吧，路上会经过公园，很漂亮。", "p": "Qí zìxíngchē ba, lùshang huì jīngguò gōngyuán, hěn piàoliang.", "v": "Đạp xe đi, trên đường sẽ đi qua công viên, đẹp lắm."},
    ],
      qs: [
        {"q": "从B家走到地铁站要多长时间？", "v": "Từ nhà B đi bộ đến ga tàu điện ngầm mất bao lâu?", "o": ["五分钟", "半个小时", "十五分钟"], "a": 0},
        {"q": "B让A怎么去图书馆？", "v": "B bảo A đến thư viện bằng gì?", "o": ["坐地铁", "骑自行车", "坐船"], "a": 1},
      ] },
    rd: { z: "我住的城市不大，但是很漂亮。城市中间有一条河，河上常常有小船。街道两边有很多树和花。这儿的人喜欢骑自行车上班，因为又方便又健康。周末很多人去公园玩儿，或者去图书馆看书。",
      p: "Wǒ zhù de chéngshì bú dà, dànshì hěn piàoliang. Chéngshì zhōngjiān yǒu yì tiáo hé, hé shàng chángcháng yǒu xiǎo chuán. Jiēdào liǎng biān yǒu hěn duō shù hé huā. Zhèr de rén xǐhuan qí zìxíngchē shàngbān, yīnwèi yòu fāngbiàn yòu jiànkāng. Zhōumò hěn duō rén qù gōngyuán wánr, huòzhě qù túshūguǎn kàn shū.",
      v: "Thành phố tôi ở không lớn, nhưng rất đẹp. Giữa thành phố có một con sông, trên sông thường có thuyền nhỏ. Hai bên đường có nhiều cây và hoa. Người ở đây thích đạp xe đi làm, vì vừa tiện vừa khỏe. Cuối tuần nhiều người đi chơi công viên, hoặc đến thư viện đọc sách.",
      qs: [
        {"q": "这儿的人为什么喜欢骑自行车？", "v": "Vì sao người ở đây thích đạp xe?", "o": ["自行车很便宜", "没有地铁", "又方便又健康"], "a": 2},
        {"q": "城市中间有什么？", "v": "Giữa thành phố có gì?", "o": ["一个图书馆", "一个超市", "一条河"], "a": 2},
      ] }
  },
  8: {
    dl: { lines: [
      {"r": "A", "z": "大卫，你的汉语说得跟中国人一样好！", "p": "Dàwèi, nǐ de Hànyǔ shuō de gēn Zhōngguó rén yíyàng hǎo!", "v": "David, bạn nói tiếng Trung giỏi như người Trung Quốc vậy!"},
      {"r": "B", "z": "哪里哪里，我还要努力。", "p": "Nǎli nǎli, wǒ hái yào nǔlì.", "v": "Đâu có đâu, tôi còn phải cố gắng nhiều."},
      {"r": "A", "z": "你是怎么提高汉语水平的？", "p": "Nǐ shì zěnme tígāo Hànyǔ shuǐpíng de?", "v": "Bạn nâng cao trình độ tiếng Trung bằng cách nào?"},
      {"r": "B", "z": "我每天都练习说汉语，不懂的词就问老师，或者看词典。", "p": "Wǒ měi tiān dōu liànxí shuō Hànyǔ, bù dǒng de cí jiù wèn lǎoshī, huòzhě kàn cídiǎn.", "v": "Ngày nào tôi cũng luyện nói tiếng Trung, từ nào không hiểu thì hỏi thầy cô hoặc tra từ điển."},
      {"r": "A", "z": "我听中文的时候，常常听不清楚。", "p": "Wǒ tīng Zhōngwén de shíhou, chángcháng tīng bu qīngchu.", "v": "Tôi nghe tiếng Trung thường nghe không rõ."},
      {"r": "B", "z": "你可以多听中文歌，一个句子一个句子地练习。", "p": "Nǐ kěyǐ duō tīng Zhōngwén gē, yí ge jùzi yí ge jùzi de liànxí.", "v": "Bạn có thể nghe nhiều bài hát tiếng Trung, luyện từng câu một."},
    ],
      qs: [
        {"q": "大卫的汉语怎么样？", "v": "Tiếng Trung của David thế nào?", "o": ["不太好", "跟中国人一样好", "听不清楚"], "a": 1},
        {"q": "A有什么问题？", "v": "A gặp vấn đề gì?", "o": ["听中文听不清楚", "不会写汉字", "没有词典"], "a": 0},
      ] },
    rd: { z: "王方是我们的中文老师。她讲课声音很大，每个句子都讲得很清楚。她教得很认真，我们不明白的地方，她总是再讲一次。班里有个学生很聪明，也很努力，一年就提高了很多。大家都很喜欢王老师的课。",
      p: "Wáng Fāng shì wǒmen de Zhōngwén lǎoshī. Tā jiǎng kè shēngyīn hěn dà, měi ge jùzi dōu jiǎng de hěn qīngchu. Tā jiāo de hěn rènzhēn, wǒmen bù míngbai de dìfang, tā zǒngshì zài jiǎng yí cì. Bān lǐ yǒu ge xuésheng hěn cōngming, yě hěn nǔlì, yì nián jiù tígāo le hěn duō. Dàjiā dōu hěn xǐhuan Wáng lǎoshī de kè.",
      v: "Vương Phương là cô giáo tiếng Trung của chúng tôi. Cô giảng bài giọng to, câu nào cũng giảng rất rõ ràng. Cô dạy rất tận tâm, chỗ nào chúng tôi chưa hiểu cô luôn giảng lại. Trong lớp có một bạn rất thông minh, lại chăm chỉ, chỉ một năm đã tiến bộ nhiều. Mọi người đều rất thích giờ học của cô Vương.",
      qs: [
        {"q": "王老师讲课怎么样？", "v": "Cô Vương giảng bài thế nào?", "o": ["很快", "声音很小", "很清楚"], "a": 2},
        {"q": "我们不明白的时候，王老师怎么做？", "v": "Khi chúng tôi chưa hiểu, cô Vương làm gì?", "o": ["生气", "再讲一次", "让我们看词典"], "a": 1},
      ] }
  },
  9: {
    dl: { lines: [
      {"r": "A", "z": "这次考试你的成绩怎么样？", "p": "Zhè cì kǎoshì nǐ de chéngjì zěnmeyàng?", "v": "Kỳ thi lần này bạn được điểm thế nào?"},
      {"r": "B", "z": "历史考得不错，数学不太好。", "p": "Lìshǐ kǎo de búcuò, shùxué bú tài hǎo.", "v": "Môn Sử thi khá tốt, Toán thì không tốt lắm."},
      {"r": "A", "z": "我觉得数学比历史难多了。", "p": "Wǒ juéde shùxué bǐ lìshǐ nán duō le.", "v": "Tôi thấy Toán khó hơn Sử nhiều."},
      {"r": "B", "z": "我也觉得。历史比较简单，数学题我很多都不会做。", "p": "Wǒ yě juéde. Lìshǐ bǐjiào jiǎndān, shùxué tí wǒ hěn duō dōu bú huì zuò.", "v": "Tôi cũng thấy vậy. Sử tương đối dễ, bài Toán thì nhiều bài tôi không biết làm."},
      {"r": "A", "z": "除了数学，别的都还可以吧？", "p": "Chúle shùxué, bié de dōu hái kěyǐ ba?", "v": "Ngoài Toán ra, các môn khác đều ổn chứ?"},
      {"r": "B", "z": "是的。明天老师要讲数学题，我们必须带笔记本。", "p": "Shì de. Míngtiān lǎoshī yào jiǎng shùxué tí, wǒmen bìxū dài bǐjìběn.", "v": "Ừ. Mai thầy giảng bài Toán, chúng ta phải mang vở ghi."},
    ],
      qs: [
        {"q": "B觉得哪门课难？", "v": "B thấy môn nào khó?", "o": ["数学", "文化", "历史"], "a": 0},
        {"q": "明天必须带什么？", "v": "Ngày mai phải mang gì?", "o": ["电脑", "词典", "笔记本"], "a": 2},
      ] },
    rd: { z: "我们学校很有名。校长是一位历史老师，他很了解中国文化和世界历史。他上课的时候很少写黑板，总是讲很多有意思的故事。学生们都很喜欢听他的课。除了历史，他还教我们怎么学习。",
      p: "Wǒmen xuéxiào hěn yǒumíng. Xiàozhǎng shì yí wèi lìshǐ lǎoshī, tā hěn liǎojiě Zhōngguó wénhuà hé shìjiè lìshǐ. Tā shàng kè de shíhou hěn shǎo xiě hēibǎn, zǒngshì jiǎng hěn duō yǒu yìsi de gùshi. Xuéshengmen dōu hěn xǐhuan tīng tā de kè. Chúle lìshǐ, tā hái jiāo wǒmen zěnme xuéxí.",
      v: "Trường chúng tôi rất nổi tiếng. Thầy hiệu trưởng là một giáo viên Lịch sử, thầy rất hiểu văn hóa Trung Quốc và lịch sử thế giới. Lúc lên lớp thầy ít khi viết bảng, luôn kể nhiều câu chuyện thú vị. Học sinh đều rất thích nghe thầy giảng. Ngoài Lịch sử, thầy còn dạy chúng tôi cách học.",
      qs: [
        {"q": "校长教什么？", "v": "Thầy hiệu trưởng dạy môn gì?", "o": ["数学", "中文", "历史"], "a": 2},
        {"q": "校长上课的时候常常做什么？", "v": "Lúc lên lớp thầy hiệu trưởng thường làm gì?", "o": ["考试", "写黑板", "讲故事"], "a": 2},
      ] }
  },
  10: {
    dl: { lines: [
      {"r": "A", "z": "小明，出门以前别忘了把空调关了。", "p": "Xiǎomíng, chūmén yǐqián bié wàng le bǎ kōngtiáo guān le.", "v": "Tiểu Minh, trước khi ra khỏi nhà đừng quên tắt điều hòa nhé."},
      {"r": "B", "z": "知道了，妈妈。灯我也关了。", "p": "Zhīdào le, māma. Dēng wǒ yě guān le.", "v": "Con biết rồi mẹ. Đèn con cũng tắt rồi."},
      {"r": "A", "z": "你的房间打扫干净了吗？", "p": "Nǐ de fángjiān dǎsǎo gānjìng le ma?", "v": "Phòng con dọn sạch chưa?"},
      {"r": "B", "z": "打扫好了。妈妈，电梯坏了，我们住十八层，怎么下楼？", "p": "Dǎsǎo hǎo le. Māma, diàntī huài le, wǒmen zhù shíbā céng, zěnme xià lóu?", "v": "Dọn xong rồi ạ. Mẹ ơi, thang máy hỏng rồi, nhà mình ở tầng mười tám, xuống kiểu gì ạ?"},
      {"r": "A", "z": "只能走下去了，你小心一点儿。", "p": "Zhǐ néng zǒu xiàqu le, nǐ xiǎoxīn yìdiǎnr.", "v": "Chỉ còn cách đi bộ xuống thôi, con cẩn thận nhé."},
      {"r": "B", "z": "好的，我会注意的。", "p": "Hǎo de, wǒ huì zhùyì de.", "v": "Vâng, con sẽ chú ý."},
    ],
      qs: [
        {"q": "出门以前妈妈让小明做什么？", "v": "Trước khi ra khỏi nhà mẹ bảo Tiểu Minh làm gì?", "o": ["把空调关了", "洗澡", "打扫洗手间"], "a": 0},
        {"q": "他们家住几层？", "v": "Nhà họ ở tầng mấy?", "o": ["十八层", "八层", "十层"], "a": 0},
      ] },
    rd: { z: "大卫的习惯很好。每天晚上十点他先洗澡，然后刷牙，十一点关灯睡觉。今天晚上他发现洗手间的灯坏了，只能很小心地洗澡。明天他要找人来看看。",
      p: "Dàwèi de xíguàn hěn hǎo. Měi tiān wǎnshang shí diǎn tā xiān xǐzǎo, ránhòu shuāyá, shíyī diǎn guān dēng shuìjiào. Jīntiān wǎnshang tā fāxiàn xǐshǒujiān de dēng huài le, zhǐ néng hěn xiǎoxīn de xǐzǎo. Míngtiān tā yào zhǎo rén lái kànkan.",
      v: "David có thói quen rất tốt. Mười giờ tối hằng ngày, cậu ấy tắm trước, sau đó đánh răng, mười một giờ tắt đèn đi ngủ. Tối nay cậu ấy phát hiện đèn nhà vệ sinh bị hỏng, chỉ có thể tắm thật cẩn thận. Ngày mai cậu ấy sẽ tìm người đến xem.",
      qs: [
        {"q": "大卫每天晚上几点睡觉？", "v": "Tối nào David cũng ngủ lúc mấy giờ?", "o": ["十二点", "十一点", "十点"], "a": 1},
        {"q": "今天晚上有什么问题？", "v": "Tối nay có vấn đề gì?", "o": ["电梯坏了", "洗手间的灯坏了", "空调坏了"], "a": 1},
      ] }
  },
  11: {
    dl: { lines: [
      {"r": "A", "z": "下个月我要去别的国家留学了。", "p": "Xià ge yuè wǒ yào qù bié de guójiā liúxué le.", "v": "Tháng sau tôi sẽ đi du học nước khác."},
      {"r": "B", "z": "太好了！需要我帮忙吗？", "p": "Tài hǎo le! Xūyào wǒ bāngmáng ma?", "v": "Tuyệt quá! Có cần tôi giúp gì không?"},
      {"r": "A", "z": "我没有大行李箱，能借你的吗？", "p": "Wǒ méiyǒu dà xínglixiāng, néng jiè nǐ de ma?", "v": "Tôi không có vali to, cho tôi mượn cái của bạn được không?"},
      {"r": "B", "z": "当然可以。护照和重要的东西一定要放好。", "p": "Dāngrán kěyǐ. Hùzhào hé zhòngyào de dōngxi yídìng yào fàng hǎo.", "v": "Tất nhiên rồi. Hộ chiếu và đồ quan trọng nhất định phải cất kỹ."},
      {"r": "A", "z": "放心吧。我走了以后，你愿意帮我照顾我的猫吗？", "p": "Fàngxīn ba. Wǒ zǒu le yǐhòu, nǐ yuànyì bāng wǒ zhàogù wǒ de māo ma?", "v": "Yên tâm đi. Tôi đi rồi, bạn có sẵn lòng chăm con mèo giúp tôi không?"},
      {"r": "B", "z": "好极了，我最喜欢猫了！", "p": "Hǎo jí le, wǒ zuì xǐhuan māo le!", "v": "Tuyệt quá, tôi thích mèo nhất!"},
    ],
      qs: [
        {"q": "A要借什么？", "v": "A muốn mượn gì?", "o": ["护照", "行李箱", "猫"], "a": 1},
        {"q": "A走了以后B要做什么？", "v": "Sau khi A đi, B sẽ làm gì?", "o": ["去留学", "照顾A的猫", "买行李箱"], "a": 1},
      ] },
    rd: { z: "李月下个星期要去中国留学。妈妈很担心她，每天都问：“东西都准备好了吗？”李月说：“妈妈，您放心吧，重要的东西我都放在行李箱里了。”妈妈还是不放心，又帮她看了一次。她说：“一个人在外面，一定要照顾好自己。”",
      p: "Lǐ Yuè xià ge xīngqī yào qù Zhōngguó liúxué. Māma hěn dānxīn tā, měi tiān dōu wèn: \"Dōngxi dōu zhǔnbèi hǎo le ma?\" Lǐ Yuè shuō: \"Māma, nín fàngxīn ba, zhòngyào de dōngxi wǒ dōu fàng zài xínglixiāng lǐ le.\" Māma háishi bú fàngxīn, yòu bāng tā kàn le yí cì. Tā shuō: \"Yí ge rén zài wàimian, yídìng yào zhàogù hǎo zìjǐ.\"",
      v: "Tuần sau Lý Nguyệt sẽ đi du học Trung Quốc. Mẹ rất lo cho cô ấy, ngày nào cũng hỏi: “Đồ đạc chuẩn bị xong hết chưa?” Lý Nguyệt nói: “Mẹ yên tâm đi, đồ quan trọng con để hết trong vali rồi.” Mẹ vẫn không yên tâm, lại kiểm tra giúp một lần nữa. Mẹ nói: “Một mình ở bên ngoài, nhất định phải tự chăm sóc bản thân cho tốt.”",
      qs: [
        {"q": "李月要去做什么？", "v": "Lý Nguyệt sắp đi làm gì?", "o": ["去中国留学", "去北京旅游", "去朋友家"], "a": 0},
        {"q": "李月把重要的东西放在哪儿？", "v": "Lý Nguyệt để đồ quan trọng ở đâu?", "o": ["妈妈那儿", "行李箱里", "包里"], "a": 1},
      ] }
  },
  12: {
    dl: { lines: [
      {"r": "A", "z": "你怎么这么晚才回来？", "p": "Nǐ zěnme zhème wǎn cái huílai?", "v": "Sao bạn về muộn thế?"},
      {"r": "B", "z": "别说了，我是走回来的。", "p": "Bié shuō le, wǒ shì zǒu huílai de.", "v": "Đừng nhắc nữa, tôi đi bộ về đấy."},
      {"r": "A", "z": "为什么？你不是坐公共汽车吗？", "p": "Wèi shénme? Nǐ bú shì zuò gōnggòng qìchē ma?", "v": "Sao vậy? Chẳng phải bạn đi xe buýt à?"},
      {"r": "B", "z": "我在车站等了半个小时，车一直没来。", "p": "Wǒ zài chēzhàn děng le bàn ge xiǎoshí, chē yìzhí méi lái.", "v": "Tôi đợi ở bến nửa tiếng, xe mãi không đến."},
      {"r": "A", "z": "那你怎么不坐出租车？", "p": "Nà nǐ zěnme bú zuò chūzūchē?", "v": "Thế sao bạn không đi taxi?"},
      {"r": "B", "z": "我先向东走了一千米，也没遇到出租车，最后就走回来了。", "p": "Wǒ xiān xiàng dōng zǒu le yìqiān mǐ, yě méi yùdào chūzūchē, zuìhòu jiù zǒu huílai le.", "v": "Tôi đi về phía đông một nghìn mét, cũng không gặp taxi nào, cuối cùng đành đi bộ về."},
    ],
      qs: [
        {"q": "B是怎么回来的？", "v": "B về bằng cách nào?", "o": ["坐公共汽车", "走回来的", "坐出租车"], "a": 1},
        {"q": "B在车站等了多长时间？", "v": "B đợi ở bến bao lâu?", "o": ["一个小时", "半个小时", "十分钟"], "a": 1},
      ] },
    rd: { z: "我给大家讲一个故事。有一天，小明在路上遇到一位老人，老人问他银行在哪儿。小明说：“先向西走两百米，然后往右走，银行就在超市和饭店中间。”老人很高兴。后来，小明经常在那条路上遇到他，他们成了好朋友。",
      p: "Wǒ gěi dàjiā jiǎng yí ge gùshi. Yǒu yì tiān, Xiǎomíng zài lùshang yùdào yí wèi lǎorén, lǎorén wèn tā yínháng zài nǎr. Xiǎomíng shuō: \"Xiān xiàng xī zǒu liǎngbǎi mǐ, ránhòu wǎng yòu zǒu, yínháng jiù zài chāoshì hé fàndiàn zhōngjiān.\" Lǎorén hěn gāoxìng. Hòulái, Xiǎomíng jīngcháng zài nà tiáo lùshang yùdào tā, tāmen chéng le hǎo péngyou.",
      v: "Tôi kể mọi người nghe một câu chuyện. Một hôm, Tiểu Minh gặp một cụ già trên đường, cụ hỏi ngân hàng ở đâu. Tiểu Minh nói: “Đi về phía tây hai trăm mét trước, sau đó rẽ phải, ngân hàng nằm giữa siêu thị và nhà hàng.” Cụ rất vui. Về sau, Tiểu Minh thường gặp cụ trên con đường đó, họ trở thành bạn tốt.",
      qs: [
        {"q": "老人要去哪儿？", "v": "Cụ già muốn đi đâu?", "o": ["银行", "饭店", "超市"], "a": 0},
        {"q": "银行在哪儿？", "v": "Ngân hàng ở đâu?", "o": ["超市东边", "超市和饭店中间", "饭店后面"], "a": 1},
      ] }
  },
  13: {
    dl: { lines: [
      {"r": "A", "z": "你好，这种苹果新鲜吗？多少钱一公斤？", "p": "Nǐ hǎo, zhè zhǒng píngguǒ xīnxiān ma? Duōshao qián yì gōngjīn?", "v": "Chào bạn, táo loại này có tươi không? Bao nhiêu tiền một cân?"},
      {"r": "B", "z": "很新鲜，是今天早上到的。十二块五一公斤。", "p": "Hěn xīnxiān, shì jīntiān zǎoshang dào de. Shí'èr kuài wǔ yì gōngjīn.", "v": "Rất tươi, sáng nay mới về. Mười hai tệ rưỡi một cân."},
      {"r": "A", "z": "我要两公斤苹果，再要一公斤香蕉。", "p": "Wǒ yào liǎng gōngjīn píngguǒ, zài yào yì gōngjīn xiāngjiāo.", "v": "Tôi lấy hai cân táo, thêm một cân chuối."},
      {"r": "B", "z": "香蕉八块，一共三十三块。", "p": "Xiāngjiāo bā kuài, yígòng sānshísān kuài.", "v": "Chuối tám tệ, tổng cộng ba mươi ba tệ."},
      {"r": "A", "z": "给你五十。", "p": "Gěi nǐ wǔshí.", "v": "Gửi bạn năm mươi tệ."},
      {"r": "B", "z": "找你十七块。欢迎再来！", "p": "Zhǎo nǐ shíqī kuài. Huānyíng zài lái!", "v": "Trả lại bạn mười bảy tệ. Lần sau lại đến nhé!"},
    ],
      qs: [
        {"q": "苹果多少钱一公斤？", "v": "Táo bao nhiêu tiền một cân?", "o": ["十二块五", "三十三块", "八块"], "a": 0},
        {"q": "一共花了多少钱？", "v": "Tổng cộng tiêu hết bao nhiêu tiền?", "o": ["五十块", "三十三块", "十七块"], "a": 1},
      ] },
    rd: { z: "大卫家有四口人。上个周末，他们一家去买新桌子。商店里的桌子有很多种，大卫的妈妈选择了一张蓝色的。这张桌子一万两千元，有点儿贵，但是妈妈很满意。卖桌子的那位先生说，下个星期就送到他们家。",
      p: "Dàwèi jiā yǒu sì kǒu rén. Shàng ge zhōumò, tāmen yì jiā qù mǎi xīn zhuōzi. Shāngdiàn lǐ de zhuōzi yǒu hěn duō zhǒng, Dàwèi de māma xuǎnzé le yì zhāng lánsè de. Zhè zhāng zhuōzi yíwàn liǎngqiān yuán, yǒudiǎnr guì, dànshì māma hěn mǎnyì. Mài zhuōzi de nà wèi xiānsheng shuō, xià ge xīngqī jiù sòng dào tāmen jiā.",
      v: "Nhà David có bốn người. Cuối tuần trước, cả nhà đi mua bàn mới. Bàn trong cửa hàng có rất nhiều loại, mẹ David chọn một chiếc màu xanh lam. Chiếc bàn này mười hai nghìn tệ, hơi đắt, nhưng mẹ rất hài lòng. Ông bán bàn nói tuần sau sẽ giao đến nhà họ.",
      qs: [
        {"q": "大卫家有几口人？", "v": "Nhà David có mấy người?", "o": ["五口", "四口", "三口"], "a": 1},
        {"q": "妈妈选择了什么颜色的桌子？", "v": "Mẹ chọn chiếc bàn màu gì?", "o": ["红色的", "白色的", "蓝色的"], "a": 2},
      ] }
  },
  14: {
    dl: { lines: [
      {"r": "A", "z": "经理，关于这个节目，我有一个问题。", "p": "Jīnglǐ, guānyú zhège jiémù, wǒ yǒu yí ge wèntí.", "v": "Giám đốc, về chương trình này, tôi có một vấn đề."},
      {"r": "B", "z": "什么问题？", "p": "Shénme wèntí?", "v": "Vấn đề gì?"},
      {"r": "A", "z": "音乐太长了。根据要求，节目八点必须结束。", "p": "Yīnyuè tài cháng le. Gēnjù yāoqiú, jiémù bā diǎn bìxū jiéshù.", "v": "Phần nhạc dài quá. Theo yêu cầu, chương trình phải kết thúc lúc tám giờ."},
      {"r": "B", "z": "没关系，把音乐换短一点儿就解决了。其他的呢？", "p": "Méi guānxi, bǎ yīnyuè huàn duǎn yìdiǎnr jiù jiějué le. Qítā de ne?", "v": "Không sao, đổi nhạc ngắn hơn một chút là giải quyết được. Còn những phần khác?"},
      {"r": "A", "z": "其他都没什么问题，今天就能完成。", "p": "Qítā dōu méi shénme wèntí, jīntiān jiù néng wánchéng.", "v": "Những phần khác đều không có vấn đề gì, hôm nay là xong."},
      {"r": "B", "z": "好，如果有问题，马上告诉我。", "p": "Hǎo, rúguǒ yǒu wèntí, mǎshàng gàosu wǒ.", "v": "Tốt, nếu có vấn đề gì thì báo tôi ngay."},
    ],
      qs: [
        {"q": "节目有什么问题？", "v": "Chương trình có vấn đề gì?", "o": ["音乐太长了", "没有音乐", "新闻太短了"], "a": 0},
        {"q": "节目几点必须结束？", "v": "Chương trình phải kết thúc lúc mấy giờ?", "o": ["七点", "九点", "八点"], "a": 2},
      ] },
    rd: { z: "以前我每天晚上都看电视新闻。最近我发现，自己很久没看电视了。奇怪吗？其实不奇怪，因为现在上网就能看新闻、听音乐。如果想看什么节目，在手机上就能找到。我觉得手机比电视方便多了。",
      p: "Yǐqián wǒ měi tiān wǎnshang dōu kàn diànshì xīnwén. Zuìjìn wǒ fāxiàn, zìjǐ hěn jiǔ méi kàn diànshì le. Qíguài ma? Qíshí bù qíguài, yīnwèi xiànzài shàngwǎng jiù néng kàn xīnwén, tīng yīnyuè. Rúguǒ xiǎng kàn shénme jiémù, zài shǒujī shàng jiù néng zhǎo dào. Wǒ juéde shǒujī bǐ diànshì fāngbiàn duō le.",
      v: "Trước đây tối nào tôi cũng xem thời sự trên tivi. Gần đây tôi phát hiện mình đã lâu không xem tivi. Lạ không? Thật ra không lạ, vì bây giờ lên mạng là xem được tin tức, nghe được nhạc. Muốn xem chương trình gì thì trên điện thoại cũng tìm được. Tôi thấy điện thoại tiện hơn tivi nhiều.",
      qs: [
        {"q": "“我”最近发现了什么？", "v": "Gần đây “tôi” phát hiện ra điều gì?", "o": ["很久没看电视了", "不能上网了", "每天都看电视"], "a": 0},
        {"q": "现在“我”怎么看新闻？", "v": "Bây giờ “tôi” xem tin tức bằng cách nào?", "o": ["看报纸", "看电视", "上网看"], "a": 2},
      ] }
  },
  15: {
    dl: { lines: [
      {"r": "A", "z": "你最近怎么了？看起来特别累。", "p": "Nǐ zuìjìn zěnme le? Kàn qǐlai tèbié lèi.", "v": "Dạo này bạn sao vậy? Trông mệt lắm."},
      {"r": "B", "z": "公司最近特别忙，我几乎每天晚上九点才下班。", "p": "Gōngsī zuìjìn tèbié máng, wǒ jīhū měi tiān wǎnshang jiǔ diǎn cái xiàbān.", "v": "Công ty dạo này rất bận, gần như tối nào chín giờ tôi mới tan làm."},
      {"r": "A", "z": "那你回家以后做什么？", "p": "Nà nǐ huí jiā yǐhòu zuò shénme?", "v": "Thế về nhà rồi bạn làm gì?"},
      {"r": "B", "z": "我现在累得下了班就想睡觉，饭也不想吃。", "p": "Wǒ xiànzài lèi de xià le bān jiù xiǎng shuìjiào, fàn yě bù xiǎng chī.", "v": "Giờ tôi mệt đến mức tan làm là chỉ muốn ngủ, cơm cũng không muốn ăn."},
      {"r": "A", "z": "这样对身体不好，你还是要吃饭啊。", "p": "Zhèyàng duì shēntǐ bù hǎo, nǐ háishi yào chī fàn a.", "v": "Như vậy không tốt cho sức khỏe, bạn vẫn phải ăn cơm chứ."},
      {"r": "B", "z": "谢谢你这么关心我。", "p": "Xièxie nǐ zhème guānxīn wǒ.", "v": "Cảm ơn bạn đã quan tâm tôi như vậy."},
    ],
      qs: [
        {"q": "B最近为什么很累？", "v": "Vì sao dạo này B rất mệt?", "o": ["睡觉太晚", "工作特别忙", "生病了"], "a": 1},
        {"q": "B下班以后想做什么？", "v": "Tan làm B muốn làm gì?", "o": ["看电视", "吃饭", "睡觉"], "a": 2},
      ] },
    rd: { z: "我妹妹今年五岁。她一般晚上八点睡觉，睡觉以前习惯听妈妈讲故事。有一天妈妈生病了，不能讲故事，妹妹很难过，哭了。我说：“别哭，姐姐给你讲。”妹妹马上安静下来，听着听着就睡着了。",
      p: "Wǒ mèimei jīnnián wǔ suì. Tā yìbān wǎnshang bā diǎn shuìjiào, shuìjiào yǐqián xíguàn tīng māma jiǎng gùshi. Yǒu yì tiān māma shēngbìng le, bù néng jiǎng gùshi, mèimei hěn nánguò, kū le. Wǒ shuō: \"Bié kū, jiějie gěi nǐ jiǎng.\" Mèimei mǎshàng ānjìng xiàlai, tīng zhe tīng zhe jiù shuìzháo le.",
      v: "Em gái tôi năm nay năm tuổi. Em thường ngủ lúc tám giờ tối, trước khi ngủ quen nghe mẹ kể chuyện. Có một hôm mẹ bị ốm, không kể chuyện được, em buồn và khóc. Tôi nói: “Đừng khóc, chị kể cho em nghe.” Em lập tức im lặng, nghe một lúc thì ngủ thiếp đi.",
      qs: [
        {"q": "妹妹睡觉以前有什么习惯？", "v": "Trước khi ngủ em gái có thói quen gì?", "o": ["听妈妈讲故事", "看电视", "喝牛奶"], "a": 0},
        {"q": "妹妹为什么哭了？", "v": "Vì sao em gái khóc?", "o": ["妈妈不能讲故事", "姐姐生气了", "她生病了"], "a": 0},
      ] }
  },
  16: {
    dl: { lines: [
      {"r": "A", "z": "你怎么了？脸这么红。", "p": "Nǐ zěnme le? Liǎn zhème hóng.", "v": "Bạn sao thế? Mặt đỏ thế kia."},
      {"r": "B", "z": "我有点儿不舒服，可能感冒了。", "p": "Wǒ yǒudiǎnr bù shūfu, kěnéng gǎnmào le.", "v": "Tôi hơi khó chịu, có lẽ bị cảm rồi."},
      {"r": "A", "z": "发烧吗？", "p": "Fāshāo ma?", "v": "Có sốt không?"},
      {"r": "B", "z": "我也不知道，头有点儿疼。", "p": "Wǒ yě bù zhīdào, tóu yǒudiǎnr téng.", "v": "Tôi cũng không biết, đầu hơi đau."},
      {"r": "A", "z": "最近天气变化很大，你去医院检查一下吧。", "p": "Zuìjìn tiānqì biànhuà hěn dà, nǐ qù yīyuàn jiǎnchá yíxià ba.", "v": "Dạo này thời tiết thay đổi nhiều, bạn đi bệnh viện kiểm tra đi."},
      {"r": "B", "z": "好，下午我就去。", "p": "Hǎo, xiàwǔ wǒ jiù qù.", "v": "Được, chiều nay tôi đi."},
    ],
      qs: [
        {"q": "B怎么了？", "v": "B bị làm sao?", "o": ["太饿了", "可能感冒了", "脚疼"], "a": 1},
        {"q": "A让B做什么？", "v": "A bảo B làm gì?", "o": ["在家睡觉", "去锻炼", "去医院检查"], "a": 2},
      ] },
    rd: { z: "周末我们去了动物园。那儿的环境很好，有很多树和草，还有很多花。我们看到了鸟、马，还有可爱的熊猫。熊猫一直在吃东西，一点儿也不害怕人。小明说：“我长大了想在动物园工作，照顾这些动物。”",
      p: "Zhōumò wǒmen qù le dòngwùyuán. Nàr de huánjìng hěn hǎo, yǒu hěn duō shù hé cǎo, hái yǒu hěn duō huā. Wǒmen kàn dào le niǎo, mǎ, hái yǒu kě'ài de xióngmāo. Xióngmāo yìzhí zài chī dōngxi, yìdiǎnr yě bú hàipà rén. Xiǎomíng shuō: \"Wǒ zhǎngdà le xiǎng zài dòngwùyuán gōngzuò, zhàogù zhèxiē dòngwù.\"",
      v: "Cuối tuần chúng tôi đi sở thú. Môi trường ở đó rất tốt, có nhiều cây và cỏ, còn có nhiều hoa. Chúng tôi thấy chim, ngựa, còn có gấu trúc đáng yêu. Gấu trúc cứ ăn suốt, chẳng sợ người chút nào. Tiểu Minh nói: “Lớn lên tôi muốn làm việc ở sở thú, chăm sóc những con vật này.”",
      qs: [
        {"q": "动物园的环境怎么样？", "v": "Môi trường sở thú thế nào?", "o": ["没有树和草", "很好，有很多树", "不太干净"], "a": 1},
        {"q": "小明长大以后想做什么？", "v": "Lớn lên Tiểu Minh muốn làm gì?", "o": ["在动物园工作", "做医生", "去中国"], "a": 0},
      ] }
  },
  17: {
    dl: { lines: [
      {"r": "A", "z": "我决定去中国留学一年。", "p": "Wǒ juédìng qù Zhōngguó liúxué yì nián.", "v": "Tôi quyết định đi du học Trung Quốc một năm."},
      {"r": "B", "z": "你爸爸妈妈同意吗？", "p": "Nǐ bàba māma tóngyì ma?", "v": "Bố mẹ bạn đồng ý không?"},
      {"r": "A", "z": "还没告诉他们。我相信他们会同意的。", "p": "Hái méi gàosu tāmen. Wǒ xiāngxìn tāmen huì tóngyì de.", "v": "Tôi chưa nói với bố mẹ. Tôi tin bố mẹ sẽ đồng ý."},
      {"r": "B", "z": "你为什么这么决定？", "p": "Nǐ wèi shénme zhème juédìng?", "v": "Sao bạn lại quyết định như vậy?"},
      {"r": "A", "z": "我认为只有在中国学习，汉语才能提高得快。", "p": "Wǒ rènwéi zhǐyǒu zài Zhōngguó xuéxí, Hànyǔ cái néng tígāo de kuài.", "v": "Tôi cho rằng chỉ có học ở Trung Quốc thì tiếng Trung mới tiến bộ nhanh."},
      {"r": "B", "z": "说得对。你不但能学汉语，而且能了解中国文化。", "p": "Shuō de duì. Nǐ búdàn néng xué Hànyǔ, érqiě néng liǎojiě Zhōngguó wénhuà.", "v": "Nói đúng lắm. Bạn không những học được tiếng Trung mà còn hiểu được văn hóa Trung Quốc."},
    ],
      qs: [
        {"q": "A决定做什么？", "v": "A quyết định làm gì?", "o": ["去中国留学", "学数学", "找工作"], "a": 0},
        {"q": "A的爸爸妈妈知道这件事吗？", "v": "Bố mẹ A biết chuyện này chưa?", "o": ["已经同意了", "还不知道", "不同意"], "a": 1},
      ] },
    rd: { z: "很多人认为学习汉语不容易。其实，只有多听多说，才能学好。我的老同学大卫，开始的时候汉语很差。为了学好汉语，他每天都跟中国朋友聊天。一年以后，他不但说得好，而且写得也不错。他说：“学习最重要的是自己努力。”",
      p: "Hěn duō rén rènwéi xuéxí Hànyǔ bù róngyì. Qíshí, zhǐyǒu duō tīng duō shuō, cái néng xué hǎo. Wǒ de lǎo tóngxué Dàwèi, kāishǐ de shíhou Hànyǔ hěn chà. Wèile xué hǎo Hànyǔ, tā měi tiān dōu gēn Zhōngguó péngyou liáotiān. Yì nián yǐhòu, tā búdàn shuō de hǎo, érqiě xiě de yě búcuò. Tā shuō: \"Xuéxí zuì zhòngyào de shì zìjǐ nǔlì.\"",
      v: "Nhiều người cho rằng học tiếng Trung không dễ. Thật ra, chỉ cần nghe nhiều nói nhiều thì mới học tốt được. Bạn học cũ của tôi là David, lúc đầu tiếng Trung rất kém. Để học tốt tiếng Trung, ngày nào cậu ấy cũng trò chuyện với bạn người Trung Quốc. Một năm sau, cậu ấy không những nói giỏi mà viết cũng khá. Cậu ấy nói: “Điều quan trọng nhất khi học là bản thân phải cố gắng.”",
      qs: [
        {"q": "为了学好汉语，大卫每天做什么？", "v": "Để học tốt tiếng Trung, ngày nào David cũng làm gì?", "o": ["去图书馆", "跟中国朋友聊天", "看中文电视"], "a": 1},
        {"q": "一年以后大卫的汉语怎么样？", "v": "Một năm sau tiếng Trung của David thế nào?", "o": ["还是很差", "只会说，不会写", "说得好，写得也不错"], "a": 2},
      ] }
  },
  18: {
    dl: { lines: [
      {"r": "A", "z": "你最喜欢哪个季节？", "p": "Nǐ zuì xǐhuan nǎge jìjié?", "v": "Bạn thích mùa nào nhất?"},
      {"r": "B", "z": "秋天，不冷也不热。你呢？", "p": "Qiūtiān, bù lěng yě bú rè. Nǐ ne?", "v": "Mùa thu, không lạnh cũng không nóng. Còn bạn?"},
      {"r": "A", "z": "我喜欢春天，树绿了，花也开了。", "p": "Wǒ xǐhuan chūntiān, shù lǜ le, huā yě kāi le.", "v": "Tôi thích mùa xuân, cây xanh lên, hoa cũng nở."},
      {"r": "B", "z": "但是北京的春天常常刮风。", "p": "Dànshì Běijīng de chūntiān chángcháng guā fēng.", "v": "Nhưng mùa xuân ở Bắc Kinh hay có gió."},
      {"r": "A", "z": "没关系，我还是喜欢春天。你看，今天的太阳多好！", "p": "Méi guānxi, wǒ háishi xǐhuan chūntiān. Nǐ kàn, jīntiān de tàiyáng duō hǎo!", "v": "Không sao, tôi vẫn thích mùa xuân. Bạn xem, nắng hôm nay đẹp biết bao!"},
      {"r": "B", "z": "走，我们去公园走走吧。", "p": "Zǒu, wǒmen qù gōngyuán zǒuzou ba.", "v": "Đi thôi, chúng ta ra công viên đi dạo nhé."},
    ],
      qs: [
        {"q": "B最喜欢哪个季节？", "v": "B thích mùa nào nhất?", "o": ["春天", "秋天", "冬天"], "a": 1},
        {"q": "北京的春天怎么样？", "v": "Mùa xuân ở Bắc Kinh thế nào?", "o": ["常常下雪", "特别热", "常常刮风"], "a": 2},
      ] },
    rd: { z: "我去年夏天去过黄河。那天天气很热，太阳很大，我走了半个小时就渴了。晚上，月亮出来了，河边又安静又漂亮。朋友说：“你看起来很高兴啊！”我说：“是啊，我以后还要来。”",
      p: "Wǒ qùnián xiàtiān qù guo Huáng Hé. Nà tiān tiānqì hěn rè, tàiyáng hěn dà, wǒ zǒu le bàn ge xiǎoshí jiù kě le. Wǎnshang, yuèliang chūlai le, hé biān yòu ānjìng yòu piàoliang. Péngyou shuō: \"Nǐ kàn qǐlai hěn gāoxìng a!\" Wǒ shuō: \"Shì a, wǒ yǐhòu hái yào lái.\"",
      v: "Mùa hè năm ngoái tôi từng đến sông Hoàng Hà. Hôm đó trời rất nóng, nắng gắt, tôi đi nửa tiếng đã khát. Buổi tối, trăng lên, bờ sông vừa yên tĩnh vừa đẹp. Bạn tôi nói: “Trông bạn vui quá nhỉ!” Tôi nói: “Đúng vậy, sau này tôi còn muốn đến nữa.”",
      qs: [
        {"q": "“我”什么时候去的黄河？", "v": "“Tôi” đến sông Hoàng Hà khi nào?", "o": ["去年冬天", "今年春天", "去年夏天"], "a": 2},
        {"q": "“我”为什么渴了？", "v": "Vì sao “tôi” bị khát?", "o": ["生病了", "天气很热", "吃得太饱"], "a": 1},
      ] }
  },
  19: {
    dl: { lines: [
      {"r": "A", "z": "你以前不是对画画儿不感兴趣吗？", "p": "Nǐ yǐqián bú shì duì huà huàr bù gǎn xìngqù ma?", "v": "Trước đây chẳng phải bạn không hứng thú với vẽ tranh sao?"},
      {"r": "B", "z": "是啊，但是我被我哥哥影响了。", "p": "Shì a, dànshì wǒ bèi wǒ gēge yǐngxiǎng le.", "v": "Đúng vậy, nhưng tôi bị anh trai ảnh hưởng."},
      {"r": "A", "z": "他很会画画儿吗？", "p": "Tā hěn huì huà huàr ma?", "v": "Anh ấy vẽ giỏi lắm à?"},
      {"r": "B", "z": "对，他一边工作一边画，还参加过比赛。", "p": "Duì, tā yìbiān gōngzuò yìbiān huà, hái cānjiā guo bǐsài.", "v": "Đúng, anh ấy vừa đi làm vừa vẽ, còn từng tham gia thi nữa."},
      {"r": "A", "z": "我也想试试，你能帮忙教我吗？", "p": "Wǒ yě xiǎng shìshi, nǐ néng bāngmáng jiāo wǒ ma?", "v": "Tôi cũng muốn thử, bạn dạy tôi được không?"},
      {"r": "B", "z": "当然可以！下个月有个比赛，这是个好机会。", "p": "Dāngrán kěyǐ! Xià ge yuè yǒu ge bǐsài, zhè shì ge hǎo jīhuì.", "v": "Tất nhiên rồi! Tháng sau có một cuộc thi, đây là cơ hội tốt."},
    ],
      qs: [
        {"q": "谁影响了B？", "v": "Ai đã ảnh hưởng đến B?", "o": ["爸爸", "老师", "哥哥"], "a": 2},
        {"q": "下个月有什么？", "v": "Tháng sau có gì?", "o": ["会议", "画画儿比赛", "考试"], "a": 1},
      ] },
    rd: { z: "大卫的爱好是唱歌。以前他只在家里一边洗澡一边唱。上个月，同事听到他唱歌，让他参加公司的唱歌比赛。大卫开始不愿意，后来想试一试。他得了第一！现在，他对唱歌更感兴趣了。",
      p: "Dàwèi de àihào shì chànggē. Yǐqián tā zhǐ zài jiāli yìbiān xǐzǎo yìbiān chàng. Shàng ge yuè, tóngshì tīng dào tā chànggē, ràng tā cānjiā gōngsī de chànggē bǐsài. Dàwèi kāishǐ bú yuànyì, hòulái xiǎng shì yi shì. Tā dé le dì-yī! Xiànzài, tā duì chànggē gèng gǎn xìngqù le.",
      v: "Sở thích của David là ca hát. Trước đây cậu ấy chỉ vừa tắm vừa hát ở nhà. Tháng trước, đồng nghiệp nghe cậu ấy hát, bảo cậu ấy tham gia cuộc thi hát của công ty. Lúc đầu David không muốn, sau đó muốn thử một lần. Cậu ấy đạt giải nhất! Bây giờ cậu ấy càng thích ca hát hơn.",
      qs: [
        {"q": "大卫的爱好是什么？", "v": "Sở thích của David là gì?", "o": ["跳舞", "唱歌", "画画儿"], "a": 1},
        {"q": "大卫在比赛中得了第几？", "v": "David đạt hạng mấy trong cuộc thi?", "o": ["第三", "第二", "第一"], "a": 2},
      ] }
  }
};
