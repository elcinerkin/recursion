var stringifyJSON = function (obj) {
  var returnObject;

		String.prototype.replaceAt=function(index, character) {
    		return this.substr(0, index) + character + this.substr(index+character.length);
		}


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
	  	else { 															//type is object
	  		if(obj) {
		  		var newObj={};
		  		for(var key in obj){
		  			newObj[insideStringify(key)] = insideStringify(obj[key]);
		  		}
		  		var stringified ="{";
		  		for(var s in newObj)
		  			stringified += s + ":" + newObj[s] + ",";
		  		//console.log(stringified.replaceAt(stringified.length-1, "}"));
		  		var finalString = stringified.substr(0, stringified.length-1);
		  		finalString += "}";
		  		//console.log(stringified);
		  		returnObject = finalString;
		  	}
		  	else returnObject ={};
		  }
	  }	  
	  else
	  	returnObject= undefined;

	  	//newObj.toString = function objToString(){	
	  	//return ;
	  	//} 
  	return returnObject;
  }
  returnObject =insideStringify(obj);
  return returnObject;
};
