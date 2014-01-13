/**
 */
function buildEmployee()
{
	if(userinfo.username){
		$('#e_username').val(userinfo.username);
		$('#e_username').attr("disabled","disabled");
		$('#e_truename').val(userinfo.truename);
		$('#e_tel').val(userinfo.tel);
		$('#e_is_active').attr('checked',userinfo.is_active).checkboxradio("refresh");
		$('#e_title').text("员工修改");
	}else{
		$('#e_username').val("");
		$('#e_truename').val("");
		$('#e_tel').val("");
		$('#e_title').text("员工添加");
	}
	
	
	
}
function saveUserInfo(info){
	var invocationData = {
            adapter : 'meal',
            procedure : 'saveUserInfo',
            parameters:[info,cookies],
    };
	WL.Client.invokeProcedure(invocationData, {
		onSuccess:saveUserInfoCallback,
		onFailure:failure
	});
}
function saveUserInfoCallback(result){
	if(result.invocationResult.success){
		WL.SimpleDialog.show('提示','成功',[{
			text:'确定',
			handler :function(){
				$.mobile.changePage("EmployeeList.html");
			},
		}]);
	}
}
$("#btn_saveUserInfo").click(function() {
	var info={};
	if(userinfo.username){
		info['username']=userinfo.username;
	}
	else{
		info['username']=$('#e_username').val();
	}
	info['truename']=$('#e_truename').val();
	info['tel']=$('#e_tel').val();
	info['is_active']=$('#e_is_active').val();
	saveUserInfo(info);
});
$("#Employee").on( "pageshow", function( event) { 
	buildEmployee();
});



