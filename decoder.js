const fs = require("fs");
const messageFile = "coding_qual_input.txt";
function decode(messageFile) {
  // reads the content of the file
  const data = fs.readFileSync(messageFile, "utf-8");
  fileContent = data.toString();

  //splits the message into rows
  let unsortedRows = fileContent.split("\r\n");
  // console.log(rows);
  // console.log(typeof fileContent);
  // console.log(fileContent);
  // console.log(typeof rows);
  // console.log(Array.isArray(rows));
  // console.log(unsortedRows);

  const extractNumber = (s) => parseInt(s.replace(/\D/g, ''), 10);

  const rows = unsortedRows.sort((a, b) => extractNumber(a) - extractNumber(b));
 
  // console.log(rows);

  let staircaseArray = [];

  let currentIndex = 0;

  let stepSize = 1;


while (currentIndex < rows.length) {
  const currentStep = rows.slice(currentIndex, currentIndex + stepSize);
  staircaseArray.push(currentStep);
  currentIndex += stepSize;
  stepSize++; 
}
console.log(staircaseArray)

}
decode(messageFile);
