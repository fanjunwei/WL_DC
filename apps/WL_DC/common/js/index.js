/**
 * 
 */
$('#btn_login').click(function(){
	var username = $('#username').val();
	var password = $('#password').val();
	var invocationData = {  
            adapter : 'client',  
            procedure : 'login',  
            parameters  : [username,password]  
    };
	WL.Client.invokeProcedure(invocationData, {
		onSuccess:loginCallback,
		onFailure:failure
	});
});

function loginCallback(result)
{
	saveCookies(result.invocationResult);
	if(result.invocationResult.success){
		$.mobile.changePage("EmployeeList.html");
	}
	else{
		WL.SimpleDialog.show('提示',result.invocationResult.message,[{
			text:'确定'
		}]);
	}
}
function failure(result)
{
	WL.SimpleDialog.show('提示','网络错误',[{
		text:'确定'
	}]);
}