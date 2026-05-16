//Global scope

let globalScope = "biến toàn cục";

const show = () => {
  console.log(globalScope);
};

show();
console.log(globalScope);

//Function scope

function sayHi() {
  let name = "Tien";
  console.log(name);

  //Block scope
  if (true) {
    let x = 10;
    const y = 20;
    console.log(x, y); // ✅ Truy cập được
  }
  console.log(x); // ❌ Lỗi: x is not defined
}

sayHi();
console.log(name); // cái var gọi ở file nào trong thư mục
