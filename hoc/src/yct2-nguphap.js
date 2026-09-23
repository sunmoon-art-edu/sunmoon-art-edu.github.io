/* Câu hỏi ngữ pháp YCT 2 — mỗi bài 3 câu, bám điểm ngữ pháp của bài.
   k: "cau" chọn câu đúng · "dien" điền từ · "xep" sắp xếp.
   Chỉ dùng chữ trong từ vựng YCT 1 + YCT 2 và tên riêng 明明 / 大卫 / 小月 / 丁丁. */
const NGUPHAP = {
  // Bài 1 我可以坐这儿吗？ — 可以 + động từ, 请, 请不要 + động từ, 的
  0: [
    { k: "dien", q: "我＿坐这儿吗？", v: "Mình ngồi đây được không?", o: ["怎么", "可以", "没有"], a: 1, g: "可以 (được) đứng trước động từ 坐, cuối câu thêm 吗 để hỏi." },
    { k: "cau", q: "Câu nào đúng?", o: ["请不要说话。", "不请要说话。", "请说话不要。"], a: 0, g: "请 mở đầu câu nhắc nhẹ, 不要 đứng ngay trước động từ 说话." },
    { k: "xep", q: "Sắp xếp: 我的 / 她 / 是 / 同学", o: ["我的她是同学。", "她我的同学是。", "她是我的同学。"], a: 2, g: "的 nối người sở hữu với danh từ: 我的同学 = bạn cùng lớp của mình." }
  ],
  // Bài 2 你早上几点起床？ — trạng ngữ thời gian đứng TRƯỚC động từ
  1: [
    { k: "cau", q: "Câu nào đúng?", o: ["我起床早上六点。", "我早上六点起床。", "早上我起床六点。"], a: 1, g: "Tiếng Trung để thời gian TRƯỚC động từ: 早上六点起床, không nói 起床六点." },
    { k: "dien", q: "你＿几点睡觉？", v: "Buổi tối bạn đi ngủ lúc mấy giờ?", o: ["晚上", "分钟", "起床"], a: 0, g: "Trước 几点 là từ chỉ buổi: 晚上几点 = mấy giờ tối." },
    { k: "xep", q: "Sắp xếp: 十分钟 / 我 / 要 / 去学校", o: ["我要去学校十分钟。", "十分钟我去学校要。", "我去学校要十分钟。"], a: 2, g: "Nói việc gì mất bao lâu: làm gì + 要 + khoảng thời gian." }
  ],
  // Bài 3 你的铅笔呢？ — 呢, 是什么颜色的, 是 ... 的
  2: [
    { k: "dien", q: "你的铅笔＿？", v: "Bút chì của bạn đâu rồi?", o: ["呢", "吗", "了"], a: 0, g: "呢 đặt sau đồ vật để hỏi 'đâu rồi?'. 吗 chỉ dùng khi hỏi có hay không." },
    { k: "xep", q: "Sắp xếp: 什么颜色 / 你的书包 / 是 / 的", o: ["你的书包是什么颜色的？", "什么颜色你的书包是的？", "你的书包什么颜色是的？"], a: 0, g: "Mẫu hỏi màu cố định: (đồ vật) 是什么颜色的？ — chữ 的 ở cuối câu." },
    { k: "cau", q: "Câu nào đúng?", o: ["我的书包绿是的。", "我的书包是绿的。", "绿的我的书包是。"], a: 1, g: "是 ... 的 kẹp lấy màu ở giữa: 是绿的 = màu xanh lá." }
  ],
  // Bài 4 书包里有两本书。 — 在 + nơi + 里面/上边; nơi + 有 + số + lượng từ; 两 và 只
  3: [
    { k: "dien", q: "房间里面有一＿猫。", v: "Trong phòng có một con mèo.", o: ["个", "只", "块"], a: 1, g: "Đếm con vật dùng 只: 一只猫. 个 cho đồ vật, 块 cho tiền." },
    { k: "cau", q: "Câu nào đúng?", o: ["书包上边桌子在。", "书包在桌子上边。", "在书包桌子上边。"], a: 1, g: "Trật tự: đồ vật + 在 + chỗ + 上边 / 里面. Từ chỉ vị trí đứng sau cùng." },
    { k: "xep", q: "Sắp xếp: 两只 / 那儿 / 熊猫 / 有", o: ["那儿有两只熊猫。", "两只熊猫那儿有。", "那儿两只有熊猫。"], a: 0, g: "Nơi chốn nói trước + 有 + số + lượng từ + con vật. Số 2 đứng trước lượng từ dùng 两, không dùng 二." }
  ],
  // Bài 5 你会不会做饭？ — 会 + động từ, câu hỏi 正反 会不会, 也
  4: [
    { k: "cau", q: "Câu nào đúng?", o: ["你会画熊猫不会？", "你会不会画熊猫？", "你不会会画熊猫？"], a: 1, g: "Câu hỏi chính – phản ghép liền 会不会, rồi mới tới động từ." },
    { k: "dien", q: "妈妈会做面条，我＿会。", v: "Mẹ biết nấu mì, mình cũng biết.", o: ["很", "不", "也"], a: 2, g: "也 (cũng) đứng sau chủ ngữ và trước động từ, không đứng đầu câu." },
    { k: "xep", q: "Sắp xếp: 汉语 / 明明 / 学习 / 喜欢", o: ["明明喜欢学习汉语。", "明明学习喜欢汉语。", "喜欢明明学习汉语。"], a: 0, g: "喜欢 đứng trước động từ khác: 喜欢学习 = thích học." }
  ],
  // Bài 6 包子多少钱一个？ — 多少钱, 要 + 买 + số + lượng từ, 很 + tính từ
  5: [
    { k: "dien", q: "包子＿钱一个？", v: "Bánh bao bao nhiêu tiền một cái?", o: ["多少", "怎么", "什么"], a: 0, g: "Hỏi giá dùng 多少钱; 多少 đứng ngay trước 钱." },
    { k: "cau", q: "Câu nào đúng?", o: ["我买要五个香蕉。", "我要买五个香蕉。", "我要五个买香蕉。"], a: 1, g: "要 đứng trước động từ 买, sau đó mới tới số + lượng từ + đồ vật." },
    { k: "xep", q: "Sắp xếp: 很好吃 / 这儿的 / 包子", o: ["很好吃这儿的包子。", "这儿的包子很好吃。", "这儿的很好吃包子。"], a: 1, g: "的 nối nơi chốn với đồ vật (这儿的包子); 很 đứng ngay trước tính từ." }
  ],
  // Bài 7 今天比昨天热。 — A 比 B + tính từ, 怎么样, 真
  6: [
    { k: "cau", q: "Câu nào đúng?", o: ["今天比昨天热。", "今天热比昨天。", "比今天昨天热。"], a: 0, g: "Mẫu so sánh: A + 比 + B + tính từ. 比 đứng giữa hai bên được so." },
    { k: "dien", q: "明天天气＿？", v: "Thời tiết ngày mai thế nào?", o: ["多少", "怎么样", "几"], a: 1, g: "Hỏi 'thế nào' dùng 怎么样, đặt ở cuối câu." },
    { k: "xep", q: "Sắp xếp: 天气 / 真好 / 今天", o: ["今天真好天气。", "真好今天天气。", "今天天气真好！"], a: 2, g: "真 đứng ngay trước tính từ để khen; thời gian và chủ đề nói trước." }
  ],
  // Bài 8 马丁比我大三岁。 — 比 + tính từ + chênh lệch, 叫什么名字, 觉得
  7: [
    { k: "dien", q: "大卫比我大三＿。", v: "Đa-vít lớn hơn mình ba tuổi.", o: ["岁", "年", "点"], a: 0, g: "Hơn kém bao nhiêu tuổi thì nói số + 岁, đặt ngay sau tính từ 大." },
    { k: "xep", q: "Sắp xếp: 叫 / 你弟弟 / 名字 / 什么", o: ["你弟弟叫什么名字？", "什么名字你弟弟叫？", "你弟弟什么名字叫？"], a: 0, g: "Mẫu hỏi tên: ai + 叫 + 什么名字？" },
    { k: "cau", q: "Câu nào đúng?", o: ["我觉得很漂亮妹妹。", "觉得我妹妹很漂亮。", "我觉得妹妹很漂亮。"], a: 2, g: "觉得 đứng ngay sau 我, rồi tới cả một câu nhỏ: 妹妹很漂亮." }
  ],
  // Bài 9 你今天做什么了？ — 了 cuối câu, 没有 + động từ (bỏ 了), 在 + động từ
  8: [
    { k: "dien", q: "你今天做什么＿？", v: "Hôm nay bạn đã làm gì?", o: ["吗", "呢", "了"], a: 2, g: "了 ở cuối câu cho biết việc đã xảy ra rồi." },
    { k: "cau", q: "Câu nào đúng?", o: ["我昨天没有看电视。", "我昨天没有看电视了。", "我昨天看没有电视。"], a: 0, g: "没有 đứng trước động từ; đã có 没有 thì KHÔNG thêm 了 ở cuối." },
    { k: "xep", q: "Sắp xếp: 打电话 / 妈妈 / 在", o: ["妈妈打电话在。", "在妈妈打电话。", "妈妈在打电话。"], a: 2, g: "在 đứng trước động từ để nói việc đang diễn ra." }
  ],
  // Bài 10 你怎么了？ — 怎么了, 要 + động từ, động từ nối tiếp 去看
  9: [
    { k: "cau", q: "Câu nào đúng?", o: ["你了怎么？", "你怎么了？", "怎么你了？"], a: 1, g: "Câu hỏi 'Bạn sao thế?' cố định là 你怎么了？ — 怎么 ở giữa, 了 ở cuối." },
    { k: "dien", q: "弟弟＿去看医生。", v: "Em trai phải đi khám bác sĩ.", o: ["很", "要", "的"], a: 1, g: "要 đứng trước động từ, nghĩa là phải hoặc muốn làm việc đó." },
    { k: "xep", q: "Sắp xếp: 两只 / 丁丁 / 脚 / 有", o: ["丁丁两只有脚。", "丁丁有两只脚。", "两只脚丁丁有。"], a: 1, g: "Trật tự: ai + 有 + số + lượng từ + bộ phận. Chân dùng lượng từ 只." }
  ],
  // Bài 11 我来北京一年了。 — thời lượng + 了, 是 + năm
  10: [
    { k: "xep", q: "Sắp xếp: 一年 / 我 / 北京 / 来 / 了", o: ["我来北京一年了。", "我一年来北京了。", "我来一年北京了。"], a: 0, g: "Nói đã làm bao lâu: động từ + nơi chốn + khoảng thời gian + 了." },
    { k: "dien", q: "我学习汉语两＿了。", v: "Mình học tiếng Trung được hai năm rồi.", o: ["点", "岁", "年"], a: 2, g: "Khoảng thời gian dài dùng 年. 点 là giờ, 岁 là tuổi." },
    { k: "cau", q: "Câu nào đúng?", o: ["现在二零二六年是。", "是现在二零二六年。", "现在是二零二六年。"], a: 2, g: "Nói năm phải có 是: 现在是 ... 年。" }
  ]
};
