// local storage lưu giữ liệu ngay browser người dùng
/*
============Đặc điểm===========
Dữ liệu không bị mất hay reload trình duyệt
Lưu trữ dưới dạng key value, kiểu chuỗi
*/

const myBtn = document.getElementById("submitBtn");
const input = document.getElementById("name");
const prev = document.getElementById("prev");
const prevName = localStorage.getItem("ntien");
if (prevName) {
  prev.innerHTML = `<b>${prevName}</b>`;
}

myBtn.addEventListener("click", () => {
  localStorage.setItem("ntien", input.value);
  document.getElementById("yourName").innerHTML = `<b>${input.value}</b>`;
});
