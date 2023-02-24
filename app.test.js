import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./app"

test("capitalizes first character of word", () => {
  expect(capitalize("wordle")).toBe("Wordle")
})

test("return string in revserse", () => {
  expect(reverseString("hello")).toBe("olleh")
})

test("function that adds ", () => {
  const data = calculator()
  expect(data.add(2, 4)).toBe(6)
})

test("subtract the 2 arguments", () => {
  const data = calculator()
  expect(data.subtract(2, 4)).toBe(2)
})

test("mutiply the 2 arguments", () => {
  const data = calculator()
  expect(data.multiply(2, 4)).toBe(8)
})

test("divide the 2 arguments", () => {
  const data = calculator()
  expect(data.divide(2, 4)).toBe(2)
})

test("take string and ", () => {
  expect(caesarCipher("hell@o", 1)).toBe(false)
})

test("return the average of array", () => {
  const arr = analyzeArray([2, 3, 1, 4, 5, 6, 9, 7, 8])
  expect(arr.average).toBe(5)
})

test("return the minimum value of array", () => {
  const arr = analyzeArray([2, 3, 1, 4, 5, 6, 9, 7, 8])
  expect(arr.min).toBe(1)
})

test("return the max value of array", () => {
  const arr = analyzeArray([2, 3, 1, 4, 5, 6, 9, 7, 8])
  expect(arr.max).toBe(9)
})

test("return the length of array", () => {
  const arr = analyzeArray([2, 3, 1, 4, 5, 6, 9, 7, 8])
  expect(arr.length).toBe(9)
})


// sum up arr
// divide sum by arr length
// return