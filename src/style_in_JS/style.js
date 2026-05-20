const myText = document.getElementById("text");
const myBtnColor = document.getElementById("btn");
const myBtnBack = document.getElementById("backBtn");

// dùng Object nha !!!
// thêm class dùng class list
myBtnColor.addEventListener("click", () => {
  console.log("click me");
  myText.style.color = "red";
  myText.style.backgroundColor = "blue";
  //thêm nhiều class dùng dấu ,
  myText.classList.add("ntien", "enti");
});

myBtnBack.addEventListener("click", () => {
  myText.style.color = "black";
  myText.style.backgroundColor = "unset";
  myText.classList.remove("ntien", "enti");
});
