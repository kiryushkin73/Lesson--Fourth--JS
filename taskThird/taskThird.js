function ArreyConcat() {
  let arr = [];
  while (true) {
    let enteredElement = prompt(
      'Введите значение первого массива\n Значение будут добавляться пока вы не нажмете отмена'
    );
    if (enteredElement === '' || enteredElement === null) break;
    arr.push(+enteredElement);
  }
  let arrSecond = [];
  while (true) {
    let enteredElementSecond = prompt(
      'Введите значение второго массива\n Значение будут добавляться пока вы не нажмете отмена'
    );
    if (enteredElementSecond === '' || enteredElementSecond === null) break;
    arrSecond.push(+enteredElementSecond);
  }
  let result = [];
  let len = arr.length >= arrSecond.length ? arr.length : arrSecond.length;
  for (let i = 0; i < len; i++) {
    if (arr[i]) result.push(arr[i]);
    if (arrSecond[i]) result.push(arrSecond[i]);
  }
  return result;
}
alert(
  ArreyConcat() +
    '\n Новый массив состоящий из элементов обоих предыдущих массивов '
);
