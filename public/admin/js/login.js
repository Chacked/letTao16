// 表单校验
$("form").bootstrapValidator({
	feedbackIcons: {
    valid: 'glyphicon glyphicon-ok',
    invalid: 'glyphicon glyphicon-remove',
    validating: 'glyphicon glyphicon-refresh'
  },
  fields:{
  	// 校验用户名
  	username:{
  		validators:{
  			notEmpty:{
  				message:"用户名不能为空"
  			},
  			stringLength:{
  				min:4,
  				max:12,
  				message:"用户名长度为6-12位"
  			},
  			falseMessage:{
  				message:"用户名或密码不正确"
  			}
  		}
  	},

	password:{
	  		validators:{
	  			notEmpty:{
	  				message:"用户名不能为空"
	  			},
	  			stringLength:{
	  				min:6,
	  				max:12,
	  				message:"用户名长度为6-12位"
	  			},
	  			falseMessage:{
  				message:"用户名或密码不正确"
  			}
	  		}
	  	}
  }
})


// 重置表单
var validator = $("form").data('bootstrapValidator'); 

$(".btn-default").click(function(){
	validator.resetForm();
})

// 表单校验成功发送ajax请求
// $("form").on("success.form.bv",function(e) {
// 	// 阻止浏览器默认跳转行为
// 	 e.preventDefault();
// 	// 提交登录信息


// })

	var formData;
$(".btn-primary").click(function() {
	formData = $("form").serialize();
	$.ajax({
		url:"/employee/employeeLogin",
		type:"post",
		data:formData,
		success:function(data) {
			if (data.success) {
				location.href = "index.html";
			}else if(data.error === 1000 ) {
				
				 $("form").data('bootstrapValidator').updateStatus("username", "INVALID" , "falseMessage");
				
			}else {
				 $("form").data('bootstrapValidator').updateStatus("password", "INVALID" , "falseMessage");
			}

		}

	})
})
