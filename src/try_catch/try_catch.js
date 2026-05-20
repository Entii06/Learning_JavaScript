const doSth = () => {
  const a = 10,
    b = 0;
  if (b === 0) {
    throw new Error("Lỗi chia cho 0");
  }
  return a / b;
};

try {
  doSth();
} catch (error) {
  console.log("Có lỗi xảy ra", error);
} finally {
  console.log("run final");
}
