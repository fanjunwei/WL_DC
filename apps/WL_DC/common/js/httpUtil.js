/**
 * 
 */
var cookies = {};

function saveCookies(responseJson) {

	if (responseJson && responseJson.responseHeaders
			&& responseJson.responseHeaders['Set-Cookie']) {
		var setcookie = responseJson.responseHeaders['Set-Cookie'];
		var cs = setcookie.split(';');
		for (var i = 0, l = cs.length; i < l; i++) {
			var c = cs[i].replace(/(^\s*)|(\s*$)/g, '');
			if (c.indexOf('=') != -1) {
				var keyvalue = c.split('=');
				if (keyvalue[0] != 'expires' && keyvalue[0] != 'Path'
						&& keyvalue[0] != 'Max-Age' && keyvalue[0] != 'domain') {
					cookies[keyvalue[0]] = keyvalue[1];
				}

			}
		}
	}
}
function QueryString(fieldName) {
	var urlString = document.location.search;
	if (urlString != null) {
		var typeQu = fieldName + "=";
		var urlEnd = urlString.indexOf(typeQu);
		if (urlEnd != -1) {
			var paramsUrl = urlString.substring(urlEnd + typeQu.length);
			var isEnd = paramsUrl.indexOf('&');
			if (isEnd != -1) {
				return paramsUrl.substring(0, isEnd);
			} else {
				return paramsUrl;
			}
		} else {
			return null;
		}
	} else {
		return null;
	}
}