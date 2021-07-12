const Intern = require('../lib/Intern');

test('creates a manager object', () => {
    const intern = new Intern('Joe Intern', '4', 'joeintern@email.com', 'UC Berkeley');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});


test("gets intern's name value", () => {
    const intern = new Intern('Joe Intern', '4', 'joeintern@email.com', 'UC Berkeley');

    expect(intern.getName()).toEqual(expect.stringContaining(intern.name.toString()));
});

test("gets intern's id value", () => {
    const intern = new Intern('Joe Intern', '4', 'joeintern@email.com', 'UC Berkeley');

    expect(intern.getId()).toBeGreaterThanOrEqual(1);
});

test("gets intern's email value", () => {
    const intern = new Intern('Joe Intern', '4', 'joeintern@email.com', 'UC Berkeley');

    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
});

test("gets intern's school value", () => {
    const intern = new Intern('Joe Intern', '4', 'joeintern@email.com', 'UC Berkeley');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
 
test("gets intern's role", () => {
    const intern = new Intern('Joe Intern', '4', 'joeintern@email.com', 'UC Berkeley');
    
    expect(intern.getRole()).toEqual(expect.stringContaining("Intern"));
});