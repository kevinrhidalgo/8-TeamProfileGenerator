const Manager = require("../lib/Manager.js");
const { test, expect } = require("@jest/globals");


test("should create a manager object", () => { 
    const manager = new Manager("kevin hidalgo", 6357, "kevinrhidalgo@yahoo.com", "4305");
    expect(manager.name).toBe("kevin hidalgo");
    expect(manager.id).toBe(6357);
    expect(manager.email).toBe("kevinrhidalgo@yahoo.com");
    expect(manager.officeNumber).toBe("4305");
});

test("should return office number", () => {
    const manager = new Manager("kevin hidalgo", 6357, "kevinrhidalgo@yahoo.com", "4305");
    expect(manager.getOfficeNumber()).toBe("4305");
});

test("this should get an employee's role", () => {
    const manager = new Manager("kevin hidalgo", 6357, "kevinrhidalgo@yahoo.com", "4305");
    expect(manager.getRole()).toBe("Manager");
});