// Hãy tạo một mảng products chứa danh sách 5 sản phẩm, mỗi sản phẩm là một object
// có các thuộc tính:
// - name (tên sản phẩm)
// - price (giá sản phẩm)
// - inStock (true/false – còn hàng hay không)
// Ví dụ:
// {
//  name: "T-shirt",
//  price: 200,
//  inStock: true
// }

const product_1 = {
  name: "T-shirt",
  price: 200,
  inStock: true,
};

const product_2 = {
  name: "Television",
  price: 500,
  inStock: true,
};

const product_3 = {
  name: "Sneaker",
  price: 250,
  inStock: false,
};

const product_4 = {
  name: "Coat",
  price: 100,
  inStock: false,
};

const product_5 = {
  name: "Mouse",
  price: 50,
  inStock: true,
};

const products = [product_1, product_2, product_3, product_4, product_5];

// 1. In ra tên của sản phẩm đầu tiên.
console.log("1. Sản phẩm đầu tiên có tên là:", products[0].name);

// 2. Thay đổi giá sản phẩm thứ hai thành 150 và in ra danh sách tất cả sản phẩm
// sửa là giá đổi luôn phải sao chép ra
console.log("2.==============");
products[1].price = 150;
console.log("2. Update product 2 giá = 150:", products);

// 3. Thêm một sản phẩm mới vào cuối mảng và in ra danh sách tất cả sản phẩm
console.log("3.==============");
const product_6 = {
  name: "Keyboard",
  price: 90,
  inStock: false,
};
products.push(product_6);
console.log(">>> thêm cuối:", products);

// 4. Xoá sản phẩm cuối cùng ra khỏi danh sách và in ra danh sách tất cả sản phẩm
console.log("4.==============");
products.pop();
console.log(">>> xóa cuối:", products);

// 5. Dùng forEach( ) để in ra tất cả tên sản phẩm.
console.log("5.==============");
products.forEach((value, index) => {
  console.log("product name =", value.name);
});

// 6. Dùng map( ) để tạo mảng mới chỉ chứa giá sản phẩm.
console.log("6.==============");

const productPrice = products.map((value, index) => {
  return value.price;
});
console.log("product price =", productPrice);

// 7. Dùng filter( ) để lấy các sản phẩm còn hàng (inStock = true).
console.log("7.==============");

const productsInStock = products.filter((value, index) => {
  return value.inStock === true;
});
console.log(productsInStock);

// 8. Dùng for...in để duyệt qua thuộc tính của sản phẩm đầu tiên.
console.log("8.==============");

for (const key in product_1) {
  console.log(key, product_1[key]);
}
