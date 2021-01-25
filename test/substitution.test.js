// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("Substitution cypher", () => {
    it("should return false if the alphabet isn't exactly 26 characters long", () => {
        let actual = substitution("message", "short");
        expect(actual).to.be.false;
        actual = substitution("message", "longstringlongstringlongstringlongstring");
        expect(actual).to.be.false;
    });

    it("should return false if the alphabet contains repeated characters", () => {
        let actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.be.false;
    });

    it("should correct encrypt text", () => {
        let actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); 
        let expected = 'jrufscpw';
        expect(actual).to.equal(expected);
    });

    it("should correctly decrypt text", () => {
        let actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); 
        let expected = 'thinkful';
        expect(actual).to.equal(expected);
    });

    it("should preserve spaces in encryption", () => {
        let actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); 
        let expected = 'elp xhm xf mbymwwmfj dne';
        expect(actual).to.equal(expected);
    });

    it("should properly encrypt text when there are special characters in the substitution alphabet", () => {
        let actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"); 
        let expected = "y&ii$r&";
        expect(actual).to.equal(expected);
    });

    it("should properly decrypt text when there are special characters in the substitution alphabet", () => {
        let actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); 
        let expected = "message";
        expect(actual).to.equal(expected);
    })
})