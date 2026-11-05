import { expect, test } from "vitest";

import { transformToNumber } from "./numbers.js";

test("transformToNumber should convert a string to a number", () => {
const input = '1';

const result =transformToNumber(input);

expect(result).toBeTypeOf('number');
});

test('should yield NaN for non-trnasormable values',() => {
    const input = "invalid";
    const input2 = {};

    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();

})