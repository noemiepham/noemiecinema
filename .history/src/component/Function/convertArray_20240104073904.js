const convertArray = (array) => {
  let obj = [];
  if (array.length === 0) {
    return "no found data";
  } else {
    Object.keys(array).forEach((key) => {
      obj.push({
        name: array[key],
      });
    });
    return obj;
  }
  console.log(convertArray(array));
};

export default convertArray;
