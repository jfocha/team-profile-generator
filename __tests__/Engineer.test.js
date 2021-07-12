const Engineer = require('../lib/Engineer');

test('creates a manager object', () => {
    const engineer = new Engineer('Joe Engineer', '3', 'joeengineer@email.com', 'https://github.com/joeengineerr');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});


test("gets engineer's name value", () => {
    const engineer = new Engineer('Joe Engineer', '3', 'joeengineer@email.com', 'https://github.com/joeengineerr');

    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name.toString()));
});

test("gets engineer's id value", () => {
    const engineer = new Engineer('Joe Engineer', '3', 'joeengineer@email.com', 'https://github.com/joeengineerr');

    expect(engineer.getId()).toBeGreaterThanOrEqual(1);
});

test("gets engineer's email value", () => {
    const engineer = new Engineer('Joe Engineer', '3', 'joeengineer@email.com', 'https://github.com/joeengineerr');

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
});

test("gets engineer's github value", () => {
    const engineer = new Engineer('Joe Engineer', '3', 'joeengineer@email.com', 'https://github.com/joeengineerr');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
 
test("gets engineer's role", () => {
    const engineer = new Engineer('Joe Engineer', '3', 'joeengineer@email.com', 'https://github.com/joeengineerr');
    
    expect(engineer.getRole()).toEqual(expect.stringContaining("Engineer"));
});