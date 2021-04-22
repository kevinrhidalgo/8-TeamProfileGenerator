const Intern = require("../lib/Intern")
const { test, expect } = require("@jest/globals");


test("this if for a new Intern", ()=>{
    const intern = new Intern ("kevin hidalgo", 6357, "kevinrhidalgo@yahoo.com","Ccny")
    expect(typeof(intern)).toBe("object");
})

test("this should return with the interns school info", () => {
    const intern = new Intern ("kevin hidalgo", 6357, "kevinrhidalgo@yahoo.com","Ccny")
    expect(intern.getSchool()).toBe("Ccny");
});

test("should have Intern role", () => {
    const intern = new Intern ("kevin hidalgo", 6357, "kevinrhidalgo@yahoo.com","Ccny")
    expect(intern.getRole()).toBe("Intern");
});