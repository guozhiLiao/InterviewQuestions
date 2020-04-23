function findRepeat(arr1,arr2){
   var repeatItems = [];
   arr1.forEach(element => {
     if(
         arr2.find(target=>{
             return target===element
         })
         ){
         repeatItems.push(element)
     }
   });
   return repeatItems
}

//test
var obj={
    key:'value'
}
var arr1 = [1,2,'3',4,obj,null,undefined]
var arr2 = [1,'3',obj,57,9,undefined]

var res = findRepeat(
    arr1,
    arr2
)
console.log(res)