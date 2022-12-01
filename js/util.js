// Случайное целое число

const randomIntegner = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [max, min] = [min, max];
  }
  return Math.round(Math.random() * (max - min) + min);
};

// Случайное число с плавающей точкой, и указанным количеством знаков после запятой

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

// Выбор случайных параметров из массива - вывод их в новый массив

function flatParam(arr) {
  let result = [];

  for (const feature of arr) {
    if (randomIntegner(0, 1)) {
      result.push(feature);
    }
  }

  return result;
}

export {randomIntegner, randomFloatNumber, flatParam};
