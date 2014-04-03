var stringifyJSON = function (obj) {
  var returnObject;

  var insideStringify = function(obj) {  
	  if(typeof obj === "string")										//type is string
	  	returnObject = '"' + obj + '"';  
	  else if ((typeof obj === "boolean") || (typeof obj === "number")) //type is number || boolean
	  	returnObject = obj.toString();	  
	  else if((typeof obj ==="undefined") || (typeof obj === "null"))   //obj is empty
	  	returnObject = null;
	  else if (typeof obj === "object"){ 								//type is array 
	  	if(Object.prototype.toString.call(obj) === '[object Array]'){
	  		if(obj.length > 0) {
	  			var temp=[];
	  			for(var i=0; i<obj.length; i++)
	  				temp.push(insideStringify(obj[i]));
		  		returnObject = "[" + temp + "]";
	  		}
	  		else returnObject = '[]';
	  	}
	  	else { 			
	  		console.log(typeof obj);										//type is object
	  		if(Object.keys(obj).length!==0) {
		  		var newObj={};
		  		for(var key in obj){
		  			newObj[insideStringify(key)] = insideStringify(obj[key]);
		  		}
		  		var stringified ="{";
		  		for(var s in newObj)
		  			stringified += s + ":" + newObj[s] + ",";
		  		var finalString = stringified.substr(0, stringified.length-1);
		  		finalString += "}";
		  		returnObject = finalString;
		  	}
		  	else returnObject ={};
		  }
	  }	  
	  else
	  	returnObject= undefined;
 
  	return returnObject;
  }
  returnObject =insideStringify(obj);
  return returnObject;
};
