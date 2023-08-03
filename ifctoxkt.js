const convert2xkt = require("@xeokit/xeokit-xkt-utils/dist/convert2xkt.cjs.js");
const fs = require('fs');

// Converting an IFC file into an XKT file, with all element properties

convert2xkt({
    source: "./assets/school.ifc",
    output: "./assets/school.ifc.xkt",
    // outputObjectProperties: async function (objectId, props) {
    //     await fs.writeFileSync(`${objectPropsDir}/${id}.json`, JSON.stringify(props, null, "\t"));
    // }
}).then(() => {
    console.log("Converted.");
}, (errMsg) => {
    console.error("Conversion failed: " + errMsg)
});


// Converting IFC file data into XKT data in Node.js


// convert2xkt({
//     sourceData: fs.readFileSync("duplex.ifc"),
//     outputXKT: (xktData) => {
//         fs.writeFileSync("duplex.ifc.xkt")
//     }
// }).then(() => {
//     console.log("Converted.");
// }, (errMsg) => {
//     console.error("Conversion failed: " + errMsg)
// });