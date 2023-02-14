var numbers = [];
for (var i = 1; i <= 45; i++) {
  numbers.push(i);
}

// 배열에서 6개의 무작위 숫자 선택 (중복 제외)
var lottoNumbers = [];
for (var i = 0; i < 6; i++) {
  var randomIndex = Math.floor(Math.random() * numbers.length);
  lottoNumbers.push(numbers[randomIndex]);
  numbers.splice(randomIndex, 1);
}

// 선택된 6개의 숫자를 정렬하여 출력
lottoNumbers.sort(function (a, b) {
  return a - b;
});
console.log(lottoNumbers);
