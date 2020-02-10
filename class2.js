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


var myfunc=function(d,num){
num=String(num)
for(let i=0; i<num.length; i++){
if(num[i]==d){
return 'Yes';
}
}
return 'No';
}
console.log(myfunc(5,2463))
console.log(myfunc(4,6))
console.log(myfunc(8,45689))

var sort=function(a,b,c){
let arr=[a,b,c]

return arr.sort(function(a,b){return a - b});
}

console.log(sort(45,26,78));
console.log(sort(-23,-456,0));


var sort=function(st){
st=String(st);
let arr=st.split('').sort(function(a,b){return a - b})

mn=Number(arr[0])
mx=Number(arr[arr.length-1])

return mx-mn;
}

console.log(sort(4593653));
