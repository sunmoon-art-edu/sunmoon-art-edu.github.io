/* Bài hát YouTube cho từng bài — đã kiểm tra link ngày 20/09/2026 */
/* Khoá ngoài: cấp YCT. Khoá trong: số thứ tự bài, đếm từ 0 (bài 1 = 0). */
/* Tất cả link đều của kênh Little Fox Chinese - Stories & Songs for Learners. */
const SONGS = {
  "YCT1": {
    0:  { id: "6VR4bW2nX_4", t: "你好歌",              v: "Bài hát Xin chào",            k: "Little Fox Chinese" },
    1:  { id: "uhmjwL3Xpt0", t: "你叫什么名字？",        v: "Bạn tên là gì?",              k: "Little Fox Chinese" },
    2:  { id: "F3TbxbZumNA", t: "她是谁？",             v: "Bạn ấy là ai?",               k: "Little Fox Chinese" },
    3:  { id: "iPvYsKAgsM0", t: "我的家人",             v: "Gia đình của mình",           k: "Little Fox Chinese" },
    4:  { id: "ngOM7skqjjo", t: "你几岁？",             v: "Bạn mấy tuổi?",               k: "Little Fox Chinese" },
    5:  { id: "5-PCV5rVv8o", t: "头和肩膀",             v: "Đầu và vai",                  k: "Little Fox Chinese" },
    6:  { id: "A_7UsaB9oKU", t: "小猫在哪里？",          v: "Mèo con ở đâu?",              k: "Little Fox Chinese" },
    7:  { id: "E2hrmHktevc", t: "学校在哪里？",          v: "Trường học ở đâu?",           k: "Little Fox Chinese" },
    8:  { id: "Iw-W9uALPY8", t: "今天星期几？",          v: "Hôm nay thứ mấy?",            k: "Little Fox Chinese" },
    9:  { id: "rYDH8fEsqac", t: "现在几点了？",          v: "Bây giờ mấy giờ?",            k: "Little Fox Chinese" },
    10: { id: "fprtlCVvZ3M", t: "我很饿",               v: "Mình đói quá",                k: "Little Fox Chinese" },
    11: { id: "GsSm-TBMhfE", t: "学中文儿歌合集",         v: "Tuyển tập nhạc học tiếng Trung", k: "Little Fox Chinese" }
  },
  "YCT2": {
    0:  { id: "0gJecEgkbh0", t: "我可以看电视吗？",       v: "Mình xem tivi được không?",   k: "Little Fox Chinese" },
    1:  { id: "HSkZsh3sl8c", t: "起床！",               v: "Dậy đi thôi!",                k: "Little Fox Chinese" },
    2:  { id: "KUyWkXSL3MQ", t: "颜色歌",               v: "Bài hát màu sắc",             k: "Little Fox Chinese" },
    3:  { id: "ww1uZwOD1Qc", t: "客厅里有一个书架",       v: "Trong phòng có giá sách",     k: "Little Fox Chinese" },
    4:  { id: "FLFN0dla0hE", t: "你会骑自行车吗？",       v: "Bạn biết đi xe đạp không?",   k: "Little Fox Chinese" },
    5:  { id: "IWsed6oBlaY", t: "有多少个纸杯蛋糕？",      v: "Có bao nhiêu cái bánh?",      k: "Little Fox Chinese" },
    6:  { id: "tyo3Rzbtl3w", t: "天气怎么样？",          v: "Thời tiết thế nào?",          k: "Little Fox Chinese" },
    7:  { id: "gAWIHFDf-k8", t: "大和小",               v: "To và nhỏ",                   k: "Little Fox Chinese" },
    8:  { id: "0zT_WPD_j1I", t: "你昨天做了什么？",       v: "Hôm qua bạn đã làm gì?",      k: "Little Fox Chinese" },
    9:  { id: "gQtxhaJqUjY", t: "我生病了",             v: "Mình bị ốm rồi",              k: "Little Fox Chinese" },
    10: { id: "N5ZW18lXxhg", t: "你从哪儿来？",          v: "Bạn đến từ đâu?",             k: "Little Fox Chinese" },
    11: { id: "c-5_YM4zf40", t: "最爱的中文儿歌",         v: "Tuyển tập nhạc hay nhất",     k: "Little Fox Chinese" }
  },
  "YCT3": {
    0:  { id: "qM9v6tmvHBY", t: "在学校",               v: "Ở trường học",                k: "Little Fox Chinese" },
    1:  { id: "gpb1OLbL8Kc", t: "踢足球吧！",            v: "Đi đá bóng nhé!",             k: "Little Fox Chinese" },
    2:  { id: "_vGEwneMSkQ", t: "你在做什么？",          v: "Bạn đang làm gì?",            k: "Little Fox Chinese" },
    3:  { id: "Lxi-CvEiiuc", t: "接电话",               v: "Truyện: Nghe điện thoại",     k: "Little Fox Chinese" },
    4:  { id: "LPbIJD1pInw", t: "西瓜在哪里？",          v: "Dưa hấu ở đâu?",              k: "Little Fox Chinese" },
    5:  { id: "OBh5WbNR2gA", t: "你穿着什么？",          v: "Bạn đang mặc gì?",            k: "Little Fox Chinese" },
    6:  { id: "nqB8mnR4dZY", t: "祝你生日快乐！",         v: "Chúc mừng sinh nhật!",        k: "Little Fox Chinese" },
    7:  { id: "sCG0jFuDW_g", t: "小雪人",               v: "Người tuyết nhỏ",             k: "Little Fox Chinese" },
    8:  { id: "-l4tiMsKahE", t: "看左，看右",            v: "Nhìn trái, nhìn phải",        k: "Little Fox Chinese" },
    9:  { id: "ACG8aJHcZ_M", t: "汽车的轮子",            v: "Bánh xe ô tô",                k: "Little Fox Chinese" },
    10: { id: "p0oKFJFX6rU", t: "请给我馅饼",            v: "Cho mình cái bánh nhé",       k: "Little Fox Chinese" },
    11: { id: "HAc5i1Z6HXU", t: "西游记+更多儿歌合集",     v: "Tuyển tập nhạc chủ đề",       k: "Little Fox Chinese" }
  },
  "YCT4": {
    0:  { id: "xkySrEZ4R-U", t: "你喜欢什么？",          v: "Bạn thích gì?",               k: "Little Fox Chinese" },
    1:  { id: "OnHjfAlgo2s", t: "可爱",                 v: "Đáng yêu",                    k: "Little Fox Chinese" },
    2:  { id: "_l_6TmE5dMQ", t: "新家",                 v: "Nhà mới",                     k: "Little Fox Chinese" },
    3:  { id: "D3o9X4pLUPQ", t: "我的一天",             v: "Một ngày của mình",           k: "Little Fox Chinese" },
    5:  { id: "P5HaJkfQ9nY", t: "请带我去棒球场",         v: "Đưa mình ra sân bóng",        k: "Little Fox Chinese" },
    6:  { id: "cX75s6aAFC8", t: "四季真有趣",            v: "Bốn mùa thật vui",            k: "Little Fox Chinese" },
    7:  { id: "wgXqCOWQl2w", t: "我喜欢冰淇淋",          v: "Mình thích ăn kem",           k: "Little Fox Chinese" },
    8:  { id: "nhHWbQrdYA0", t: "好喝的汤",             v: "Bát canh ngon",               k: "Little Fox Chinese" },
    9:  { id: "wMAYIyqyrvw", t: "你怎么去那里？",         v: "Bạn đi đến đó bằng gì?",      k: "Little Fox Chinese" },
    10: { id: "N5sAxScM6ZA", t: "你最喜欢的科目是什么？",   v: "Bạn thích môn học nào nhất?", k: "Little Fox Chinese" },
    11: { id: "x2htiTFH_Bc", t: "我喜欢大山",            v: "Mình thích núi non",          k: "Little Fox Chinese" },
    12: { id: "mHSe5TsA0HE", t: "他们生气了",            v: "Các bạn ấy tức giận",         k: "Little Fox Chinese" },
    14: { id: "gsW8qJp4Ew4", t: "红灯，绿灯",            v: "Đèn đỏ, đèn xanh",            k: "Little Fox Chinese" },
    15: { id: "7TEMJ54E9aI", t: "中文口语儿歌1",          v: "Tuyển tập nhạc luyện nói",    k: "Little Fox Chinese" }
  }
};
