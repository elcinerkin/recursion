// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	var body = document.body;
	var child = body.childNodes;
	var returnObject=[];
	if(className.length>0) {
		for(var i=0; i<child.length; i++) {
			if(child[i].classList.contains(className)) {
				returnObject.push(child[i]);
			}
		}
	}
	else returnObject = null;

	return returnObject;
};
