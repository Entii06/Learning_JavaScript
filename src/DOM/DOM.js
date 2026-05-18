//getElementById

const element = document.getElementById("test");
console.log(element);
//<p id="test">Nhut Tien</p> sẽ lấy được cả dòng

const myDiv = document.querySelector(".ntien");
//dùng class nên thêm dấu .
console.log(myDiv);
//<div class="ntien">Hello World</div>

const allMyDiv = document.querySelectorAll(".ntien");
console.log(allMyDiv);
//lấy tất cả thẻ cùng class
