/* Câu hỏi ngữ pháp HSK 2 — 15 bài (bỏ bài ôn tập), mỗi bài 3 câu: chọn câu đúng / điền từ / sắp xếp */
const NGUPHAP = {
  0: [
    { k: "dien", q: "你＿喜欢运动？", v: "Sao bạn thích thể thao?", o: ["为什么", "什么", "怎么样"], a: 0, g: "为什么 hỏi lí do, đứng sau chủ ngữ và trước động từ." },
    { k: "cau",  q: "Câu nào đúng?", o: ["我觉得也我要去。", "我觉得我也要去。", "我觉得我要也去。"], a: 1, g: "也 đứng sau chủ ngữ, trước động từ: 我也要去." },
    { k: "xep",  q: "Sắp xếp: 我们 / 一起 / 去踢足球 / 吧", o: ["我们去踢足球一起吧！", "一起我们去踢足球吧！", "我们一起去踢足球吧！"], a: 2, g: "一起 đứng trước động từ; 吧 nằm cuối câu để rủ rê." }
  ],
  1: [
    { k: "cau",  q: "Câu nào đúng?", o: ["我起床在早上六点。", "我六点早上起床。", "我早上六点起床。"], a: 2, g: "Thời gian nói từ lớn đến nhỏ (早上 → 六点) và đứng trước động từ 起床." },
    { k: "dien", q: "他＿个星期都跑步。", v: "Tuần nào anh ấy cũng chạy bộ.", o: ["每", "几", "两"], a: 0, g: "每 + lượng từ; câu có 每 thường đi kèm 都 ở phía sau." },
    { k: "xep",  q: "Sắp xếp: 你生病了 / 要 / 多休息", o: ["你生病了，多要休息。", "你生病了，要多休息。", "你生病要了多休息。"], a: 1, g: "要 đứng trước động từ để nói cần làm gì: 要多休息." }
  ],
  2: [
    { k: "dien", q: "左边那个红＿是我的。", v: "Cái màu đỏ bên trái là của mình.", o: ["了", "的", "吗"], a: 1, g: "红的 = cái màu đỏ. 的 thay cho danh từ mà cả hai đều đã biết." },
    { k: "cau",  q: "Câu nào đúng?", o: ["这个手表三千块钱。", "这个手表三块千钱。", "三千块钱这个手表。"], a: 0, g: "Số đếm nói từ lớn đến nhỏ (三千), giá tiền đứng sau đồ vật." },
    { k: "xep",  q: "Sắp xếp: 我的手机 / 在 / 电脑旁边", o: ["我的手机电脑旁边在。", "在电脑旁边我的手机。", "我的手机在电脑旁边。"], a: 2, g: "在 + nơi đứng sau chủ ngữ; từ chỉ vị trí 旁边 đứng sau danh từ 电脑." }
  ],
  3: [
    { k: "cau",  q: "Câu nào đúng?", o: ["这个工作他帮我介绍是的。", "这个工作是他帮我介绍的。", "是他帮我介绍这个工作的。"], a: 1, g: "Câu 是…的 nhấn “ai làm”: 是 trước 他, 的 ở cuối câu." },
    { k: "dien", q: "我来介绍一＿。", v: "Để mình giới thiệu một chút.", o: ["下", "次", "件"], a: 0, g: "一下 đứng sau động từ, làm câu nhẹ đi: 介绍一下." },
    { k: "xep",  q: "Sắp xếp: 他 / 去年 / 来我们公司工作", o: ["他来我们公司去年工作。", "去年他工作来我们公司。", "他去年来我们公司工作。"], a: 2, g: "Thời gian 去年 đứng trước động từ; 来…工作 nói nơi trước, mục đích sau." }
  ],
  4: [
    { k: "dien", q: "我要＿个鸡蛋。", v: "Cho mình hai quả trứng.", o: ["二", "第一", "两"], a: 2, g: "Đếm số lượng dùng 两 chứ không dùng 二: 两个鸡蛋." },
    { k: "cau",  q: "Câu nào đúng?", o: ["这件衣服太贵了！", "这件衣服很贵了！", "这件太衣服贵了！"], a: 0, g: "太…了 là cặp cố định: 太 trước tính từ, 了 ở cuối câu." },
    { k: "xep",  q: "Sắp xếp: 就 / 买 / 这件 / 吧", o: ["买就这件吧。", "就买这件吧。", "吧就买这件。"], a: 1, g: "就 đứng trước động từ 买; 吧 luôn ở cuối câu." }
  ],
  5: [
    { k: "dien", q: "你＿不吃了？", v: "Sao bạn không ăn nữa?", o: ["什么", "怎么", "怎么样"], a: 1, g: "怎么 + động từ dùng để hỏi ngạc nhiên “sao lại thế”: 你怎么不吃了？" },
    { k: "cau",  q: "Câu nào đúng?", o: ["我吃药已经了。", "已经我吃了药。", "我已经吃药了。"], a: 2, g: "已经 đứng sau chủ ngữ và trước động từ, cuối câu thêm 了." },
    { k: "xep",  q: "Sắp xếp: 这个鱼 / 很 / 好吃", o: ["这个鱼很好吃。", "这个鱼好吃很。", "很这个鱼好吃。"], a: 0, g: "很 đứng trước tính từ; câu tính từ không cần thêm 是." }
  ],
  6: [
    { k: "cau",  q: "Câu nào đúng?", o: ["你家离公司远吗？", "你家公司离远吗？", "离你家公司远吗？"], a: 0, g: "Mẫu A 离 B + 远/近: 离 nằm giữa hai nơi." },
    { k: "dien", q: "＿我家到公司走路十分钟。", v: "Từ nhà mình đến công ty đi bộ mười phút.", o: ["离", "从", "在"], a: 1, g: "从…到… chỉ điểm đầu và điểm cuối; 离 chỉ dùng khi nói xa hay gần." },
    { k: "xep",  q: "Sắp xếp: 我 / 坐公共汽车 / 去火车站", o: ["我坐去火车站公共汽车。", "我公共汽车坐去火车站。", "我坐公共汽车去火车站。"], a: 2, g: "Phương tiện 坐公共汽车 nói trước, nơi đến 去火车站 nói sau." }
  ],
  7: [
    { k: "dien", q: "＿我想想再告诉你。", v: "Để mình nghĩ đã rồi nói bạn.", o: ["给", "请", "让"], a: 2, g: "让 + người + việc = để ai làm gì: 让我想想." },
    { k: "cau",  q: "Câu nào đúng?", o: ["你明天再来吧。", "你明天来再吧。", "再你明天来吧。"], a: 0, g: "再 đứng ngay trước động từ: 再来 = lát nữa/mai hãy đến." },
    { k: "xep",  q: "Sắp xếp: 你 / 在 / 找 / 什么", o: ["你找在什么？", "你在找什么？", "在你找什么？"], a: 1, g: "在 + động từ nói việc đang làm; 什么 đứng ở chỗ tân ngữ, sau 找." }
  ],
  8: [
    { k: "cau",  q: "Câu nào đúng?", o: ["我不做完。", "我没有做完。", "我做没有完。"], a: 1, g: "Việc đã qua mà chưa xong thì phủ định bằng 没有 + động từ, không dùng 不." },
    { k: "dien", q: "这个题我做＿了。", v: "Câu này mình làm sai rồi.", o: ["错", "对", "完"], a: 0, g: "Bổ ngữ kết quả đứng ngay sau động từ: 做错了 = làm sai rồi." },
    { k: "xep",  q: "Sắp xếp: 题太多了 / 我 / 没有做完", o: ["太多了题，我没有做完。", "题太多了，我做完没有。", "题太多了，我没有做完。"], a: 2, g: "太…了 bọc lấy tính từ 多; 没有 đứng trước cụm 做完." }
  ],
  9: [
    { k: "dien", q: "＿找了，手机在桌子上呢。", v: "Đừng tìm nữa, điện thoại ở trên bàn kìa.", o: ["不", "没", "别"], a: 2, g: "别 + động từ + 了 = đừng làm nữa. 不 và 没 không dùng để can ngăn." },
    { k: "cau",  q: "Câu nào đúng?", o: ["妈妈在房间里看报纸。", "妈妈看报纸在房间里。", "妈妈在看报纸房间里。"], a: 0, g: "在 + nơi (房间里) đứng trước động từ 看." },
    { k: "xep",  q: "Sắp xếp: 我 / 想问你 / 一个问题", o: ["我想你问一个问题。", "我想问你一个问题。", "我想问一个问题你。"], a: 1, g: "Động từ 问 nhận hai tân ngữ: người đứng trước (你), việc đứng sau (一个问题)." }
  ],
  10: [
    { k: "dien", q: "王方＿我大三岁。", v: "Vương Phương hơn mình 3 tuổi.", o: ["和", "比", "也"], a: 1, g: "Mẫu so sánh A 比 B + tính từ: 比我大 = lớn hơn mình." },
    { k: "cau",  q: "Câu nào đúng?", o: ["哥哥比弟弟很高。", "哥哥比很弟弟高。", "哥哥比弟弟高。"], a: 2, g: "Câu có 比 thì không dùng 很 trước tính từ." },
    { k: "xep",  q: "Sắp xếp: 姐姐 / 比我 / 高 / 一点儿", o: ["姐姐比我高一点儿。", "姐姐比我一点儿高。", "姐姐高比我一点儿。"], a: 0, g: "Mức chênh lệch 一点儿 đứng sau tính từ: 比我高一点儿." }
  ],
  11: [
    { k: "cau",  q: "Câu nào đúng?", o: ["你说太快得了。", "你说得太快了。", "你得说太快了。"], a: 1, g: "Động từ + 得 + mức độ: 说得太快了 = nói nhanh quá." },
    { k: "dien", q: "你穿＿太少了。", v: "Bạn mặc ít quá.", o: ["得", "的", "了"], a: 0, g: "Trước phần nói mức độ phải dùng 得, không dùng 的." },
    { k: "xep",  q: "Sắp xếp: 她 / 唱歌 / 非常好听", o: ["她非常唱歌好听。", "她唱歌好听非常。", "她唱歌非常好听。"], a: 2, g: "非常 đứng ngay trước tính từ 好听 để nhấn mức rất." }
  ],
  12: [
    { k: "dien", q: "她丈夫＿睡觉。", v: "Chồng cô ấy đang ngủ.", o: ["过", "着", "正在"], a: 2, g: "正在 + động từ nói việc đang diễn ra ngay lúc nói." },
    { k: "cau",  q: "Câu nào đúng?", o: ["门开着呢。", "门着开呢。", "门呢开着。"], a: 0, g: "着 đứng ngay sau động từ để nói trạng thái kéo dài: 开着 = đang mở." },
    { k: "xep",  q: "Sắp xếp: 虽然很累 / 但是 / 我很高兴", o: ["但是很累，虽然我很高兴。", "虽然很累，但是我很高兴。", "很累虽然，我很高兴但是。"], a: 1, g: "Cặp 虽然…但是…: 虽然 mở vế đầu, 但是 mở vế sau." }
  ],
  13: [
    { k: "dien", q: "因为很忙，所以我＿没有看。", v: "Vì bận nên mình vẫn chưa xem.", o: ["过", "还", "再"], a: 1, g: "还没有 = vẫn chưa; 还 đứng ngay trước 没有." },
    { k: "cau",  q: "Câu nào đúng?", o: ["我两次看过。", "我看两次过。", "我看过两次。"], a: 2, g: "过 đứng sát động từ, số lần 两次 đứng sau 过: 看过两次." },
    { k: "xep",  q: "Sắp xếp: 因为很忙 / 所以 / 我还没有看", o: ["因为很忙，所以我还没有看。", "所以很忙，因为我还没有看。", "因为很忙，我所以还没有看。"], a: 0, g: "因为 nêu lí do ở vế đầu, 所以 đứng ngay đầu vế kết quả." }
  ],
  14: [
    { k: "cau",  q: "Câu nào đúng?", o: ["新年就要到了。", "新年就到要了。", "就要新年到了。"], a: 0, g: "就要…了 nói việc sắp xảy ra: 就要 trước động từ, 了 ở cuối câu." },
    { k: "dien", q: "这是我送＿你的。", v: "Cái này mình tặng bạn.", o: ["到", "过", "给"], a: 2, g: "送给 + người = tặng cho ai; 给 đứng ngay sau 送." },
    { k: "xep",  q: "Sắp xếp: 我 / 希望 / 明天不下雪", o: ["我明天希望不下雪。", "我希望明天不下雪。", "希望我明天不下雪。"], a: 1, g: "希望 đứng sau chủ ngữ, theo sau là cả một câu nhỏ: 希望明天不下雪." }
  ]
};
