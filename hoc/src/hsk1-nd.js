/* Nghe – nói – đọc cho HSK 1: hội thoại + bài đọc từng bài */
const ND = {
  0: {  // 你好
    dl: { lines: [
      { r: "A", z: "你好！", p: "Nǐ hǎo!", v: "Chào bạn!" },
      { r: "B", z: "你好！", p: "Nǐ hǎo!", v: "Chào bạn!" },
      { r: "A", z: "你是小明吗？", p: "Nǐ shì Xiǎomíng ma?", v: "Bạn là Tiểu Minh à?" },
      { r: "B", z: "不是，我是大卫。", p: "Bú shì, wǒ shì Dàwèi.", v: "Không phải, tôi là David." },
      { r: "A", z: "对不起！", p: "Duìbuqǐ!", v: "Xin lỗi bạn!" },
      { r: "B", z: "没关系。", p: "Méi guānxi.", v: "Không sao đâu." } ],
      qs: [
        { q: "B叫什么名字？", v: "B tên là gì?", o: ["小明", "王方", "大卫"], a: 2 },
        { q: "B是小明吗？", v: "B có phải là Tiểu Minh không?", o: ["是", "不是", "是老师"], a: 1 } ] },
    rd: { z: "李月是老师。王方是她的学生。王方看见李月，说：“老师，你好！”李月说：“你好，王方！”",
      p: "Lǐ Yuè shì lǎoshī. Wáng Fāng shì tā de xuésheng. Wáng Fāng kànjiàn Lǐ Yuè, shuō: “Lǎoshī, nǐ hǎo!” Lǐ Yuè shuō: “Nǐ hǎo, Wáng Fāng!”",
      v: "Lý Nguyệt là giáo viên. Vương Phương là học sinh của cô ấy. Vương Phương nhìn thấy Lý Nguyệt và nói: “Em chào cô!” Lý Nguyệt nói: “Chào em, Vương Phương!”",
      qs: [
        { q: "李月是谁？", v: "Lý Nguyệt là ai?", o: ["老师", "学生", "医生"], a: 0 },
        { q: "王方对李月说什么？", v: "Vương Phương nói gì với Lý Nguyệt?", o: ["对不起", "老师，你好", "没关系"], a: 1 } ] }
  },
  1: {  // 谢谢你
    dl: { lines: [
      { r: "A", z: "小明，你喝茶吗？", p: "Xiǎomíng, nǐ hē chá ma?", v: "Tiểu Minh, bạn uống trà không?" },
      { r: "B", z: "我不喝茶，谢谢。", p: "Wǒ bù hē chá, xièxie.", v: "Tôi không uống trà, cảm ơn bạn." },
      { r: "A", z: "你喝水吗？", p: "Nǐ hē shuǐ ma?", v: "Bạn uống nước không?" },
      { r: "B", z: "喝，谢谢你！", p: "Hē, xièxie nǐ!", v: "Có, cảm ơn bạn!" },
      { r: "A", z: "不客气。", p: "Bú kèqi.", v: "Không có gì." },
      { r: "B", z: "明天见！", p: "Míngtiān jiàn!", v: "Mai gặp lại nhé!" } ],
      qs: [
        { q: "小明喝茶吗？", v: "Tiểu Minh có uống trà không?", o: ["喝", "不喝", "很爱喝"], a: 1 },
        { q: "小明喝什么？", v: "Tiểu Minh uống gì?", o: ["茶", "没喝", "水"], a: 2 } ] },
    rd: { z: "今天大卫去王方家。王方请大卫喝茶。大卫不喝茶，他喝水。大卫说：“谢谢你！”王方说：“不客气！”",
      p: "Jīntiān Dàwèi qù Wáng Fāng jiā. Wáng Fāng qǐng Dàwèi hē chá. Dàwèi bù hē chá, tā hē shuǐ. Dàwèi shuō: “Xièxie nǐ!” Wáng Fāng shuō: “Bú kèqi!”",
      v: "Hôm nay David đến nhà Vương Phương. Vương Phương mời David uống trà. David không uống trà, anh ấy uống nước. David nói: “Cảm ơn bạn!” Vương Phương nói: “Không có gì!”",
      qs: [
        { q: "大卫今天去哪儿？", v: "Hôm nay David đi đâu?", o: ["学校", "王方家", "商店"], a: 1 },
        { q: "大卫喝什么？", v: "David uống gì?", o: ["水", "茶", "没喝"], a: 0 } ] }
  },
  2: {  // 你叫什么名字
    dl: { lines: [
      { r: "A", z: "你好！你叫什么名字？", p: "Nǐ hǎo! Nǐ jiào shénme míngzi?", v: "Chào bạn! Bạn tên là gì?" },
      { r: "B", z: "我叫大卫。你呢？", p: "Wǒ jiào Dàwèi. Nǐ ne?", v: "Tôi tên là David. Còn bạn?" },
      { r: "A", z: "我叫李月。你是老师吗？", p: "Wǒ jiào Lǐ Yuè. Nǐ shì lǎoshī ma?", v: "Tôi tên là Lý Nguyệt. Bạn là giáo viên à?" },
      { r: "B", z: "我不是老师，我是学生。", p: "Wǒ bú shì lǎoshī, wǒ shì xuésheng.", v: "Tôi không phải giáo viên, tôi là học sinh." },
      { r: "A", z: "我是中国人。你是中国人吗？", p: "Wǒ shì Zhōngguó rén. Nǐ shì Zhōngguó rén ma?", v: "Tôi là người Trung Quốc. Bạn là người Trung Quốc à?" },
      { r: "B", z: "我不是中国人。", p: "Wǒ bú shì Zhōngguó rén.", v: "Tôi không phải người Trung Quốc." } ],
      qs: [
        { q: "B叫什么名字？", v: "B tên là gì?", o: ["李月", "大卫", "小明"], a: 1 },
        { q: "大卫是老师吗？", v: "David có phải là giáo viên không?", o: ["是学生", "是老师", "是医生"], a: 0 } ] },
    rd: { z: "我叫王方，我是中国人。我是学生。我的老师叫李月，她是中国人。大卫是我的同学，他不是中国人。",
      p: "Wǒ jiào Wáng Fāng, wǒ shì Zhōngguó rén. Wǒ shì xuésheng. Wǒ de lǎoshī jiào Lǐ Yuè, tā shì Zhōngguó rén. Dàwèi shì wǒ de tóngxué, tā bú shì Zhōngguó rén.",
      v: "Tôi tên là Vương Phương, tôi là người Trung Quốc. Tôi là học sinh. Cô giáo của tôi tên là Lý Nguyệt, cô ấy là người Trung Quốc. David là bạn cùng lớp của tôi, bạn ấy không phải người Trung Quốc.",
      qs: [
        { q: "王方是老师吗？", v: "Vương Phương có phải là giáo viên không?", o: ["是老师", "是学生", "是医生"], a: 1 },
        { q: "大卫是中国人吗？", v: "David có phải người Trung Quốc không?", o: ["是中国人", "是老师", "不是中国人"], a: 2 } ] }
  },
  3: {  // 她是我的汉语老师
    dl: { lines: [
      { r: "A", z: "她是谁？", p: "Tā shì shéi?", v: "Cô ấy là ai?" },
      { r: "B", z: "她是我的汉语老师，她叫李月。", p: "Tā shì wǒ de Hànyǔ lǎoshī, tā jiào Lǐ Yuè.", v: "Cô ấy là giáo viên tiếng Trung của tôi, cô ấy tên là Lý Nguyệt." },
      { r: "A", z: "他呢？他是谁？", p: "Tā ne? Tā shì shéi?", v: "Còn anh ấy? Anh ấy là ai?" },
      { r: "B", z: "他是我同学，他叫大卫。", p: "Tā shì wǒ tóngxué, tā jiào Dàwèi.", v: "Anh ấy là bạn cùng lớp của tôi, anh ấy tên là David." },
      { r: "A", z: "他是你的朋友吗？", p: "Tā shì nǐ de péngyou ma?", v: "Anh ấy là bạn của bạn à?" },
      { r: "B", z: "是，他是我的好朋友。", p: "Shì, tā shì wǒ de hǎo péngyou.", v: "Đúng, anh ấy là bạn thân của tôi." } ],
      qs: [
        { q: "李月是谁？", v: "Lý Nguyệt là ai?", o: ["同学", "汉语老师", "朋友"], a: 1 },
        { q: "B的同学叫什么名字？", v: "Bạn cùng lớp của B tên là gì?", o: ["大卫", "李月", "小明"], a: 0 } ] },
    rd: { z: "小明是学生，他学习汉语。他的汉语老师是李月。他有一个好朋友，叫大卫。大卫是他的同学。",
      p: "Xiǎomíng shì xuésheng, tā xuéxí Hànyǔ. Tā de Hànyǔ lǎoshī shì Lǐ Yuè. Tā yǒu yí ge hǎo péngyou, jiào Dàwèi. Dàwèi shì tā de tóngxué.",
      v: "Tiểu Minh là học sinh, bạn ấy học tiếng Trung. Giáo viên tiếng Trung của bạn ấy là Lý Nguyệt. Bạn ấy có một người bạn thân tên là David. David là bạn cùng lớp của bạn ấy.",
      qs: [
        { q: "小明的汉语老师是谁？", v: "Giáo viên tiếng Trung của Tiểu Minh là ai?", o: ["大卫", "王方", "李月"], a: 2 },
        { q: "大卫是小明的什么人？", v: "David là gì của Tiểu Minh?", o: ["老师", "同学", "爸爸"], a: 1 } ] }
  },
  4: {  // 她女儿今年二十岁
    dl: { lines: [
      { r: "A", z: "李月，你家有几个人？", p: "Lǐ Yuè, nǐ jiā yǒu jǐ ge rén?", v: "Lý Nguyệt, nhà bạn có mấy người?" },
      { r: "B", z: "我家有三个人：爸爸、妈妈和我。", p: "Wǒ jiā yǒu sān ge rén: bàba, māma hé wǒ.", v: "Nhà tôi có ba người: bố, mẹ và tôi." },
      { r: "A", z: "你今年多大了？", p: "Nǐ jīnnián duō dà le?", v: "Năm nay bạn bao nhiêu tuổi rồi?" },
      { r: "B", z: "我今年二十岁。你呢？", p: "Wǒ jīnnián èrshí suì. Nǐ ne?", v: "Năm nay tôi hai mươi tuổi. Còn bạn?" },
      { r: "A", z: "我十八岁。", p: "Wǒ shíbā suì.", v: "Tôi mười tám tuổi." } ],
      qs: [
        { q: "李月家有几个人？", v: "Nhà Lý Nguyệt có mấy người?", o: ["三个", "四个", "五个"], a: 0 },
        { q: "李月今年多大了？", v: "Năm nay Lý Nguyệt bao nhiêu tuổi?", o: ["十八岁", "二十岁", "十二岁"], a: 1 } ] },
    rd: { z: "王方的汉语老师有一个女儿。她女儿今年二十岁了，是北京的大学生。老师家有三个人：爸爸、妈妈和女儿。",
      p: "Wáng Fāng de Hànyǔ lǎoshī yǒu yí ge nǚ'ér. Tā nǚ'ér jīnnián èrshí suì le, shì Běijīng de dàxuéshēng. Lǎoshī jiā yǒu sān ge rén: bàba, māma hé nǚ'ér.",
      v: "Cô giáo tiếng Trung của Vương Phương có một cô con gái. Con gái cô năm nay hai mươi tuổi, là sinh viên đại học ở Bắc Kinh. Nhà cô giáo có ba người: bố, mẹ và con gái.",
      qs: [
        { q: "老师的女儿多大了？", v: "Con gái cô giáo bao nhiêu tuổi?", o: ["二十岁", "十二岁", "三十岁"], a: 0 },
        { q: "老师家有几个人？", v: "Nhà cô giáo có mấy người?", o: ["一个", "五个", "三个"], a: 2 } ] }
  },
  5: {  // 我会说汉语
    dl: { lines: [
      { r: "A", z: "大卫，你会说汉语吗？", p: "Dàwèi, nǐ huì shuō Hànyǔ ma?", v: "David, bạn biết nói tiếng Trung không?" },
      { r: "B", z: "会一点儿。", p: "Huì yìdiǎnr.", v: "Biết một chút." },
      { r: "A", z: "你会写汉字吗？", p: "Nǐ huì xiě Hànzì ma?", v: "Bạn biết viết chữ Hán không?" },
      { r: "B", z: "我会写几个字。", p: "Wǒ huì xiě jǐ ge zì.", v: "Tôi biết viết vài chữ." },
      { r: "A", z: "这个字怎么读？", p: "Zhège zì zěnme dú?", v: "Chữ này đọc thế nào?" },
      { r: "B", z: "对不起，这个字我不会读。", p: "Duìbuqǐ, zhège zì wǒ bú huì dú.", v: "Xin lỗi, chữ này tôi không biết đọc." } ],
      qs: [
        { q: "大卫会说汉语吗？", v: "David có biết nói tiếng Trung không?", o: ["会一点儿", "不会", "会很多"], a: 0 },
        { q: "大卫会读这个字吗？", v: "David có biết đọc chữ này không?", o: ["会", "不会", "会写"], a: 1 } ] },
    rd: { z: "小明的妈妈是中国人。她很会做中国菜。小明爱吃妈妈做的菜。小明会说汉语，他不会写汉字。",
      p: "Xiǎomíng de māma shì Zhōngguó rén. Tā hěn huì zuò Zhōngguó cài. Xiǎomíng ài chī māma zuò de cài. Xiǎomíng huì shuō Hànyǔ, tā bú huì xiě Hànzì.",
      v: "Mẹ của Tiểu Minh là người Trung Quốc. Mẹ nấu món Trung Quốc rất giỏi. Tiểu Minh thích ăn món mẹ nấu. Tiểu Minh biết nói tiếng Trung, nhưng không biết viết chữ Hán.",
      qs: [
        { q: "小明的妈妈会做什么菜？", v: "Mẹ Tiểu Minh biết nấu món gì?", o: ["水果", "中国菜", "米饭"], a: 1 },
        { q: "小明会写汉字吗？", v: "Tiểu Minh có biết viết chữ Hán không?", o: ["会", "会一点儿", "不会"], a: 2 } ] }
  },
  6: {  // 今天几号
    dl: { lines: [
      { r: "A", z: "今天几月几号？", p: "Jīntiān jǐ yuè jǐ hào?", v: "Hôm nay là ngày mấy tháng mấy?" },
      { r: "B", z: "今天九月一号。", p: "Jīntiān jiǔ yuè yī hào.", v: "Hôm nay là ngày 1 tháng 9." },
      { r: "A", z: "今天星期几？", p: "Jīntiān xīngqī jǐ?", v: "Hôm nay thứ mấy?" },
      { r: "B", z: "星期三。", p: "Xīngqīsān.", v: "Thứ Tư." },
      { r: "A", z: "明天你去学校吗？", p: "Míngtiān nǐ qù xuéxiào ma?", v: "Ngày mai bạn có đến trường không?" },
      { r: "B", z: "去，我明天去学校看书。", p: "Qù, wǒ míngtiān qù xuéxiào kàn shū.", v: "Có, mai tôi đến trường đọc sách." } ],
      qs: [
        { q: "今天几月几号？", v: "Hôm nay là ngày mấy tháng mấy?", o: ["九月三号", "九月一号", "十月一号"], a: 1 },
        { q: "B明天去哪儿？", v: "Ngày mai B đi đâu?", o: ["商店", "医院", "学校"], a: 2 } ] },
    rd: { z: "昨天是星期六，我在家看书。今天是星期天，我去朋友家。明天星期一，我去学校。",
      p: "Zuótiān shì xīngqīliù, wǒ zài jiā kàn shū. Jīntiān shì xīngqītiān, wǒ qù péngyou jiā. Míngtiān xīngqīyī, wǒ qù xuéxiào.",
      v: "Hôm qua là thứ Bảy, tôi ở nhà đọc sách. Hôm nay là Chủ nhật, tôi đến nhà bạn. Ngày mai thứ Hai, tôi đi học.",
      qs: [
        { q: "昨天我在哪儿看书？", v: "Hôm qua tôi đọc sách ở đâu?", o: ["学校", "朋友家", "家"], a: 2 },
        { q: "明天星期几？", v: "Ngày mai là thứ mấy?", o: ["星期一", "星期天", "星期六"], a: 0 } ] }
  },
  7: {  // 我想喝茶
    dl: { lines: [
      { r: "A", z: "你好，这个杯子多少钱？", p: "Nǐ hǎo, zhège bēizi duōshao qián?", v: "Chào bạn, cái cốc này bao nhiêu tiền?" },
      { r: "B", z: "这个杯子二十八块。", p: "Zhège bēizi èrshíbā kuài.", v: "Cái cốc này 28 tệ." },
      { r: "A", z: "那个呢？", p: "Nàge ne?", v: "Còn cái kia?" },
      { r: "B", z: "那个十五块。", p: "Nàge shíwǔ kuài.", v: "Cái kia 15 tệ." },
      { r: "A", z: "我买那个，谢谢！", p: "Wǒ mǎi nàge, xièxie!", v: "Tôi mua cái kia, cảm ơn!" },
      { r: "B", z: "不客气。", p: "Bú kèqi.", v: "Không có gì." } ],
      qs: [
        { q: "这个杯子多少钱？", v: "Cái cốc này bao nhiêu tiền?", o: ["十五块", "二十块", "二十八块"], a: 2 },
        { q: "A买了哪个杯子？", v: "A đã mua cái cốc nào?", o: ["这个", "那个", "没买"], a: 1 } ] },
    rd: { z: "今天下午，我和小明去商店买东西。我买了一个杯子，二十块钱。小明买了一些水果。我们都想喝茶。",
      p: "Jīntiān xiàwǔ, wǒ hé Xiǎomíng qù shāngdiàn mǎi dōngxi. Wǒ mǎi le yí ge bēizi, èrshí kuài qián. Xiǎomíng mǎi le yìxiē shuǐguǒ. Wǒmen dōu xiǎng hē chá.",
      v: "Chiều nay, tôi và Tiểu Minh đi cửa hàng mua đồ. Tôi mua một cái cốc, 20 tệ. Tiểu Minh mua ít hoa quả. Chúng tôi đều muốn uống trà.",
      qs: [
        { q: "杯子多少钱？", v: "Cái cốc bao nhiêu tiền?", o: ["二十块", "十二块", "二十八块"], a: 0 },
        { q: "小明买了什么？", v: "Tiểu Minh đã mua gì?", o: ["杯子", "米饭", "水果"], a: 2 } ] }
  },
  8: {  // 你儿子在哪儿工作
    dl: { lines: [
      { r: "A", z: "王方，你爸爸在哪儿工作？", p: "Wáng Fāng, nǐ bàba zài nǎr gōngzuò?", v: "Vương Phương, bố bạn làm việc ở đâu?" },
      { r: "B", z: "我爸爸在医院工作，他是医生。", p: "Wǒ bàba zài yīyuàn gōngzuò, tā shì yīshēng.", v: "Bố tôi làm việc ở bệnh viện, ông ấy là bác sĩ." },
      { r: "A", z: "你妈妈呢？", p: "Nǐ māma ne?", v: "Còn mẹ bạn?" },
      { r: "B", z: "我妈妈是老师，她在学校工作。", p: "Wǒ māma shì lǎoshī, tā zài xuéxiào gōngzuò.", v: "Mẹ tôi là giáo viên, bà ấy làm việc ở trường học." },
      { r: "A", z: "你家有小狗吗？", p: "Nǐ jiā yǒu xiǎogǒu ma?", v: "Nhà bạn có chó con không?" },
      { r: "B", z: "有，我家的小狗在椅子下面。", p: "Yǒu, wǒ jiā de xiǎogǒu zài yǐzi xiàmian.", v: "Có, chó con nhà tôi đang ở dưới ghế kìa." } ],
      qs: [
        { q: "王方的爸爸在哪儿工作？", v: "Bố Vương Phương làm việc ở đâu?", o: ["学校", "医院", "商店"], a: 1 },
        { q: "王方的妈妈做什么工作？", v: "Mẹ Vương Phương làm nghề gì?", o: ["老师", "医生", "学生"], a: 0 } ] },
    rd: { z: "大卫有一个儿子，叫小明，今年九岁。大卫在医院工作，他是医生。小明爱小猫和小狗。现在小猫在椅子上，小狗在椅子下面。",
      p: "Dàwèi yǒu yí ge érzi, jiào Xiǎomíng, jīnnián jiǔ suì. Dàwèi zài yīyuàn gōngzuò, tā shì yīshēng. Xiǎomíng ài xiǎomāo hé xiǎogǒu. Xiànzài xiǎomāo zài yǐzi shang, xiǎogǒu zài yǐzi xiàmian.",
      v: "David có một cậu con trai tên là Tiểu Minh, năm nay chín tuổi. David làm việc ở bệnh viện, anh ấy là bác sĩ. Tiểu Minh yêu mèo con và chó con. Bây giờ mèo con ở trên ghế, chó con ở dưới ghế.",
      qs: [
        { q: "大卫做什么工作？", v: "David làm nghề gì?", o: ["老师", "学生", "医生"], a: 2 },
        { q: "小猫在哪儿？", v: "Mèo con ở đâu?", o: ["椅子上", "椅子下面", "桌子上"], a: 0 } ] }
  },
  9: {  // 我能坐这儿吗
    dl: { lines: [
      { r: "A", z: "你好，我能坐这儿吗？", p: "Nǐ hǎo, wǒ néng zuò zhèr ma?", v: "Chào bạn, tôi ngồi đây được không?" },
      { r: "B", z: "能，请坐。", p: "Néng, qǐng zuò.", v: "Được, mời bạn ngồi." },
      { r: "A", z: "谢谢！这是你的电脑吗？", p: "Xièxie! Zhè shì nǐ de diànnǎo ma?", v: "Cảm ơn! Đây là máy tính của bạn à?" },
      { r: "B", z: "不是，是我同学的。", p: "Bú shì, shì wǒ tóngxué de.", v: "Không phải, là của bạn cùng lớp tôi." },
      { r: "A", z: "你的书呢？", p: "Nǐ de shū ne?", v: "Thế sách của bạn đâu?" },
      { r: "B", z: "我的书在桌子里。", p: "Wǒ de shū zài zhuōzi li.", v: "Sách của tôi ở trong ngăn bàn." } ],
      qs: [
        { q: "电脑是谁的？", v: "Máy tính là của ai?", o: ["B的", "B同学的", "A的"], a: 1 },
        { q: "B的书在哪儿？", v: "Sách của B ở đâu?", o: ["桌子里", "桌子上", "椅子下面"], a: 0 } ] },
    rd: { z: "我在学校看书。桌子上有一本汉语书和一个杯子，杯子里没有水。我前面坐的是大卫，后面坐的是王方。",
      p: "Wǒ zài xuéxiào kàn shū. Zhuōzi shang yǒu yì běn Hànyǔ shū hé yí ge bēizi, bēizi li méiyǒu shuǐ. Wǒ qiánmian zuò de shì Dàwèi, hòumian zuò de shì Wáng Fāng.",
      v: "Tôi đang đọc sách ở trường. Trên bàn có một quyển sách tiếng Trung và một cái cốc, trong cốc không có nước. Người ngồi trước tôi là David, người ngồi sau là Vương Phương.",
      qs: [
        { q: "桌子上有什么？", v: "Trên bàn có gì?", o: ["电脑和书", "书和杯子", "水和电脑"], a: 1 },
        { q: "谁坐在我后面？", v: "Ai ngồi sau tôi?", o: ["大卫", "小明", "王方"], a: 2 } ] }
  },
  10: {  // 现在几点
    dl: { lines: [
      { r: "A", z: "现在几点？", p: "Xiànzài jǐ diǎn?", v: "Bây giờ là mấy giờ?" },
      { r: "B", z: "现在十一点五十分。", p: "Xiànzài shíyī diǎn wǔshí fēn.", v: "Bây giờ là 11 giờ 50 phút." },
      { r: "A", z: "中午我们去哪儿吃饭？", p: "Zhōngwǔ wǒmen qù nǎr chī fàn?", v: "Trưa nay mình đi đâu ăn cơm?" },
      { r: "B", z: "我们回家吃饭。", p: "Wǒmen huí jiā chī fàn.", v: "Mình về nhà ăn cơm." },
      { r: "A", z: "下午你什么时候去看电影？", p: "Xiàwǔ nǐ shénme shíhou qù kàn diànyǐng?", v: "Chiều nay mấy giờ bạn đi xem phim?" },
      { r: "B", z: "下午三点。", p: "Xiàwǔ sān diǎn.", v: "Ba giờ chiều." } ],
      qs: [
        { q: "现在几点？", v: "Bây giờ là mấy giờ?", o: ["十点五十分", "十一点五十分", "十二点"], a: 1 },
        { q: "B下午几点去看电影？", v: "Chiều nay B đi xem phim lúc mấy giờ?", o: ["三点", "四点", "一点"], a: 0 } ] },
    rd: { z: "王方住在北京。她上午在学校学习，中午十二点回家吃饭。明天下午三点，她和朋友去看电影。",
      p: "Wáng Fāng zhù zài Běijīng. Tā shàngwǔ zài xuéxiào xuéxí, zhōngwǔ shí'èr diǎn huí jiā chī fàn. Míngtiān xiàwǔ sān diǎn, tā hé péngyou qù kàn diànyǐng.",
      v: "Vương Phương sống ở Bắc Kinh. Buổi sáng cô ấy học ở trường, 12 giờ trưa về nhà ăn cơm. Ba giờ chiều mai, cô ấy đi xem phim với bạn.",
      qs: [
        { q: "王方住在哪儿？", v: "Vương Phương sống ở đâu?", o: ["北京", "学校", "饭店"], a: 0 },
        { q: "王方中午几点回家？", v: "Buổi trưa Vương Phương về nhà lúc mấy giờ?", o: ["十点", "十一点", "十二点"], a: 2 } ] }
  },
  11: {  // 明天天气怎么样
    dl: { lines: [
      { r: "A", z: "今天天气怎么样？", p: "Jīntiān tiānqì zěnmeyàng?", v: "Hôm nay thời tiết thế nào?" },
      { r: "B", z: "太热了！", p: "Tài rè le!", v: "Nóng quá!" },
      { r: "A", z: "明天呢？", p: "Míngtiān ne?", v: "Còn ngày mai?" },
      { r: "B", z: "明天会下雨，不太热。", p: "Míngtiān huì xià yǔ, bú tài rè.", v: "Mai sẽ mưa, không nóng lắm." },
      { r: "A", z: "明天你来我家吗？", p: "Míngtiān nǐ lái wǒ jiā ma?", v: "Mai bạn có đến nhà tôi không?" },
      { r: "B", z: "好，我明天下午去。", p: "Hǎo, wǒ míngtiān xiàwǔ qù.", v: "Được, chiều mai tôi qua." } ],
      qs: [
        { q: "今天天气怎么样？", v: "Hôm nay thời tiết thế nào?", o: ["很冷", "太热了", "下雨了"], a: 1 },
        { q: "明天天气怎么样？", v: "Ngày mai thời tiết thế nào?", o: ["会下雨", "太热了", "很冷"], a: 0 } ] },
    rd: { z: "今天星期天，天气很好，不冷不热。我和妈妈去商店买水果。妈妈爱吃苹果，她买了一些苹果。",
      p: "Jīntiān xīngqītiān, tiānqì hěn hǎo, bù lěng bú rè. Wǒ hé māma qù shāngdiàn mǎi shuǐguǒ. Māma ài chī píngguǒ, tā mǎi le yìxiē píngguǒ.",
      v: "Hôm nay Chủ nhật, thời tiết rất đẹp, không lạnh không nóng. Tôi và mẹ đi cửa hàng mua hoa quả. Mẹ thích ăn táo, mẹ đã mua ít táo.",
      qs: [
        { q: "今天天气怎么样？", v: "Hôm nay thời tiết thế nào?", o: ["很热", "很冷", "不冷不热"], a: 2 },
        { q: "妈妈爱吃什么？", v: "Mẹ thích ăn gì?", o: ["苹果", "米饭", "中国菜"], a: 0 } ] }
  },
  12: {  // 他在学做中国菜呢
    dl: { lines: [
      { r: "A", z: "喂，小明，你在做什么呢？", p: "Wèi, Xiǎomíng, nǐ zài zuò shénme ne?", v: "A lô, Tiểu Minh, bạn đang làm gì đấy?" },
      { r: "B", z: "我在家看电视呢。你呢？", p: "Wǒ zài jiā kàn diànshì ne. Nǐ ne?", v: "Tôi đang xem ti vi ở nhà. Còn bạn?" },
      { r: "A", z: "我在学习汉语。下午你想去看电影吗？", p: "Wǒ zài xuéxí Hànyǔ. Xiàwǔ nǐ xiǎng qù kàn diànyǐng ma?", v: "Tôi đang học tiếng Trung. Chiều nay bạn muốn đi xem phim không?" },
      { r: "B", z: "想！几点去？", p: "Xiǎng! Jǐ diǎn qù?", v: "Muốn chứ! Mấy giờ đi?" },
      { r: "A", z: "下午三点，我们在学校前面见。", p: "Xiàwǔ sān diǎn, wǒmen zài xuéxiào qiánmian jiàn.", v: "Ba giờ chiều, mình gặp nhau trước cổng trường." },
      { r: "B", z: "好，下午见！", p: "Hǎo, xiàwǔ jiàn!", v: "Được, chiều gặp nhé!" } ],
      qs: [
        { q: "小明在做什么？", v: "Tiểu Minh đang làm gì?", o: ["学习汉语", "看电视", "睡觉"], a: 1 },
        { q: "他们几点见？", v: "Họ gặp nhau lúc mấy giờ?", o: ["下午三点", "中午十二点", "上午十点"], a: 0 } ] },
    rd: { z: "大卫喜欢学习汉语。上午他在学校学习，下午在家看中国电视。昨天中午王方打电话，大卫在睡觉呢。",
      p: "Dàwèi xǐhuan xuéxí Hànyǔ. Shàngwǔ tā zài xuéxiào xuéxí, xiàwǔ zài jiā kàn Zhōngguó diànshì. Zuótiān zhōngwǔ Wáng Fāng dǎ diànhuà, Dàwèi zài shuìjiào ne.",
      v: "David thích học tiếng Trung. Buổi sáng anh ấy học ở trường, buổi chiều ở nhà xem ti vi Trung Quốc. Trưa hôm qua Vương Phương gọi điện, lúc đó David đang ngủ.",
      qs: [
        { q: "大卫上午在哪儿学习？", v: "Buổi sáng David học ở đâu?", o: ["家", "学校", "饭店"], a: 1 },
        { q: "王方打电话的时候，大卫在做什么？", v: "Lúc Vương Phương gọi điện, David đang làm gì?", o: ["看电视", "学习", "睡觉"], a: 2 } ] }
  },
  13: {  // 她买了不少衣服
    dl: { lines: [
      { r: "A", z: "王方，你买什么了？", p: "Wáng Fāng, nǐ mǎi shénme le?", v: "Vương Phương, bạn mua gì thế?" },
      { r: "B", z: "我买了一些衣服。", p: "Wǒ mǎi le yìxiē yīfu.", v: "Tôi mua mấy bộ quần áo." },
      { r: "A", z: "这些衣服都很漂亮！多少钱？", p: "Zhèxiē yīfu dōu hěn piàoliang! Duōshao qián?", v: "Mấy bộ này đều đẹp quá! Bao nhiêu tiền?" },
      { r: "B", z: "九十块。", p: "Jiǔshí kuài.", v: "90 tệ." },
      { r: "A", z: "我想去买一点儿苹果，你去吗？", p: "Wǒ xiǎng qù mǎi yìdiǎnr píngguǒ, nǐ qù ma?", v: "Tôi muốn đi mua ít táo, bạn đi không?" },
      { r: "B", z: "我不去了，我想回家睡觉。", p: "Wǒ bú qù le, wǒ xiǎng huí jiā shuìjiào.", v: "Tôi không đi đâu, tôi muốn về nhà ngủ." } ],
      qs: [
        { q: "王方买了什么？", v: "Vương Phương đã mua gì?", o: ["苹果", "杯子", "衣服"], a: 2 },
        { q: "A想去买什么？", v: "A muốn đi mua gì?", o: ["苹果", "衣服", "电脑"], a: 0 } ] },
    rd: { z: "李月很喜欢买衣服。昨天下午她去商店买了不少衣服，这些衣服都很漂亮。她说：“我的钱太少了！”",
      p: "Lǐ Yuè hěn xǐhuan mǎi yīfu. Zuótiān xiàwǔ tā qù shāngdiàn mǎi le bù shǎo yīfu, zhèxiē yīfu dōu hěn piàoliang. Tā shuō: “Wǒ de qián tài shǎo le!”",
      v: "Lý Nguyệt rất thích mua quần áo. Chiều hôm qua cô ấy đi cửa hàng mua khá nhiều quần áo, bộ nào cũng đẹp. Cô ấy nói: “Tiền của tôi ít quá!”",
      qs: [
        { q: "李月昨天买了什么？", v: "Hôm qua Lý Nguyệt đã mua gì?", o: ["苹果", "衣服", "电脑"], a: 1 },
        { q: "李月说什么太少了？", v: "Lý Nguyệt nói cái gì ít quá?", o: ["衣服", "东西", "钱"], a: 2 } ] }
  },
  14: {  // 我是坐飞机来的
    dl: { lines: [
      { r: "A", z: "你好，我叫大卫。认识你很高兴！", p: "Nǐ hǎo, wǒ jiào Dàwèi. Rènshi nǐ hěn gāoxìng!", v: "Chào bạn, tôi tên là David. Rất vui được làm quen với bạn!" },
      { r: "B", z: "我叫王方，认识你很高兴！", p: "Wǒ jiào Wáng Fāng, rènshi nǐ hěn gāoxìng!", v: "Tôi tên là Vương Phương, rất vui được làm quen!" },
      { r: "A", z: "你是什么时候来北京的？", p: "Nǐ shì shénme shíhou lái Běijīng de?", v: "Bạn đến Bắc Kinh khi nào?" },
      { r: "B", z: "我是昨天来的。", p: "Wǒ shì zuótiān lái de.", v: "Tôi đến hôm qua." },
      { r: "A", z: "你是坐飞机来的吗？", p: "Nǐ shì zuò fēijī lái de ma?", v: "Bạn đến bằng máy bay à?" },
      { r: "B", z: "是，我是坐飞机来的。", p: "Shì, wǒ shì zuò fēijī lái de.", v: "Đúng, tôi đến bằng máy bay." } ],
      qs: [
        { q: "王方是什么时候来北京的？", v: "Vương Phương đến Bắc Kinh khi nào?", o: ["今天", "明天", "昨天"], a: 2 },
        { q: "王方是怎么来北京的？", v: "Vương Phương đến Bắc Kinh bằng gì?", o: ["坐飞机", "坐出租车", "开车"], a: 0 } ] },
    rd: { z: "小明是上个月来北京的，他是坐飞机来的。现在他住在学校前面的饭店里。在北京，他认识了很多中国朋友，他很高兴。",
      p: "Xiǎomíng shì shàng ge yuè lái Běijīng de, tā shì zuò fēijī lái de. Xiànzài tā zhù zài xuéxiào qiánmian de fàndiàn li. Zài Běijīng, tā rènshi le hěn duō Zhōngguó péngyou, tā hěn gāoxìng.",
      v: "Tiểu Minh đến Bắc Kinh từ tháng trước, cậu ấy đến bằng máy bay. Bây giờ cậu ấy ở khách sạn trước cổng trường. Ở Bắc Kinh, cậu ấy đã quen nhiều bạn Trung Quốc, cậu ấy rất vui.",
      qs: [
        { q: "小明是怎么来北京的？", v: "Tiểu Minh đến Bắc Kinh bằng gì?", o: ["坐出租车", "坐飞机", "开车"], a: 1 },
        { q: "小明住在哪儿？", v: "Tiểu Minh ở đâu?", o: ["朋友家", "学校里", "饭店里"], a: 2 } ] }
  }
};
