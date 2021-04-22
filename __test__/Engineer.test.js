const Engineer = require("../lib/Engineer.js")
const {test, expect} = require("@jest/globals");

test("this should create an engineer object", () => {
    const engineer = new Engineer ("kevin hidalgo", 6357, "kevinrhidalgo@yahoo.com", "kevinrhidalgo")
    
    expect(typeof(engineer)).toBe("object");
});

test ("should get the engineer's github username", () => {
    const engineer = new Engineer ("kevin hidalgo", 6357, "kevinrhidalgo@yahoo.com", "kevinrhidalgo")

    expect(engineer.getGitHub()).toBe("kevinrhidalgo");
});

test("should get the engineer's role", () => {
    const engineer = new Engineer ("kevin hidalgo", 6357, "kevinrhidalgo@yahoo.com", "kevinrhidalgo")

    expect(engineer.getRole()).toBe("Engineer");
});