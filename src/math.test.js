import { expect, test } from "vitest";
import {add } from "./math.js";


test("add function should return the sum of all numbers in the array",() => {
 // Arrange
 const numbers = [1,2,3];
 
 //Act 
    const result =  add(numbers);

    //Assert
  expect(result).toBe(6);
});