// console.log('Hello World......');

// var n=2
// function squr(num){
//     var ans=num*num
//     return ans
// }
// var squr2=squr(n)
// var squr3=squr(5)
// console.log(squr2)
// console.log(squr3);

// var a = 20;
// function b() {
//   console.log("Hello world");
// }
// b();

// let v=25

// let g=20
// if(v===undefined){
//     console.log('v is undefinerd');
// }
// else{
//     console.log('v is not undefined');
// }

const raduis=[3,4,7,8,6]
const area=function(raduis){
  return Math.PI*raduis*raduis
}
const curcufrence=function(raduis){
  return 2*Math.PI*raduis
}
const Diameter=function(raduis){
  return 2*raduis
}
const Calulate=function(raduis,logic){
  const output=[]
  for(let i=0;i<raduis.length;i++){
    output.push(logic(raduis[i]))
  }
  return output;
}
console.log(Calulate(raduis,area))
console.log(Calulate(raduis,curcufrence))
console.log(Calulate(raduis,Diameter))

const res=raduis.map(area)
console.log(res)