import { expect, test } from "vitest";
import {add } from "./math.js";


test("add function should return the sum of all numbers in the array",() => {
 // Arrange
 const numbers = [1,2,3];
 
 //Act 
    const result =  add(numbers);

    //Assert
  const expectedResult = numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  expect(result).toBe(expectedResult);
});

test("should yield Nan if a least one invalid number is provided",() => {
    const inputs = ["invalid",-1];

    const result = add(inputs);

    expect(result).toBeNaN();
});

test("should yield 0 if an empty array is provided",() => {
    const numbers= ['1','2'];      

    const result = add(numbers);

    
    
    const expectedResult = numbers.reduce((prevValue, curValue) => +prevValue + +curValue,0
    );
    expect(result).toBe(expectedResult);
});

test('should yield 0 if an empty array is provided',()=>{
       
    const numbers =[];

    const result = add(numbers);

    expect(result).toBe(0);
});

test("should throw an error if no values is passes into function",()=> {
const resultFn = () => {
        add();
};
expect(resultFn).toThrow();
});