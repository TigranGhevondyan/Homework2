var myfunc=function(a,b,c){
if(a===0||b===0||c===0){
return "unsigned";
}
let count=0;
if(a<0){
count++;
}
if(b<0){
count++;
}
if(c<0){
count++;
}
if(count % 2!=0){
return '-';
}
else{
return'+';
}
}
console.log(myfunc(-14,5,0))
console.log(myfunc(-8,9,-6))
console.log(myfunc(4,19,-2))
