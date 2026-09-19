/* ================== GIÁO TRÌNH YCT 3 — 150 từ mới (300 từ YCT3 trừ 150 từ YCT2), chia theo 11 bài của sách YCT 标准教程 3 ================== */
const LESSONS = [
 {zh:"我三年级。", vi:"Mình học lớp 3.", words:[
   ["年级","niánjí","lớp, khối lớp"],["教室","jiàoshì","phòng học"],["课","kè","bài học, tiết học"],["男","nán","nam, con trai"],["女","nǚ","nữ, con gái"],
   ["新","xīn","mới"],["欢迎","huānyíng","chào mừng"],["听","tīng","nghe"],["读","dú","đọc"],["写","xiě","viết"],
   ["问","wèn","hỏi"],["问题","wèntí","câu hỏi"],["懂","dǒng","hiểu"],["意思","yìsi","ý nghĩa"],["第一","dìyī","thứ nhất, đầu tiên"]],
  sents:[{t:["你","几","年级"],z:"你几年级？",p:"Nǐ jǐ niánjí?",v:"Bạn học lớp mấy?"},{t:["我","三","年级"],z:"我三年级。",p:"Wǒ sān niánjí.",v:"Mình học lớp 3."},{t:["欢迎","新","同学"],z:"欢迎新同学！",p:"Huānyíng xīn tóngxué!",v:"Chào mừng bạn mới!"},{t:["老师","我","有","一","个","问题"],z:"老师，我有一个问题。",p:"Lǎoshī, wǒ yǒu yí ge wèntí.",v:"Thưa cô, con có một câu hỏi."}],
  write:["女","写"]},
 {zh:"你喜欢什么运动？", vi:"Bạn thích môn thể thao nào?", words:[
   ["运动","yùndòng","thể thao, vận động"],["跑步","pǎobù","chạy bộ"],["游泳","yóuyǒng","bơi"],["踢足球","tī zúqiú","đá bóng"],["打篮球","dǎ lánqiú","chơi bóng rổ"],
   ["一起","yìqǐ","cùng nhau"],["吧","ba","nhé, đi (rủ bạn)"],["都","dōu","đều"],["最","zuì","nhất"],["身体","shēntǐ","cơ thể, sức khoẻ"],
   ["累","lèi","mệt"],["休息","xiūxi","nghỉ ngơi"],["想","xiǎng","muốn; nhớ"],["时间","shíjiān","thời gian"]],
  sents:[{t:["你","喜欢","什么","运动"],z:"你喜欢什么运动？",p:"Nǐ xǐhuan shénme yùndòng?",v:"Bạn thích môn thể thao nào?"},{t:["我","最","喜欢","游泳"],z:"我最喜欢游泳。",p:"Wǒ zuì xǐhuan yóuyǒng.",v:"Mình thích bơi nhất."},{t:["我们","一起","去","踢足球","吧"],z:"我们一起去踢足球吧！",p:"Wǒmen yìqǐ qù tī zúqiú ba!",v:"Mình cùng đi đá bóng nhé!"},{t:["我","累","了","想","休息"],z:"我累了，想休息。",p:"Wǒ lèi le, xiǎng xiūxi.",v:"Mình mệt rồi, muốn nghỉ."}],
  write:["休","身"]},
 {zh:"我在画画儿呢。", vi:"Mình đang vẽ tranh.", words:[
   ["爷爷","yéye","ông nội"],["奶奶","nǎinai","bà nội"],["洗澡","xǐzǎo","tắm"],["上网","shàngwǎng","lên mạng"],["电脑","diànnǎo","máy tính"],
   ["电影","diànyǐng","phim"],["唱歌","chànggē","hát"],["跳舞","tiàowǔ","nhảy múa"],["忙","máng","bận"],["它","tā","nó (con vật, đồ vật)"],
   ["白","bái","trắng"],["黑","hēi","đen"],["蓝","lán","xanh da trời"],["事情","shìqing","việc, chuyện"]],
  sents:[{t:["你","在","做","什么","呢"],z:"你在做什么呢？",p:"Nǐ zài zuò shénme ne?",v:"Bạn đang làm gì thế?"},{t:["爷爷","在","看","电影","呢"],z:"爷爷在看电影呢。",p:"Yéye zài kàn diànyǐng ne.",v:"Ông đang xem phim."},{t:["妹妹","在","洗澡","呢"],z:"妹妹在洗澡呢。",p:"Mèimei zài xǐzǎo ne.",v:"Em gái đang tắm."},{t:["我","的","小","猫","是","白","的"],z:"我的小猫是白的。",p:"Wǒ de xiǎo māo shì bái de.",v:"Mèo con của mình màu trắng."}],
  write:["白","它"]},
 {zh:"喂，您好！", vi:"A lô, xin chào!", words:[
   ["喂","wèi","a lô (nghe điện thoại)"],["您","nín","ông, bà, bác (lễ phép)"],["先生","xiānsheng","ông, chú (lịch sự)"],["小姐","xiǎojiě","cô, chị (lịch sự)"],["知道","zhīdào","biết"],
   ["找","zhǎo","tìm"],["回","huí","về"],["出","chū","ra"],["进","jìn","vào"],["外面","wàimiàn","bên ngoài"],
   ["中午","zhōngwǔ","buổi trưa"],["小时","xiǎoshí","tiếng (giờ đồng hồ)"],["时候","shíhou","lúc, khi"],["就","jiù","thì, liền"]],
  sents:[{t:["喂","您","好"],z:"喂，您好！",p:"Wéi, nín hǎo!",v:"A lô, cháu chào ạ!"},{t:["您","找","谁"],z:"您找谁？",p:"Nín zhǎo shéi?",v:"Bác tìm ai ạ?"},{t:["妈妈","不","在","家","她","出","去","了"],z:"妈妈不在家，她出去了。",p:"Māma bú zài jiā, tā chūqu le.",v:"Mẹ cháu không có nhà, mẹ ra ngoài rồi ạ."},{t:["她","中午","就","回","来"],z:"她中午就回来。",p:"Tā zhōngwǔ jiù huílai.",v:"Trưa là mẹ về ạ."}],
  write:["出","回"]},
 {zh:"再吃几个。", vi:"Ăn thêm mấy cái nữa nhé.", words:[
   ["再","zài","lại, nữa"],["饿","è","đói"],["饱","bǎo","no"],["菜","cài","món ăn; rau"],["饺子","jiǎozi","bánh sủi cảo"],
   ["鸡蛋","jīdàn","trứng gà"],["面包","miànbāo","bánh mì"],["西瓜","xīguā","dưa hấu"],["水果","shuǐguǒ","hoa quả"],["果汁","guǒzhī","nước ép"],
   ["杯子","bēizi","cái cốc"],["还","hái","còn, vẫn"],["些","xiē","một vài, một ít"],["太","tài","quá"]],
  sents:[{t:["我","饿","了"],z:"我饿了。",p:"Wǒ è le.",v:"Mình đói rồi."},{t:["饺子","太","好吃","了"],z:"饺子太好吃了！",p:"Jiǎozi tài hǎochī le!",v:"Sủi cảo ngon quá!"},{t:["再","吃","几","个","吧"],z:"再吃几个吧！",p:"Zài chī jǐ ge ba!",v:"Ăn thêm mấy cái nữa đi!"},{t:["我","饱","了","我","想","喝","果汁"],z:"我饱了，我想喝果汁。",p:"Wǒ bǎo le, wǒ xiǎng hē guǒzhī.",v:"Mình no rồi, mình muốn uống nước ép."}],
  write:["瓜","再"]},
 {zh:"我能自己穿。", vi:"Mình tự mặc được.", words:[
   ["能","néng","có thể, làm được"],["自己","zìjǐ","tự mình"],["穿","chuān","mặc, đi (giày)"],["衣服","yīfu","quần áo"],["裙子","qúnzi","váy"],
   ["裤子","kùzi","quần"],["鞋","xié","giày"],["件","jiàn","chiếc (đếm áo, việc)"],["帮助","bāngzhù","giúp đỡ"],["让","ràng","để, bảo"],
   ["开","kāi","mở, bật"],["关","guān","đóng, tắt"],["雨伞","yǔsǎn","cái ô"]],
  sents:[{t:["我","能","自己","穿","衣服"],z:"我能自己穿衣服。",p:"Wǒ néng zìjǐ chuān yīfu.",v:"Mình tự mặc quần áo được."},{t:["这","件","衣服","很","漂亮"],z:"这件衣服很漂亮。",p:"Zhè jiàn yīfu hěn piàoliang.",v:"Chiếc áo này rất đẹp."},{t:["让","我","帮助","你","吧"],z:"让我帮助你吧！",p:"Ràng wǒ bāngzhù nǐ ba!",v:"Để mình giúp bạn nhé!"},{t:["我","穿","裙子","妹妹","穿","裤子"],z:"我穿裙子，妹妹穿裤子。",p:"Wǒ chuān qúnzi, mèimei chuān kùzi.",v:"Mình mặc váy, em gái mặc quần."}],
  write:["开","己"]},
 {zh:"生日快乐！", vi:"Chúc mừng sinh nhật!", words:[
   ["生日","shēngrì","sinh nhật"],["快乐","kuàilè","vui vẻ"],["蛋糕","dàngāo","bánh kem, bánh ngọt"],["礼物","lǐwù","quà"],["送","sòng","tặng"],
   ["玫瑰花","méiguihuā","hoa hồng"],["卖","mài","bán"],["百","bǎi","trăm"],["千","qiān","nghìn"],["本","běn","quyển (đếm sách)"],
   ["东西","dōngxi","đồ, đồ vật"],["少","shǎo","ít"],["可爱","kě'ài","đáng yêu"],["去年","qùnián","năm ngoái"]],
  sents:[{t:["妈妈","生日","快乐"],z:"妈妈，生日快乐！",p:"Māma, shēngrì kuàilè!",v:"Chúc mẹ sinh nhật vui vẻ!"},{t:["这","是","我","送","你","的","礼物"],z:"这是我送你的礼物。",p:"Zhè shì wǒ sòng nǐ de lǐwù.",v:"Đây là quà mình tặng bạn."},{t:["你","的","生日","是","几","月","几","号"],z:"你的生日是几月几号？",p:"Nǐ de shēngrì shì jǐ yuè jǐ hào?",v:"Sinh nhật bạn là ngày mấy tháng mấy?"},{t:["这","个","蛋糕","一","百","块"],z:"这个蛋糕一百块。",p:"Zhège dàngāo yìbǎi kuài.",v:"Cái bánh kem này 100 tệ."}],
  write:["千","少"]},
 {zh:"下雪了。", vi:"Tuyết rơi rồi.", words:[
   ["下雪","xià xuě","tuyết rơi"],["刮风","guā fēng","gió thổi"],["太阳","tàiyáng","mặt trời"],["月亮","yuèliang","mặt trăng"],["因为","yīnwèi","vì"],
   ["所以","suǒyǐ","nên"],["但是","dànshì","nhưng"],["生病","shēngbìng","bị ốm"],["感冒","gǎnmào","bị cảm"],["疼","téng","đau"],
   ["药","yào","thuốc"],["舒服","shūfu","dễ chịu, khoẻ"],["着急","zháojí","sốt ruột, lo"],["哭","kū","khóc"],["别","bié","đừng"]],
  sents:[{t:["外面","下雪","了"],z:"外面下雪了！",p:"Wàimiàn xià xuě le!",v:"Ngoài trời tuyết rơi rồi!"},{t:["今天","刮风","很","冷"],z:"今天刮风，很冷。",p:"Jīntiān guā fēng, hěn lěng.",v:"Hôm nay có gió, lạnh lắm."},{t:["因为","我","感冒","了","所以","没有","去","学校"],z:"因为我感冒了，所以没有去学校。",p:"Yīnwèi wǒ gǎnmào le, suǒyǐ méiyǒu qù xuéxiào.",v:"Vì mình bị cảm nên không đi học."},{t:["别","哭","吃","了","药","就","舒服","了"],z:"别哭，吃了药就舒服了。",p:"Bié kū, chīle yào jiù shūfu le.",v:"Đừng khóc, uống thuốc xong là khoẻ thôi."}],
  write:["风","别"]},
 {zh:"笑一笑！", vi:"Cười lên nào!", words:[
   ["笑","xiào","cười"],["前","qián","phía trước"],["后","hòu","phía sau"],["左","zuǒ","bên trái"],["右","yòu","bên phải"],
   ["旁边","pángbiān","bên cạnh"],["下","xià","dưới; xuống"],["胖","pàng","béo"],["瘦","shòu","gầy"],["猴子","hóuzi","con khỉ"],
   ["老虎","lǎohǔ","con hổ"],["动物园","dòngwùyuán","sở thú"],["当然","dāngrán","tất nhiên"],["对","duì","đúng"]],
  sents:[{t:["笑","一","笑"],z:"笑一笑！",p:"Xiào yi xiào!",v:"Cười lên nào!"},{t:["我们","去","动物园","看","猴子","吧"],z:"我们去动物园看猴子吧！",p:"Wǒmen qù dòngwùyuán kàn hóuzi ba!",v:"Mình đi sở thú xem khỉ nhé!"},{t:["爸爸","在","我","旁边"],z:"爸爸在我旁边。",p:"Bàba zài wǒ pángbiān.",v:"Bố ở bên cạnh mình."},{t:["这","只","老虎","很","胖"],z:"这只老虎很胖。",p:"Zhè zhī lǎohǔ hěn pàng.",v:"Con hổ này béo quá."}],
  write:["左","右"]},
 {zh:"谁跑得快？", vi:"Ai chạy nhanh?", words:[
   ["得","de","(nối động từ với mức độ: đi … rất nhanh)"],["快","kuài","nhanh"],["慢","màn","chậm"],["走","zǒu","đi bộ, đi"],["远","yuǎn","xa"],
   ["近","jìn","gần"],["自行车","zìxíngchē","xe đạp"],["公共汽车","gōnggòng qìchē","xe buýt"],["飞机","fēijī","máy bay"],["车站","chēzhàn","bến xe"],
   ["为什么","wèi shénme","tại sao"],["半","bàn","rưỡi, một nửa"],["迟到","chídào","đến muộn"]],
  sents:[{t:["他","走","得","很","快"],z:"他走得很快。",p:"Tā zǒu de hěn kuài.",v:"Bạn ấy đi rất nhanh."},{t:["学校","很","远","我","坐","公共汽车","去"],z:"学校很远，我坐公共汽车去。",p:"Xuéxiào hěn yuǎn, wǒ zuò gōnggòng qìchē qù.",v:"Trường xa lắm, mình đi xe buýt."},{t:["你","为什么","迟到","了"],z:"你为什么迟到了？",p:"Nǐ wèi shénme chídào le?",v:"Sao bạn đến muộn thế?"},{t:["现在","七","点","半"],z:"现在七点半。",p:"Xiànzài qī diǎn bàn.",v:"Bây giờ là 7 giờ rưỡi."}],
  write:["半","走"]},
 {zh:"妈妈把糖给弟弟了。", vi:"Mẹ đưa kẹo cho em trai rồi.", words:[
   ["把","bǎ","đem, lấy (đưa đồ vật lên trước)"],["给","gěi","cho, đưa"],["拿","ná","cầm, lấy"],["完","wán","xong, hết"],["丢","diū","mất, làm rơi"],
   ["坏","huài","hỏng; xấu"],["难","nán","khó"],["过","guo","đã từng"],["每","měi","mỗi"],["次","cì","lần"]],
  sents:[{t:["妈妈","把","苹果","给","弟弟","了"],z:"妈妈把苹果给弟弟了。",p:"Māma bǎ píngguǒ gěi dìdi le.",v:"Mẹ đưa quả táo cho em trai rồi."},{t:["我","的","铅笔","丢","了"],z:"我的铅笔丢了。",p:"Wǒ de qiānbǐ diū le.",v:"Mình làm mất bút chì rồi."},{t:["你","去","过","北京","吗"],z:"你去过北京吗？",p:"Nǐ qùguo Běijīng ma?",v:"Bạn đi Bắc Kinh bao giờ chưa?"},{t:["这","个","问题","太","难","了"],z:"这个问题太难了！",p:"Zhège wèntí tài nán le!",v:"Câu hỏi này khó quá!"}],
  write:["次","丢"]},
 {zh:"复习", vi:"Ôn tập cả sách", review:true, words:[], sents:[], write:[]}
];
const EXTRA_PY = { "明明": "Míngming" };
