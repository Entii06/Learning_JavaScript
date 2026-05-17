//map() được dùng tạo một bảng mới qua kết quả
//biến đổi của phần tử tương ứng trong mảng ban đầu

const score = [10, 8, 1, 2, 3, 4];

// score.forEach((value, index) => {
//   console.log("value =", value);
// });

//new array chứ không thay đổi array ban đầu

//const scoreDouble = score.map((value, index) => value * 2);

const scoreDouble = score.map((value, index) => {
  return value * 2;
});

console.log(scoreDouble);
