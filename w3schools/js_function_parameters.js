function myFunction(x,y){
      if (y===undefined){
		y=0;
	  }
	  return x*y;
}

document.getElementById("demo").innerHTML=myFunction(3,45);
//find max number
function findMax(){
	var i;
	var max=-Infinity;
	for(i=0;i<arguments.length;i++){
		if(arguments[i]>max){
			max=arguments[i];
		}		
	}
	return max;
}
document.getElementById("demo1").innerHTML=findMax(4,56,8);

function sumAll(){
	var i,sum=0;
	for(i=0;i<arguments.length;i++){
		sum+=arguments[i];
	}
	return sum;
}
document.getElementById("demo2").innerHTML=sumAll(3,4,6,45);
document.getElementById("demo3").innerHTML=myFunction(3,4);
document.getElementById("demo4").innerHTML=window.myFunction(3,4);

function myFunctionThis(){
	return this;
}
document.getElementById("demo5").innerHTML=myFunctionThis();

var myObject = {
	firstName:"John",
	lastName: "Doe",
	fullName: function(){
		return this.firstName+" "+this.lastName;
	}
}
var myObject1 = {
	firstName:"John",
	lastName: "Doe",
	fullName: function(){
		return this;
	}
}
document.getElementById("demo6").innerHTML=myObject.fullName();
document.getElementById("demo7").innerHTML=myObject1.fullName();

function myFunction1(arg1,arg2){
	this.firstName=arg1;
	this.lastName=arg2;
}

var x = new myFunction1("Daniyar","Myrzakanov");
document.getElementById("demo8").innerHTML=x.lastName+" "+x.firstName;