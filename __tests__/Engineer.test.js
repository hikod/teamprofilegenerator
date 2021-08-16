const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer("John Doe", 1, "johndoe@test.com","johndoegithub");
  
    expect(engineer.name).toBe('John Doe');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('johndoe@test.com');
    expect(engineer.getGithub()).toBe('johndoegithub');
    
  });
