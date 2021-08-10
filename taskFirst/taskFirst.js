function sumArrey() {
  let numbers = [];
  while (true) {
    let enteredNamber = prompt('Введите число', 0);
    if (
      enteredNamber === '' ||
      enteredNamber === null ||
      !isFinite(enteredNamber)
    )
      break;
    numbers.push(+enteredNamber);
  }
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
alert(sumArrey());
