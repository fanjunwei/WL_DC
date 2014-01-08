/**
 *
 */ 
var cookies=[];

function saveCookies(responseJson){
	if(responseJson && responseJson.responseHeaders && responseJson.responseHeaders.Set-Cookie){
		cs = responseJson.responseHeaders.Set-Cookie.split(';');
		for(var i=0,l=cs.length;i<l;i++){
			c = cs[i];
			if( c.indexOf('=')!=-1){
				var keyvalue=c.split('=');
				if(keyvalue[0]!='expires'
					&&keyvalue[0]!='path'
					&&keyvalue[0]!='domain'){
					var kv={};
					kv[keyvalue[0]]=keyvalue[1];
					cookies.push(kv);
				}
				
			}
		}
	}
}