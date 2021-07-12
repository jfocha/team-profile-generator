const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Joe', '1', 'joe@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("gets employee's name value", () => {
    const employee = new Employee('Joe', '1', 'joe@email.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test("gets employee's id value", () => {
    const employee = new Employee('Joe', '1', 'joe@email.com');

    expect(employee.getId()).toBeGreaterThanOrEqual(1);
});

test("gets employee's email value", () => {
    const employee = new Employee('Joe', '1', 'joe@email.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test("gets employee's role", () => {
    const employee = new Employee('Joe', '1', 'joe@email.com');
    
    expect(employee.getRole()).toEqual(expect.stringContaining("Employee"));
});