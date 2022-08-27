//                                                                    პირველი
const numbers = [-1, 5, 9, 17, -21, 23, -2];
const positiveNum = numbers.filter ((i)=> i >= 0 );
console.log(positiveNum)
const totalNum = positiveNum.reduce((total,currentValue)=>{
    return total + currentValue;
});
console.log(totalNum)
//                                                                     მეორე
const letter = ["a","b","b","a","b","c","b"];
  const newArray = letter.reduce(function(prev,cur){
    prev[cur] = (prev[cur]||0)+1;
    return prev;
  },{});
console.log(newArray);
// მე-12 ხაზი ზეპირად ვიცი 
//                                                                     მესამე
// class Car {
//     constructor(brand,model,speed,motion) {
//         this.brand = brand;
//         this.model = model;
//         this.speed =
//         this.motion= 
// ?? აქ პირობა ვერ გავიგე 

//                                                                     მეოთხე

// const x = 5;
// const y  = 10;
// function addAsync (x,y){
//     return new Promise ((resolve, reject)=>  {
//         if ( x>3 && y > 4){
//             resolve("hello");
//         }else {
//             reject("error");
//     }
// })

// .then((resolve) =>
//     console.log(resolve)
// )
// .catch((error)=>
//     console.log(error));
// }; ეს ჩანაწერი მგონი არასწორია

const x = 5;
const y = 11;
const addAsync = new Promise ((resolve, reject) => {
        if ( x>3 && y > 4){
            resolve("hello");
        }else {
            reject("error");
    }
})

.then((resolve) =>
    console.log(resolve)
)
.catch((error)=>
    console.log(error));

   

