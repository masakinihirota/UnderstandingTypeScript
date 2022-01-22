const arr = [3, 5, 7];
arr.foo3 = ["hello"];

for (let i in arr) {
  console.log(i); // "0", "1", "2", "2" が出力される
}

// for (let i of arr) {
//   console.log(i); // 3, 5, 7 が出力される
// }
