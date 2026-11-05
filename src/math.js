

export function add(numbers) {
  let sum = 0;

  //throw new error("is not iterable");

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}
