//for Each

const myClass = ["Ngan", "Thu", "Vy", "Tien", "Bla Bla"];

// for (let index = 0; index < myClass.length; index++) {
//   console.log(index, myClass[index]);
// }

myClass.forEach((value, index) => {
  console.log("value =", value, "index =", index);
});
