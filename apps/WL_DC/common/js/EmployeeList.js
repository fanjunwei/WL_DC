/**
 * 
 */
var employeeList=[];
var userinfo={};
function getEmployeeList(){
	var invocationData = {  
            adapter : 'meal',
            procedure : 'getAllUser',
            parameters:[cookies],
    };
	WL.Client.invokeProcedure(invocationData, {
		onSuccess:getEmployeeListCallback,
		onFailure:failure
	});
};
function userItemSelect(e){
	var username=e.id.substring(2);
	if(username){
		for(var i = 0, l = employeeList.length; i < l; i++) {
		    var e = employeeList[i];
		    if(e.username==username){
		    	userinfo=e;
		    	$.mobile.changePage("Employee.html");
		    	return;
		    }
		}
	}
}
function getEmployeeListCallback(result){
	
	if(result.invocationResult.success){
		var html=[];
		employeeList=result.invocationResult.result;
		html.push('<li id="listitem"><a href="Employee.html">添加新员工</a></li>');
		html.push('<li data-role="list-divider" id="divider"></li>');
		for(var i = 0, l = employeeList.length; i < l; i++) {
		    var e = employeeList[i];
			html.push('<li >');
			html.push('<a href="" onclick="userItemSelect(this);" id="u_'+e.username+'">');
			html.push(e.truename);
			html.push('</a>');
			html.push('</li>');
		}
		$('#lstEmployee').html(html.join(""));
		$("#lstEmployee").listview('refresh');
	}
	else{
		WL.SimpleDialog.show('提示',result.invocationResult.message,[{
			text:'确定'
		}]);
	}
}
$("#EmployeeList").on( "pageshow", function( event ) { getEmployeeList(); });

