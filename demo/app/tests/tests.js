var Shadow = require("nativescript-shadow").Shadow;
var shadow = new Shadow();

describe("greet function", function() {
    it("exists", function() {
        expect(shadow.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(shadow.greet()).toEqual("Hello, NS");
    });
});