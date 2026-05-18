const sv1 = {
  username: "Nhut Tien",
  score: 6.7,
};

const sv2 = {
  username: "Ngoc Ngan",
  score: 3.6,
};

const sv3 = {
  username: "Thao Vy",
  score: 9,
};

const sinhvien = [sv1, sv2, sv3];
console.log(sinhvien);

//for_in duyệt qua tất cả thuộc tính

const person = {
  name: "Nhut Tien",
  age: 20,
  language: "Vietnamese",
};

//key is attribute
for (let key in person) {
  console.log(key, person[key]);
}

//for_of lấy giá trị của thuộc tính
// for (let value of Object.values(person)) {
//   console.log(value);
// }
for (let value of Object.entries(person)) {
  console.log(value);
}
