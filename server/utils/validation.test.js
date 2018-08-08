const expect = require("expect");

const {isRealString} = require("./validation");


describe("isRealString", () => {

    it("should reject non-string values", () => {
        expect(isRealString(20)).toBe(false);
        expect(isRealString(true)).toBe(false);
    });

    it("should reject string with only spaces", () => {
        expect(isRealString("             ")).toBe(false);

    });

    it("should allow string with non-space characters", () => {
        expect(isRealString("mary bob")).toBe(true);

    });


});
