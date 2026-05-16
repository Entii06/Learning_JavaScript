// if -- if/else -- else if

const age = 20;

if (age > 18) {
  console.log("enjoy your video");
} else {
  console.log("you can't watch this video");
}

const score = 4;
if (score >= 9 && score <= 10) {
  console.log("A");
} else if (score >= 8 && score < 9) {
  console.log("B+");
} else if (score >= 7 && score < 8) {
  console.log("B");
} else if (score >= 6 && score < 7) {
  console.log("C+");
} else if (score >= 5 && score < 6) {
  console.log("C");
} else if (score >= 4.5 && score < 5) {
  console.log("D+");
} else if (score >= 4 && score < 4.5) {
  console.log("D");
} else if (score < 4) {
  console.log("F");
}
