let myfunc=function(a,b,c){
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


let myfunc=function(d,num){
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

let myfunc=function(a){
let st=String(a);
    if (st.length<=1){
        return a;
    }
let res=st.substring(st.length-1)+st.substring(1,st.length-1)+st.substring(0,1);
return Number(res);

}

console.log (myfunc(2));
console.log (myfunc(13));
console.log (myfunc(895796));



let sort=function(a,b,c){
let arr=[a,b,c]

return arr.sort(function(a,b){return a - b});
}

console.log(sort(45,26,78));
console.log(sort(-23,-456,0));


let sort=function(st){
st=String(st);
let arr=st.split('').sort(function(a,b){return a - b})

mn=Number(arr[0])
mx=Number(arr[arr.length-1])

return mx-mn;
}

console.log(sort(4593653));


let myfunc=function(a,b,c){

    let D=Math.pow(b,2)-4*a*c;
    
    if (a==0){
      return "Enter valid constants";
    }
    
    if(D<0){
      return "Solution does not exists";
    }
    
    if(D==0){
    return "Solution is "+(-b/(2*a));
    }
    
    return "Solutions are "+((-b+Math.sqrt(D))/(2*a))+" and "+((-b-Math.sqrt(D))/(2*a));
    

}

console.log (myfunc(1,2,1));
console.log(myfunc(0,4,-5));
console.log(myfunc(3,-8,12));
console.log (myfunc(5,-13,6));


let myfunc=function(type,a,b){
    
    if (a<=0||b<=0){
        return "Please enter only positives";
    }
    let area=0;
    if (type== "triangle"){
        area= a*b/2;
    }
    else{
    area=a*b;
    }
   return "Square of the "+ type+ " is "+ area;
}

console.log (myfunc("triangle",6,7));
 console.log (myfunc("rectangle",8,5));
 console.log (myfunc("triangle",0,5));


