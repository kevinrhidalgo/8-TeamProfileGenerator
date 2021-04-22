const Employee = require("../lib/Employee.js");
const { test, expect} = require("@jest/globals");

test("creates a new employee object", () => {
    const employee = new Employee("kevin hidalgo", 6357, "kevinrhidalgo@yahoo.com");

    expect(employee.name).toBe("kevin hidalgo");
    expect(employee.id).toBe(6357);
    expect(employee.email).toBe("kevinrhidalgo@yahoo.com");
});

test("should get the employee's name", () => {
    const employee = new Employee("kevin hidalgo", 6357, "kevinrhidalgo@yahoo.com");

    expect(employee.getName()).toBe("kevin hidalgo");
});

test("should get the employee's ID", () => {
    const employee = new Employee("kevin hidalgo", 6357, "kevinrhidalgo@yahoo.com");

    expect(employee.getId()).toBe(6357);
});
[]
test("should get the employee's email", () => {
    const employee = new Employee("kevin hidalgo", 6357, "kevinrhidalgo@yahoo.com");

    expect(employee.getEmail()).toBe("kevinrhidalgo@yahoo.com");
});

test("should get the employee's role", () => {
    const employee = new Employee("kevin hidalgo", 6357, "kevinrhidalgo@yahoo.com");

    expect(employee.getRole()).toBe("Employee");
});