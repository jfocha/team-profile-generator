const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Joe Manager', '2', 'joemanager@email.com', '1');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test("gets manager's name value", () => {
    const manager = new Manager('Joe Manager', '2', 'joemanager@email.com', '1');

    expect(manager.getName()).toEqual(expect.stringContaining(manager.name.toString()));
});

test("gets manager's id value", () => {
    const manager = new Manager('Joe Manager', '2', 'joemanager@email.com', '1');

    expect(manager.getId()).toBeGreaterThanOrEqual(1);
});

test("gets manager's email value", () => {
    const manager = new Manager('Joe Manager', '2', 'joemanager@email.com', '1');

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
});

test("gets manager's officeNumber value", () => {
    const manager = new Manager('Joe Manager', '2', 'joemanager@email.com', '1');

    expect(manager.officeNumber).toBeGreaterThanOrEqual(1);
});
 
test("gets manager's role", () => {
    const manager = new Manager('Joe Manager', '2', 'joemanager@email.com', '1');
    
    expect(manager.getRole()).toEqual(expect.stringContaining("Manager"));
});