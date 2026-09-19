/* ================== GIÁO TRÌNH YCT 2 — 70 từ mới (150 từ chính thức trừ 80 từ YCT 1), chia theo 11 bài + ôn tập của sách YCT 标准教程 2 ================== */
const LESSONS = [
 {zh:"我可以坐这儿吗？", vi:"Mình ngồi đây được không?", words:[
   ["可以","kěyǐ","được, có thể"],["坐","zuò","ngồi"],["请","qǐng","mời, xin (nói lịch sự)"],["要","yào","muốn, cần, phải"],["说话","shuōhuà","nói chuyện"],["对不起","duìbuqǐ","xin lỗi"],["没关系","méi guānxi","không sao đâu"],["不客气","bú kèqi","không có gì (đáp lời cảm ơn)"],["同学","tóngxué","bạn cùng lớp"]],
  sents:[{t:["我","可以","坐","这儿","吗"],z:"我可以坐这儿吗？",p:"Wǒ kěyǐ zuò zhèr ma?",v:"Mình ngồi đây được không?"},{t:["可以","请","坐"],z:"可以，请坐。",p:"Kěyǐ, qǐng zuò.",v:"Được, mời bạn ngồi."},{t:["请","不","要","说话"],z:"请不要说话。",p:"Qǐng bú yào shuōhuà.",v:"Các bạn đừng nói chuyện nhé."},{t:["她","是","我","的","同学"],z:"她是我的同学。",p:"Tā shì wǒ de tóngxué.",v:"Bạn ấy là bạn cùng lớp của mình."}],
  write:["可","坐"]},
 {zh:"你早上几点起床？", vi:"Buổi sáng bạn dậy lúc mấy giờ?", words:[
   ["早上","zǎoshang","buổi sáng"],["晚上","wǎnshang","buổi tối"],["起床","qǐchuáng","thức dậy, ngủ dậy"],["睡觉","shuìjiào","đi ngủ"],["分钟","fēnzhōng","phút"]],
  sents:[{t:["你","早上","几","点","起床"],z:"你早上几点起床？",p:"Nǐ zǎoshang jǐ diǎn qǐchuáng?",v:"Buổi sáng bạn dậy lúc mấy giờ?"},{t:["我","早上","六","点","起床"],z:"我早上六点起床。",p:"Wǒ zǎoshang liù diǎn qǐchuáng.",v:"Mình dậy lúc 6 giờ sáng."},{t:["我","晚上","九","点","睡觉"],z:"我晚上九点睡觉。",p:"Wǒ wǎnshang jiǔ diǎn shuìjiào.",v:"Mình đi ngủ lúc 9 giờ tối."},{t:["我","去","学校","要","十","分钟"],z:"我去学校要十分钟。",p:"Wǒ qù xuéxiào yào shí fēnzhōng.",v:"Mình đi đến trường mất 10 phút."}],
  write:["早","上"]},
 {zh:"你的铅笔呢？", vi:"Bút chì của bạn đâu rồi?", words:[
   ["铅笔","qiānbǐ","bút chì"],["呢","ne","… đâu rồi? … thì sao? (để hỏi)"],["书包","shūbāo","cặp sách"],["颜色","yánsè","màu sắc"],["红","hóng","đỏ"],["黄","huáng","vàng"],["绿","lǜ","xanh lá"]],
  sents:[{t:["你","的","铅笔","呢"],z:"你的铅笔呢？",p:"Nǐ de qiānbǐ ne?",v:"Bút chì của bạn đâu rồi?"},{t:["你","的","书包","是","什么","颜色","的"],z:"你的书包是什么颜色的？",p:"Nǐ de shūbāo shì shénme yánsè de?",v:"Cặp sách của bạn màu gì?"},{t:["我","的","书包","是","绿","的"],z:"我的书包是绿的。",p:"Wǒ de shūbāo shì lǜ de.",v:"Cặp sách của mình màu xanh lá."},{t:["我","喜欢","红","的","你","呢"],z:"我喜欢红的，你呢？",p:"Wǒ xǐhuan hóng de, nǐ ne?",v:"Mình thích màu đỏ, còn bạn?"}],
  write:["书","红"]},
 {zh:"书包里有两本书。", vi:"Trong cặp có hai quyển sách.", words:[
   ["里面","lǐmiàn","bên trong"],["上边","shàngbian","bên trên"],["两","liǎng","hai"],["只","zhī","con (để đếm con vật)"],["熊猫","xióngmāo","gấu trúc"],["桌子","zhuōzi","cái bàn"],["椅子","yǐzi","cái ghế"],["房间","fángjiān","căn phòng"]],
  sents:[{t:["书包","在","桌子","上边"],z:"书包在桌子上边。",p:"Shūbāo zài zhuōzi shàngbian.",v:"Cặp sách ở trên bàn."},{t:["铅笔","在","书包","里面"],z:"铅笔在书包里面。",p:"Qiānbǐ zài shūbāo lǐmiàn.",v:"Bút chì ở trong cặp sách."},{t:["房间","里面","有","一","只","猫"],z:"房间里面有一只猫。",p:"Fángjiān lǐmiàn yǒu yì zhī māo.",v:"Trong phòng có một con mèo."},{t:["那儿","有","两","只","熊猫"],z:"那儿有两只熊猫。",p:"Nàr yǒu liǎng zhī xióngmāo.",v:"Ở đó có hai con gấu trúc."}],
  write:["只","两"]},
 {zh:"你会不会做饭？", vi:"Bạn có biết nấu cơm không?", words:[
   ["会","huì","biết (làm gì)"],["做","zuò","làm, nấu"],["画","huà","vẽ"],["汉语","Hànyǔ","tiếng Trung"],["学习","xuéxí","học"],["也","yě","cũng"]],
  sents:[{t:["你","会","不","会","画","熊猫"],z:"你会不会画熊猫？",p:"Nǐ huì bu huì huà xióngmāo?",v:"Bạn có biết vẽ gấu trúc không?"},{t:["我","会","画","小","猫"],z:"我会画小猫。",p:"Wǒ huì huà xiǎo māo.",v:"Mình biết vẽ mèo con."},{t:["妈妈","会","做","面条","我","也","会"],z:"妈妈会做面条，我也会。",p:"Māma huì zuò miàntiáo, wǒ yě huì.",v:"Mẹ biết nấu mì, mình cũng biết."},{t:["我","喜欢","学习","汉语"],z:"我喜欢学习汉语。",p:"Wǒ xǐhuan xuéxí Hànyǔ.",v:"Mình thích học tiếng Trung."}],
  write:["也","会"]},
 {zh:"包子多少钱一个？", vi:"Bánh bao bao nhiêu tiền một cái?", words:[
   ["包子","bāozi","bánh bao"],["多少","duōshao","bao nhiêu"],["钱","qián","tiền"],["块","kuài","đồng (tiền)"],["买","mǎi","mua"],["茶","chá","trà"],["香蕉","xiāngjiāo","quả chuối"],["好吃","hǎochī","ngon"]],
  sents:[{t:["包子","多少","钱","一","个"],z:"包子多少钱一个？",p:"Bāozi duōshao qián yí ge?",v:"Bánh bao bao nhiêu tiền một cái?"},{t:["三","块","钱","一","个"],z:"三块钱一个。",p:"Sān kuài qián yí ge.",v:"Ba đồng một cái."},{t:["我","要","买","五","个","香蕉"],z:"我要买五个香蕉。",p:"Wǒ yào mǎi wǔ ge xiāngjiāo.",v:"Mình muốn mua năm quả chuối."},{t:["这儿","的","包子","很","好吃"],z:"这儿的包子很好吃。",p:"Zhèr de bāozi hěn hǎochī.",v:"Bánh bao ở đây rất ngon."}],
  write:["子","买"]},
 {zh:"今天比昨天热。", vi:"Hôm nay nóng hơn hôm qua.", words:[
   ["比","bǐ","so với, hơn"],["昨天","zuótiān","hôm qua"],["热","rè","nóng"],["冷","lěng","lạnh"],["天气","tiānqì","thời tiết"],["怎么样","zěnmeyàng","thế nào"],["真","zhēn","thật, thật là"]],
  sents:[{t:["今天","比","昨天","热"],z:"今天比昨天热。",p:"Jīntiān bǐ zuótiān rè.",v:"Hôm nay nóng hơn hôm qua."},{t:["明天","天气","怎么样"],z:"明天天气怎么样？",p:"Míngtiān tiānqì zěnmeyàng?",v:"Thời tiết ngày mai thế nào?"},{t:["明天","很","冷"],z:"明天很冷。",p:"Míngtiān hěn lěng.",v:"Ngày mai trời lạnh."},{t:["今天","天气","真","好"],z:"今天天气真好！",p:"Jīntiān tiānqì zhēn hǎo!",v:"Hôm nay trời đẹp thật!"}],
  write:["比","冷"]},
 {zh:"马丁比我大三岁。", vi:"Martin lớn hơn mình ba tuổi.", words:[
   ["弟弟","dìdi","em trai"],["妹妹","mèimei","em gái"],["朋友","péngyou","bạn, bạn bè"],["漂亮","piàoliang","đẹp, xinh"],["名字","míngzi","tên"],["觉得","juéde","thấy, cảm thấy"]],
  sents:[{t:["我","比","妹妹","大","三","岁"],z:"我比妹妹大三岁。",p:"Wǒ bǐ mèimei dà sān suì.",v:"Mình lớn hơn em gái ba tuổi."},{t:["你","弟弟","叫","什么","名字"],z:"你弟弟叫什么名字？",p:"Nǐ dìdi jiào shénme míngzi?",v:"Em trai bạn tên là gì?"},{t:["小","猫","和","小","狗","是","好","朋友"],z:"小猫和小狗是好朋友。",p:"Xiǎo māo hé xiǎo gǒu shì hǎo péngyou.",v:"Mèo con và cún con là bạn thân."},{t:["我","觉得","妹妹","很","漂亮"],z:"我觉得妹妹很漂亮。",p:"Wǒ juéde mèimei hěn piàoliang.",v:"Mình thấy em gái rất xinh."}],
  write:["友","字"]},
 {zh:"你今天做什么了？", vi:"Hôm nay bạn đã làm gì?", words:[
   ["了","le","rồi, đã (việc đã xong)"],["没有","méiyǒu","không, chưa (làm)"],["玩","wán","chơi"],["电视","diànshì","tivi"],["打电话","dǎ diànhuà","gọi điện thoại"]],
  sents:[{t:["你","今天","做","什么","了"],z:"你今天做什么了？",p:"Nǐ jīntiān zuò shénme le?",v:"Hôm nay bạn đã làm gì?"},{t:["我","去","朋友","家","玩","了"],z:"我去朋友家玩了。",p:"Wǒ qù péngyou jiā wán le.",v:"Mình đã đến nhà bạn chơi."},{t:["我","昨天","没有","看","电视"],z:"我昨天没有看电视。",p:"Wǒ zuótiān méiyǒu kàn diànshì.",v:"Hôm qua mình không xem tivi."},{t:["妈妈","在","打电话"],z:"妈妈在打电话。",p:"Māma zài dǎ diànhuà.",v:"Mẹ đang gọi điện thoại."}],
  write:["了","电"]},
 {zh:"你怎么了？", vi:"Bạn sao thế?", words:[
   ["怎么","zěnme","sao, thế nào"],["医生","yīshēng","bác sĩ"],["医院","yīyuàn","bệnh viện"],["脚","jiǎo","bàn chân"]],
  sents:[{t:["你","怎么","了"],z:"你怎么了？",p:"Nǐ zěnme le?",v:"Bạn sao thế?"},{t:["我","要","去","医院"],z:"我要去医院。",p:"Wǒ yào qù yīyuàn.",v:"Mình phải đi bệnh viện."},{t:["弟弟","要","去","看","医生"],z:"弟弟要去看医生。",p:"Dìdi yào qù kàn yīshēng.",v:"Em trai phải đi khám bác sĩ."},{t:["我","有","两","只","脚"],z:"我有两只脚。",p:"Wǒ yǒu liǎng zhī jiǎo.",v:"Mình có hai bàn chân."}],
  write:["么","生"]},
 {zh:"我来北京一年了。", vi:"Mình đến Bắc Kinh được một năm rồi.", words:[
   ["来","lái","đến, tới"],["北京","Běijīng","Bắc Kinh"],["年","nián","năm"],["零","líng","số 0"],["学生","xuésheng","học sinh"]],
  sents:[{t:["我","来","北京","一","年","了"],z:"我来北京一年了。",p:"Wǒ lái Běijīng yì nián le.",v:"Mình đến Bắc Kinh được một năm rồi."},{t:["我们","是","学生"],z:"我们是学生。",p:"Wǒmen shì xuésheng.",v:"Chúng mình là học sinh."},{t:["现在","是","二","零","二","六","年"],z:"现在是二零二六年。",p:"Xiànzài shì èr líng èr liù nián.",v:"Bây giờ là năm 2026."},{t:["我","学习","汉语","两","年","了"],z:"我学习汉语两年了。",p:"Wǒ xuéxí Hànyǔ liǎng nián le.",v:"Mình học tiếng Trung được hai năm rồi."}],
  write:["年","来"]},
 {zh:"复习", vi:"Ôn tập cả sách", review:true, words:[], sents:[], write:[]}
];
const EXTRA_PY = { "明明": "Míngming" };
