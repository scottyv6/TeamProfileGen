const Engineer = require('../lib/Engineer');

function makeEngineer(name = 'Fred', id = 123, email = 'fred@mail.com', github = 'gitname') {
    return new Engineer(name, id, email, github);
}

describe('test Engineer', () => {
    describe('test fields', () => {
        it('Should contain the correct fields: name, id, email, github', () => {
            const name = 'Joe';
            const id = 1;
            const email = 'loe@mail.com';
            const github = 'gitname'
    
            const engineer = makeEngineer(name, id, email, github);
    
            expect(engineer.name).toEqual(name);
            expect(engineer.id).toEqual(id);
            expect(engineer.email).toEqual(email);
            expect(engineer.github).toEqual(github);
        });
    });
    

    it ('should return name when getName() is called', () => {

        const expected = 'Joe';
        const engineer = makeEngineer(expected, 123, 'Joe@email.com', 'gitname');

        expect(engineer.getName()).toEqual(expected);

    });

    it ('should return id when getId() is called', () => {

        const expected = 345;
        const engineer = makeEngineer('Joe', expected, 'Joe@email.com', 'gitname');

        expect(engineer.getId()).toEqual(expected);

    });

    it ('should return email when getEmail() is called', () => {

        const expected = 'Joe@email.com';
        const engineer = makeEngineer('Joe', 123, expected, 'gitname');

        expect(engineer.getEmail()).toEqual(expected);

    });

    it ('should return github name when getGithub() is called', () => {

        const expected = 'gitname';
        const engineer = makeEngineer('Joe', 123,'Joe@email.com', expected);

        expect(engineer.getGithub()).toEqual(expected);

    });

    it ('should return Engineer when getRole() is called', () => {

        const expected = 'Engineer';
        const engineer = makeEngineer();

        expect(engineer.getRole()).toEqual(expected);

    });
});