//History

//callback

//promise

fetch("http://localhost:8000/users")
  .then((res) => res.json())
  .then((data) => console.log(data));

//async await bắt buộc viết trong function
//dễ sử dụng và dễ bảo trì
const fetchData = async () => {
  const res = await fetch("http://localhost:8000/users");
  const data = await res.json();
  console.log(data);
};

fetchData();
