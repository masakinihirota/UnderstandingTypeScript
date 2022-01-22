const person2 = {
  name: "masaki",
  age: [50],
  hobbies: ["sports", "cooking"],
};

let favoriteActivities: string[];

favoriteActivities = ["sports"];

for (const hobby of person2.hobbies) {
  console.log(hobby);
}
for (const hobby of person2.name) {
  console.log(hobby);
}
for (const hobby of person2.age) {
  console.log(hobby);
}
