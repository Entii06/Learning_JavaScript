/*================================
    innerText đổi chuỗi
==================================*/

const myButton = document.getElementById("btn");
const backButton = document.getElementById("backBtn");

myButton.addEventListener("click", () => {
  console.log("you click my button");
  document.getElementById("text").innerHTML = "<em>Hello</em>";
});

backButton.addEventListener("click", () => {
  document.getElementById("text").innerText = "Học code Web";
});

/*================================
    innerHTML có thể thêm CSS
==================================*/
