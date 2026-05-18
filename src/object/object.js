//object
const sv1 = {
  score: 10,
  name: "Nhut Tien",
  age: 20,
  address: {
    city: "Can Tho",
    country: "Viet Nam",
  },
};

const sv2 = {
  score: 8,
  name: "Anh Thu",
  age: 18,
  address: {
    city: "Ha Noi",
    country: "Viet Nam",
  },
};

const sinhvien = [sv1, sv2];
console.log(sinhvien);

sinhvien.forEach((value, index) => {
  console.log(value.name, value.address.country);
});

//co the add thuoc tinh tu ben ngoai
sv1.school = "CTU";
console.log(sv1);

//delete thuoc tinh
delete sv1.school;
console.log(sv1);
