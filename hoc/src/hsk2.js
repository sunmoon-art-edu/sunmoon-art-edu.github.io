/* ================== GIÁO TRÌNH HSK 2 — 150 từ mới chính thức (HSK 2.0), chia theo 15 bài của sách HSK标准教程 2 ================== */
const LESSONS = [
 {zh:"九月去北京旅游最好", vi:"Tháng 9 đi Bắc Kinh du lịch là đẹp nhất", words:[
   ["旅游","lǚyóu","du lịch"],["觉得","juéde","thấy, cảm thấy"],["最","zuì","nhất"],["为什么","wèi shénme","tại sao"],["也","yě","cũng"],["运动","yùndòng","thể thao, vận động"],["踢足球","tī zúqiú","đá bóng"],["一起","yìqǐ","cùng nhau"],["要","yào","muốn, sẽ, cần"]],
  sents:[{t:["九","月","去","北京","旅游","最","好"],z:"九月去北京旅游最好。",p:"Jiǔ yuè qù Běijīng lǚyóu zuì hǎo.",v:"Tháng 9 đi Bắc Kinh du lịch là đẹp nhất."},{t:["你","为什么","喜欢","运动"],z:"你为什么喜欢运动？",p:"Nǐ wèi shénme xǐhuan yùndòng?",v:"Sao bạn thích thể thao?"},{t:["我们","一起","去","踢足球","吧"],z:"我们一起去踢足球吧！",p:"Wǒmen yìqǐ qù tī zúqiú ba!",v:"Chúng ta cùng đi đá bóng nhé!"},{t:["我","觉得","我","也","要","去"],z:"我觉得我也要去。",p:"Wǒ juéde wǒ yě yào qù.",v:"Mình thấy mình cũng nên đi."}],
  write:["旅","最"]},
 {zh:"我每天六点起床", vi:"Mỗi ngày mình dậy lúc 6 giờ", words:[
   ["每","měi","mỗi"],["起床","qǐchuáng","thức dậy"],["早上","zǎoshang","buổi sáng"],["晚上","wǎnshang","buổi tối"],["跑步","pǎobù","chạy bộ"],["身体","shēntǐ","cơ thể, sức khoẻ"],["小时","xiǎoshí","tiếng (đồng hồ)"],["时间","shíjiān","thời gian"],["生病","shēngbìng","bị ốm"],["休息","xiūxi","nghỉ ngơi"],["上班","shàngbān","đi làm"]],
  sents:[{t:["你","早上","几","点","起床"],z:"你早上几点起床？",p:"Nǐ zǎoshang jǐ diǎn qǐchuáng?",v:"Buổi sáng bạn dậy lúc mấy giờ?"},{t:["我","早上","六","点","起床"],z:"我早上六点起床。",p:"Wǒ zǎoshang liù diǎn qǐchuáng.",v:"Mình dậy lúc 6 giờ sáng."},{t:["他","每","个","星期","都","跑步"],z:"他每个星期都跑步。",p:"Tā měi ge xīngqī dōu pǎobù.",v:"Tuần nào anh ấy cũng chạy bộ."},{t:["你","生病","了","要","多","休息"],z:"你生病了，要多休息。",p:"Nǐ shēngbìng le, yào duō xiūxi.",v:"Bạn ốm rồi, phải nghỉ ngơi nhiều."}],
  write:["起","床"]},
 {zh:"左边那个红色的是我的", vi:"Cái màu đỏ bên trái là của mình", words:[
   ["左边","zuǒbian","bên trái"],["右边","yòubian","bên phải"],["旁边","pángbiān","bên cạnh"],["红","hóng","đỏ"],["白","bái","trắng"],["黑","hēi","đen"],["颜色","yánsè","màu sắc"],["手表","shǒubiǎo","đồng hồ đeo tay"],["手机","shǒujī","điện thoại di động"],["千","qiān","nghìn"],["百","bǎi","trăm"],["零","líng","số 0"]],
  sents:[{t:["左边","那","个","红","的","是","我","的"],z:"左边那个红的是我的。",p:"Zuǒbian nàge hóng de shì wǒ de.",v:"Cái màu đỏ bên trái là của mình."},{t:["你","喜欢","什么","颜色"],z:"你喜欢什么颜色？",p:"Nǐ xǐhuan shénme yánsè?",v:"Bạn thích màu gì?"},{t:["这","个","手表","三","千","块","钱"],z:"这个手表三千块钱。",p:"Zhège shǒubiǎo sānqiān kuài qián.",v:"Chiếc đồng hồ này 3 nghìn tệ."},{t:["我","的","手机","在","电脑","旁边"],z:"我的手机在电脑旁边。",p:"Wǒ de shǒujī zài diànnǎo pángbiān.",v:"Điện thoại của mình ở cạnh máy tính."}],
  write:["左","右"]},
 {zh:"这个工作是他帮我介绍的", vi:"Công việc này là anh ấy giới thiệu giúp mình", words:[
   ["介绍","jièshào","giới thiệu"],["帮助","bāngzhù","giúp đỡ"],["公司","gōngsī","công ty"],["知道","zhīdào","biết"],["姓","xìng","họ (tên họ)"],["您","nín","ông, bà, ngài (lịch sự)"],["去年","qùnián","năm ngoái"],["生日","shēngrì","sinh nhật"],["事情","shìqing","việc, chuyện"]],
  sents:[{t:["您","贵","姓"],z:"您贵姓？",p:"Nín guì xìng?",v:"Ông/bà họ gì ạ?"},{t:["我","来","介绍","一下"],z:"我来介绍一下。",p:"Wǒ lái jièshào yíxià.",v:"Để mình giới thiệu một chút."},{t:["他","去年","来","我们","公司","工作"],z:"他去年来我们公司工作。",p:"Tā qùnián lái wǒmen gōngsī gōngzuò.",v:"Năm ngoái anh ấy vào công ty mình làm."},{t:["你","知道","他","的","生日","吗"],z:"你知道他的生日吗？",p:"Nǐ zhīdào tā de shēngrì ma?",v:"Bạn có biết sinh nhật anh ấy không?"}],
  write:["介","绍"]},
 {zh:"就买这件吧", vi:"Mua luôn chiếc này đi", words:[
   ["就","jiù","thì, liền, ngay"],["吧","ba","nhé, đi (cuối câu)"],["件","jiàn","chiếc, cái (áo, việc)"],["卖","mài","bán"],["便宜","piányi","rẻ"],["贵","guì","đắt"],["两","liǎng","hai"],["西瓜","xīguā","dưa hấu"],["羊肉","yángròu","thịt cừu"],["鸡蛋","jīdàn","trứng gà"],["牛奶","niúnǎi","sữa bò"]],
  sents:[{t:["就","买","这","件","吧"],z:"就买这件吧。",p:"Jiù mǎi zhè jiàn ba.",v:"Mua luôn chiếc này đi."},{t:["这","件","衣服","太","贵","了"],z:"这件衣服太贵了！",p:"Zhè jiàn yīfu tài guì le!",v:"Chiếc áo này đắt quá!"},{t:["西瓜","怎么","卖"],z:"西瓜怎么卖？",p:"Xīguā zěnme mài?",v:"Dưa hấu bán thế nào?"},{t:["我","要","两","个","鸡蛋"],z:"我要两个鸡蛋。",p:"Wǒ yào liǎng ge jīdàn.",v:"Cho tôi hai quả trứng."}],
  write:["件","卖"]},
 {zh:"你怎么不吃了", vi:"Sao bạn không ăn nữa?", words:[
   ["好吃","hǎochī","ngon"],["面条","miàntiáo","mì sợi"],["鱼","yú","cá"],["咖啡","kāfēi","cà phê"],["服务员","fúwùyuán","nhân viên phục vụ"],["累","lèi","mệt"],["忙","máng","bận"],["已经","yǐjīng","đã"],["可能","kěnéng","có thể, có lẽ"],["药","yào","thuốc"]],
  sents:[{t:["你","怎么","不","吃","了"],z:"你怎么不吃了？",p:"Nǐ zěnme bù chī le?",v:"Sao bạn không ăn nữa?"},{t:["这","个","鱼","很","好吃"],z:"这个鱼很好吃。",p:"Zhège yú hěn hǎochī.",v:"Món cá này rất ngon."},{t:["服务员","我们","要","咖啡"],z:"服务员，我们要咖啡。",p:"Fúwùyuán, wǒmen yào kāfēi.",v:"Bạn phục vụ ơi, cho chúng tôi cà phê."},{t:["我","已经","吃","药","了"],z:"我已经吃药了。",p:"Wǒ yǐjīng chī yào le.",v:"Mình uống thuốc rồi."}],
  write:["鱼","药"]},
 {zh:"你家离公司远吗", vi:"Nhà bạn có xa công ty không?", words:[
   ["离","lí","cách"],["远","yuǎn","xa"],["近","jìn","gần"],["路","lù","đường"],["走","zǒu","đi (bộ)"],["到","dào","đến"],["往","wǎng","về phía"],["机场","jīchǎng","sân bay"],["火车站","huǒchēzhàn","ga tàu hoả"],["公共汽车","gōnggòng qìchē","xe buýt"],["宾馆","bīnguǎn","khách sạn"],["从","cóng","từ"]],
  sents:[{t:["你","家","离","公司","远","吗"],z:"你家离公司远吗？",p:"Nǐ jiā lí gōngsī yuǎn ma?",v:"Nhà bạn có xa công ty không?"},{t:["不","远","走","路","十","分钟","就","到"],z:"不远，走路十分钟就到。",p:"Bù yuǎn, zǒu lù shí fēnzhōng jiù dào.",v:"Không xa, đi bộ 10 phút là tới."},{t:["我","坐","公共汽车","去","火车站"],z:"我坐公共汽车去火车站。",p:"Wǒ zuò gōnggòng qìchē qù huǒchēzhàn.",v:"Mình đi xe buýt ra ga tàu."},{t:["宾馆","离","机场","很","近"],z:"宾馆离机场很近。",p:"Bīnguǎn lí jīchǎng hěn jìn.",v:"Khách sạn rất gần sân bay."}],
  write:["远","近"]},
 {zh:"让我想想再告诉你", vi:"Để mình nghĩ đã rồi nói bạn", words:[
   ["让","ràng","để, bảo (ai làm gì)"],["再","zài","lại; rồi mới"],["告诉","gàosu","nói cho biết"],["等","děng","đợi"],["找","zhǎo","tìm"],["票","piào","vé"],["一下","yíxià","một chút"]],
  sents:[{t:["让","我","想","想","再","告诉","你"],z:"让我想想再告诉你。",p:"Ràng wǒ xiǎngxiang zài gàosu nǐ.",v:"Để mình nghĩ đã rồi nói bạn."},{t:["请","等","一下"],z:"请等一下。",p:"Qǐng děng yíxià.",v:"Xin đợi một chút."},{t:["你","在","找","什么"],z:"你在找什么？",p:"Nǐ zài zhǎo shénme?",v:"Bạn đang tìm gì thế?"},{t:["我","已经","买","票","了"],z:"我已经买票了。",p:"Wǒ yǐjīng mǎi piào le.",v:"Mình mua vé rồi."}],
  write:["让","找"]},
 {zh:"题太多，我没做完", vi:"Nhiều câu quá, mình làm chưa xong", words:[
   ["题","tí","câu hỏi, đề bài"],["完","wán","xong, hết"],["考试","kǎoshì","thi, kỳ thi"],["问题","wèntí","câu hỏi, vấn đề"],["懂","dǒng","hiểu"],["意思","yìsi","ý nghĩa"],["错","cuò","sai"],["对","duì","đúng"],["课","kè","bài học, tiết học"],["教室","jiàoshì","phòng học"],["铅笔","qiānbǐ","bút chì"],["开始","kāishǐ","bắt đầu"]],
  sents:[{t:["题","太","多","了","我","没有","做","完"],z:"题太多了，我没有做完。",p:"Tí tài duō le, wǒ méiyǒu zuò wán.",v:"Nhiều câu quá, mình làm chưa xong."},{t:["你","懂","这","个","字","的","意思","吗"],z:"你懂这个字的意思吗？",p:"Nǐ dǒng zhège zì de yìsi ma?",v:"Bạn hiểu nghĩa chữ này không?"},{t:["考试","几","点","开始"],z:"考试几点开始？",p:"Kǎoshì jǐ diǎn kāishǐ?",v:"Mấy giờ bắt đầu thi?"},{t:["这","个","题","我","做","错","了"],z:"这个题我做错了。",p:"Zhège tí wǒ zuò cuò le.",v:"Câu này mình làm sai rồi."}],
  write:["题","完"]},
 {zh:"别找了，手机在桌子上呢", vi:"Đừng tìm nữa, điện thoại ở trên bàn kìa", words:[
   ["别","bié","đừng"],["房间","fángjiān","phòng"],["外","wài","ngoài"],["进","jìn","vào"],["出","chū","ra"],["报纸","bàozhǐ","báo (giấy)"],["洗","xǐ","rửa, giặt"],["玩","wán","chơi"],["问","wèn","hỏi"]],
  sents:[{t:["别","找","了","手机","在","桌子","上","呢"],z:"别找了，手机在桌子上呢。",p:"Bié zhǎo le, shǒujī zài zhuōzi shang ne.",v:"Đừng tìm nữa, điện thoại ở trên bàn kìa."},{t:["妈妈","在","房间","里","看","报纸"],z:"妈妈在房间里看报纸。",p:"Māma zài fángjiān li kàn bàozhǐ.",v:"Mẹ đang đọc báo trong phòng."},{t:["别","出","去","玩","了"],z:"别出去玩了。",p:"Bié chūqu wán le.",v:"Đừng ra ngoài chơi nữa."},{t:["我","想","问","你","一","个","问题"],z:"我想问你一个问题。",p:"Wǒ xiǎng wèn nǐ yí ge wèntí.",v:"Mình muốn hỏi bạn một câu."}],
  write:["别","进"]},
 {zh:"他比我大三岁", vi:"Anh ấy hơn mình 3 tuổi", words:[
   ["比","bǐ","hơn, so với"],["哥哥","gēge","anh trai"],["姐姐","jiějie","chị gái"],["弟弟","dìdi","em trai"],["妹妹","mèimei","em gái"],["高","gāo","cao"],["长","cháng","dài"],["孩子","háizi","đứa trẻ, con"],["男","nán","nam"],["女","nǚ","nữ"],["眼睛","yǎnjing","mắt"]],
  sents:[{t:["他","比","我","大","三","岁"],z:"他比我大三岁。",p:"Tā bǐ wǒ dà sān suì.",v:"Anh ấy hơn mình 3 tuổi."},{t:["哥哥","比","弟弟","高"],z:"哥哥比弟弟高。",p:"Gēge bǐ dìdi gāo.",v:"Anh trai cao hơn em trai."},{t:["你","有","几","个","孩子"],z:"你有几个孩子？",p:"Nǐ yǒu jǐ ge háizi?",v:"Bạn có mấy con?"},{t:["妹妹","的","眼睛","很","大"],z:"妹妹的眼睛很大。",p:"Mèimei de yǎnjing hěn dà.",v:"Em gái có đôi mắt to."}],
  write:["比","高"]},
 {zh:"你穿得太少了", vi:"Bạn mặc ít quá", words:[
   ["得","de","(trợ từ, nối động từ với mức độ)"],["穿","chuān","mặc, đi (giày)"],["快","kuài","nhanh"],["慢","màn","chậm"],["游泳","yóuyǒng","bơi"],["唱歌","chànggē","hát"],["跳舞","tiàowǔ","nhảy múa"],["打篮球","dǎ lánqiú","chơi bóng rổ"],["第一","dì-yī","thứ nhất"],["非常","fēicháng","rất, vô cùng"]],
  sents:[{t:["你","穿","得","太","少","了"],z:"你穿得太少了。",p:"Nǐ chuān de tài shǎo le.",v:"Bạn mặc ít quá."},{t:["她","唱歌","非常","好","听"],z:"她唱歌非常好听。",p:"Tā chànggē fēicháng hǎotīng.",v:"Cô ấy hát rất hay."},{t:["你","说","得","太","快","了"],z:"你说得太快了。",p:"Nǐ shuō de tài kuài le.",v:"Bạn nói nhanh quá."},{t:["他","是","第一","个","到","的"],z:"他是第一个到的。",p:"Tā shì dì-yī ge dào de.",v:"Anh ấy là người đến đầu tiên."}],
  write:["穿","唱"]},
 {zh:"门开着呢", vi:"Cửa đang mở mà", words:[
   ["门","mén","cửa"],["着","zhe","(đang, trạng thái kéo dài)"],["正在","zhèngzài","đang"],["丈夫","zhàngfu","chồng"],["妻子","qīzi","vợ"],["笑","xiào","cười"],["说话","shuōhuà","nói chuyện"],["大家","dàjiā","mọi người"],["真","zhēn","thật"],["虽然……但是……","suīrán… dànshì…","tuy… nhưng…"]],
  sents:[{t:["门","开","着","呢"],z:"门开着呢。",p:"Mén kāi zhe ne.",v:"Cửa đang mở mà."},{t:["她","丈夫","正在","睡觉"],z:"她丈夫正在睡觉。",p:"Tā zhàngfu zhèngzài shuìjiào.",v:"Chồng cô ấy đang ngủ."},{t:["大家","笑","着","说话"],z:"大家笑着说话。",p:"Dàjiā xiào zhe shuōhuà.",v:"Mọi người vừa cười vừa nói."},{t:["虽然","很","累","但是","我","很","高兴"],z:"虽然很累，但是我很高兴。",p:"Suīrán hěn lèi, dànshì wǒ hěn gāoxìng.",v:"Tuy mệt nhưng mình rất vui."}],
  write:["门","笑"]},
 {zh:"你看过那个电影吗", vi:"Bạn xem phim đó chưa?", words:[
   ["过","guo","(đã từng)"],["次","cì","lần"],["还","hái","còn, vẫn"],["因为……所以……","yīnwèi… suǒyǐ…","vì… nên…"],["可以","kěyǐ","có thể, được"],["只","zhī","con (đếm con vật)"],["日","rì","ngày"],["它","tā","nó (con vật, đồ vật)"]],
  sents:[{t:["你","看","过","那","个","电影","吗"],z:"你看过那个电影吗？",p:"Nǐ kàn guo nàge diànyǐng ma?",v:"Bạn xem phim đó chưa?"},{t:["我","看","过","两","次"],z:"我看过两次。",p:"Wǒ kàn guo liǎng cì.",v:"Mình xem hai lần rồi."},{t:["因为","很","忙","所以","我","还","没有","看"],z:"因为很忙，所以我还没有看。",p:"Yīnwèi hěn máng, suǒyǐ wǒ hái méiyǒu kàn.",v:"Vì bận nên mình vẫn chưa xem."},{t:["我","家","有","一","只","猫"],z:"我家有一只猫。",p:"Wǒ jiā yǒu yì zhī māo.",v:"Nhà mình có một con mèo."}],
  write:["过","次"]},
 {zh:"新年就要到了", vi:"Năm mới sắp đến rồi", words:[
   ["新","xīn","mới"],["快乐","kuàilè","vui vẻ"],["给","gěi","cho, đưa cho"],["送","sòng","tặng; đưa (tiễn)"],["希望","xīwàng","hy vọng"],["雪","xuě","tuyết"],["准备","zhǔnbèi","chuẩn bị"],["晴","qíng","nắng, trời quang"],["阴","yīn","trời râm, âm u"]],
  sents:[{t:["新","年","就","要","到","了"],z:"新年就要到了。",p:"Xīnnián jiù yào dào le.",v:"Năm mới sắp đến rồi."},{t:["新","年","快乐"],z:"新年快乐！",p:"Xīnnián kuàilè!",v:"Chúc mừng năm mới!"},{t:["这","是","我","送","给","你","的"],z:"这是我送给你的。",p:"Zhè shì wǒ sòng gěi nǐ de.",v:"Cái này mình tặng bạn."},{t:["我","希望","明天","不","下","雪"],z:"我希望明天不下雪。",p:"Wǒ xīwàng míngtiān bú xià xuě.",v:"Mình mong mai trời không có tuyết."}],
  write:["新","送"]},
 {zh:"复习", vi:"Ôn tập cả sách", review:true, words:[], sents:[], write:[]}
];
const EXTRA_PY = { "虽然": "suīrán", "但是": "dànshì", "因为": "yīnwèi", "所以": "suǒyǐ" };
