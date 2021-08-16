const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern("John Doe 3", 3, "johndoe@test.com",'VTU');
  
    expect(intern.name).toBe('John Doe 3');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('johndoe@test.com');
    expect(intern.getSchool()).toBe('VTU');
    
  });