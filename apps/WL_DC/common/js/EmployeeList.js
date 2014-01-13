/**
 * 
 */
var employeeList=[];
function getEmployeeList(){
	alert(cookies.toString());
	var invocationData = {  
            adapter : 'meal',
            procedure : 'getAllUser',
            parameters:cookies,
    };
	WL.Client.invokeProcedure(invocationData, {
		onSuccess:getEmployeeListCallback,
		onFailure:failure
	});
};

function getEmployeeListCallback(result)
{
	if(result.invocationResult.success){
		var html=[];
		employeeList=result.invocationResult.result;
		html.push('<li id="listitem"><a href="Employee.html">添加新员工</a></li>');
		html.push('<li data-role="list-divider" id="divider"></li>');
		for(var i = 0, l = result.invocationResult.result.length; i < l; i++) {
		    var e = result.invocationResult.result[i];
			html.push('<li >');
			html.push('<a href="Employee.html#'+e.username+'" id="'+e.username+'">');
			html.push(e.truename);
			html.push('</a>');
			html.push('</li>');
		}
		$('#lstEmployee').html(html.join(""));
		$("div[data-role=content] ul").listview('refresh');
	}
	else{
		WL.SimpleDialog.show('提示',result.invocationResult.message,[{
			text:'确定'
		}]);
	}
}
getEmployeeList();

