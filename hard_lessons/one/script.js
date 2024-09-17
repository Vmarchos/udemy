function calculateVolumeAndArea(num) {
  let cubeVolume = num * num * num;
  let allSquare = num * num * 6;
  if (typeof num !== "number" || num % 1 !== 0 || num <= 0) {
    return "При вычислении произошла ошибка";
  }
  return `Объем куба:${cubeVolume}, площадь всей поверхности:${allSquare}`;
}
calculateVolumeAndArea(15);

function getCoupeNumber(num) {
  if (typeof (num) !== 'number' || !Number.isInteger(num) || num < 0) {
    return "Ошибка. Проверьте правильность введенного номера места";
  }
  if (num === 0 || num > 36) {
    return "Таких мест в вагоне не существует";
  }
  return Math.ceil(num / 4);
}
getCoupeNumber(3);

