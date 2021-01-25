// Write your tests here!
const expect = require("chai").expect;
const polybius = require("../src/polybius");

describe("Polybius cypher", () => {
    it("should return false if given bad cyphertext", () => {
        let actual = polybius("44324233521254134", false);
        expect(actual).to.be.false;
    });

    it("should correctly encrypt text", () => {
        let actual = polybius("message");
        let expected = "23513434112251";
        expect(actual).to.equal(expected);
    });

    it("should correctly decypher text", () => {
        let actual = polybius("23513434112251", false);
        let expected = "message";
        expect(actual).to.equal(expected);
    });

    it("should encrypt 'i' or 'j' to '42'", () => {
        let actual = polybius("thinkful");
        let expected = "4432423352125413";
        expect(actual).to.equal(expected);
    });

    it("should decrypt '42' into '(i/j)'", () => {
        let actual = polybius("4432423352125413", false);
        let expected = "th(i/j)nkful";
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces when encrypted", () => {
        let actual = polybius("Hello world"); 
        let expected = '3251131343 2543241341';
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces when decrypted", () => {
        let actual = polybius("3251131343 2543241341", false);
        let expected = "hello world";
        expect(actual).to.equal(expected);
    })
});