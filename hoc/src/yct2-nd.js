/* Nghe – nói – đọc cho YCT 2: hội thoại + bài đọc từng bài */
const ND = {
  0: {  // 我可以坐这儿吗？
    dl: { lines: [
      { r: "A", z: "你好！我可以坐这儿吗？", p: "Nǐ hǎo! Wǒ kěyǐ zuò zhèr ma?", v: "Chào bạn! Mình ngồi đây được không?" },
      { r: "B", z: "可以，请坐。", p: "Kěyǐ, qǐng zuò.", v: "Được chứ, bạn ngồi đi." },
      { r: "A", z: "谢谢！", p: "Xièxie!", v: "Cảm ơn bạn!" },
      { r: "B", z: "不客气。我叫小月，你叫什么名字？", p: "Bú kèqi. Wǒ jiào Xiǎoyuè, nǐ jiào shénme míngzi?", v: "Không có gì. Mình tên là Tiểu Nguyệt, bạn tên là gì?" },
      { r: "A", z: "我叫大卫。我们是同学了！", p: "Wǒ jiào Dàwèi. Wǒmen shì tóngxué le!", v: "Mình tên là Đa-vít. Tụi mình là bạn cùng lớp rồi!" },
      { r: "B", z: "老师来了，不要说话。", p: "Lǎoshī lái le, bú yào shuōhuà.", v: "Cô giáo đến rồi, đừng nói chuyện nữa." } ],
      qs: [
        { q: "大卫可以坐这儿吗？", v: "Đa-vít có được ngồi đây không?", o: ["不可以", "可以", "不客气"], a: 1 },
        { q: "老师来了，他们不要做什么？", v: "Cô giáo đến rồi, các bạn không được làm gì?", o: ["说话", "坐", "看"], a: 0 } ] },
    rd: { z: "丁丁是我的同学。今天在学校，丁丁说话了。老师说：“请不要说话。”丁丁说：“对不起，老师！”",
      p: "Dīngding shì wǒ de tóngxué. Jīntiān zài xuéxiào, Dīngding shuōhuà le. Lǎoshī shuō: “Qǐng bú yào shuōhuà.” Dīngding shuō: “Duìbuqǐ, lǎoshī!”",
      v: "Đinh Đinh là bạn cùng lớp của mình. Hôm nay ở trường, Đinh Đinh nói chuyện. Cô giáo nói: “Các con đừng nói chuyện nhé.” Đinh Đinh nói: “Con xin lỗi cô ạ!”",
      qs: [
        { q: "丁丁是谁？", v: "Đinh Đinh là ai?", o: ["我的哥哥", "我的同学", "我的老师"], a: 1 },
        { q: "丁丁对老师说什么？", v: "Đinh Đinh nói gì với cô giáo?", o: ["谢谢", "没关系", "对不起"], a: 2 } ] }
  },
  1: {  // 你早上几点起床？
    dl: { lines: [
      { r: "A", z: "小月，你早上几点起床？", p: "Xiǎoyuè, nǐ zǎoshang jǐ diǎn qǐchuáng?", v: "Tiểu Nguyệt ơi, buổi sáng bạn dậy lúc mấy giờ?" },
      { r: "B", z: "我六点起床。明明，你呢？", p: "Wǒ liù diǎn qǐchuáng. Míngming, nǐ ne?", v: "Mình dậy lúc sáu giờ. Còn bạn, Minh Minh?" },
      { r: "A", z: "我七点起床。", p: "Wǒ qī diǎn qǐchuáng.", v: "Mình dậy lúc bảy giờ." },
      { r: "B", z: "你去学校要几分钟？", p: "Nǐ qù xuéxiào yào jǐ fēnzhōng?", v: "Bạn đi đến trường mất mấy phút?" },
      { r: "A", z: "要十分钟。你晚上几点睡觉？", p: "Yào shí fēnzhōng. Nǐ wǎnshang jǐ diǎn shuìjiào?", v: "Mất mười phút. Buổi tối bạn đi ngủ lúc mấy giờ?" },
      { r: "B", z: "我晚上九点睡觉。", p: "Wǒ wǎnshang jiǔ diǎn shuìjiào.", v: "Buổi tối mình đi ngủ lúc chín giờ." } ],
      qs: [
        { q: "明明早上几点起床？", v: "Buổi sáng Minh Minh dậy lúc mấy giờ?", o: ["六点", "七点", "九点"], a: 1 },
        { q: "小月晚上几点睡觉？", v: "Buổi tối Tiểu Nguyệt đi ngủ lúc mấy giờ?", o: ["九点", "十点", "八点"], a: 0 } ] },
    rd: { z: "大卫早上六点起床。他七点去学校，去学校要五分钟。晚上十点，大卫睡觉。",
      p: "Dàwèi zǎoshang liù diǎn qǐchuáng. Tā qī diǎn qù xuéxiào, qù xuéxiào yào wǔ fēnzhōng. Wǎnshang shí diǎn, Dàwèi shuìjiào.",
      v: "Buổi sáng Đa-vít dậy lúc sáu giờ. Bảy giờ bạn ấy đi học, đi đến trường mất năm phút. Mười giờ tối, Đa-vít đi ngủ.",
      qs: [
        { q: "大卫几点去学校？", v: "Mấy giờ Đa-vít đi học?", o: ["六点", "十点", "七点"], a: 2 },
        { q: "大卫去学校要几分钟？", v: "Đa-vít đi đến trường mất mấy phút?", o: ["十分钟", "五分钟", "七分钟"], a: 1 } ] }
  },
  2: {  // 你的铅笔呢？
    dl: { lines: [
      { r: "A", z: "大卫，你的铅笔呢？", p: "Dàwèi, nǐ de qiānbǐ ne?", v: "Đa-vít ơi, bút chì của bạn đâu rồi?" },
      { r: "B", z: "在我的书包里面。", p: "Zài wǒ de shūbāo lǐmiàn.", v: "Ở trong cặp sách của mình." },
      { r: "A", z: "你的书包是什么颜色的？", p: "Nǐ de shūbāo shì shénme yánsè de?", v: "Cặp sách của bạn màu gì?" },
      { r: "B", z: "我的书包是红的。丁丁，你的呢？", p: "Wǒ de shūbāo shì hóng de. Dīngding, nǐ de ne?", v: "Cặp của mình màu đỏ. Còn cặp của bạn, Đinh Đinh?" },
      { r: "A", z: "我的书包是绿的。我喜欢绿的。", p: "Wǒ de shūbāo shì lǜ de. Wǒ xǐhuan lǜ de.", v: "Cặp của mình màu xanh lá. Mình thích màu xanh lá." } ],
      qs: [
        { q: "大卫的铅笔在哪儿？", v: "Bút chì của Đa-vít ở đâu?", o: ["桌子上边", "书包里面", "房间里面"], a: 1 },
        { q: "丁丁的书包是什么颜色的？", v: "Cặp sách của Đinh Đinh màu gì?", o: ["红的", "黄的", "绿的"], a: 2 } ] },
    rd: { z: "小月的书包是黄的。她喜欢黄色，不喜欢红色。她的铅笔是绿的。",
      p: "Xiǎoyuè de shūbāo shì huáng de. Tā xǐhuan huángsè, bù xǐhuan hóngsè. Tā de qiānbǐ shì lǜ de.",
      v: "Cặp sách của Tiểu Nguyệt màu vàng. Bạn ấy thích màu vàng, không thích màu đỏ. Bút chì của bạn ấy màu xanh lá.",
      qs: [
        { q: "小月的书包是什么颜色的？", v: "Cặp sách của Tiểu Nguyệt màu gì?", o: ["黄的", "红的", "绿的"], a: 0 },
        { q: "小月不喜欢什么颜色？", v: "Tiểu Nguyệt không thích màu gì?", o: ["黄色", "绿色", "红色"], a: 2 } ] }
  },
  3: {  // 书包里有两本书。
    dl: { lines: [
      { r: "A", z: "明明，你的房间里面有什么？", p: "Míngming, nǐ de fángjiān lǐmiàn yǒu shénme?", v: "Minh Minh ơi, trong phòng bạn có gì?" },
      { r: "B", z: "有桌子和椅子。", p: "Yǒu zhuōzi hé yǐzi.", v: "Có bàn và ghế." },
      { r: "A", z: "桌子上边有什么？", p: "Zhuōzi shàngbian yǒu shénme?", v: "Trên bàn có gì?" },
      { r: "B", z: "有两只小熊猫。", p: "Yǒu liǎng zhī xiǎo xióngmāo.", v: "Có hai chú gấu trúc nhỏ." },
      { r: "A", z: "你的猫呢？", p: "Nǐ de māo ne?", v: "Còn con mèo của bạn đâu?" },
      { r: "B", z: "我的猫在椅子上边。", p: "Wǒ de māo zài yǐzi shàngbian.", v: "Mèo của mình ở trên ghế." } ],
      qs: [
        { q: "桌子上边有什么？", v: "Trên bàn có gì?", o: ["一只猫", "两只熊猫", "两只狗"], a: 1 },
        { q: "明明的猫在哪儿？", v: "Mèo của Minh Minh ở đâu?", o: ["椅子上边", "桌子上边", "书包里面"], a: 0 } ] },
    rd: { z: "这是丁丁的房间。桌子上边有书包，书包里面有铅笔。椅子上边有一只小狗。",
      p: "Zhè shì Dīngding de fángjiān. Zhuōzi shàngbian yǒu shūbāo, shūbāo lǐmiàn yǒu qiānbǐ. Yǐzi shàngbian yǒu yì zhī xiǎo gǒu.",
      v: "Đây là phòng của Đinh Đinh. Trên bàn có cặp sách, trong cặp có bút chì. Trên ghế có một chú cún con.",
      qs: [
        { q: "书包在哪儿？", v: "Cặp sách ở đâu?", o: ["椅子上边", "桌子上边", "学校里面"], a: 1 },
        { q: "椅子上边有什么？", v: "Trên ghế có gì?", o: ["一只猫", "两只狗", "一只狗"], a: 2 } ] }
  },
  4: {  // 你会不会做饭？
    dl: { lines: [
      { r: "A", z: "小月，你会不会画画？", p: "Xiǎoyuè, nǐ huì bu huì huàhuà?", v: "Tiểu Nguyệt ơi, bạn có biết vẽ không?" },
      { r: "B", z: "我会画画。我会画熊猫！", p: "Wǒ huì huàhuà. Wǒ huì huà xióngmāo!", v: "Mình biết vẽ. Mình biết vẽ gấu trúc đấy!" },
      { r: "A", z: "我也会画熊猫。你会做饭吗？", p: "Wǒ yě huì huà xióngmāo. Nǐ huì zuò fàn ma?", v: "Mình cũng biết vẽ gấu trúc. Bạn có biết nấu cơm không?" },
      { r: "B", z: "我不会做饭。我妈妈会做面条。", p: "Wǒ bú huì zuò fàn. Wǒ māma huì zuò miàntiáo.", v: "Mình không biết nấu cơm. Mẹ mình biết nấu mì." },
      { r: "A", z: "你会说汉语吗？", p: "Nǐ huì shuō Hànyǔ ma?", v: "Bạn có biết nói tiếng Trung không?" },
      { r: "B", z: "会，我在学习汉语。", p: "Huì, wǒ zài xuéxí Hànyǔ.", v: "Có, mình đang học tiếng Trung." } ],
      qs: [
        { q: "小月会做饭吗？", v: "Tiểu Nguyệt có biết nấu cơm không?", o: ["会", "不会", "也会"], a: 1 },
        { q: "谁会做面条？", v: "Ai biết nấu mì?", o: ["小月的妈妈", "小月", "小月的爸爸"], a: 0 } ] },
    rd: { z: "明明会说汉语，他也会画画。他喜欢画小猫和小狗。他不会做饭。",
      p: "Míngming huì shuō Hànyǔ, tā yě huì huàhuà. Tā xǐhuan huà xiǎo māo hé xiǎo gǒu. Tā bú huì zuò fàn.",
      v: "Minh Minh biết nói tiếng Trung, bạn ấy cũng biết vẽ. Bạn ấy thích vẽ mèo con và cún con. Bạn ấy không biết nấu cơm.",
      qs: [
        { q: "明明喜欢画什么？", v: "Minh Minh thích vẽ gì?", o: ["熊猫", "小猫和小狗", "小鸟"], a: 1 },
        { q: "明明不会做什么？", v: "Minh Minh không biết làm gì?", o: ["画画", "说汉语", "做饭"], a: 2 } ] }
  },
  5: {  // 包子多少钱一个？
    dl: { lines: [
      { r: "A", z: "你好！包子多少钱一个？", p: "Nǐ hǎo! Bāozi duōshao qián yí ge?", v: "Chào cô! Bánh bao bao nhiêu tiền một cái ạ?" },
      { r: "B", z: "两块钱一个。", p: "Liǎng kuài qián yí ge.", v: "Hai đồng một cái." },
      { r: "A", z: "我要买三个包子。", p: "Wǒ yào mǎi sān ge bāozi.", v: "Cháu muốn mua ba cái bánh bao." },
      { r: "B", z: "好，六块钱。你要茶吗？", p: "Hǎo, liù kuài qián. Nǐ yào chá ma?", v: "Được, sáu đồng. Cháu có lấy trà không?" },
      { r: "A", z: "不要，谢谢。香蕉多少钱？", p: "Bú yào, xièxie. Xiāngjiāo duōshao qián?", v: "Không ạ, cảm ơn cô. Chuối bao nhiêu tiền ạ?" },
      { r: "B", z: "香蕉一块钱一个。", p: "Xiāngjiāo yí kuài qián yí ge.", v: "Chuối một đồng một quả." } ],
      qs: [
        { q: "包子多少钱一个？", v: "Bánh bao bao nhiêu tiền một cái?", o: ["一块", "两块", "六块"], a: 1 },
        { q: "三个包子多少钱？", v: "Ba cái bánh bao bao nhiêu tiền?", o: ["六块", "三块", "两块"], a: 0 } ] },
    rd: { z: "今天我和妈妈去商店。我们买了五个香蕉和两个包子。这儿的包子很好吃，三块钱一个。",
      p: "Jīntiān wǒ hé māma qù shāngdiàn. Wǒmen mǎi le wǔ ge xiāngjiāo hé liǎng ge bāozi. Zhèr de bāozi hěn hǎochī, sān kuài qián yí ge.",
      v: "Hôm nay mình và mẹ đi cửa hàng. Tụi mình mua năm quả chuối và hai cái bánh bao. Bánh bao ở đây ngon lắm, ba đồng một cái.",
      qs: [
        { q: "他们买了几个香蕉？", v: "Họ mua mấy quả chuối?", o: ["两个", "五个", "三个"], a: 1 },
        { q: "包子多少钱一个？", v: "Bánh bao bao nhiêu tiền một cái?", o: ["两块", "五块", "三块"], a: 2 } ] }
  },
  6: {  // 今天比昨天热。
    dl: { lines: [
      { r: "A", z: "大卫，今天天气怎么样？", p: "Dàwèi, jīntiān tiānqì zěnmeyàng?", v: "Đa-vít ơi, hôm nay thời tiết thế nào?" },
      { r: "B", z: "今天很热！", p: "Jīntiān hěn rè!", v: "Hôm nay nóng lắm!" },
      { r: "A", z: "是，今天比昨天热。", p: "Shì, jīntiān bǐ zuótiān rè.", v: "Ừ, hôm nay nóng hơn hôm qua." },
      { r: "B", z: "明天天气怎么样？", p: "Míngtiān tiānqì zěnmeyàng?", v: "Ngày mai thời tiết thế nào?" },
      { r: "A", z: "明天很冷。", p: "Míngtiān hěn lěng.", v: "Ngày mai lạnh lắm." },
      { r: "B", z: "我不喜欢冷的天气。", p: "Wǒ bù xǐhuan lěng de tiānqì.", v: "Mình không thích trời lạnh." } ],
      qs: [
        { q: "今天天气怎么样？", v: "Hôm nay thời tiết thế nào?", o: ["很冷", "很热", "不热"], a: 1 },
        { q: "明天天气怎么样？", v: "Ngày mai thời tiết thế nào?", o: ["很冷", "很热", "比今天热"], a: 0 } ] },
    rd: { z: "昨天很冷。今天天气真好，比昨天热。明天我和朋友去玩。",
      p: "Zuótiān hěn lěng. Jīntiān tiānqì zhēn hǎo, bǐ zuótiān rè. Míngtiān wǒ hé péngyou qù wán.",
      v: "Hôm qua trời lạnh. Hôm nay trời đẹp thật, nóng hơn hôm qua. Ngày mai mình đi chơi với bạn.",
      qs: [
        { q: "昨天天气怎么样？", v: "Hôm qua thời tiết thế nào?", o: ["很冷", "很热", "真好"], a: 0 },
        { q: "明天“我”和谁去玩？", v: "Ngày mai “mình” đi chơi với ai?", o: ["妈妈", "同学", "朋友"], a: 2 } ] }
  },
  7: {  // 马丁比我大三岁。
    dl: { lines: [
      { r: "A", z: "丁丁，你有弟弟妹妹吗？", p: "Dīngding, nǐ yǒu dìdi mèimei ma?", v: "Đinh Đinh ơi, bạn có em trai em gái không?" },
      { r: "B", z: "我有一个妹妹。", p: "Wǒ yǒu yí ge mèimei.", v: "Mình có một em gái." },
      { r: "A", z: "她几岁？", p: "Tā jǐ suì?", v: "Em ấy mấy tuổi?" },
      { r: "B", z: "她五岁。我比她大三岁。", p: "Tā wǔ suì. Wǒ bǐ tā dà sān suì.", v: "Em ấy năm tuổi. Mình lớn hơn em ấy ba tuổi." },
      { r: "A", z: "我觉得你妹妹很漂亮！", p: "Wǒ juéde nǐ mèimei hěn piàoliang!", v: "Mình thấy em gái bạn xinh lắm!" },
      { r: "B", z: "谢谢！她是我的好朋友。", p: "Xièxie! Tā shì wǒ de hǎo péngyou.", v: "Cảm ơn bạn! Em ấy là bạn thân của mình." } ],
      qs: [
        { q: "丁丁的妹妹几岁？", v: "Em gái của Đinh Đinh mấy tuổi?", o: ["三岁", "八岁", "五岁"], a: 2 },
        { q: "丁丁几岁？", v: "Đinh Đinh mấy tuổi?", o: ["八岁", "五岁", "三岁"], a: 0 } ] },
    rd: { z: "明明有一个弟弟，名字叫丁丁。丁丁六岁，明明比他大两岁。明明觉得弟弟很好，他们是好朋友。",
      p: "Míngming yǒu yí ge dìdi, míngzi jiào Dīngding. Dīngding liù suì, Míngming bǐ tā dà liǎng suì. Míngming juéde dìdi hěn hǎo, tāmen shì hǎo péngyou.",
      v: "Minh Minh có một em trai, tên là Đinh Đinh. Đinh Đinh sáu tuổi, Minh Minh lớn hơn em hai tuổi. Minh Minh thấy em trai rất ngoan, hai anh em là bạn thân.",
      qs: [
        { q: "明明的弟弟叫什么名字？", v: "Em trai của Minh Minh tên là gì?", o: ["大卫", "丁丁", "小月"], a: 1 },
        { q: "明明几岁？", v: "Minh Minh mấy tuổi?", o: ["六岁", "两岁", "八岁"], a: 2 } ] }
  },
  8: {  // 你今天做什么了？
    dl: { lines: [
      { r: "A", z: "明明，你今天做什么了？", p: "Míngming, nǐ jīntiān zuò shénme le?", v: "Minh Minh ơi, hôm nay bạn đã làm gì?" },
      { r: "B", z: "我去小月家玩了。大卫，你呢？", p: "Wǒ qù Xiǎoyuè jiā wán le. Dàwèi, nǐ ne?", v: "Mình sang nhà Tiểu Nguyệt chơi. Còn bạn, Đa-vít?" },
      { r: "A", z: "我在家看电视了。", p: "Wǒ zài jiā kàn diànshì le.", v: "Mình ở nhà xem ti vi." },
      { r: "B", z: "你昨天看电视了吗？", p: "Nǐ zuótiān kàn diànshì le ma?", v: "Hôm qua bạn có xem ti vi không?" },
      { r: "A", z: "没有。昨天我和妈妈去商店了。", p: "Méiyǒu. Zuótiān wǒ hé māma qù shāngdiàn le.", v: "Không. Hôm qua mình đi cửa hàng với mẹ." } ],
      qs: [
        { q: "明明今天去哪儿玩了？", v: "Hôm nay Minh Minh đi chơi ở đâu?", o: ["大卫家", "小月家", "商店"], a: 1 },
        { q: "大卫今天做什么了？", v: "Hôm nay Đa-vít đã làm gì?", o: ["去商店了", "去小月家了", "看电视了"], a: 2 } ] },
    rd: { z: "今天是星期六。早上我和弟弟在家玩了，没有去学校。晚上爸爸打电话了，我们看电视了。",
      p: "Jīntiān shì xīngqīliù. Zǎoshang wǒ hé dìdi zài jiā wán le, méiyǒu qù xuéxiào. Wǎnshang bàba dǎ diànhuà le, wǒmen kàn diànshì le.",
      v: "Hôm nay là thứ Bảy. Buổi sáng mình và em trai chơi ở nhà, không đi học. Buổi tối bố gọi điện thoại, còn tụi mình xem ti vi.",
      qs: [
        { q: "今天“我”去学校了吗？", v: "Hôm nay “mình” có đi học không?", o: ["没有", "去了", "去商店了"], a: 0 },
        { q: "晚上谁打电话了？", v: "Buổi tối ai gọi điện thoại?", o: ["妈妈", "弟弟", "爸爸"], a: 2 } ] }
  },
  9: {  // 你怎么了？
    dl: { lines: [
      { r: "A", z: "丁丁，你怎么了？", p: "Dīngding, nǐ zěnme le?", v: "Đinh Đinh ơi, bạn sao thế?" },
      { r: "B", z: "我的脚不好。", p: "Wǒ de jiǎo bù hǎo.", v: "Chân mình bị đau." },
      { r: "A", z: "你要去医院吗？", p: "Nǐ yào qù yīyuàn ma?", v: "Bạn có cần đi bệnh viện không?" },
      { r: "B", z: "要，我要去看医生。", p: "Yào, wǒ yào qù kàn yīshēng.", v: "Có, mình phải đi khám bác sĩ." },
      { r: "A", z: "我和你去医院。", p: "Wǒ hé nǐ qù yīyuàn.", v: "Mình đi bệnh viện với bạn nhé." },
      { r: "B", z: "谢谢你，小月！", p: "Xièxie nǐ, Xiǎoyuè!", v: "Cảm ơn bạn, Tiểu Nguyệt!" } ],
      qs: [
        { q: "丁丁怎么了？", v: "Đinh Đinh bị làm sao?", o: ["脚不好", "眼睛不好", "不高兴"], a: 0 },
        { q: "丁丁要去哪儿？", v: "Đinh Đinh cần đi đâu?", o: ["学校", "商店", "医院"], a: 2 } ] },
    rd: { z: "今天大卫的妹妹不高兴。她的脚不好。爸爸和她去医院看医生了。",
      p: "Jīntiān Dàwèi de mèimei bù gāoxìng. Tā de jiǎo bù hǎo. Bàba hé tā qù yīyuàn kàn yīshēng le.",
      v: "Hôm nay em gái của Đa-vít không vui. Chân em ấy bị đau. Bố đưa em đi bệnh viện khám bác sĩ.",
      qs: [
        { q: "妹妹怎么了？", v: "Em gái bị làm sao?", o: ["头发长", "脚不好", "不吃饭"], a: 1 },
        { q: "谁和妹妹去医院？", v: "Ai đi bệnh viện với em gái?", o: ["爸爸", "妈妈", "大卫"], a: 0 } ] }
  },
  10: {  // 我来北京一年了。
    dl: { lines: [
      { r: "A", z: "大卫，你来北京几年了？", p: "Dàwèi, nǐ lái Běijīng jǐ nián le?", v: "Đa-vít ơi, bạn đến Bắc Kinh được mấy năm rồi?" },
      { r: "B", z: "我来北京两年了。", p: "Wǒ lái Běijīng liǎng nián le.", v: "Mình đến Bắc Kinh được hai năm rồi." },
      { r: "A", z: "你是学生吗？", p: "Nǐ shì xuésheng ma?", v: "Bạn là học sinh à?" },
      { r: "B", z: "是，我是学生。我在北京学习汉语。", p: "Shì, wǒ shì xuésheng. Wǒ zài Běijīng xuéxí Hànyǔ.", v: "Ừ, mình là học sinh. Mình học tiếng Trung ở Bắc Kinh." },
      { r: "A", z: "你觉得北京怎么样？", p: "Nǐ juéde Běijīng zěnmeyàng?", v: "Bạn thấy Bắc Kinh thế nào?" },
      { r: "B", z: "北京很大，我很喜欢。", p: "Běijīng hěn dà, wǒ hěn xǐhuan.", v: "Bắc Kinh rộng lắm, mình rất thích." } ],
      qs: [
        { q: "大卫来北京几年了？", v: "Đa-vít đến Bắc Kinh được mấy năm rồi?", o: ["一年", "两年", "三年"], a: 1 },
        { q: "大卫在北京做什么？", v: "Đa-vít làm gì ở Bắc Kinh?", o: ["学习汉语", "做饭", "看医生"], a: 0 } ] },
    rd: { z: "小月是中国人，她是学生。二零二四年，她来北京了。她来北京两年了，她很喜欢北京。",
      p: "Xiǎoyuè shì Zhōngguó rén, tā shì xuésheng. Èr líng èr sì nián, tā lái Běijīng le. Tā lái Běijīng liǎng nián le, tā hěn xǐhuan Běijīng.",
      v: "Tiểu Nguyệt là người Trung Quốc, bạn ấy là học sinh. Năm 2024, bạn ấy đến Bắc Kinh. Bạn ấy đến Bắc Kinh được hai năm rồi, bạn ấy rất thích Bắc Kinh.",
      qs: [
        { q: "小月哪年来北京？", v: "Tiểu Nguyệt đến Bắc Kinh năm nào?", o: ["二零二六年", "二零二四年", "二零二二年"], a: 1 },
        { q: "小月来北京几年了？", v: "Tiểu Nguyệt đến Bắc Kinh được mấy năm rồi?", o: ["一年", "三年", "两年"], a: 2 } ] }
  }
};
