// 分类管理效果
$(".category").click(function() {
	$(".cate").slideToggle();
})

// 关闭侧边栏效果
$(".switch").click(function(){
	$(".lt-left").toggleClass("now");
	$(".lt-right .head").toggleClass("now");
	$(".lt-right .nav").toggleClass("now");
})

// 侧边栏管理点击效果
