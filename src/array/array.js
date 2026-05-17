//array
//tại sao const vẫn thêm được bởi vì nó là biến tham chiếu
const names = ["ntien", "enti", "tien xinh trai"];

console.log(names);

//truy cập phần tử trong array
//index = 0 ; arr[index]

console.log("0 =", names[0]);
console.log("1 =", names[1]);
console.log("2 =", names[2]);

//update

names[2] = "update name";
console.log("update phần tử index = 2");
console.log(names);

// add and delete
// thêm vào cuối mảng: push()
// thêm vào đầu mảng: unshift()
console.log("thêm vào đầu");
names.unshift("start");
console.log(names);

console.log("thêm vào cuối");
names.push("end");
console.log(names);

// xóa phần tử cuối: pop()
// xóa phần tử đầu mảng: shift()

console.log("xóa đầu");
names.shift();
console.log(names);

console.log("xóa cuối");
names.pop();
console.log(names);
