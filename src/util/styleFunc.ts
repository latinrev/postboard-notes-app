function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const BASE_HEIGHT = 360;
const getSubHeight = (numChildren) => {
  return BASE_HEIGHT / numChildren - 20 * ((numChildren - 1) / numChildren);
};
export { getSubHeight, getRandomIntInclusive };
