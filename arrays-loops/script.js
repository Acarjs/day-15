const numbers = [
  18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2,
  17,
]

// console.log(numbers[Math.floor(numbers.length / 2)]);

const negativeNumbers = []
numbers.forEach((number) => {
  if (number < 0) {
    negativeNumbers.push(number)
  }
})
// console.log(negativeNumbers.length);

const array = []
const positiveSum = numbers.map((number) => number > 0 && array.push(number))

const sumAll = array.reduce((n1, n2) => n1 + n2)

// console.log(sumAll)

const pre = []
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] > numbers[i - 1] && numbers[i] > numbers[i - 1]) {
    pre.push(numbers[i])
  }
}

// console.log(pre)

const sumNumbers = numbers.reduce((number1, number2) => {
  return number1 + number2
})

const average = sumNumbers / numbers.length

const max = Math.max(...numbers)
// console.log(max)

let maximum = numbers[0]

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] > maximum) {
    maximum = numbers[i]
  }
}

// console.log(maximum)

const lessThanSixteen = []
const deneme = numbers.map((number) => {
  return number < 16 && lessThanSixteen.push(number)
})

let maximumSixteen = lessThanSixteen[0]
for (i = 0; i < lessThanSixteen.length; i++) {
  if (lessThanSixteen[i] > maximumSixteen) {
    maximumSixteen = lessThanSixteen[i]
  }
}

console.log(maximumSixteen)
