const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateWebpage = require('./src/generateWebpage.js');

const questions = [
    "What is the team manager's name? (Required)",    // Manager's name
    "Please enter the employee's ID (Required)",    // Employee ID
    "Please enter the employee's email (Required)'",  // Email
    "What is the team manager's office number? (Required)",   // Manager's office number
    "What is the engineer's name? (Required)",    // Engineer's name
    "What is the engineer's GitHub username? (Required)",    // Engineer's GitHub
    "What is the intern's name? (Required)",    // Intern's name
    "What is the intern's school? (Required)",    // Intern's school
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

function teamBuilder(teamData) {
    const [managerNameQ, employeeID, emailQ, officeNumberQ, engineerNameQ, gitHubQ, internNameQ, internSchoolQ] = questions;

    inquirer
        .prompt(
            {
                type: 'list',
                name: 'addTeammate',
                message: 'Would you like to add another team member?',
                choices: ['Engineer', 'Intern', 'Nope.'],
            })
        .then(({ addTeammate }) => {
            if (addTeammate === 'Engineer') {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'engineerName',
                            message: engineerNameQ,
                            validate: engineerNameInput => {
                                if (engineerNameInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the engineer's name.");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'id',
                            message: employeeID,
                            validate: employeeIDInput => {
                                if (employeeIDInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the employee's ID.");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: emailQ,
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the employee's email.");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'gitHub',
                            message: gitHubQ,
                            validate: gitHubInput => {
                                if (gitHubInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the engineer's GitHub account.");
                                    return false;
                                }
                            }
                        }

                    ]


                    ).then((input) => {
                        this.engineer = new Engineer(input.engineerName, input.id, input.email, input.gitHub);
                        teamData.push(this.engineer);
                        return teamBuilder(teamData);
                    })
                    .catch((error) => {
                        if (error.isTtyError) {
                            console.log("Prompt couldn't be rendered in the current environment");
                        } else {
                            console.log("Something else went wrong");
                        }
                    })
            } else if (addTeammate === 'Intern') {
                inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'internName',
                        message: internNameQ,
                        validate: internNameInput => {
                            if (internNameInput) {
                                return true;
                            } else {
                                console.log("Please enter a intern's name.");
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: employeeID,
                        validate: employeeIDInput => {
                            if (employeeIDInput) {
                                return true;
                            } else {
                                console.log("Please enter the employee's ID.");
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: emailQ,
                        validate: emailInput => {
                            if (emailInput) {
                                return true;
                            } else {
                                console.log("Please enter the employee's email.");
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'internSchool',
                        message: internSchoolQ,
                        validate: internSchoolInput => {
                            if (internSchoolInput) {
                                return true;
                            } else {
                                console.log("Please enter a intern's school.");
                                return false;
                            }
                        }
                    }

                ]


                ).then((input) => {
                    this.intern = new Intern(input.internName, input.id, input.email, input.internSchool);
                    teamData.push(this.intern);
                    return teamBuilder(teamData);
                })
                .catch((error) => {
                    if (error.isTtyError) {
                        console.log("Prompt couldn't be rendered in the current environment");
                    } else {
                        console.log("Something else went wrong");
                    }
                })
            } else if (addTeammate === 'Nope.') {
                
                writeToFile('./dist/index.html', generateWebpage(teamData))
            } 
        })
};


function init() {
    const [managerNameQ, employeeID, emailQ, officeNumberQ, engineerNameQ, gitHubQ, internNameQ, internSchoolQ] = questions;

    let teamData = [];

    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: managerNameQ,
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log("Please enter a manager's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: employeeID,
            validate: employeeIDInput => {
                if (employeeIDInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: emailQ,
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's email.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: officeNumberQ,
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's office number.");
                    return false;
                }
            }
        }
    ]).then((input) => {
        this.manager = new Manager(input.managerName, input.id, input.email, input.officeNumber);
        teamData.push(this.manager);
        return teamBuilder(teamData);
    })
        .catch((error) => {
            console.log(error)
            if (error.isTtyError) {
                console.log("Prompt couldn't be rendered in the current environment");
            } else {
                console.log("Something else went wrong");
            }
        });
}


init();
