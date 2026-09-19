/* ================== GIÁO TRÌNH YCT 1 — 80 từ chính thức, chia theo 12 bài của sách YCT 标准教程 1 ================== */
const LESSONS = [
 {zh:"你好！", vi:"Xin chào!", words:[
   ["你","nǐ","bạn"],["好","hǎo","tốt, khoẻ"],["我","wǒ","mình, tôi"],["老师","lǎoshī","thầy giáo, cô giáo"],["谢谢","xièxie","cảm ơn"],["再见","zàijiàn","tạm biệt"]],
  sents:[{t:["你","好"],z:"你好！",p:"Nǐ hǎo!",v:"Xin chào!"},{t:["老师","好"],z:"老师好！",p:"Lǎoshī hǎo!",v:"Con chào thầy cô ạ!"},{t:["谢谢","老师"],z:"谢谢老师！",p:"Xièxie lǎoshī!",v:"Con cảm ơn thầy cô!"},{t:["老师","再见"],z:"老师再见！",p:"Lǎoshī zàijiàn!",v:"Con chào tạm biệt thầy cô!"}],
  write:["你","好"]},
 {zh:"你叫什么？", vi:"Bạn tên là gì?", words:[
   ["叫","jiào","tên là, gọi"],["什么","shénme","cái gì"],["是","shì","là"],["不","bù","không"],["中国人","Zhōngguó rén","người Trung Quốc"],["吗","ma","… không? (để hỏi)"]],
  sents:[{t:["你","叫","什么"],z:"你叫什么？",p:"Nǐ jiào shénme?",v:"Bạn tên là gì?"},{t:["我","叫","明明"],z:"我叫明明。",p:"Wǒ jiào Míngming.",v:"Mình tên là Minh Minh."},{t:["你","是","中国人","吗"],z:"你是中国人吗？",p:"Nǐ shì Zhōngguó rén ma?",v:"Bạn là người Trung Quốc à?"},{t:["我","不","是","中国人"],z:"我不是中国人。",p:"Wǒ bú shì Zhōngguó rén.",v:"Mình không phải người Trung Quốc."}],
  write:["不","中"]},
 {zh:"他是谁？", vi:"Bạn ấy là ai?", words:[
   ["他","tā","bạn ấy, anh ấy (con trai)"],["她","tā","bạn ấy, cô ấy (con gái)"],["谁","shéi","ai"],["爸爸","bàba","bố"],["妈妈","māma","mẹ"],["哥哥","gēge","anh trai"],["姐姐","jiějie","chị gái"],["认识","rènshi","quen, biết (ai đó)"]],
  sents:[{t:["他","是","谁"],z:"他是谁？",p:"Tā shì shéi?",v:"Bạn ấy là ai?"},{t:["他","是","我","爸爸"],z:"他是我爸爸。",p:"Tā shì wǒ bàba.",v:"Đó là bố mình."},{t:["你","认识","她","吗"],z:"你认识她吗？",p:"Nǐ rènshi tā ma?",v:"Bạn có quen bạn ấy không?"}],
  write:["他","她"]},
 {zh:"我家有四口人。", vi:"Nhà mình có bốn người.", words:[
   ["一","yī","số 1"],["二","èr","số 2"],["三","sān","số 3"],["四","sì","số 4"],["五","wǔ","số 5"],
   ["家","jiā","nhà, gia đình"],["有","yǒu","có"],["口","kǒu","cái miệng; (đếm người trong nhà)"],["和","hé","và"],["我们","wǒmen","chúng mình"],["几","jǐ","mấy"]],
  sents:[{t:["你","家","有","几","口","人"],z:"你家有几口人？",p:"Nǐ jiā yǒu jǐ kǒu rén?",v:"Nhà bạn có mấy người?"},{t:["我","家","有","四","口","人"],z:"我家有四口人。",p:"Wǒ jiā yǒu sì kǒu rén.",v:"Nhà mình có bốn người."},{t:["爸爸","妈妈","和","我"],z:"爸爸、妈妈和我。",p:"Bàba, māma hé wǒ.",v:"Bố, mẹ và mình."}],
  write:["口","五"]},
 {zh:"我6岁。", vi:"Mình 6 tuổi.", words:[
   ["六","liù","số 6"],["七","qī","số 7"],["八","bā","số 8"],["九","jiǔ","số 9"],["十","shí","số 10"],["岁","suì","tuổi"],["多","duō","nhiều"]],
  sents:[{t:["你","几","岁"],z:"你几岁？",p:"Nǐ jǐ suì?",v:"Bạn mấy tuổi?"},{t:["我","六","岁"],z:"我六岁。",p:"Wǒ liù suì.",v:"Mình 6 tuổi."},{t:["哥哥","十","岁"],z:"哥哥十岁。",p:"Gēge shí suì.",v:"Anh trai 10 tuổi."}],
  write:["六","八"]},
 {zh:"你的个子真高！", vi:"Bạn cao thật đấy!", words:[
   ["个子","gèzi","dáng người, chiều cao"],["高","gāo","cao"],["的","de","của"],["很","hěn","rất"],["手","shǒu","tay"],["眼睛","yǎnjing","mắt"],["头发","tóufa","tóc"],["耳朵","ěrduo","tai"],["鼻子","bízi","mũi"],["长","cháng","dài"],["大","dà","to, lớn"],["小","xiǎo","nhỏ, bé"]],
  sents:[{t:["哥哥","的","个子","很","高"],z:"哥哥的个子很高。",p:"Gēge de gèzi hěn gāo.",v:"Anh trai rất cao."},{t:["爸爸","的","手","大"],z:"爸爸的手大。",p:"Bàba de shǒu dà.",v:"Tay bố to."},{t:["姐姐","的","头发","很","长"],z:"姐姐的头发很长。",p:"Jiějie de tóufa hěn cháng.",v:"Tóc chị gái rất dài."}],
  write:["手","小"]},
 {zh:"这是谁的狗？", vi:"Đây là chó của ai?", words:[
   ["这","zhè","này, đây"],["那","nà","kia, đó"],["猫","māo","con mèo"],["狗","gǒu","con chó"],["鸟","niǎo","con chim"],["鱼","yú","con cá"],["个","gè","cái, con (để đếm)"],["喜欢","xǐhuan","thích"]],
  sents:[{t:["这","是","谁","的","狗"],z:"这是谁的狗？",p:"Zhè shì shéi de gǒu?",v:"Đây là chó của ai?"},{t:["这","是","猫","不","是","小","狗"],z:"这是猫，不是小狗。",p:"Zhè shì māo, bú shì xiǎo gǒu.",v:"Đây là mèo, không phải cún con."},{t:["我","喜欢","小","鸟"],z:"我喜欢小鸟。",p:"Wǒ xǐhuan xiǎo niǎo.",v:"Mình thích chú chim nhỏ."}],
  write:["鸟","鱼"]},
 {zh:"我去商店。", vi:"Mình đi cửa hàng.", words:[
   ["去","qù","đi (đến)"],["商店","shāngdiàn","cửa hàng"],["学校","xuéxiào","trường học"],["在","zài","ở, tại"],["哪","nǎ","nào"],["哪儿","nǎr","ở đâu"],["这儿","zhèr","ở đây"],["那儿","nàr","ở đó"]],
  sents:[{t:["你","去","哪儿"],z:"你去哪儿？",p:"Nǐ qù nǎr?",v:"Bạn đi đâu thế?"},{t:["我","去","商店"],z:"我去商店。",p:"Wǒ qù shāngdiàn.",v:"Mình đi cửa hàng."},{t:["老师","在","学校"],z:"老师在学校。",p:"Lǎoshī zài xuéxiào.",v:"Cô giáo ở trường."}],
  write:["去","在"]},
 {zh:"今天星期几？", vi:"Hôm nay thứ mấy?", words:[
   ["今天","jīntiān","hôm nay"],["明天","míngtiān","ngày mai"],["星期","xīngqī","tuần, thứ"],["月","yuè","tháng"],["号","hào","ngày (trong tháng)"],["高兴","gāoxìng","vui"]],
  sents:[{t:["今天","星期","几"],z:"今天星期几？",p:"Jīntiān xīngqī jǐ?",v:"Hôm nay thứ mấy?"},{t:["明天","星期","四"],z:"明天星期四。",p:"Míngtiān xīngqīsì.",v:"Ngày mai thứ Năm."},{t:["今天","八","月","七","号"],z:"今天八月七号。",p:"Jīntiān bā yuè qī hào.",v:"Hôm nay ngày 7 tháng 8."}],
  write:["月","天"]},
 {zh:"现在几点？", vi:"Bây giờ mấy giờ?", words:[
   ["现在","xiànzài","bây giờ"],["点","diǎn","giờ"],["看","kàn","xem, nhìn"]],
  sents:[{t:["现在","几","点"],z:"现在几点？",p:"Xiànzài jǐ diǎn?",v:"Bây giờ mấy giờ?"},{t:["现在","四","点"],z:"现在四点。",p:"Xiànzài sì diǎn.",v:"Bây giờ là 4 giờ."},{t:["姐姐","很","高兴"],z:"姐姐很高兴。",p:"Jiějie hěn gāoxìng.",v:"Chị gái rất vui."}],
  write:["看","点"]},
 {zh:"你吃什么？", vi:"Bạn ăn gì?", words:[
   ["吃","chī","ăn"],["喝","hē","uống"],["水","shuǐ","nước"],["牛奶","niúnǎi","sữa bò"],["米饭","mǐfàn","cơm"],["面条","miàntiáo","mì sợi"],["苹果","píngguǒ","quả táo"],["爱","ài","yêu, thích"]],
  sents:[{t:["你","吃","什么"],z:"你吃什么？",p:"Nǐ chī shénme?",v:"Bạn ăn gì?"},{t:["我","爱","吃","面条"],z:"我爱吃面条。",p:"Wǒ ài chī miàntiáo.",v:"Mình thích ăn mì."},{t:["她","喝","牛奶"],z:"她喝牛奶。",p:"Tā hē niúnǎi.",v:"Bạn ấy uống sữa."},{t:["我","有","一","个","苹果"],z:"我有一个苹果。",p:"Wǒ yǒu yí ge píngguǒ.",v:"Mình có một quả táo."}],
  write:["水","吃"]},
 {zh:"复习", vi:"Ôn tập cả sách", review:true, words:[], sents:[], write:[]}
];
const EXTRA_PY = { "人": "rén", "明明": "Míngming" };
