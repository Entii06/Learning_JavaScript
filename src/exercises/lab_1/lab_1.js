const fullName = "Huynh Le Nhut Tien";
const birthYear = 2006;
const isStudent = true;

//lấy năm hiện tại
const today = new Date();
const currentYear = today.getFullYear();

console.log(`Tên: ${fullName}`);
console.log(`Tuổi: ${currentYear - birthYear}`);
console.log(`Sinh viên: ${isStudent ? "Đúng" : "Sai"}`);
