const combine = (input1: number | string, input2: number | string) => {
  let result;
  if (typeof input1 === "number" && typeof input2 === "string") {
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

const combinedAges = combine(12, 40);
console.log(combinedAges);

const conbinedNames = combine("masa", "hiro");
console.log(conbinedNames);
