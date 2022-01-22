enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

let obj4 = {
  age: 30,
  name4: ["文字列", 123, 222],
  role: Role.ADMIN,
};

if (obj4.role === Role.ADMIN) {
  console.log("管理者ユーザー");
}

// console.log(obj3.name4);

// // console.log(obj3);
// // console.log(obj3.name4);

// obj3.name4 = ["aiu", 123, 555];
