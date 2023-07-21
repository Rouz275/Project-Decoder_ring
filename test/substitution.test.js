// Write your tests here!
const substitutionModule = require("../src/substitution");
const expect = require("chai").expect;

describe("substitutionModule", () => {
    describe("Function input errors", () => {
        it("should return false if the given alphabet isn't exactly 26 characters long", () => {
            const message = "test";
            const givenAlphabet = "abcefg";
            const actual = substitutionModule.substitution(message, givenAlphabet);

            expect(actual).to.be.false;
        });
        it("should return false if there are any duplicate characters in the given alphabet", () => {
            const message = "test";
            const givenAlphabet = "!aabcdefghijklmnopqrstuvwx";
            const actual = substitutionModule.substitution(message, givenAlphabet);

            expect(actual).to.be.false;
        });
    });
    describe ("Encoding errors", () => {
        it("should encode a message using the given alphabet", () => {
            const message = "test";
            const givenAlphabet = "abcdefghijklmnopqrs!uvwxyz";
            const expected = "!es!";
            const actual = substitutionModule.substitution(message, givenAlphabet);

            expect(actual).to.equal(expected);
        });
        it("should maintain spaces before and after encoding", () => {
            const message = "test test";
            const givenAlphabet = "abcdefghijklmnopqrs!uvwxyz";
            const expected = "!es! !es!"
            const actual = substitutionModule.substitution(message, givenAlphabet);

            expect(actual).to.equal(expected);
        });
        it("should ignore capital letters while encoding", () => {
            const message = "Test";
            const givenAlphabet = "abcdefghijklmnopqrs!uvwxyz";
            const expected = "!es!";
            const actual = substitutionModule.substitution(message, givenAlphabet);

            expect(actual).to.equal(expected);
        });
        it("should encode with any special characters", () => {
            const message = "test";
            const givenAlphabet = "abcd@fghijklmnopqr$!uvwxyz";
            const expected = "!@$!";
            const actual = substitutionModule.substitution(message, givenAlphabet);

            expect(actual).to.equal(expected);
        });
    });
    describe("Decoding Errors", () => {
        it("should decode a message using the given alphabet", () => {
            const message = "!es!";
            const givenAlphabet = "abcdefghijklmnopqrs!uvwxyz";
            const expected = "test";
            const actual = substitutionModule.substitution(message, givenAlphabet, false);

            expect(actual).to.equal(expected);
        });
        it("should maintain spaces before and afer decoding", () => {
            const message = "!es! !es!";
            const givenAlphabet = "abcdefghijklmnopqrs!uvwxyz";
            const expected = "test test";
            const actual = substitutionModule.substitution(message, givenAlphabet, false);

            expect(actual).to.equal(expected);
        });
        it("should ignore capital letters while decoding", () => {
            const message = "!Es!";
            const givenAlphabet = "abcdefghijklmnopqrs!uvwxyz";
            const expected = "test";
            const actual = substitutionModule.substitution(message, givenAlphabet, false);

            expect(actual).to.equal(expected);
        });
        it("should decode with any special characters", () => {
            const message = "!@$!";
            const givenAlphabet = "abcd@fghijklmnopqr$!uvwxyz";
            const expected = "test";
            const actual = substitutionModule.substitution(message, givenAlphabet, false);

            expect(actual).to.equal(expected);
        });
    })
});