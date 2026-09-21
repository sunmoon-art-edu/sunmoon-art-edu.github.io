/* Nghe – nói – đọc cho YCT 1: hội thoại + bài đọc từng bài */
const ND = {
  0: {  // 你好！
    dl: { lines: [
      { r: "A", z: "老师好！", p: "Lǎoshī hǎo!", v: "Con chào cô ạ!" },
      { r: "B", z: "明明，你好！", p: "Míngming, nǐ hǎo!", v: "Chào Minh Minh!" },
      { r: "A", z: "老师，这是苹果。", p: "Lǎoshī, zhè shì píngguǒ.", v: "Cô ơi, đây là quả táo ạ." },
      { r: "B", z: "谢谢你，明明！", p: "Xièxie nǐ, Míngming!", v: "Cô cảm ơn con, Minh Minh!" },
      { r: "A", z: "老师再见！", p: "Lǎoshī zàijiàn!", v: "Con chào cô ạ, tạm biệt cô!" },
      { r: "B", z: "再见！", p: "Zàijiàn!", v: "Tạm biệt con!" } ],
      qs: [
        { q: "这是什么？", v: "Đây là cái gì?", o: ["牛奶", "苹果", "米饭"], a: 1 },
        { q: "明明认识老师吗？", v: "Minh Minh có quen cô giáo không?", o: ["认识", "不认识", "不是"], a: 0 } ] },
    rd: { z: "我叫明明。我有一个老师，她很好。谢谢老师！",
      p: "Wǒ jiào Míngming. Wǒ yǒu yí ge lǎoshī, tā hěn hǎo. Xièxie lǎoshī!",
      v: "Mình tên là Minh Minh. Mình có một cô giáo, cô rất tốt. Con cảm ơn cô!",
      qs: [
        { q: "明明有几个老师？", v: "Minh Minh có mấy cô giáo?", o: ["三个", "五个", "一个"], a: 2 },
        { q: "明明的老师好吗？", v: "Cô giáo của Minh Minh có tốt không?", o: ["很好", "不好", "不认识"], a: 0 } ] }
  },
  1: {  // 你叫什么？
    dl: { lines: [
      { r: "A", z: "你好！我叫大卫。你叫什么？", p: "Nǐ hǎo! Wǒ jiào Dàwèi. Nǐ jiào shénme?", v: "Xin chào! Mình tên là Đa-vít. Bạn tên là gì?" },
      { r: "B", z: "我叫小月。", p: "Wǒ jiào Xiǎoyuè.", v: "Mình tên là Tiểu Nguyệt." },
      { r: "A", z: "小月，你是中国人吗？", p: "Xiǎoyuè, nǐ shì Zhōngguó rén ma?", v: "Tiểu Nguyệt, bạn là người Trung Quốc à?" },
      { r: "B", z: "是，我是中国人。你是中国人吗？", p: "Shì, wǒ shì Zhōngguó rén. Nǐ shì Zhōngguó rén ma?", v: "Ừ, mình là người Trung Quốc. Bạn có phải người Trung Quốc không?" },
      { r: "A", z: "我不是中国人。", p: "Wǒ bú shì Zhōngguó rén.", v: "Mình không phải người Trung Quốc." } ],
      qs: [
        { q: "小月是中国人吗？", v: "Tiểu Nguyệt có phải người Trung Quốc không?", o: ["不是", "是", "不认识"], a: 1 },
        { q: "谁不是中国人？", v: "Ai không phải người Trung Quốc?", o: ["小月", "老师", "大卫"], a: 2 } ] },
    rd: { z: "他叫丁丁。丁丁不是中国人，他的老师是中国人。",
      p: "Tā jiào Dīngding. Dīngding bú shì Zhōngguó rén, tā de lǎoshī shì Zhōngguó rén.",
      v: "Bạn ấy tên là Đinh Đinh. Đinh Đinh không phải người Trung Quốc, cô giáo của bạn ấy là người Trung Quốc.",
      qs: [
        { q: "丁丁是中国人吗？", v: "Đinh Đinh có phải người Trung Quốc không?", o: ["不是", "是", "是老师"], a: 0 },
        { q: "谁是中国人？", v: "Ai là người Trung Quốc?", o: ["丁丁", "丁丁的老师", "明明"], a: 1 } ] }
  },
  2: {  // 他是谁？
    dl: { lines: [
      { r: "A", z: "大卫，他是谁？", p: "Dàwèi, tā shì shéi?", v: "Đa-vít ơi, chú ấy là ai thế?" },
      { r: "B", z: "他是我爸爸。", p: "Tā shì wǒ bàba.", v: "Đó là bố mình." },
      { r: "A", z: "她是你妈妈吗？", p: "Tā shì nǐ māma ma?", v: "Còn đây là mẹ bạn à?" },
      { r: "B", z: "不是，她是我姐姐。", p: "Bú shì, tā shì wǒ jiějie.", v: "Không phải, đó là chị gái mình." },
      { r: "A", z: "我认识她！她叫小月。", p: "Wǒ rènshi tā! Tā jiào Xiǎoyuè.", v: "Mình biết chị ấy! Chị ấy tên là Tiểu Nguyệt." } ],
      qs: [
        { q: "他是谁？", v: "Chú ấy là ai?", o: ["大卫的哥哥", "大卫的爸爸", "明明的爸爸"], a: 1 },
        { q: "小月是大卫的谁？", v: "Tiểu Nguyệt là gì của Đa-vít?", o: ["妈妈", "老师", "姐姐"], a: 2 } ] },
    rd: { z: "我有一个哥哥和一个姐姐。哥哥叫丁丁，姐姐叫小月。",
      p: "Wǒ yǒu yí ge gēge hé yí ge jiějie. Gēge jiào Dīngding, jiějie jiào Xiǎoyuè.",
      v: "Mình có một anh trai và một chị gái. Anh trai tên là Đinh Đinh, chị gái tên là Tiểu Nguyệt.",
      qs: [
        { q: "哥哥叫什么？", v: "Anh trai tên là gì?", o: ["小月", "丁丁", "明明"], a: 1 },
        { q: "姐姐叫什么？", v: "Chị gái tên là gì?", o: ["小月", "丁丁", "大卫"], a: 0 } ] }
  },
  3: {  // 我家有四口人。
    dl: { lines: [
      { r: "A", z: "丁丁，你家有几口人？", p: "Dīngding, nǐ jiā yǒu jǐ kǒu rén?", v: "Đinh Đinh ơi, nhà bạn có mấy người?" },
      { r: "B", z: "我家有五口人。", p: "Wǒ jiā yǒu wǔ kǒu rén.", v: "Nhà mình có năm người." },
      { r: "A", z: "你家有谁？", p: "Nǐ jiā yǒu shéi?", v: "Nhà bạn có những ai?" },
      { r: "B", z: "爸爸、妈妈、哥哥、姐姐和我。", p: "Bàba, māma, gēge, jiějie hé wǒ.", v: "Bố, mẹ, anh trai, chị gái và mình." },
      { r: "A", z: "我家有三口人：爸爸、妈妈和我。", p: "Wǒ jiā yǒu sān kǒu rén: bàba, māma hé wǒ.", v: "Nhà mình có ba người: bố, mẹ và mình." } ],
      qs: [
        { q: "丁丁家有几口人？", v: "Nhà Đinh Đinh có mấy người?", o: ["三口人", "四口人", "五口人"], a: 2 },
        { q: "丁丁有几个哥哥？", v: "Đinh Đinh có mấy anh trai?", o: ["三个", "一个", "五个"], a: 1 } ] },
    rd: { z: "我叫明明。我家有四口人：爸爸、妈妈、姐姐和我。我爱我家。",
      p: "Wǒ jiào Míngming. Wǒ jiā yǒu sì kǒu rén: bàba, māma, jiějie hé wǒ. Wǒ ài wǒ jiā.",
      v: "Mình tên là Minh Minh. Nhà mình có bốn người: bố, mẹ, chị gái và mình. Mình yêu gia đình mình.",
      qs: [
        { q: "明明家有几口人？", v: "Nhà Minh Minh có mấy người?", o: ["三口人", "四口人", "五口人"], a: 1 },
        { q: "明明家有谁？", v: "Nhà Minh Minh có ai?", o: ["哥哥", "老师", "姐姐"], a: 2 } ] }
  },
  4: {  // 我6岁。
    dl: { lines: [
      { r: "A", z: "明明，你几岁？", p: "Míngming, nǐ jǐ suì?", v: "Minh Minh ơi, bạn mấy tuổi?" },
      { r: "B", z: "我七岁。你几岁？", p: "Wǒ qī suì. Nǐ jǐ suì?", v: "Mình bảy tuổi. Bạn mấy tuổi?" },
      { r: "A", z: "我八岁。", p: "Wǒ bā suì.", v: "Mình tám tuổi." },
      { r: "B", z: "你哥哥多大？", p: "Nǐ gēge duō dà?", v: "Anh trai bạn bao nhiêu tuổi?" },
      { r: "A", z: "他十岁。", p: "Tā shí suì.", v: "Anh ấy mười tuổi." } ],
      qs: [
        { q: "明明几岁？", v: "Minh Minh mấy tuổi?", o: ["八岁", "七岁", "十岁"], a: 1 },
        { q: "哥哥几岁？", v: "Anh trai mấy tuổi?", o: ["十岁", "八岁", "九岁"], a: 0 } ] },
    rd: { z: "我叫小月，我六岁。我姐姐九岁，我哥哥十岁。",
      p: "Wǒ jiào Xiǎoyuè, wǒ liù suì. Wǒ jiějie jiǔ suì, wǒ gēge shí suì.",
      v: "Mình tên là Tiểu Nguyệt, mình sáu tuổi. Chị gái mình chín tuổi, anh trai mình mười tuổi.",
      qs: [
        { q: "小月几岁？", v: "Tiểu Nguyệt mấy tuổi?", o: ["九岁", "十岁", "六岁"], a: 2 },
        { q: "谁九岁？", v: "Ai chín tuổi?", o: ["小月", "姐姐", "哥哥"], a: 1 } ] }
  },
  5: {  // 你的个子真高！
    dl: { lines: [
      { r: "A", z: "丁丁，这是你哥哥吗？", p: "Dīngding, zhè shì nǐ gēge ma?", v: "Đinh Đinh ơi, đây là anh trai bạn à?" },
      { r: "B", z: "是，这是我哥哥。", p: "Shì, zhè shì wǒ gēge.", v: "Ừ, đây là anh trai mình." },
      { r: "A", z: "你哥哥的个子很高！", p: "Nǐ gēge de gèzi hěn gāo!", v: "Anh trai bạn cao ghê!" },
      { r: "B", z: "他的手很大。", p: "Tā de shǒu hěn dà.", v: "Tay anh ấy to lắm." },
      { r: "A", z: "你姐姐的头发很长。", p: "Nǐ jiějie de tóufa hěn cháng.", v: "Tóc chị gái bạn dài quá." },
      { r: "B", z: "我姐姐的眼睛很大。", p: "Wǒ jiějie de yǎnjing hěn dà.", v: "Mắt chị mình to lắm." } ],
      qs: [
        { q: "谁的个子很高？", v: "Ai cao?", o: ["丁丁", "丁丁的哥哥", "丁丁的姐姐"], a: 1 },
        { q: "姐姐的什么很长？", v: "Cái gì của chị gái dài?", o: ["头发", "手", "耳朵"], a: 0 } ] },
    rd: { z: "我叫明明。我的个子很高，头发不长。我的眼睛很大，耳朵很小。",
      p: "Wǒ jiào Míngming. Wǒ de gèzi hěn gāo, tóufa bù cháng. Wǒ de yǎnjing hěn dà, ěrduo hěn xiǎo.",
      v: "Mình tên là Minh Minh. Mình cao, tóc không dài. Mắt mình to, tai mình nhỏ.",
      qs: [
        { q: "明明的个子高吗？", v: "Minh Minh có cao không?", o: ["不高", "很高", "很小"], a: 1 },
        { q: "明明的什么很小？", v: "Cái gì của Minh Minh nhỏ?", o: ["眼睛", "个子", "耳朵"], a: 2 } ] }
  },
  6: {  // 这是谁的狗？
    dl: { lines: [
      { r: "A", z: "小月，这是谁的狗？", p: "Xiǎoyuè, zhè shì shéi de gǒu?", v: "Tiểu Nguyệt ơi, đây là chó của ai?" },
      { r: "B", z: "这是我的狗。", p: "Zhè shì wǒ de gǒu.", v: "Đây là chó của mình." },
      { r: "A", z: "那是你的猫吗？", p: "Nà shì nǐ de māo ma?", v: "Kia là mèo của bạn à?" },
      { r: "B", z: "不是，那是明明的猫。", p: "Bú shì, nà shì Míngming de māo.", v: "Không phải, kia là mèo của Minh Minh." },
      { r: "A", z: "我喜欢小狗。你喜欢什么？", p: "Wǒ xǐhuan xiǎo gǒu. Nǐ xǐhuan shénme?", v: "Mình thích cún con. Bạn thích con gì?" },
      { r: "B", z: "我喜欢小鸟和小鱼。", p: "Wǒ xǐhuan xiǎo niǎo hé xiǎo yú.", v: "Mình thích chim nhỏ và cá nhỏ." } ],
      qs: [
        { q: "这是谁的狗？", v: "Đây là chó của ai?", o: ["明明的", "大卫的", "小月的"], a: 2 },
        { q: "小月喜欢什么？", v: "Tiểu Nguyệt thích con gì?", o: ["小鸟和小鱼", "小狗", "小猫"], a: 0 } ] },
    rd: { z: "这是丁丁的猫，那是丁丁的狗。丁丁的猫很喜欢鱼。",
      p: "Zhè shì Dīngding de māo, nà shì Dīngding de gǒu. Dīngding de māo hěn xǐhuan yú.",
      v: "Đây là mèo của Đinh Đinh, kia là chó của Đinh Đinh. Mèo của Đinh Đinh rất thích cá.",
      qs: [
        { q: "那是谁的狗？", v: "Kia là chó của ai?", o: ["丁丁的", "明明的", "老师的"], a: 0 },
        { q: "丁丁的猫喜欢什么？", v: "Mèo của Đinh Đinh thích gì?", o: ["鸟", "狗", "鱼"], a: 2 } ] }
  },
  7: {  // 我去商店。
    dl: { lines: [
      { r: "A", z: "丁丁，你去哪儿？", p: "Dīngding, nǐ qù nǎr?", v: "Đinh Đinh ơi, bạn đi đâu thế?" },
      { r: "B", z: "我去学校。明明，你去哪儿？", p: "Wǒ qù xuéxiào. Míngming, nǐ qù nǎr?", v: "Mình đi đến trường. Minh Minh, bạn đi đâu?" },
      { r: "A", z: "我去商店。", p: "Wǒ qù shāngdiàn.", v: "Mình đi cửa hàng." },
      { r: "B", z: "商店在哪儿？", p: "Shāngdiàn zài nǎr?", v: "Cửa hàng ở đâu?" },
      { r: "A", z: "商店在那儿。", p: "Shāngdiàn zài nàr.", v: "Cửa hàng ở đằng kia." } ],
      qs: [
        { q: "丁丁去哪儿？", v: "Đinh Đinh đi đâu?", o: ["商店", "学校", "家"], a: 1 },
        { q: "明明去哪儿？", v: "Minh Minh đi đâu?", o: ["商店", "学校", "老师家"], a: 0 } ] },
    rd: { z: "我叫小月。我的学校在这儿，商店在那儿。我和妈妈去商店。",
      p: "Wǒ jiào Xiǎoyuè. Wǒ de xuéxiào zài zhèr, shāngdiàn zài nàr. Wǒ hé māma qù shāngdiàn.",
      v: "Mình tên là Tiểu Nguyệt. Trường của mình ở đây, cửa hàng ở đằng kia. Mình và mẹ đi cửa hàng.",
      qs: [
        { q: "小月的学校在哪儿？", v: "Trường của Tiểu Nguyệt ở đâu?", o: ["那儿", "这儿", "商店"], a: 1 },
        { q: "小月和谁去商店？", v: "Tiểu Nguyệt đi cửa hàng với ai?", o: ["爸爸", "姐姐", "妈妈"], a: 2 } ] }
  },
  8: {  // 今天星期几？
    dl: { lines: [
      { r: "A", z: "大卫，今天星期几？", p: "Dàwèi, jīntiān xīngqī jǐ?", v: "Đa-vít ơi, hôm nay thứ mấy?" },
      { r: "B", z: "今天星期三。", p: "Jīntiān xīngqīsān.", v: "Hôm nay thứ Tư." },
      { r: "A", z: "今天几月几号？", p: "Jīntiān jǐ yuè jǐ hào?", v: "Hôm nay ngày mấy tháng mấy?" },
      { r: "B", z: "今天九月十号。", p: "Jīntiān jiǔ yuè shí hào.", v: "Hôm nay ngày 10 tháng 9." },
      { r: "A", z: "明天我去商店，我很高兴！", p: "Míngtiān wǒ qù shāngdiàn, wǒ hěn gāoxìng!", v: "Ngày mai mình đi cửa hàng, mình vui lắm!" } ],
      qs: [
        { q: "今天星期几？", v: "Hôm nay thứ mấy?", o: ["星期三", "星期四", "星期五"], a: 0 },
        { q: "今天几月几号？", v: "Hôm nay ngày mấy tháng mấy?", o: ["十月九号", "九月十号", "九月四号"], a: 1 } ] },
    rd: { z: "今天星期五，明天星期六。明天丁丁和爸爸去商店，他很高兴。",
      p: "Jīntiān xīngqīwǔ, míngtiān xīngqīliù. Míngtiān Dīngding hé bàba qù shāngdiàn, tā hěn gāoxìng.",
      v: "Hôm nay thứ Sáu, ngày mai thứ Bảy. Ngày mai Đinh Đinh đi cửa hàng với bố, bạn ấy vui lắm.",
      qs: [
        { q: "明天星期几？", v: "Ngày mai thứ mấy?", o: ["星期五", "星期四", "星期六"], a: 2 },
        { q: "明天丁丁和谁去商店？", v: "Ngày mai Đinh Đinh đi cửa hàng với ai?", o: ["爸爸", "妈妈", "姐姐"], a: 0 } ] }
  },
  9: {  // 现在几点？
    dl: { lines: [
      { r: "A", z: "姐姐，现在几点？", p: "Jiějie, xiànzài jǐ diǎn?", v: "Chị ơi, bây giờ mấy giờ rồi?" },
      { r: "B", z: "我看看……现在七点。", p: "Wǒ kànkan…… xiànzài qī diǎn.", v: "Để chị xem… bây giờ là bảy giờ." },
      { r: "A", z: "七点？我去学校！", p: "Qī diǎn? Wǒ qù xuéxiào!", v: "Bảy giờ rồi à? Em đi học đây!" },
      { r: "B", z: "今天星期六，你不去学校！", p: "Jīntiān xīngqīliù, nǐ bú qù xuéxiào!", v: "Hôm nay thứ Bảy, em không đi học đâu!" },
      { r: "A", z: "我很高兴！", p: "Wǒ hěn gāoxìng!", v: "Em vui quá!" } ],
      qs: [
        { q: "现在几点？", v: "Bây giờ mấy giờ?", o: ["六点", "十点", "七点"], a: 2 },
        { q: "今天星期几？", v: "Hôm nay thứ mấy?", o: ["星期五", "星期六", "星期三"], a: 1 } ] },
    rd: { z: "现在三点，丁丁在家。四点丁丁和妈妈去商店。",
      p: "Xiànzài sān diǎn, Dīngding zài jiā. Sì diǎn Dīngding hé māma qù shāngdiàn.",
      v: "Bây giờ là ba giờ, Đinh Đinh đang ở nhà. Bốn giờ Đinh Đinh đi cửa hàng với mẹ.",
      qs: [
        { q: "现在几点？", v: "Bây giờ mấy giờ?", o: ["三点", "四点", "五点"], a: 0 },
        { q: "丁丁几点去商店？", v: "Mấy giờ Đinh Đinh đi cửa hàng?", o: ["三点", "五点", "四点"], a: 2 } ] }
  },
  10: {  // 你吃什么？
    dl: { lines: [
      { r: "A", z: "小月，你吃什么？", p: "Xiǎoyuè, nǐ chī shénme?", v: "Tiểu Nguyệt ơi, bạn ăn gì?" },
      { r: "B", z: "我吃米饭。大卫，你吃什么？", p: "Wǒ chī mǐfàn. Dàwèi, nǐ chī shénme?", v: "Mình ăn cơm. Đa-vít, bạn ăn gì?" },
      { r: "A", z: "我爱吃面条。", p: "Wǒ ài chī miàntiáo.", v: "Mình thích ăn mì lắm." },
      { r: "B", z: "你喝什么？", p: "Nǐ hē shénme?", v: "Bạn uống gì?" },
      { r: "A", z: "我喝牛奶。", p: "Wǒ hē niúnǎi.", v: "Mình uống sữa." },
      { r: "B", z: "我喝水，不喝牛奶。", p: "Wǒ hē shuǐ, bù hē niúnǎi.", v: "Mình uống nước, không uống sữa." } ],
      qs: [
        { q: "大卫爱吃什么？", v: "Đa-vít thích ăn gì?", o: ["米饭", "面条", "苹果"], a: 1 },
        { q: "小月喝什么？", v: "Tiểu Nguyệt uống gì?", o: ["水", "牛奶", "苹果"], a: 0 } ] },
    rd: { z: "明明爱吃苹果，不爱吃米饭。他很喜欢喝牛奶。",
      p: "Míngming ài chī píngguǒ, bú ài chī mǐfàn. Tā hěn xǐhuan hē niúnǎi.",
      v: "Minh Minh thích ăn táo, không thích ăn cơm. Bạn ấy rất thích uống sữa.",
      qs: [
        { q: "明明不爱吃什么？", v: "Minh Minh không thích ăn gì?", o: ["苹果", "面条", "米饭"], a: 2 },
        { q: "明明喜欢喝什么？", v: "Minh Minh thích uống gì?", o: ["水", "牛奶", "面条"], a: 1 } ] }
  }
};
