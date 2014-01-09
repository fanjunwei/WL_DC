/**
 *
 */ 
var cookies=[];

function saveCookies(responseJson){
	
	if(responseJson && responseJson.responseHeaders && responseJson.responseHeaders['Set-Cookie'] ){
		var setcookie=responseJson.responseHeaders['Set-Cookie'];
		var cs = setcookie.split(';');
		for(var i=0,l=cs.length;i<l;i++){
			var c = cs[i].replace(/(^\s*)|(\s*$)/g, '');
			if( c.indexOf('=')!=-1){
				var keyvalue=c.split('=');
				if(keyvalue[0]!='expires'
					&&keyvalue[0]!='Path'
					&&keyvalue[0]!='Max-Age'
					&&keyvalue[0]!='domain'){
					var kv={};
					kv[keyvalue[0]]=keyvalue[1];
					cookies.push(kv);
				}
				
			}
		}
	}
}