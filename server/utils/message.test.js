var expect = require("expect");

var {generateMessage} = require("./message");

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

