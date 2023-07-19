const cesarCiper = require("./ceasarCipher");

it("Encoded", () => expect(cesarCiper("abcde", 3)).toBe("defgh"));
