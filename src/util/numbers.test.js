import { expect, test } from "vitest";

import { transformToNumber } from "./numbers.js";

test("transformToNumber should convert a string to a number", () => {
const input = '1';

const result =transformToNumber(input);

expect(result).toBeTypeOf('number');

})