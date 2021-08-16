const Manager = require('../lib/Manager.js');

test('creates an manager object', () => {
    const manager = new Manager("John Doe", 2, "johndoe@test.com",1234);
  
    expect(manager.name).toBe('John Doe');
    expect(manager.id).toBe(2);
    expect(manager.email).toBe('johndoe@test.com');
    expect(manager.officeNumber).toBe(1234);
  });