function ArreyIndex() {
  let arr = [];
  while (true) {
    let enteredElement = prompt('Введите значение');
    if (enteredElement === '' || enteredElement === null) break;
    arr.push(+enteredElement);
  }
  let soughtMeaning = prompt(arr + '\nВведите искомое значение?');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == soughtMeaning) return i + 1;
  }
  return -1;
}
alert(ArreyIndex());
console.log(ArreyIndex);
