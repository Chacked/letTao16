// 分类管理效果
$(".category").click(function() {
	$(".cate").slideToggle();
})

// 关闭侧边栏效果
$(".switch").click(function(){
	$(".lt-left").toggleClass("now");
	$(".lt-right .head").toggleClass("now");
	$(".lt-right .nav").toggleClass("now");
  $(".main").toggleClass("now");
})

// 退出功能
$(".logout").click(function() {
	$('.modal').modal("show");
})

$("#exit").click(function(){
	  $.ajax({
      type:"get",
      url:"/employee/employeeLogout",
      success:function(data) {
        if(data.success){
          //退出成功，才跳转到登录页面
          location.href = "login.html";
        }
      }
    });

})