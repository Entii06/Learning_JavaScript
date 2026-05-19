/*
========== Syntax ===========
element.addEventListener("eventName", function);
*/

const element = document.getElementById("btn");

const handleClickButton = () => {
  console.log("click button");
};

// using () nói cho javascript hãy thực thi ngay lập tức
element.addEventListener("click", handleClickButton);

console.log(element);
