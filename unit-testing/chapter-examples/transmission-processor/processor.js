function processor(transmission) {
  // validate data:
  console.log('transmission.indexOf("::")', transmission.indexOf("::"));
  if (transmission.indexOf("::") !== -1) {
    let parts = transmission.split("::");
    // console.log("parts", parts);
    let id = Number(parts[0]);
    // console.log("id", id);
    let dataInSymbols = parts[1];
    // console.log("dataInSymbols", dataInSymbols);
    let dataTrim = Number(dataInSymbols.slice(1, -1));
    // console.log("dataTrim", dataTrim);
    let lastIndex = dataInSymbols.length - 1;

    if (dataInSymbols[0] !== "<") {
      return -1;
    }
    if (dataInSymbols[lastIndex] !== ">") {
      // console.log("dataInSymbols[lastIndex]", dataInSymbols[lastIndex]);
      return -1;
    }
    // console.log({
    //   id,
    //   dataTrim,
    // });
    return {
      id,
      dataTrim,
    };
  } else {
    return -1;
  }
}

module.exports = processor;
