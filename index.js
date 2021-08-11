const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const writeFileAsync = util.promisify(fs.writeFile);
const employees = [];

const askForEmployee = (type = 'Manager') => {
    const baseQuestions = [
        {
            type: 'input',
            name: 'name',
            message: `Enter ${type}'s name`,            
        },
        {
            type: 'input',
            name: 'id',
            message: `Enter ${type}'s id`,            
        },
        {
            type: 'input',
            name: 'email',
            message: `Enter ${type}'s email`,            
        },
    ]

    switch(type) {
        case "Manager":
            baseQuestions.push({
                type: 'input',
                name: 'officeNumber',
                message: `Enter ${type}'s office number`,
            },);
            break;
        case "Engineer":
            baseQuestions.push({
                type: 'input',
                name: 'github',
                message: `Enter ${type}'s GitHub name`,
            },);
            break;
        case "Intern":
            baseQuestions.push({
                type: 'input',
                name: 'school',
                message: `Enter ${type}'s School name`,
            },);
            break;
    }
    return inquirer.prompt(baseQuestions);
}

const renderEmployee = (employee) => {
    let empString = `<div class="employee-card ">
    <h2 class="indented">${employee.name}</h2>
    <h3 class="indented">${employee.getRole()}</h3>
    <div class="card-body"> 
        <div class="list-group-item">
          <p>ID: ${employee.id}</p>
          <P>Email: <a href="mailto: ${employee.email}">${employee.email}</a></P>`

    switch (employee.getRole()) {
        case 'Manager':
            empString += ` <p>Office Number: ${employee.officeNumber}</p> </div> </div> </div>`;
            break;
        case 'Engineer':
            empString += ` <p>GitHub: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></p> </div> </div> </div>`;
            break;
        case 'Intern':
            empString += ` <p>School: ${employee.school}</p> </div> </div> </div>`;
            break;
    }
    return empString;
}

const renderAllEmployees = () => {
    let allEmpsString = '';
    for (let i = 0; i < employees.length; i++) {
        console.log(employees[i]);
        allEmpsString += renderEmployee(employees[i]);
    }
    return allEmpsString;
}

const renderHTML = () => {
    HTMLString = `<!DOCTYPE html>
    <html lang="en-US">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.1.3/flatly/bootstrap.min.css" />
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
        <nav class="jumbotron text-center team-heading">
            <h1 class="display-4">My Team</h1>
        </nav>
        <div class="team-area">
             ${renderAllEmployees (employees)}   
        </div>        
    </body>
    
    </html>`;

    return HTMLString;
}

const writeHTMLToFile = () => {
    writeFileAsync('./dist/index.html', renderHTML())
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
}

const askEmployeeType = () => {

    return inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Do you want to add more employees?',
            choices: ['Engineer', 'Intern', 'I am finished']
        }
    ]).then (( response) => {
        if (response.choice === 'I am finished') {
            
            writeHTMLToFile();
            // checkString = renderHTML();
            // console.log(checkString);
        }
        else {
            askForEmployee(response.choice)
             .then( (answers) => {
                 if (response.choice === 'Engineer') {
                    employees.push(new Engineer(...Object.values(answers)));
                 } else if (response.choice === 'Intern') {
                    employees.push(new Intern(...Object.values(answers)));
                 }
                 askEmployeeType();
             });
        }
    })
}




function main() {
    askForEmployee('Manager')
    .then((answers) =>  {
        employees.push(new Manager(...Object.values(answers)));
        console.log('employees ', employees);
        askEmployeeType();
    })

    
}

main();
