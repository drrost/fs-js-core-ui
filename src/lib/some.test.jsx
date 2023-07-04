import {describe, test, expect} from "vitest";

describe('Some test', () => {
    test('Test something', () => {
        const a = 3;
        const b = 5;
        const c = a + b;

        expect(c).equals(8);
    })
});