//primitie types
let a =1;
let b =2;
// reference types
let c = [3,4,5];
// sumMapping return type Array
function sumMapping(arr,operand){
  let temp = arr.map(value => value + operand);
  // .map() method deep copy
  return temp;
}
// totalValue return type Array
function typeCheker(arr,type){
  return arr.filter((value)=> typeof value === type);
  // .filter() method deep copy
}

//higher order function : outerFunc
function outerFunc(arr,type,operand){
  type = typeof type === "string" ?
  type : console.error("arguments[1] parameter must be a string");
  let arrTypeCheckArray = typeChecker(arr,type);
  let tempArray = sumMapping(arrTypeCheckArray,operand);
  let result = tempArray.reduce((prev,curr)=>{
    return prev + curr
  });
  return result;
};
//funtion call
let test = outerFunc(c,"number",b);
console.log(test);