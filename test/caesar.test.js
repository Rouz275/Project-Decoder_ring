// Write your tests here!
const caesarModule = require("../src/caesar");
const expect = require("chai").expect;



describe("caesarModule", () => {
    describe("Shift value errors", () => {
        it("should return false if the shift value is equal to 0", () => {
            const testInput = "test phrase";
            const shift = 0;
            const actual = caesarModule.caesar(testInput, shift);

            expect(actual).to.be.false;
        });
        it("should return false if the shift value is less than -25", () => {
            const testInput = "test phrase";
            const shift = -26;
            const actual = caesarModule.caesar(testInput, shift);

            expect(actual).to.be.false;
        });
        it("should return false if the shift value is greater than 25", () => {
            const testInput = "test phrase";
            const shift = 26;
            const actual = caesarModule.caesar(testInput, shift);

            expect(actual).to.be.false;
        });
        it("should return false if the shift value is not present", () => {
            const testInput = "test phrase";
            const actual = caesarModule.caesar(testInput);

            expect(actual).to.be.false;
        });
    });
    describe("Capitalization errors", () => {
        it("should ignore capital letters", () => {
            const testInput = "Test Input";
            const shift = 3;
            const actual = caesarModule.caesar(testInput, shift);
            const expected = "whvw lqsxw";

            expect(actual).to.equal(expected);
        });
    });
    describe("Beginning/End of alphabet errors", () => {
        it("should loop through the alphabet at beginning and end", () => {
            const testInput = "zebra";
            const shift = 3;
            const actual = caesarModule.caesar(testInput, shift);
            const expected = "cheud";

            expect(actual).to.equal(expected);
        });
    });
    describe("Spacing errors", () => {
        it("should maintain spaces and other nonalphabetic symbols", () => {
            const testInput = "test input!";
            const shift = 3;
            const actual = caesarModule.caesar(testInput, shift);
            const expected = "whvw lqsxw!";

            expect(actual).to.equal(expected);
        });
    });

});