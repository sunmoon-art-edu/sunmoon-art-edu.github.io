/* Câu hỏi ngữ pháp HSK 3 — 20 bài (bỏ bài ôn tập), mỗi bài 3 câu */
const NGUPHAP = {
  0: [
    { k: "cau", q: "Câu nào đúng?", o: ["我打算去爬山跟朋友一起。", "我打算跟朋友一起去爬山。", "我跟一起朋友打算去爬山。"], a: 1, g: "Giới từ 跟 phải đứng trước động từ chính: chủ ngữ + 打算 + 跟 + ai + 一起 + động từ. Bạn không hạ 跟……一起 xuống sau động từ được." },
    { k: "dien", q: "他＿在等你，你别着急。", v: "Anh ấy vẫn đang đợi bạn, bạn đừng sốt ruột.", o: ["一定", "一共", "一直"], a: 2, g: "一直 nghĩa 'luôn, suốt', đứng trước 在 + động từ. 一定 là 'nhất định', 一共 là 'tổng cộng', không dùng ở đây." },
    { k: "xep", q: "Sắp xếp: 打算 / 你有什么 / 周末", o: ["打算你周末有什么？", "周末你有什么打算？", "你周末打算有什么？"], a: 1, g: "周末 là trạng ngữ thời gian nên đứng đầu câu, còn 打算 làm tân ngữ của 有 nên phải ở cuối." }
  ],
  1: [
    { k: "dien", q: "会议马上＿开始了。", v: "Cuộc họp sắp bắt đầu rồi.", o: ["刚才", "就要", "已经"], a: 1, g: "就要……了 diễn tả việc sắp xảy ra, thêm 马上 càng nhấn mạnh. 已经 và 刚才 đều nói về chuyện đã qua." },
    { k: "cau", q: "Câu nào đúng?", o: ["经理刚才离开办公室了。", "刚才经理了离开办公室。", "经理离开办公室刚才了。"], a: 0, g: "刚才 là trạng ngữ thời gian, đứng trước động từ; 了 ở cuối câu. Bạn không để 刚才 sau tân ngữ được." },
    { k: "xep", q: "Sắp xếp: 就 / 他 / 一会儿 / 回来", o: ["他就一会儿回来。", "他回来一会儿就。", "他一会儿就回来。"], a: 2, g: "一会儿 chỉ khoảng thời gian ngắn, đứng trước 就 + động từ: chủ ngữ + 一会儿 + 就 + động từ." }
  ],
  2: [
    { k: "cau", q: "Câu nào đúng?", o: ["桌子上着放很多饮料。", "桌子上放着很多饮料。", "很多饮料桌子上放着。"], a: 1, g: "Câu tồn hiện: nơi chốn đứng đầu + động từ + 着 + đồ vật. 着 luôn đi liền ngay sau động từ." },
    { k: "dien", q: "冰箱里＿着一些蛋糕。", v: "Trong tủ lạnh có để mấy cái bánh ngọt.", o: ["被放", "放", "放在"], a: 1, g: "Câu tồn hiện dùng động từ + 着, bạn không chen 在 hay 被 vào giữa." },
    { k: "xep", q: "Sắp xếp: 着 / 外面 / 站 / 两个客人", o: ["两个客人外面站着。", "站着外面两个客人。", "外面站着两个客人。"], a: 2, g: "Câu tồn hiện đặt nơi chốn (外面) trước, rồi động từ + 着, cuối cùng mới tới người hay vật." }
  ],
  3: [
    { k: "cau", q: "Câu nào đúng?", o: ["她总是笑着跟客人说话。", "她总是笑跟客人着说话。", "她着笑总是跟客人说话。"], a: 0, g: "着 gắn ngay sau động từ phụ (笑着) để chỉ cách thức của hành động chính 说话." },
    { k: "dien", q: "他拿＿电话跟同事说话。", v: "Anh ấy cầm điện thoại nói chuyện với đồng nghiệp.", o: ["着", "了", "过"], a: 0, g: "着 diễn tả hành động đang duy trì, làm nền cho việc chính. 了 và 过 nói về việc đã xảy ra." },
    { k: "xep", q: "Sắp xếp: 听着 / 他 / 音乐 / 做作业", o: ["他音乐听着做作业。", "他听着音乐做作业。", "他做作业听着音乐。"], a: 1, g: "Hành động làm nền (听着音乐) đứng trước, hành động chính (做作业) đứng sau." }
  ],
  4: [
    { k: "dien", q: "我最近＿胖了。", v: "Dạo này tôi ngày càng béo.", o: ["越来越", "越", "更越"], a: 0, g: "越来越 + tính từ nghĩa 'ngày càng…', cuối câu thường có 了. Một chữ 越 thì phải dùng theo cặp 越……越……." },
    { k: "cau", q: "Câu nào đúng?", o: ["天气越热来越了。", "天气越来越热了。", "越来越天气热了。"], a: 1, g: "越来越 là một khối cố định nằm giữa chủ ngữ và tính từ, không tách ra cũng không đưa lên đầu câu." },
    { k: "xep", q: "Sắp xếp: 越 / 我 / 学 / 越 / 喜欢", o: ["我学越越喜欢。", "越我学越喜欢。", "我越学越喜欢。"], a: 2, g: "Cặp 越……越…… đặt mỗi chữ 越 ngay trước một từ chỉ mức độ tăng dần: 越 + động từ, 越 + tính từ." }
  ],
  5: [
    { k: "dien", q: "我的伞怎么突然找＿到了？", v: "Sao tự nhiên tôi tìm không thấy cái dù?", o: ["不", "没", "别"], a: 0, g: "Bổ ngữ khả năng phủ định là động từ + 不 + kết quả (找不到). 没 và 别 không đặt vào giữa được." },
    { k: "cau", q: "Câu nào đúng?", o: ["这个字太小，我看不清楚。", "这个字太小，我不看清楚。", "这个字太小，我看清楚不。"], a: 0, g: "Muốn nói 'không thể…' thì chèn 不 giữa động từ và kết quả: 看不清楚, chứ không đặt 不 trước động từ." },
    { k: "xep", q: "Sắp xếp: 得 / 你 / 听 / 见 / 吗", o: ["你得听见吗？", "你听得见吗？", "你听见得吗？"], a: 1, g: "Thể khẳng định của bổ ngữ khả năng là động từ + 得 + kết quả, nên 得 nằm giữa 听 và 见." }
  ],
  6: [
    { k: "cau", q: "Câu nào đúng?", o: ["我跟她认识五年了。", "我跟她五年认识了。", "我认识她了五年。"], a: 0, g: "Thời lượng đứng sau động từ: 认识五年了. Bạn không đặt thời lượng trước động từ, cũng không chen 了 vào giữa." },
    { k: "dien", q: "我们很久＿见面了。", v: "Chúng tôi lâu rồi không gặp nhau.", o: ["没", "不", "别"], a: 0, g: "Việc chưa xảy ra trong một khoảng thời gian thì dùng 没: 很久没见面了, không dùng 不." },
    { k: "xep", q: "Sắp xếp: 了 / 他 / 等 / 两个小时", o: ["他等了两个小时。", "他了等两个小时。", "他两个小时等了。"], a: 0, g: "Cấu trúc là động từ + 了 + thời lượng: 了 đi liền sau động từ, thời lượng ở cuối." }
  ],
  7: [
    { k: "cau", q: "Câu nào đúng?", o: ["你去哪儿，我就去哪儿。", "你去哪儿，我去就哪儿。", "哪儿你去，我就去哪儿。"], a: 0, g: "Cùng một đại từ nghi vấn nhắc lại hai lần; 就 của mệnh đề sau phải đứng ngay trước động từ." },
    { k: "dien", q: "你想吃什么，我们＿吃什么。", v: "Bạn muốn ăn gì thì chúng ta ăn cái đó.", o: ["才", "就", "都"], a: 1, g: "Kiểu câu 什么……什么 cần 就 ở mệnh đề sau để nối điều kiện với kết quả." },
    { k: "xep", q: "Sắp xếp: 谁 / 就 / 谁 / 想去 / 去", o: ["就谁想去谁去。", "谁想去就谁去。", "谁想去谁就去。"], a: 2, g: "Trong kiểu câu 谁……谁就……, 就 luôn đứng ngay trước động từ của mệnh đề sau." }
  ],
  8: [
    { k: "cau", q: "Câu nào đúng?", o: ["她的汉语一样跟中国人说得好。", "她的汉语说跟中国人一样好得。", "她的汉语说得跟中国人一样好。"], a: 2, g: "得 đi liền sau động từ (说得), rồi mới tới phần miêu tả 跟……一样好." },
    { k: "dien", q: "他写字写＿很漂亮。", v: "Anh ấy viết chữ rất đẹp.", o: ["地", "得", "的"], a: 1, g: "Bổ ngữ trạng thái dùng 得: động từ + 得 + tính từ. 的 dùng trước danh từ, 地 dùng trước động từ." },
    { k: "xep", q: "Sắp xếp: 一样 / 我的帽子 / 跟 / 你的", o: ["我的帽子跟你的一样。", "我的帽子一样跟你的。", "跟你的我的帽子一样。"], a: 0, g: "So sánh giống nhau là A + 跟 + B + 一样, nên 跟 phải đứng trước đối tượng được so sánh." }
  ],
  9: [
    { k: "dien", q: "数学＿历史难多了。", v: "Toán khó hơn Sử nhiều.", o: ["跟", "和", "比"], a: 2, g: "So sánh hơn dùng 比: A 比 B + tính từ. 跟 và 和 chỉ dùng khi nói hai thứ giống nhau." },
    { k: "cau", q: "Câu nào đúng?", o: ["这次考试我的成绩好比较。", "这次考试比较我的成绩好。", "这次考试我的成绩比较好。"], a: 2, g: "比较 là phó từ chỉ mức độ, đứng ngay trước tính từ: 比较好." },
    { k: "xep", q: "Sắp xếp: 除了 / 数学 / 以外 / 我还喜欢历史", o: ["我还喜欢历史除了数学以外。", "除了数学以外，我还喜欢历史。", "除了以外数学，我还喜欢历史。"], a: 1, g: "Cấu trúc 除了……以外，还……: 以外 đứng ngay sau đối tượng, mệnh đề sau thêm 还 hoặc 也." }
  ],
  10: [
    { k: "dien", q: "别忘了＿空调关了。", v: "Đừng quên tắt điều hoà nhé.", o: ["把", "被", "让"], a: 0, g: "Câu chữ 把 nhấn vào việc xử lí tân ngữ: 把 + tân ngữ + động từ + kết quả. 被 là bị động, 让 là 'để cho'." },
    { k: "cau", q: "Câu nào đúng?", o: ["我把房间打扫干净了。", "我打扫干净了把房间。", "我把房间打扫了干净。"], a: 0, g: "Trong câu chữ 把, tân ngữ lên trước động từ và sau động từ phải có kết quả: 打扫干净了." },
    { k: "xep", q: "Sắp xếp: 把 / 我 / 那杯茶 / 喝完了", o: ["我喝完了把那杯茶。", "我把喝完了那杯茶。", "我把那杯茶喝完了。"], a: 2, g: "Trật tự câu chữ 把: chủ ngữ + 把 + tân ngữ xác định + động từ + 完了." }
  ],
  11: [
    { k: "cau", q: "Câu nào đúng?", o: ["你把护照在包里放吧。", "你放在包里把护照吧。", "你把护照放在包里吧。"], a: 2, g: "Nói đặt vật vào đâu thì dùng 把 + vật + 放在 + nơi; phần 在 + nơi chốn đi sau động từ 放." },
    { k: "dien", q: "请你把这本书还＿李月。", v: "Bạn trả cuốn sách này cho Lý Nguyệt nhé.", o: ["到", "给", "在"], a: 1, g: "Trao cho ai thì dùng 给 sau động từ: 把 + vật + động từ + 给 + người." },
    { k: "xep", q: "Sắp xếp: 把 / 她 / 行李箱 / 拿到 / 楼上", o: ["她把行李箱楼上拿到。", "她把行李箱拿到楼上。", "她拿到楼上把行李箱。"], a: 1, g: "把 + vật + động từ + 到 + nơi đến. Nơi đến luôn đi sau 到, không đưa lên trước động từ." }
  ],
  12: [
    { k: "cau", q: "Câu nào đúng?", o: ["我是走的回来。", "我是走回来的。", "我走是回来的。"], a: 1, g: "Cấu trúc 是……的 nhấn mạnh cách thức: 是 + cách thức + động từ + 的, và 的 luôn ở cuối câu." },
    { k: "dien", q: "他昨天＿坐地铁来的。", v: "Hôm qua anh ấy đi tàu điện ngầm đến.", o: ["在", "把", "是"], a: 2, g: "Muốn nhấn mạnh phương tiện của việc đã xảy ra, bạn dùng 是……的 bao lấy phần cần nhấn." },
    { k: "xep", q: "Sắp xếp: 从楼上 / 他 / 走下来 / 了", o: ["他从楼上走下来了。", "从楼上他了走下来。", "他走下来从楼上了。"], a: 0, g: "Phần chỉ nơi xuất phát (从楼上) đứng trước động từ, còn bổ ngữ xu hướng 下来 đi liền sau 走." }
  ],
  13: [
    { k: "dien", q: "你＿水果拿过来。", v: "Bạn mang hoa quả lại đây.", o: ["被", "给", "把"], a: 2, g: "Câu chữ 把 + động từ + bổ ngữ xu hướng 过来 chỉ việc mang vật lại phía người nói." },
    { k: "cau", q: "Câu nào đúng?", o: ["她把照相机带过去了。", "她带过去把照相机了。", "她把照相机过去带了。"], a: 0, g: "Trong câu 把, bổ ngữ xu hướng 过去 đi ngay sau động từ 带, không đứng trước động từ." },
    { k: "xep", q: "Sắp xếp: 把 / 请你 / 那些盘子 / 送过来", o: ["请你把送过来那些盘子。", "请你把那些盘子送过来。", "请你送过来把那些盘子。"], a: 1, g: "Trật tự là 把 + tân ngữ + động từ + 过来, nên tân ngữ phải nằm giữa 把 và động từ." }
  ],
  14: [
    { k: "dien", q: "＿你完成了作业，就可以上网。", v: "Nếu bạn làm xong bài tập thì được lên mạng.", o: ["虽然", "如果", "因为"], a: 1, g: "如果……就…… nêu điều kiện. 因为 nêu nguyên nhân, 虽然 nêu ý nhượng bộ, đều không đi với 就 ở đây." },
    { k: "cau", q: "Câu nào đúng?", o: ["但是很累，虽然我很高兴。", "虽然很累，我很高兴但是。", "虽然很累，但是我很高兴。"], a: 2, g: "Cặp 虽然……但是……: 虽然 ở mệnh đề đầu, 但是 đứng đầu mệnh đề sau, không đảo ngược và không để ở cuối." },
    { k: "xep", q: "Sắp xếp: 如果 / 你有问题 / 就 / 给我打电话", o: ["你有问题如果，就给我打电话。", "如果你有问题，给我打电话就。", "如果你有问题，就给我打电话。"], a: 2, g: "如果 mở đầu mệnh đề điều kiện, còn 就 đứng ngay trước động từ của mệnh đề kết quả." }
  ],
  15: [
    { k: "cau", q: "Câu nào đúng?", o: ["我现在累得下了班就想睡觉。", "我现在累下了班就想睡觉得。", "我现在得累下了班就想睡觉。"], a: 0, g: "Bổ ngữ trình độ là tính từ + 得 + phần nói rõ mức độ, nên 得 đi liền sau 累." },
    { k: "dien", q: "他高兴＿唱起歌来了。", v: "Anh ấy vui đến mức hát lên.", o: ["的", "得", "地"], a: 1, g: "Mức độ sau tính từ dùng 得: 高兴得 + kết quả. 的 dùng trước danh từ, 地 dùng trước động từ." },
    { k: "xep", q: "Sắp xếp: 得 / 她 / 难过 / 说不出话来", o: ["她难过得说不出话来。", "她得难过说不出话来。", "她难过说不出话来得。"], a: 0, g: "得 nối tính từ 难过 với phần nói rõ mức độ, nên phải nằm ngay sau 难过." }
  ],
  16: [
    { k: "dien", q: "这个办法＿都知道。", v: "Cách này ai cũng biết.", o: ["什么", "哪儿", "谁"], a: 2, g: "谁 + 都 nghĩa 'ai cũng'. Đại từ nghi vấn đứng trước 都 thì mang nghĩa bao gồm tất cả." },
    { k: "cau", q: "Câu nào đúng?", o: ["他都什么不想吃。", "他什么都不想吃。", "他不想吃什么都。"], a: 1, g: "什么都 đứng trước động từ: 什么 + 都 + 不/没 + động từ." },
    { k: "xep", q: "Sắp xếp: 因为 / 他发烧了 / 所以 / 没来上课", o: ["因为他发烧了，所以没来上课。", "他发烧了因为，所以没来上课。", "因为他发烧了，没来上课所以。"], a: 0, g: "因为 mở đầu lí do, 所以 mở đầu kết quả; cả hai đều đứng đầu mệnh đề của mình." }
  ],
  17: [
    { k: "cau", q: "Câu nào đúng?", o: ["我相信他们会的同意。", "我相信他们会同意的。", "我相信他们同意会的。"], a: 1, g: "会……的 diễn tả dự đoán: 会 + động từ + 的, và 的 nằm ở cuối câu." },
    { k: "dien", q: "他不但聪明，＿很努力。", v: "Anh ấy không chỉ thông minh mà còn rất chăm.", o: ["而且", "但是", "所以"], a: 0, g: "不但……而且…… nối hai ý cùng chiều, tăng tiến. 但是 chỉ dùng cho ý trái ngược." },
    { k: "xep", q: "Sắp xếp: 只有 / 努力学习 / 才 / 能提高成绩", o: ["只有努力学习，能提高成绩才。", "努力学习只有，才能提高成绩。", "只有努力学习，才能提高成绩。"], a: 2, g: "只有……才…… nêu điều kiện duy nhất, 才 đứng ngay trước 能 + động từ." }
  ],
  18: [
    { k: "dien", q: "你没看＿吗？他变化很大。", v: "Bạn không nhận ra à? Anh ấy thay đổi nhiều lắm.", o: ["过来", "下来", "出来"], a: 2, g: "看出来 nghĩa 'nhận ra, nhìn ra'; 出来 ở đây mang nghĩa phát hiện, không phải di chuyển." },
    { k: "cau", q: "Câu nào đúng?", o: ["我想了起来，她叫李月。", "我起来想了，她叫李月。", "我想起来了，她叫李月。"], a: 2, g: "想起来 nghĩa 'nhớ ra'; 了 đặt sau cả cụm 想起来, không chen vào giữa." },
    { k: "xep", q: "Sắp xếp: 起来 / 天 / 冷 / 了", o: ["天冷了起来。", "天冷起来了。", "天起来冷了。"], a: 1, g: "起来 sau tính từ nghĩa 'bắt đầu và tiếp tục', còn 了 đứng cuối cùng." }
  ],
  19: [
    { k: "dien", q: "我＿他影响了。", v: "Tôi bị anh ấy ảnh hưởng.", o: ["把", "跟", "被"], a: 2, g: "Câu chữ 被 chỉ bị động: người chịu tác động + 被 + người gây ra + động từ + 了." },
    { k: "cau", q: "Câu nào đúng?", o: ["我的自行车被拿走人了。", "我的自行车拿走被人了。", "我的自行车被人拿走了。"], a: 2, g: "Trật tự câu 被 là chủ ngữ + 被 + người thực hiện + động từ + kết quả: 被人拿走了." },
    { k: "xep", q: "Sắp xếp: 被 / 蛋糕 / 弟弟 / 吃完了", o: ["蛋糕被弟弟吃完了。", "蛋糕弟弟被吃完了。", "被弟弟蛋糕吃完了。"], a: 0, g: "蛋糕 là vật chịu tác động nên đứng đầu, rồi 被 + 弟弟, cuối cùng mới tới động từ." }
  ]
};
