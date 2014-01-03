/**
 * 
 */
$('#btn_login').click(function(){
	var username = $('#username').val();
	var password = $('#password').val();
	var invocationData = {  
            adapter : 'login',  
            procedure : 'login',  
            parameters  : [username,password]  
    };
	WL.Client.invokeProcedure(invocationData, {
		onSuccess:loginCallback,
		onSuccess:failure
	});
});

function loginCallback(result)
{
	alert('ok');
	alert(result.parseJSON());
}
function failure(result)
{
	alert('failure');
	alert(result.parseJSON());
}