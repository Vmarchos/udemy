function calculateVolumeAndArea(num) {
  let cubeVolume = num * num * num;
  let allSquare = num * num * 6;
  if (typeof num !== "number" || num % 1 !== 0 || num <= 0) {
    return "При вычислении произошла ошибка";
  }
  return `Объем куба:${cubeVolume}, площадь всей поверхности:${allSquare}`;
}
calculateVolumeAndArea(15);

