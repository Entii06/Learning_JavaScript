//filter() lọc

const ages = [20, 28, 10, 8, 17, 7, 21];

const ageDouble = ages.map((value, index) => {
  return value * 2;
});

//lấy những phần tử lớn hơn 18
const agesGreatThan18 = ages.filter((value, index) => {
  return value > 18;
});

console.log("Filter > 18:", agesGreatThan18);
console.log("Map x2:", ageDouble);
