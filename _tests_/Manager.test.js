const Manager = require('../lib/Manager');

function makeManager(name = 'Fred', id = 123, email = 'fred@mail.com', officeNumber = 1) {
    return new Manager(name, id, email, officeNumber);
}

describe('test Manager', () => {
    describe('test fields', () => {
        it('Should contain the correct fields: name, id, email, officeNumber', () => {
            const name = 'Joe';
            const id = 1;
            const email = 'loe@mail.com';
            const officeNumber = 1
    
            const manager = makeManager(name, id, email, officeNumber);
    
            expect(manager.name).toEqual(name);
            expect(manager.id).toEqual(id);
            expect(manager.email).toEqual(email);
            expect(manager.officeNumber).toEqual(officeNumber);
        });
    });
    

    it ('should return name when getName() is called', () => {

        const expected = 'Joe';
        const manager = makeManager(expected, 123, 'Joe@email.com', 1);

        expect(manager.getName()).toEqual(expected);

    });

    it ('should return id when getId() is called', () => {

        const expected = 345;
        const manager = makeManager('Joe', expected, 'Joe@email.com', 1);

        expect(manager.getId()).toEqual(expected);

    });

    it ('should return email when getEmail() is called', () => {

        const expected = 'Joe@email.com';
        const manager = makeManager('Joe', 123, expected, 1);

        expect(manager.getEmail()).toEqual(expected);

    });

    
    it ('should return Manager when getRole() is called', () => {

        const expected = 'Manager';
        const manager = makeManager();

        expect(manager.getRole()).toEqual(expected);

    });
});