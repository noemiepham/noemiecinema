const genresFunction = (genresId, genres) => {
  const rs = new Map();
  let arr = [];
  //console.log("dsfgsdgsd;", typeof genres);
  genres.forEach((element) => {
    rs.set(element.id, element.name);
  });
  genresId.forEach((id) => {
    const value = rs.get(id);
    if (value) arr.push(value);
  });
  // console.log(arr, rs, genresId, genres);
  return arr;
};

export default genresFunction;
