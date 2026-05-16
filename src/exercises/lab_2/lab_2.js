const tinhTrungBinh = (toan, van, anh) => {
  return (toan + van + anh) / 3;
};

const xepLoai = (diemTB) => {
  if (diemTB >= 9) return "Xuất sắc";
  else if (diemTB >= 8 && diemTB < 9) return "Giỏi";
  else if (diemTB >= 6.5 && diemTB <= 8) return "Khá";
  else return "Trung Bình";
};

const diemToan = 9;
const diemVan = 8;
const diemAnh = 7;

diemTB = tinhTrungBinh(diemToan, diemVan, diemAnh);
console.log(
  `Điểm trung bình: ${diemTB}
Xếp loại: ${xepLoai(diemTB)}`,
);
