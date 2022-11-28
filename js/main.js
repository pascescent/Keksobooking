const randomIntegner = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [max, min] = [min, max];
  }
  return Math.round(Math.random() * (max - min) + min);
};

console.log(randomIntegner(20, 30));

const randomFloatNumber = (min, max, point) => {
  if (min < 0 || max < 0 || point < 0 || point % 1 !== 0) {
    return -1;
  }

  if (max < min) {
    [max, min] = [min, max];
  }

  let result = Math.random() * (max - min) + min;

  if (point === 0) {
    return Math.round(result);
  }

  return parseInt(result * Math.pow(10, point)) / Math.pow(10, point);
};

console.log(randomFloatNumber(30, 100, 4))
