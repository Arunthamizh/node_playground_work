const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
console.log('dataBuffer',dataBuffer);
const dataParse = JSON.parse(dataJSON);
console.log('after JSON parse', dataParse);
dataParse.name = "Aruthamizh"
dataParse.age = 27
console.log('dataParse',dataParse)
const dataFinal = JSON.stringify(dataParse)
// return
console.log('dataFinal',dataFinal)
const changedJSON  = fs.writeFileSync('1-json.json',dataFinal);
// console.log(changedJSON);