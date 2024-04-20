// let users = [
//     { id: 1, uname: 'Fozil' },
//     { id: 2, uname: 'Odil' },
//     { id: 3, uname: 'Alibek' },
//     { id: 4, uname: 'Elyor' }
// ];

// function result(text) {
//     return users.filter((v) => v.uname.includes(text));
// }

// console.log(result('i'));



// let result = [
//     {id: 1, cost: 500},
//     {id: 2, cost: 700},
//     {id: 3, cost: 1000},
//     {id: 4, cost: 100}
// ] 

// function totalCost(arr) {
//     let total = 0;
//     for (let item of arr) {
//         total += item.cost;
//     }
//     return total;
// }

// let total = totalCost(result);
// console.log("Jami cost:", total);





const word = {name: "John", age: 30, city: "New York"};

for (const key in Object) {
  console.log(Object[key]);
}

console.log(Object.keys(word));