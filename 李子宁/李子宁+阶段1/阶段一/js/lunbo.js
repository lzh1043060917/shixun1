var index2 = 0;/*��ʼ��һ������ ָ���±�*/
//�����
$(".tab-btn .btn").click(function () {
    index2 = $(this).index();//��ȡ�����Ԫ���±�
    $(this).addClass("active").siblings().removeClass("active");
    $(".item").eq(index2).fadeIn().siblings().fadeOut();
});
//����л�Ч��
$(".lr-tab .right").click(function () {
    index2 ++;
    if (index2 >4){ index2 = 0;}
    $(".item").eq(index2).fadeIn().siblings().fadeOut();
    $(".tab-btn .btn").eq(index2).addClass("active").siblings().removeClass("active");

});
$(".lr-tab .left").click(function () {
    index2 --;
    if(index2 < 0){index2 = 4;}
    $(".item").eq(index2).fadeIn().siblings().fadeOut();
    $(".tab-btn .btn").eq(index2).addClass("active").siblings().removeClass("active");

});
var time2 = setInterval(function () {
    index2 ++;
    if (index2 >4){ index2 = 0;}
    $(".item").eq(index2).fadeIn().siblings().fadeOut();
    $(".tab-btn .btn").eq(index2).addClass("active").siblings().removeClass("active");

},4000); //��ʱ�� �ظ�
