//const { it, expect } = require('@jest/globals');
//const { describe } = require('yargs');
const Employee = require('../lib/Employee');

function makeEmployee(name = 'Fred', id = 123, email = 'fred@mail.com') {
    return new Employee(name, id, email);
}

describe('test Employee', () => {
    describe('test fields', () => {
        it('Should contain the correct fields: name, id, email', () => {
            const name = 'Joe';
            const id = 1;
            const email = 'loe@mail.com';
    
            const employee = makeEmployee(name, id, email);
    
            expect(employee.name).toEqual(name);
            expect(employee.id).toEqual(id);
            expect(employee.email).toEqual(email);
        });
    });
    

    it ('should return name when getName() is called', () => {

        const expected = "Joe";
        const employee = makeEmployee(expected, 123, "Joe@email.com");

        expect(employee.name).toEqual(expected);

    });

    it ('should return name when getId() is called', () => {

        const expected = 345;
        const employee = makeEmployee('Joe', expected, "Joe@email.com");

        expect(employee.id).toEqual(expected);

    });

    it ('should return name when getEmail() is called', () => {

        const expected = "Joe@email.com";
        const employee = makeEmployee('Joe', 123, expected);

        expect(employee.name).toEqual(expected);

    });

    it ('should return name when getRole() is called', () => {

        const expected = "Employee";
        const employee = makeEmployee();

        expect(employee.getRole).toEqual(expected);

    });
});