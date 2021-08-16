const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee("John Doe", 2, "johndoe@test.com");
  
    expect(employee.name).toBe('John Doe');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('johndoe@test.com');
  });