const Intern = require('../lib/Intern');

function makeIntern(name = 'Fred', id = 123, email = 'fred@mail.com', school = 'schoolname') {
    return new Intern(name, id, email, school);
}

describe('test Intern', () => {
    describe('test fields', () => {
        it('Should contain the correct fields: name, id, email, school', () => {
            const name = 'Joe';
            const id = 1;
            const email = 'loe@mail.com';
            const school = 'schoolname'
    
            const intern = makeIntern(name, id, email, school);
    
            expect(intern.name).toEqual(name);
            expect(intern.id).toEqual(id);
            expect(intern.email).toEqual(email);
            expect(intern.school).toEqual(school);
        });
    });
    

    it ('should return name when getName() is called', () => {

        const expected = 'Joe';
        const intern = makeIntern(expected, 123, 'Joe@email.com', 'schoolname');

        expect(intern.getName()).toEqual(expected);

    });

    it ('should return id when getId() is called', () => {

        const expected = 345;
        const intern = makeIntern('Joe', expected, 'Joe@email.com', 'schoolname');

        expect(intern.getId()).toEqual(expected);

    });

    it ('should return email when getEmail() is called', () => {

        const expected = 'Joe@email.com';
        const intern = makeIntern('Joe', 123, expected, 'schoolname');

        expect(intern.getEmail()).toEqual(expected);

    });

    it ('should return school name when getGithub() is called', () => {

        const expected = 'schoolname';
        const intern = makeIntern('Joe', 123,'Joe@email.com', expected);

        expect(intern.getSchool()).toEqual(expected);

    });

    it ('should return Intern when getRole() is called', () => {

        const expected = 'Intern';
        const intern = makeIntern();

        expect(intern.getRole()).toEqual(expected);

    });
});