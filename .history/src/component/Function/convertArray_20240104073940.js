let obj = [];
const array = 
const convertArray = (array) => {
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
