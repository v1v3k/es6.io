var a = [1,2,3,4,5,6];
b = a.splice(1,4);
console.log(b);  
console.log(a);  



a = [1,2,3,4,5,6];
b = a.splice(1,4,["123","456"]);
console.log(b);  
console.log(a);  


a = [1,2,3,4,5,6];
b = a.splice(1,4,123,456);
console.log(b);  
console.log(a);  