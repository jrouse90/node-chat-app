var expect = require("expect");

var {generateMessage, generateLocationMessage} = require("./message");

describe("generateMessage", () => {
   
    it("should generate correct message object", () => {
        var from = "Bob";
        var text = "Hi I am Bob!!";
        var msg = generateMessage(from, text);
        expect(msg).toInclude({
            from,
            text
        });
        expect(msg.createdAt).toBeA("number");
    });

});
describe("generateLocationMessage", () => {
   
    it("should generate correct location object", () => {
        var from = "Bob";
        var lat = 9845908;
        var log = -974505;
        var msg = generateLocationMessage(from, lat, log);
        expect(msg).toInclude({
            from,
            url: `http://www.google.com/maps?q=${lat},${log}`
        });
        expect(msg.createdAt).toBeA("number");
    });

});

