const fs = require("fs");
const messageFile = "coding_qual_input.txt";
function decode(messageFile) {
  const data = fs.readFileSync(messageFile, "utf-8");
  fileContent = data.toString();

  let unsortedRows = fileContent.split("\r\n");

  const extractNumber = (s) => parseInt(s.replace(/\D/g, ""), 10);

  const rows = unsortedRows.sort((a, b) => extractNumber(a) - extractNumber(b));

  let staircaseArray = [];

  let currentIndex = 0;

  let stepSize = 1;

  while (currentIndex < rows.length) {
    const currentStep = rows.slice(currentIndex, currentIndex + stepSize);
    staircaseArray.push(currentStep);
    currentIndex += stepSize;
    stepSize++;
  }

  let decodedString = "";
  for (let i = 0; i < staircaseArray.length; i++) {
    let lastArrIndex = staircaseArray[i][staircaseArray[i].length - 1];

    decodedString += lastArrIndex.split(/\s|\d/).join("") + " ";
  }
  console.log(decodedString);
}
decode(messageFile);
