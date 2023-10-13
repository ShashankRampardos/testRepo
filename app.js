function oddOrEvenFactory(request){
  if(request=="odd"){
    return function(n){
        console.log(!(n%2==0));
    }
  }else if(request=="even"){
    return function(n){
        console.log(n%2==0);
    }
  }else {
    console.log("wrong request");
  }

}
oddOrEvenFactory("even")(2);

// function unique(str){
//     let temp="";
//      for(let i=0;i<str.length;i++){
//        let ch=str[i];
//         temp=str.replace(ch);
//         str=temp;
//      }
//      return str;
// }

function unique(str){
    let result="";
    for(let i=0;i<str.length;i++){
        let ch=str[i];
        if(result.indexOf(ch)==-1)
          result+=ch;
    }
    return result;
}
let s=unique("abba");
console.log(s);
let large=function(name){
  let str=name[0];
  for(let i=0;i<name.length;i++){
    if(str.length<name[i].length)
      str=name[i];
  }
  return str;
}
let arr=["India","SriLanka","UnitedStatesOfAmerica","UAE","China","etc"];
console.log(large(arr));
function vovel(str){
  let cnt=0;
  for(let i=0;i<str.length;i++){
    if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"||str[i]=="A"||str[i]=="E"||str[i]=="I"||str[i]=="O"||str[i]=="U")
      cnt++;
  }
  return cnt;
}
console.log(vovel("abraKdabera"));

function randomWala(i,j){
  let f;
  while(true){
   f=Math.floor(Math.random()*j)+i;
   if(f>j)
      continue;
   else 
     break;
   }
   return f; 

}
let m=Math.floor(Math.random()*10);

function largArray(arr,num){
  let a=arr.slice();
  let cnt=0;
  
  for(let i=0;i<arr.length;i++){
    if(num>arr[i]){
     // a.splice(i-cnt,1);
      //cnt++;
     a.splice(a.indexOf(arr[i]),1);
    }
  }
  return a;
}
let p=[2,4,7,6];
console.log(largArray(p,7));

let obj={
  a:5,
  b:4,
  add: function(){console.log(this.a+this.b);}

}
let func = (a,b)=>a+b;

// let id=setInterval(prnt=()=>{console.log("hello");console.log(id);},2000);

// let id2=setInterval(prnt=()=>{console.log("gallo");console.log(id2);},2000);

let avgA=(arr)=>{ let avg=0;
  for(elem of arr){
    avg=avg+elem;
  }
  return avg/arr.length;
}
let isEven=(n)=>!(n%2!=0);

const object = {
  message: 'Hello, World!',
  logMessage:() =>{
    console.log(this);
  }
};

setTimeout(object.logMessage, 1000);
 
let aa=[5,4,3,2,1];
aa.forEach(function(val,ind,arr){
  console.log(val,ind,arr);
})
let v=aa.map(function(num,ind,arr){
  return num*ind;
})
let w=aa.filter(function(val,num,arr){
  return num*val;
})

let max=aa.reduce((max,elem)=>{
  if(max<elem)
  return elem;
  else 
  return max;
})
function print(a,...args){
  console.log(`a:${a}`);
  console.log(args);
}
print(1,2,3,4,5,6,7);

const double=(arr,...args)=>[...arr,...args.map((v)=>v*2)];
double([1,2,3,4,5],4,5,3,6,8);