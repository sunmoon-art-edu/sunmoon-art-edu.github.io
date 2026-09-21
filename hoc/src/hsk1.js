/* ================== GIÁO TRÌNH HSK 1 — 150 từ chính thức (HSK 2.0), chia theo 15 bài của sách HSK标准教程 1 ================== */
const LESSONS = [
 {zh:"你好", vi:"Xin chào", words:[
   ["你","nǐ","bạn, anh, chị"],["好","hǎo","tốt, khoẻ, hay"],["对不起","duìbuqǐ","xin lỗi"],["没关系","méi guānxi","không sao"]],
  sents:[{t:["老师","你","好"],z:"老师，你好！",p:"Lǎoshī, nǐ hǎo!",v:"Em chào thầy cô!"},{t:["你","好","你","好","吗"],z:"你好！你好吗？",p:"Nǐ hǎo! Nǐ hǎo ma?",v:"Chào bạn! Bạn khoẻ không?"},{t:["我","说","对不起","他","说","没关系"],z:"我说对不起，他说没关系。",p:"Wǒ shuō duìbuqǐ, tā shuō méi guānxi.",v:"Tôi xin lỗi, anh ấy nói không sao."}],
  write:["你","好"]},
 {zh:"谢谢你", vi:"Cảm ơn bạn", words:[
   ["谢谢","xièxie","cảm ơn"],["不","bù","không"],["不客气","bú kèqi","không có gì, đừng khách sáo"],["再见","zàijiàn","tạm biệt"]],
  sents:[{t:["谢谢","你","老师"],z:"谢谢你，老师！",p:"Xièxie nǐ, lǎoshī!",v:"Em cảm ơn thầy cô!"},{t:["谢谢","你","不客气"],z:"谢谢你！不客气！",p:"Xièxie nǐ! Bú kèqi!",v:"Cảm ơn bạn! – Không có gì!"},{t:["我","不","喝","茶","谢谢"],z:"我不喝茶，谢谢。",p:"Wǒ bù hē chá, xièxie.",v:"Tôi không uống trà, cảm ơn."},{t:["我们","明天","再见"],z:"我们明天再见。",p:"Wǒmen míngtiān zàijiàn.",v:"Mai mình gặp lại nhé."}],
  write:["谢","不"]},
 {zh:"你叫什么名字", vi:"Bạn tên là gì", words:[
   ["叫","jiào","tên là, gọi"],["什么","shénme","gì, cái gì"],["名字","míngzi","tên"],["我","wǒ","tôi"],["是","shì","là"],["老师","lǎoshī","giáo viên, thầy cô"],["吗","ma","… không? (để hỏi)"],["学生","xuésheng","học sinh, sinh viên"],["人","rén","người"],["中国","Zhōngguó","Trung Quốc"]],
  sents:[{t:["你","叫","什么","名字"],z:"你叫什么名字？",p:"Nǐ jiào shénme míngzi?",v:"Bạn tên là gì?"},{t:["我","是","中国","人"],z:"我是中国人。",p:"Wǒ shì Zhōngguó rén.",v:"Tôi là người Trung Quốc."},{t:["你","是","老师","吗"],z:"你是老师吗？",p:"Nǐ shì lǎoshī ma?",v:"Bạn là giáo viên à?"},{t:["我","不","是","老师","我","是","学生"],z:"我不是老师，我是学生。",p:"Wǒ bú shì lǎoshī, wǒ shì xuésheng.",v:"Tôi không phải giáo viên, tôi là học sinh."}],
  write:["叫","名"]},
 {zh:"她是我的汉语老师", vi:"Cô ấy là giáo viên tiếng Trung của tôi", words:[
   ["她","tā","cô ấy, chị ấy"],["他","tā","anh ấy, ông ấy"],["谁","shéi","ai"],["的","de","của"],["汉语","Hànyǔ","tiếng Trung, tiếng Hán"],["哪","nǎ","nào"],["呢","ne","còn … thì sao?, (đang) … đấy"],["同学","tóngxué","bạn học"],["朋友","péngyou","bạn bè"]],
  sents:[{t:["她","是","我","的","汉语","老师"],z:"她是我的汉语老师。",p:"Tā shì wǒ de Hànyǔ lǎoshī.",v:"Cô ấy là giáo viên tiếng Trung của tôi."},{t:["他","是","谁","他","是","我","朋友"],z:"他是谁？他是我朋友。",p:"Tā shì shéi? Tā shì wǒ péngyou.",v:"Anh ấy là ai? Anh ấy là bạn tôi."},{t:["他","是","我","同学","你","呢"],z:"他是我同学。你呢？",p:"Tā shì wǒ tóngxué. Nǐ ne?",v:"Anh ấy là bạn học của tôi. Còn bạn?"},{t:["你","是","哪","个","学校","的","学生"],z:"你是哪个学校的学生？",p:"Nǐ shì nǎ ge xuéxiào de xuésheng?",v:"Bạn là học sinh trường nào?"}],
  write:["汉","朋"]},
 {zh:"她女儿今年二十岁", vi:"Con gái cô ấy năm nay hai mươi tuổi", words:[
   ["家","jiā","nhà, gia đình"],["有","yǒu","có"],["女儿","nǚ'ér","con gái"],["几","jǐ","mấy"],["岁","suì","tuổi"],["了","le","rồi, đã"],["多","duō","nhiều; bao (nhiêu)"],["大","dà","to, lớn"],
   ["一","yī","số 1"],["二","èr","số 2"],["三","sān","số 3"],["四","sì","số 4"],["五","wǔ","số 5"],["六","liù","số 6"],["七","qī","số 7"],["八","bā","số 8"],["九","jiǔ","số 9"],["十","shí","số 10"]],
  sents:[{t:["她","女儿","二","十","岁","了"],z:"她女儿二十岁了。",p:"Tā nǚ'ér èrshí suì le.",v:"Con gái cô ấy hai mươi tuổi rồi."},{t:["你","多","大","了"],z:"你多大了？",p:"Nǐ duō dà le?",v:"Bạn bao nhiêu tuổi rồi?"},{t:["你","有","几","个","女儿"],z:"你有几个女儿？",p:"Nǐ yǒu jǐ ge nǚ'ér?",v:"Bạn có mấy con gái?"},{t:["我","家","有","三","个","人"],z:"我家有三个人。",p:"Wǒ jiā yǒu sān ge rén.",v:"Nhà tôi có ba người."}],
  write:["岁","家"]},
 {zh:"我会说汉语", vi:"Tôi biết nói tiếng Trung", words:[
   ["会","huì","biết, có thể; sẽ"],["说","shuō","nói"],["妈妈","māma","mẹ"],["菜","cài","món ăn, rau"],["很","hěn","rất"],["做","zuò","làm, nấu"],["写","xiě","viết"],["字","zì","chữ"],["怎么","zěnme","thế nào, sao"],["读","dú","đọc"]],
  sents:[{t:["我","会","说","汉语"],z:"我会说汉语。",p:"Wǒ huì shuō Hànyǔ.",v:"Tôi biết nói tiếng Trung."},{t:["妈妈","会","做","中国","菜"],z:"妈妈会做中国菜。",p:"Māma huì zuò Zhōngguó cài.",v:"Mẹ biết nấu món Trung Quốc."},{t:["这","个","字","怎么","读"],z:"这个字怎么读？",p:"Zhège zì zěnme dú?",v:"Chữ này đọc thế nào?"},{t:["你","会","写","这","个","字","吗"],z:"你会写这个字吗？",p:"Nǐ huì xiě zhège zì ma?",v:"Bạn biết viết chữ này không?"}],
  write:["会","说"]},
 {zh:"今天几号", vi:"Hôm nay ngày mấy", words:[
   ["请","qǐng","mời, xin"],["今天","jīntiān","hôm nay"],["号","hào","ngày (trong tháng), số"],["月","yuè","tháng"],["星期","xīngqī","tuần, thứ"],["昨天","zuótiān","hôm qua"],["明天","míngtiān","ngày mai"],["去","qù","đi"],["学校","xuéxiào","trường học"],["看","kàn","xem, nhìn, đọc"],["书","shū","sách"]],
  sents:[{t:["今天","几","月","几","号"],z:"今天几月几号？",p:"Jīntiān jǐ yuè jǐ hào?",v:"Hôm nay là ngày mấy tháng mấy?"},{t:["明天","星期","几"],z:"明天星期几？",p:"Míngtiān xīngqī jǐ?",v:"Ngày mai thứ mấy?"},{t:["昨天","我","去","学校","看","书","了"],z:"昨天我去学校看书了。",p:"Zuótiān wǒ qù xuéxiào kàn shū le.",v:"Hôm qua tôi đến trường đọc sách."},{t:["请","你","明天","来","学校"],z:"请你明天来学校。",p:"Qǐng nǐ míngtiān lái xuéxiào.",v:"Mời bạn ngày mai đến trường."}],
  write:["今","号"]},
 {zh:"我想喝茶", vi:"Tôi muốn uống trà", words:[
   ["想","xiǎng","muốn, nghĩ, nhớ"],["喝","hē","uống"],["茶","chá","trà"],["吃","chī","ăn"],["米饭","mǐfàn","cơm"],["下午","xiàwǔ","buổi chiều"],["商店","shāngdiàn","cửa hàng"],["买","mǎi","mua"],["个","gè","cái, chiếc (lượng từ)"],["杯子","bēizi","cái cốc, cái ly"],["这","zhè","này, đây"],["多少","duōshao","bao nhiêu"],["钱","qián","tiền"],["块","kuài","đồng (tiền)"],["那","nà","kia, đó"]],
  sents:[{t:["我","想","喝","茶","你","呢"],z:"我想喝茶，你呢？",p:"Wǒ xiǎng hē chá, nǐ ne?",v:"Tôi muốn uống trà, còn bạn?"},{t:["这","个","杯子","多少","钱"],z:"这个杯子多少钱？",p:"Zhège bēizi duōshao qián?",v:"Cái cốc này bao nhiêu tiền?"},{t:["那","个","杯子","二","十","块"],z:"那个杯子二十块。",p:"Nàge bēizi èrshí kuài.",v:"Cái cốc kia hai mươi đồng."},{t:["下午","我","想","去","商店","买","东西"],z:"下午我想去商店买东西。",p:"Xiàwǔ wǒ xiǎng qù shāngdiàn mǎi dōngxi.",v:"Chiều nay tôi muốn đi cửa hàng mua đồ."}],
  write:["喝","茶"]},
 {zh:"你儿子在哪儿工作", vi:"Con trai bạn làm việc ở đâu", words:[
   ["小","xiǎo","nhỏ, bé"],["猫","māo","con mèo"],["在","zài","ở, tại; đang"],["狗","gǒu","con chó"],["椅子","yǐzi","cái ghế"],["哪儿","nǎr","ở đâu"],["工作","gōngzuò","làm việc, công việc"],["儿子","érzi","con trai"],["医院","yīyuàn","bệnh viện"],["医生","yīshēng","bác sĩ"],["爸爸","bàba","bố"]],
  sents:[{t:["你","儿子","在","哪儿","工作"],z:"你儿子在哪儿工作？",p:"Nǐ érzi zài nǎr gōngzuò?",v:"Con trai bạn làm việc ở đâu?"},{t:["我","儿子","在","医院","工作"],z:"我儿子在医院工作。",p:"Wǒ érzi zài yīyuàn gōngzuò.",v:"Con trai tôi làm việc ở bệnh viện."},{t:["我","爸爸","是","医生"],z:"我爸爸是医生。",p:"Wǒ bàba shì yīshēng.",v:"Bố tôi là bác sĩ."},{t:["我","的","小","猫","在","椅子","上"],z:"我的小猫在椅子上。",p:"Wǒ de xiǎo māo zài yǐzi shang.",v:"Con mèo nhỏ của tôi ở trên ghế."}],
  write:["工","作"]},
 {zh:"我能坐这儿吗", vi:"Tôi ngồi đây được không", words:[
   ["桌子","zhuōzi","cái bàn"],["上","shàng","trên"],["下","xià","dưới"],["电脑","diànnǎo","máy tính"],["和","hé","và"],["本","běn","quyển, cuốn"],["里","lǐ","trong"],["前面","qiánmian","phía trước"],["后面","hòumian","phía sau"],["没有","méiyǒu","không có, chưa"],["能","néng","có thể, được"],["坐","zuò","ngồi; đi (xe…)"]],
  sents:[{t:["我","能","坐","吗"],z:"我能坐吗？",p:"Wǒ néng zuò ma?",v:"Tôi ngồi được không?"},{t:["桌子","上","有","电脑","和","书"],z:"桌子上有电脑和书。",p:"Zhuōzi shang yǒu diànnǎo hé shū.",v:"Trên bàn có máy tính và sách."},{t:["你","的","杯子","在","电脑","前面"],z:"你的杯子在电脑前面。",p:"Nǐ de bēizi zài diànnǎo qiánmian.",v:"Cốc của bạn ở trước máy tính."},{t:["我","后面","没有","人"],z:"我后面没有人。",p:"Wǒ hòumian méiyǒu rén.",v:"Sau tôi không có ai."}],
  write:["坐","能"]},
 {zh:"现在几点", vi:"Bây giờ mấy giờ", words:[
   ["现在","xiànzài","bây giờ"],["点","diǎn","giờ; chút"],["中午","zhōngwǔ","buổi trưa"],["时候","shíhou","lúc, khi"],["回","huí","về"],["我们","wǒmen","chúng tôi, chúng ta"],["电影","diànyǐng","phim"],["住","zhù","ở, sống"],["北京","Běijīng","Bắc Kinh"]],
  sents:[{t:["现在","几","点"],z:"现在几点？",p:"Xiànzài jǐ diǎn?",v:"Bây giờ mấy giờ?"},{t:["中午","十","二","点","我们","回","家"],z:"中午十二点我们回家。",p:"Zhōngwǔ shí'èr diǎn wǒmen huí jiā.",v:"Mười hai giờ trưa chúng tôi về nhà."},{t:["你","什么","时候","去","看","电影"],z:"你什么时候去看电影？",p:"Nǐ shénme shíhou qù kàn diànyǐng?",v:"Khi nào bạn đi xem phim?"},{t:["他","住","在","北京"],z:"他住在北京。",p:"Tā zhù zài Běijīng.",v:"Anh ấy sống ở Bắc Kinh."}],
  write:["现","回"]},
 {zh:"明天天气怎么样", vi:"Ngày mai thời tiết thế nào", words:[
   ["天气","tiānqì","thời tiết"],["怎么样","zěnmeyàng","thế nào"],["太","tài","quá"],["热","rè","nóng"],["冷","lěng","lạnh"],["下雨","xià yǔ","mưa"],["小姐","xiǎojiě","cô, chị (gọi phụ nữ trẻ)"],["来","lái","đến"],["爱","ài","yêu, thích"],["些","xiē","một số, những"],["水果","shuǐguǒ","trái cây"],["水","shuǐ","nước"]],
  sents:[{t:["明天","天气","怎么样"],z:"明天天气怎么样？",p:"Míngtiān tiānqì zěnmeyàng?",v:"Ngày mai thời tiết thế nào?"},{t:["明天","会","下雨"],z:"明天会下雨。",p:"Míngtiān huì xià yǔ.",v:"Ngày mai trời sẽ mưa."},{t:["今天","太","热","了","我","想","喝","水"],z:"今天太热了，我想喝水。",p:"Jīntiān tài rè le, wǒ xiǎng hē shuǐ.",v:"Hôm nay nóng quá, tôi muốn uống nước."},{t:["小姐","你","爱","吃","什么","水果"],z:"小姐，你爱吃什么水果？",p:"Xiǎojiě, nǐ ài chī shénme shuǐguǒ?",v:"Chị ơi, chị thích ăn trái cây gì?"}],
  write:["热","冷"]},
 {zh:"他在学做中国菜呢", vi:"Anh ấy đang học nấu món Trung Quốc", words:[
   ["喂","wèi","a lô"],["学习","xuéxí","học, học tập"],["上午","shàngwǔ","buổi sáng"],["睡觉","shuìjiào","ngủ"],["电视","diànshì","tivi"],["喜欢","xǐhuan","thích"],["打电话","dǎ diànhuà","gọi điện thoại"]],
  sents:[{t:["喂","你","在","做","什么","呢"],z:"喂，你在做什么呢？",p:"Wèi, nǐ zài zuò shénme ne?",v:"A lô, bạn đang làm gì thế?"},{t:["我","在","学习","做","中国","菜","呢"],z:"我在学习做中国菜呢。",p:"Wǒ zài xuéxí zuò Zhōngguó cài ne.",v:"Tôi đang học nấu món Trung Quốc."},{t:["上午","他","在","家","睡觉"],z:"上午他在家睡觉。",p:"Shàngwǔ tā zài jiā shuìjiào.",v:"Buổi sáng anh ấy ngủ ở nhà."},{t:["我","喜欢","在","家","看","电视"],z:"我喜欢在家看电视。",p:"Wǒ xǐhuan zài jiā kàn diànshì.",v:"Tôi thích ở nhà xem tivi."}],
  write:["学","习"]},
 {zh:"她买了不少衣服", vi:"Cô ấy mua khá nhiều quần áo", words:[
   ["东西","dōngxi","đồ, đồ vật"],["一点儿","yìdiǎnr","một chút, một ít"],["苹果","píngguǒ","quả táo"],["看见","kànjiàn","nhìn thấy"],["先生","xiānsheng","ông, anh, ngài"],["开","kāi","mở; lái (xe)"],["分钟","fēnzhōng","phút"],["衣服","yīfu","quần áo"],["漂亮","piàoliang","đẹp"],["少","shǎo","ít"],["都","dōu","đều"]],
  sents:[{t:["她","买","了","不","少","衣服"],z:"她买了不少衣服。",p:"Tā mǎile bù shǎo yīfu.",v:"Cô ấy mua khá nhiều quần áo."},{t:["这","些","衣服","都","很","漂亮"],z:"这些衣服都很漂亮。",p:"Zhèxiē yīfu dōu hěn piàoliang.",v:"Những bộ quần áo này đều rất đẹp."},{t:["你","看见","我","的","东西","了","吗"],z:"你看见我的东西了吗？",p:"Nǐ kànjiàn wǒ de dōngxi le ma?",v:"Bạn có thấy đồ của tôi không?"},{t:["先生","我","想","买","一点儿","苹果"],z:"先生，我想买一点儿苹果。",p:"Xiānsheng, wǒ xiǎng mǎi yìdiǎnr píngguǒ.",v:"Anh ơi, tôi muốn mua ít táo."}],
  write:["衣","少"]},
 {zh:"我是坐飞机来的", vi:"Tôi đến bằng máy bay", words:[
   ["认识","rènshi","quen, biết (ai đó)"],["年","nián","năm"],["饭店","fàndiàn","khách sạn, nhà hàng"],["出租车","chūzūchē","taxi"],["高兴","gāoxìng","vui"],["听","tīng","nghe"],["飞机","fēijī","máy bay"]],
  sents:[{t:["我","是","坐","飞机","来","的"],z:"我是坐飞机来的。",p:"Wǒ shì zuò fēijī lái de.",v:"Tôi đến bằng máy bay."},{t:["你","是","什么","时候","来","北京","的"],z:"你是什么时候来北京的？",p:"Nǐ shì shénme shíhou lái Běijīng de?",v:"Bạn đến Bắc Kinh khi nào?"},{t:["我们","坐","出租车","去","饭店"],z:"我们坐出租车去饭店。",p:"Wǒmen zuò chūzūchē qù fàndiàn.",v:"Chúng tôi đi taxi đến khách sạn."},{t:["认识","你","很","高兴"],z:"认识你很高兴。",p:"Rènshi nǐ hěn gāoxìng.",v:"Rất vui được quen bạn."}],
  write:["飞","机"]},
 {zh:"复习", vi:"Ôn tập cả sách", review:true, words:[], sents:[], write:[]}
];
const EXTRA_PY = { };
