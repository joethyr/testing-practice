import { max, min } from "lodash";

const capitalize = (str) => str[0].toUpperCase() + str.slice(1)

const reverseString = (str) => {
  if (str === "") // This is the terminal case that will end the recursion
    return "";

  return reverseString(str.substr(1)) + str.charAt(0);
}

const calculator = () => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => b - a;
  const multiply = (a, b) => a * b
  const divide = (a, b) => b / a

  return { add, subtract, multiply, divide }
}

const caesarCipher = (str, shift) => {
  const regex = new RegExp("[^a-zA-Z]+")
  if (regex.test(str)) { return false }

  const strArr = [];

  str.split("").forEach((char) => {
    const code = char.charCodeAt()
    if (code > 64 && code < 91) {
      strArr.push(String.fromCharCode(((code - 65 + shift) % 26) + 65))
    } else if (code > 96 && code < 123) {
      strArr.push(String.fromCharCode(((code - 97 + shift) % 26) + 97))
    }
  })
  return strArr.join("")
}


// function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.
const analyzeArray = (arr) => {
  // average
  const getAverage = () => arr.reduce((a, b) => a + b) / arr.length
  const average = getAverage()
  const getMin = () => arr.sort((a, b) => a - b)[0]
  const min = getMin()
  const getMax = () => arr.sort((a, b) => a - b)[arr.length - 1]
  const max = getMax()
  const { length } = arr
  // length

  return { average, min, max, length }
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray }