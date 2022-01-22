// 型を指定しなくても、
// TypeScriptは型推論をしている
const person={
  name:'masaki',
  age:50
}

// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "masaki",
//   age: 50,
// };
console.log(person.name);
