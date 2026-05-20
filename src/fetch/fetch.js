// fetch gọi API

// Trả data dưới dạng JSON
const temp = fetch("http://localhost:8000/users");

// đổi từ JSON lại bth
// .json() trả về promise nên dùng then để lấy ra
temp.then((res) => res.json()).then((data) => console.log(data));
