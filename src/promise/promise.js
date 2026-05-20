// //xử lý bất đồng bộ promise làm code như đồng bộ

// // console.log("1");

// // //async bất đồng bộ
// // setTimeout(() => {
// //   console.log("2");
// // }, 5000);

// // console.log("3");

// const myPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("2 with promise");
//       resolve("ntien");
//     }, 2000);
//   });
// };

// const test = myPromise();
// console.log("test", test);

// console.log("============= promise ============");
// console.log("1");
// myPromise().then((data) => {
//   console.log(data);
//   console.log("3");
// });

console.log("1. Bắt đầu");
console.log("2. Tác vụ trong promise chạy");

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("4. Hoàn thành");
  }, 2000);
});

myPromise.then((data) => {
  console.log(data);
});

console.log("3. Kết thúc bản chính");
