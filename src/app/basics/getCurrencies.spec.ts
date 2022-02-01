import { getCurrencies } from "./getCurrencies";

describe("getCurrencies", () => {
    it("should return a string array", () => {
        const result = getCurrencies();
        expect(result).toEqual(jasmine.any(Array));
    });
    it("should return three strings", () => {
        const result = getCurrencies();
        expect(result.length).toBe(3);
    });
});