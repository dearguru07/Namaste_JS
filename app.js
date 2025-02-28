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

const radius = [2, 5, 8, 4, 3];

// const area = function (radius) {
//   return ;
// };

const Calculate = function (radius) {
  const output = [];
for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};
console.log(Calculate(radius));


// let radius = [3, 4, 8, 5];

// function CalculateAre(radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// }
// console.log(CalculateAre(radius));