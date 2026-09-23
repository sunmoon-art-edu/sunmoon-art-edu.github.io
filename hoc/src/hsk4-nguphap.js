/* Câu hỏi ngữ pháp HSK 4 — 20 bài (bỏ bài ôn tập), mỗi bài 3 câu */
const NGUPHAP = {
  0: [
    { k: "dien", q: "他不但幽默，＿很诚实。", v: "Anh ấy không chỉ hài hước mà còn rất thật thà.", o: ["而且", "但是", "却"], a: 0, g: "不但……而且…… nối hai ý cùng chiều, ý sau mạnh hơn ý trước. 但是 và 却 chỉ dùng cho ý ngược lại." },
    { k: "cau", q: "Câu nào đúng?", o: ["他们俩的性格不但像，而且爱好也一样。", "他们俩的性格像不但，而且爱好也一样。", "不但他们俩的性格像，爱好也一样而且。"], a: 0, g: "不但 đứng trước phần được nhấn của mệnh đề đầu, còn 而且 mở đầu mệnh đề sau." },
    { k: "xep", q: "Sắp xếp: 不但 / 她 / 漂亮 / 而且很优秀", o: ["她漂亮不但，而且很优秀。", "不但她漂亮，很优秀而且。", "她不但漂亮，而且很优秀。"], a: 2, g: "Khi hai mệnh đề cùng chủ ngữ, 不但 đứng sau chủ ngữ; 而且 vẫn mở đầu mệnh đề sau." }
  ],
  1: [
    { k: "cau", q: "Câu nào đúng?", o: ["这是一个误会虽然，但是他还是原谅了我。", "虽然这是一个误会，他还是原谅了我但是。", "虽然这是一个误会，但是他还是原谅了我。"], a: 2, g: "虽然 mở đầu mệnh đề nhượng bộ, 但是 phải đứng đầu mệnh đề sau chứ không đặt ở cuối câu." },
    { k: "dien", q: "＿我们住得很远，但是经常联系。", v: "Tuy chúng tôi ở xa nhau nhưng vẫn thường liên lạc.", o: ["因为", "只要", "虽然"], a: 2, g: "Thấy 但是 ở mệnh đề sau thì mệnh đề trước phải dùng 虽然. 因为 đi với 所以, 只要 đi với 就." },
    { k: "xep", q: "Sắp xếp: 虽然 / 他不是故意的 / 但是 / 我还是有点儿生气", o: ["他不是故意的虽然，但是我还是有点儿生气。", "虽然他不是故意的，但是我还是有点儿生气。", "虽然他不是故意的，我还是有点儿生气但是。"], a: 1, g: "Cặp 虽然……但是……: mỗi liên từ đứng ở đầu mệnh đề của mình, không trôi xuống cuối." }
  ],
  2: [
    { k: "dien", q: "＿他工作很负责，所以经理很满意。", v: "Vì anh ấy làm việc có trách nhiệm nên giám đốc rất hài lòng.", o: ["因为", "虽然", "如果"], a: 0, g: "因为……所以…… nêu nguyên nhân và kết quả; thấy 所以 ở mệnh đề sau thì phía trước phải là 因为." },
    { k: "cau", q: "Câu nào đúng?", o: ["因为我去年毕业了，在找工作所以。", "因为我去年毕业了，所以在找工作。", "我去年毕业了因为，所以在找工作。"], a: 1, g: "所以 luôn mở đầu mệnh đề kết quả, bạn không đặt nó ở cuối câu được." },
    { k: "xep", q: "Sắp xếp: 因为 / 这家公司在招聘 / 所以 / 我想去应聘", o: ["因为这家公司在招聘，我想去应聘所以。", "这家公司在招聘因为，所以我想去应聘。", "因为这家公司在招聘，所以我想去应聘。"], a: 2, g: "因为 + lí do, 所以 + kết quả, hai liên từ đều nằm ở đầu mệnh đề." }
  ],
  3: [
    { k: "dien", q: "他的工资＿高了。", v: "Lương của anh ấy ngày càng cao.", o: ["更越", "越来越", "越"], a: 1, g: "越来越 + tính từ nghĩa 'ngày càng…'. Một chữ 越 thì phải dùng thành cặp 越……越……." },
    { k: "cau", q: "Câu nào đúng?", o: ["钱越存多越。", "钱越存越多。", "越钱存越多。"], a: 1, g: "Cặp 越……越……: mỗi chữ 越 đứng ngay trước động từ hoặc tính từ của nó, như 越存越多." },
    { k: "xep", q: "Sắp xếp: 越来越 / 我 / 喜欢这个工作 / 了", o: ["我越来越喜欢这个工作了。", "我喜欢这个工作越来越了。", "越来越我喜欢这个工作了。"], a: 0, g: "越来越 nằm giữa chủ ngữ và động từ, còn 了 đứng ở cuối câu." }
  ],
  4: [
    { k: "dien", q: "这双袜子＿那双便宜。", v: "Đôi tất này rẻ hơn đôi kia.", o: ["和", "比", "跟"], a: 1, g: "So sánh hơn dùng 比: A 比 B + tính từ. 跟 và 和 chỉ dùng khi nói hai thứ giống nhau." },
    { k: "cau", q: "Câu nào đúng?", o: ["这件衣服在打折，比那件便宜得多。", "这件衣服在打折，很比那件便宜。", "这件衣服在打折，比那件很便宜。"], a: 0, g: "Trong câu chữ 比 bạn không dùng 很; muốn nhấn mức chênh lệch thì thêm 得多 hay 多了 sau tính từ." },
    { k: "xep", q: "Sắp xếp: 更 / 这个颜色 / 适合你", o: ["这个颜色适合你更。", "更这个颜色适合你。", "这个颜色更适合你。"], a: 2, g: "更 là phó từ chỉ mức độ, đứng ngay trước động từ hoặc tính từ: 更适合." }
  ],
  5: [
    { k: "dien", q: "这个道理＿孩子都懂。", v: "Lí lẽ này đến trẻ con cũng hiểu.", o: ["连", "把", "被"], a: 0, g: "连……都/也…… nhấn mạnh trường hợp cực đoan: 连 + đối tượng + 都 + động từ." },
    { k: "cau", q: "Câu nào đúng?", o: ["他忙得连都饭没吃。", "他忙得连饭都没吃。", "他忙得连饭没都吃。"], a: 1, g: "都 đứng sau đối tượng của 连 và ngay trước phần phủ định 没吃." },
    { k: "xep", q: "Sắp xếp: 连 / 这么简单的问题 / 他 / 都不知道", o: ["这么简单的问题他连都不知道。", "连这么简单的问题都他不知道。", "连这么简单的问题他都不知道。"], a: 2, g: "连 + phần được nhấn, rồi tới chủ ngữ, sau đó 都 + động từ. 都 phải đứng liền trước động từ." }
  ],
  6: [
    { k: "dien", q: "他常常一边吃饭＿看手机，这样不健康。", v: "Anh ấy hay vừa ăn cơm vừa xem điện thoại, như vậy không tốt cho sức khoẻ.", o: ["一边", "一直", "一定"], a: 0, g: "一边……一边…… diễn tả hai việc làm cùng lúc, mỗi chữ 一边 đứng trước một động từ." },
    { k: "cau", q: "Câu nào đúng?", o: ["大夫建议我别一边走路一边抽烟。", "大夫建议我别一边走路抽烟一边。", "大夫建议我一边别走路一边抽烟。"], a: 0, g: "Hai chữ 一边 đứng trước hai động từ, còn phó từ phủ định 别 đứng trước cả cụm." },
    { k: "xep", q: "Sắp xếp: 一边 / 我 / 运动 / 一边 / 听音乐", o: ["一边我运动一边听音乐。", "我一边运动一边听音乐。", "我一边运动听音乐一边。"], a: 1, g: "Trật tự là chủ ngữ + 一边 + động từ 1 + 一边 + động từ 2." }
  ],
  7: [
    { k: "dien", q: "＿你用心看，就能发现生活中的美。", v: "Nếu bạn để tâm nhìn thì sẽ thấy được cái đẹp trong cuộc sống.", o: ["连", "如果", "因为"], a: 1, g: "如果……就…… nêu điều kiện và kết quả; 就 đứng trước động từ của mệnh đề sau." },
    { k: "cau", q: "Câu nào đúng?", o: ["心情不好如果，就去公园散散步。", "如果心情不好，就去公园散散步。", "如果心情不好，去公园散散步就。"], a: 1, g: "如果 phải đứng đầu mệnh đề điều kiện, còn 就 luôn đứng trước động từ chứ không ở cuối câu." },
    { k: "xep", q: "Sắp xếp: 要是 / 明天天气好 / 就 / 我们去公园", o: ["明天天气好要是，我们就去公园。", "要是明天天气好，我们去公园就。", "要是明天天气好，我们就去公园。"], a: 2, g: "要是 là cách nói thân mật của 如果; 就 đặt sau chủ ngữ 我们 và trước động từ 去." }
  ],
  8: [
    { k: "dien", q: "＿坚持下去，你就会成功。", v: "Chỉ cần kiên trì thì bạn sẽ thành công.", o: ["无论", "只要", "只有"], a: 1, g: "只要……就…… nêu điều kiện đủ. 只有 phải đi với 才, còn 无论 đi với 都." },
    { k: "cau", q: "Câu nào đúng?", o: ["只要不放弃，一定有机会就。", "只有不放弃，就一定有机会。", "只要不放弃，就一定有机会。"], a: 2, g: "只要 đi cặp với 就; nếu dùng 只有 thì mệnh đề sau phải là 才 chứ không phải 就." },
    { k: "xep", q: "Sắp xếp: 只要 / 你冷静一点儿 / 就 / 能想出办法", o: ["你冷静一点儿只要，就能想出办法。", "只要你冷静一点儿，能想出办法就。", "只要你冷静一点儿，就能想出办法。"], a: 2, g: "只要 + điều kiện, rồi 就 + 能 + động từ ở mệnh đề kết quả." }
  ],
  9: [
    { k: "dien", q: "＿别人怎么说，我都觉得现在很幸福。", v: "Bất kể người khác nói thế nào, tôi đều thấy bây giờ rất hạnh phúc.", o: ["无论", "虽然", "因为"], a: 0, g: "无论……都…… nghĩa 'bất kể… đều…'; mệnh đề đầu thường có từ nghi vấn như 怎么, 谁, 什么." },
    { k: "cau", q: "Câu nào đúng?", o: ["无论都多忙，他陪母亲散步。", "无论多忙，他都陪母亲散步。", "无论多忙，他陪母亲散步都。"], a: 1, g: "都 đứng sau chủ ngữ của mệnh đề sau và ngay trước động từ." },
    { k: "xep", q: "Sắp xếp: 无论 / 礼拜天还是平时 / 他 / 都很努力", o: ["礼拜天还是平时无论，他都很努力。", "无论礼拜天还是平时，他很努力都。", "无论礼拜天还是平时，他都很努力。"], a: 2, g: "无论 mở đầu, tiếp theo là các khả năng (A 还是 B), mệnh đề sau dùng 都." }
  ],
  10: [
    { k: "dien", q: "她的普通话说＿很流利。", v: "Tiếng phổ thông của cô ấy nói rất lưu loát.", o: ["得", "的", "地"], a: 0, g: "Bổ ngữ trạng thái dùng 得: động từ + 得 + phần miêu tả. 的 dùng trước danh từ, 地 dùng trước động từ." },
    { k: "cau", q: "Câu nào đúng?", o: ["这篇文章他读很认真得。", "这篇文章他读得很认真。", "这篇文章他很读得认真。"], a: 1, g: "得 phải đi liền sau động từ 读, rồi mới tới phần miêu tả 很认真." },
    { k: "xep", q: "Sắp xếp: 得 / 他 / 汉字 / 写 / 很漂亮", o: ["他得汉字写很漂亮。", "他汉字写很漂亮得。", "他汉字写得很漂亮。"], a: 2, g: "Tân ngữ 汉字 có thể đưa lên trước động từ, nhưng 得 + 很漂亮 vẫn nằm ngay sau 写." }
  ],
  11: [
    { k: "dien", q: "＿这个答案以外，还有别的答案吗？", v: "Ngoài đáp án này ra, còn đáp án nào khác không?", o: ["因为", "无论", "除了"], a: 2, g: "除了……以外 nêu phần được kể thêm hoặc loại ra; mệnh đề sau thường có 还 hay 也." },
    { k: "cau", q: "Câu nào đúng?", o: ["除了小说以外，我还喜欢读杂志。", "小说以外除了，我还喜欢读杂志。", "除了以外小说，我还喜欢读杂志。"], a: 0, g: "以外 đứng ngay sau đối tượng: 除了 + đối tượng + 以外, còn 除了 luôn ở đầu mệnh đề." },
    { k: "xep", q: "Sắp xếp: 除了 / 这个问题 / 以外 / 我都能解释", o: ["除了这个问题以外，我都能解释。", "除了以外这个问题，我都能解释。", "这个问题以外除了，我都能解释。"], a: 0, g: "除了……以外 + 都 nghĩa 'ngoài… ra thì đều…'; 以外 luôn dính ngay sau đối tượng." }
  ],
  12: [
    { k: "cau", q: "Câu nào đúng?", o: ["他喝茶着看京剧。", "他着喝茶看京剧。", "他喝着茶看京剧。"], a: 2, g: "着 gắn ngay sau động từ (喝着) để chỉ hành động đang duy trì, làm nền cho việc chính 看京剧." },
    { k: "dien", q: "观众们站＿看演出。", v: "Khán giả đứng xem biểu diễn.", o: ["了", "过", "着"], a: 2, g: "着 chỉ trạng thái đang tiếp diễn, dùng cho cách thức của hành động. 了 và 过 nói về việc đã xảy ra." },
    { k: "xep", q: "Sắp xếp: 着 / 她 / 笑 / 跟观众打招呼", o: ["她笑跟观众着打招呼。", "她着笑跟观众打招呼。", "她笑着跟观众打招呼。"], a: 2, g: "Động từ chỉ cách thức + 着 đứng trước động từ chính, nên 着 không rời khỏi 笑." }
  ],
  13: [
    { k: "dien", q: "我的自行车＿邻居借走了。", v: "Xe đạp của tôi bị người hàng xóm mượn đi rồi.", o: ["被", "把", "向"], a: 0, g: "Câu chữ 被 chỉ bị động: vật chịu tác động + 被 + người gây ra + động từ + kết quả." },
    { k: "cau", q: "Câu nào đúng?", o: ["这条河污染被得很严重。", "这条河被污染得很严重。", "这条河被得污染很严重。"], a: 1, g: "Khi không nêu người gây ra, 被 đi liền với động từ 污染, rồi mới tới 得很严重." },
    { k: "xep", q: "Sắp xếp: 被 / 我的钥匙 / 孩子 / 弄丢了", o: ["我的钥匙孩子被弄丢了。", "被孩子我的钥匙弄丢了。", "我的钥匙被孩子弄丢了。"], a: 2, g: "Vật chịu tác động đứng đầu, rồi 被 + người gây ra, cuối cùng là động từ + kết quả 弄丢了." }
  ],
  14: [
    { k: "dien", q: "请你＿这些垃圾扔到垃圾桶里。", v: "Bạn bỏ mấy thứ rác này vào thùng rác nhé.", o: ["被", "给", "把"], a: 2, g: "Câu chữ 把 nhấn vào việc xử lí tân ngữ: 把 + tân ngữ + động từ + kết quả hoặc nơi đến." },
    { k: "cau", q: "Câu nào đúng?", o: ["妈妈把房间收拾了干净。", "妈妈把房间收拾干净了。", "妈妈收拾干净了把房间。"], a: 1, g: "Trong câu chữ 把, tân ngữ lên trước động từ và sau động từ phải có kết quả: 收拾干净了." },
    { k: "xep", q: "Sắp xếp: 把 / 他 / 我的名字 / 写错了", o: ["他把写错了我的名字。", "他把我的名字写错了。", "他写错了把我的名字。"], a: 1, g: "Trật tự là chủ ngữ + 把 + tân ngữ + động từ + 错了, tân ngữ nằm giữa 把 và động từ." }
  ],
  15: [
    { k: "dien", q: "我把钥匙弄＿了，进不了门。", v: "Tôi làm mất chìa khoá rồi, không vào cửa được.", o: ["丢", "完", "到"], a: 0, g: "弄丢 là động từ + bổ ngữ kết quả: 弄 là hành động, 丢 là kết quả. 完 và 到 không hợp nghĩa ở đây." },
    { k: "cau", q: "Câu nào đúng?", o: ["我把窗户干净擦了。", "我把窗户擦干净了。", "我把擦干净窗户了。"], a: 1, g: "Bổ ngữ kết quả 干净 đi ngay sau động từ 擦, rồi mới tới 了." },
    { k: "xep", q: "Sắp xếp: 好 / 他 / 修理 / 了 / 那个镜子", o: ["他好修理了那个镜子。", "他修理好了那个镜子。", "他修理了好那个镜子。"], a: 1, g: "Bổ ngữ kết quả 好 đi liền sau động từ 修理, rồi tới 了, cuối cùng mới là tân ngữ." }
  ],
  16: [
    { k: "cau", q: "Câu nào đúng?", o: ["许多植物森林里长着。", "森林里着长许多植物。", "森林里长着许多植物。"], a: 2, g: "Câu tồn hiện: nơi chốn (森林里) + động từ + 着 + số lượng + danh từ, và 着 đi liền sau động từ." },
    { k: "dien", q: "桌子上＿着一本杂志。", v: "Trên bàn có để một cuốn tạp chí.", o: ["放在", "被放", "放"], a: 2, g: "Câu tồn hiện dùng động từ + 着, bạn không chen 在 hay 被 vào giữa." },
    { k: "xep", q: "Sắp xếp: 着 / 门口 / 站 / 几个人", o: ["门口站几个人着。", "门口着站几个人。", "门口站着几个人。"], a: 2, g: "Câu tồn hiện là nơi chốn + động từ + 着 + người hay vật, nên 着 không tách khỏi 站." }
  ],
  17: [
    { k: "dien", q: "我去＿北京，那里的科技发展很快。", v: "Tôi từng đến Bắc Kinh, khoa học kĩ thuật ở đó phát triển rất nhanh.", o: ["过", "着", "的"], a: 0, g: "过 chỉ kinh nghiệm đã từng làm. 着 chỉ trạng thái đang duy trì nên không dùng cho kinh nghiệm." },
    { k: "cau", q: "Câu nào đúng?", o: ["我以前学过这个技术。", "我以前过学这个技术。", "我以前学这个技术过。"], a: 0, g: "过 đứng ngay sau động từ 学 và trước tân ngữ, không hạ xuống cuối cũng không đưa lên trước động từ." },
    { k: "xep", q: "Sắp xếp: 了 / 我 / 忘记 / 手机的密码", o: ["我忘记了手机的密码。", "我忘记手机的了密码。", "我了忘记手机的密码。"], a: 0, g: "了 đặt ngay sau động từ 忘记, rồi mới tới tân ngữ 手机的密码." }
  ],
  18: [
    { k: "dien", q: "这道菜越吃＿好吃。", v: "Món này càng ăn càng ngon.", o: ["最", "越", "更"], a: 1, g: "Cặp 越……越…… phải đủ hai chữ 越; 更 và 最 không dùng thành cặp như vậy." },
    { k: "cau", q: "Câu nào đúng?", o: ["天气越来越热，我喜欢越来越喝果汁。", "天气越来越热，我越来越喜欢喝果汁。", "天气越来热越，我越来越喜欢喝果汁。"], a: 1, g: "越来越 là khối cố định đứng ngay trước tính từ hoặc động từ chỉ cảm xúc, không tách rời." },
    { k: "xep", q: "Sắp xếp: 糖 / 放得 / 越 / 多 / 越 / 甜", o: ["糖放得越多越甜。", "糖放得多越越甜。", "糖越放得多越甜。"], a: 0, g: "Sau 放得 là cặp 越多越甜: mỗi chữ 越 đứng trước một tính từ." }
  ],
  19: [
    { k: "dien", q: "路上堵车，我们来＿及了。", v: "Trên đường tắc xe, chúng tôi không kịp nữa rồi.", o: ["别", "不", "没"], a: 1, g: "来不及 nghĩa 'không kịp': phủ định chèn 不 vào giữa, còn 来得及 với 得 là 'còn kịp'." },
    { k: "cau", q: "Câu nào đúng?", o: ["航班推迟了两个小时。", "两个小时航班推迟了。", "航班了推迟两个小时。"], a: 0, g: "了 đi liền sau động từ 推迟, còn thời lượng 两个小时 đứng ở cuối câu." },
    { k: "xep", q: "Sắp xếp: 我们 / 明天早上八点 / 从北京 / 出发", o: ["我们明天早上八点从北京出发。", "我们从北京明天早上八点出发。", "明天早上八点我们出发从北京。"], a: 0, g: "Trật tự trạng ngữ là thời gian trước, nơi chốn (从北京) sau, rồi mới tới động từ 出发." }
  ]
};
