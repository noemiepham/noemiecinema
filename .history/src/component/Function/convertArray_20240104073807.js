const convertArray = (array) => {
  let obj = [];
  if (array.length === 0) {
    convertArray(array);
  } else if (array.length >= 1) {
    Object.keys(array).forEach((key) => {
      obj.push({
        name: array[key],
      });
      return obj;
    });
  }
  console.log(convertArray(array));
};

export default convertArray;
