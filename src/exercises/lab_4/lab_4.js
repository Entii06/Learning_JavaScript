const myName = document.getElementById("name");
const myPass = document.getElementById("pass");
const submitBtn = document.getElementById("submit");

const username = "nhuttien";
const password = "123456";

submitBtn.addEventListener("click", () => {
  console.log(myName.value);
  console.log(myPass.value);
  if (myName.value === username && myPass.value === password) {
    alert("Đăng nhập thành công!");
    window.location.href = "success.html";
  } else {
    alert("Tài khoản hoặc mật khẩu sai");
    myName.style.borderColor = "red";
    myPass.style.borderColor = "red";
  }
});
