/**
 * 
 */
var currentPage={};
var pagesHistorys = [];
var currentPages = [];
currentPage.init = function(){
	$("#content").load("EmployeeList.html", function(){
		currentPages[0].init();
	});
};

