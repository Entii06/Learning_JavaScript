//thực thi hàm ngay lập tức
const sum = (a, b) => {
  return a + b;
};

console.log(sum(5, 10));

const sum_1 = (a, b, c) => {
  console.log("run before");
  if (typeof a !== "number") {
    console.log("error");
    return;
  }
  console.log("run after");
  return a + b + c;
};

console.log(sum_1(1, 2, 3));
