// Write your tests here!
const polybiusModule = require("../src/polybius");
const expect = require("chai").expect;

describe("polybiusModule", () =>{
    describe("Tests for encoding and decoding", () => {
        it("should encode a message", () => {
            const message = "hello";
            const expected = "3251131343";
            const actual = polybiusModule.polybius(message);
    
            expect(actual).to.equal(expected);
        });
        it("should decode a message", () => {
            const message = "3251131343";
            const expected = "hello";
            const actual = polybiusModule.polybius(message, false);
    
            expect(actual).to.equal(expected);
        });
    });

    describe("Tests for odd character length while decoding", () => {
        it("should return false when decoding if the number of characters, excluding spaces, is odd", () => {
            const message = "32511313431";
            const actual = polybiusModule.polybius(message, false);

            expect(actual).to.be.false;
        });
    });

    describe("Tests for i and j", () => {
        it("should translate the letter i to 42 while encoding", () => {
            const message = "i";
            const expected = "42";
            const actual = polybiusModule.polybius(message);
    
            expect(actual).to.equal(expected);
        });
        it("should translate the letter j to 42 while encoding", () => {
            const message = "j";
            const expected = "42";
            const actual = polybiusModule.polybius(message);
    
            expect(actual).to.equal(expected);
        });
        it("should translate 42 to i and j while decoding", () => {
            const message = "42";
            const actual = polybiusModule.polybius(message, false);
    
            expect(actual).to.include("i");
            expect(actual).to.include("j");
        });
    });

    describe("Tests for capital letters and spacing", () => {
        it("should ignore all capital letters", () => {
            const message = "Hello";
            const expected = "3251131343";
            const actual = polybiusModule.polybius(message);
    
            expect(actual).to.equal(expected);
        });
        it("should maintain spaces in the message before and after encoding", () => {
            const message = "hello message";
            const expected = "3251131343 23513434112251";
            const actual = polybiusModule.polybius(message);

            expect(actual).to.equal(expected);
        });
        it("should maintain spaces in the message before and after decoding", () => {
            const message = "3251131343 23513434112251";
            const expected = "hello message";
            const actual = polybiusModule.polybius(message, false);

            expect(actual).to.equal(expected);
        });
    });
    
});