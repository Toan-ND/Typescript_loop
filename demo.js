var count = 20;
if (count > 0) {
    count--;
}
else {
    count = 0;
}
console.log(count);
console.log("++i");
var keys = "abcdef";
for (var i = 0; i < keys.length; i++) {
    console.log(keys[i]);
    console.log(++i);
}
console.log("i++");
for (var i = 0; i < keys.length; i++) {
    console.log(keys[i]);
    console.log(i++);
}
//
// console.log("while loop");
// let i = 0;
// while (i < keys.length){
//     console.log(keys[i]);
//     i++;
// }
//
// console.log("for-or loop");
// for(const items of keys){
//     console.log(items);
// }
//
// console.log("for- in loop");
// const user = {
//     name: "boob",
//     age: 55
// };
// for (const key in user){
//     console.log(`${key}:${user[key]}`);
// }
