const score = 1;
// nếu dùng đk thì trả ra true / false
switch (true) {
  case score >= 8 && score <= 10:
    console.log("Good");
    break;

  case score >= 6 && score < 8:
    console.log("Ok");
    break;

  case score >= 4 && score < 6:
    console.log("Not good");
    break;

  default:
    console.log("So bad");
}

//break dùng để ngăn câu lệnh chạy tiếp
