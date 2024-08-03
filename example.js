const os = require('os');
const fs = require('fs');
const _ = require('lodash');
// console.log("welcome");
// function add(a,b){
//     return a+b;
// }

// var res = add(10,20);
// console.log("result :" + res);

// const sub = function(a,b){
//     return a-b;
// }
// var res1 = sub(20,10);
// console.log("result : "+ res1);

// const mul = (a,b) =>{
//     return a*b;
// }
// var res2 = mul(3,5);
// console.log("result: "+ res2);

// var divide = (a,b)=>a/b
// var res3 = divide(15,3);
// console.log("results:" + res3);


//callback
function callback(){
    console.log("it a callback function");
}

const add = function(a,b,cfunc){
    var result = a + b;
    console.log("result: " + result);
    cfunc();
}
add(5,10,callback);


//callback
const sub = function(a,b,cfunc){
    var result = a - b;
    console.log("result: " + result);
    cfunc();
}

sub(10,9,function(){                                  //inline function define ho gya
    console.log("it a callback function 2");
});

sub(20,1, () => console.log("its a callback 3"));    //arrow function

(function(){                                         //automatically call
    console.log("Hlw");
})();


//user module

var user = os.userInfo();
console.log(user);
console.log(user.username);

//file module

// fs.appendFile('greet.txt',"Hi "+user.username +" ! \n" ,()=>{console.log("Added succesfully")}); 

//lodash
var arrayname = ["AK","Kumar","Sharma","Kumar","kumar",1,3,2,2,1,3,5,"AL","AK"];          //case sensotive

var filter = _.uniq(arrayname);
console.log(filter);

console.log(_.isString('hii'));
console.log(_.isString(1));

//json to obj
var json = '{"value": 45,"idli" : "tasty","dosa" :" with sambar"}';
var jsontobj = JSON.parse(json);
console.log(jsontobj);

//obj to json
var jsonString = JSON.stringify(jsontobj);
console.log(jsonString);