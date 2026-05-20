// cách cũ trước promise
// dùng async await

const greeting = (name, callBack) => {
  console.log("Hello ", name);
  callBack();
};

const hello = () => {
  console.log("learn callback.....");
};

// () thực thi liền không có là để truyền đi
greeting("Enti", hello);
//function như tham số đầu vào
