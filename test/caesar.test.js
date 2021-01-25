// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("Caesar cypher", () => {
    it("should return false if the shift value is equal to 0, less than -25, greater than 25, or not present", () => {
        expect(caesar("thinkful")).to.be.false;
        expect(caesar("thinkful", 99)).to.be.false;
        expect(caesar("thinkful", -26)).to.be.false;
    });

    it("should return the correct cypher text when given a message and correct shift value", () => {
        let actual = caesar("thinkful", 3);
        let expected = "wklqnixo";
        expect(actual).to.equal(expected);
    });

    it("should return the correct plaintext when given a message and a correct shift value", () => {
        let actual = caesar("wklqnixo", 3, false);
        let expected = "thinkful";
        expect(actual).to.equal(expected);
    });

    it("should ignore capitals", () => {
        let actual = caesar("A Message", 4);
        let expected = caesar("a message", 4);
        expect(actual).to.equal(expected);
    });

    it("should handle shifts that go past the end of the alphabet", () => {
        let actual = caesar("z", 3);
        let expected = "c";
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces and non-alphabetic characters", () => {
        let actual = caesar("This is a secret message!", 8);
        let expected = 'bpqa qa i amkzmb umaaiom!';
        expect(actual).to.equal(expected);
    })
})