const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const displayTeamProfile = require('./src/displayTeamProfile');

// const displayTeamMembers = require('./displayTeam');

const teamMembers = [];

// TODO: Create an array of questions for user input
const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter the team manager's name?",
        validate: answer => {
            if (answer !== "") {
                return true;
            }
            return "Please enter at least one character."
        }
    },
    {
        type: "number",
        name: "id",
        message: "Enter the team manager's id?",
        validate: answer => {
            if (answer > 0) {
                return true;
            }
            return "Please enter a positive number greater than zero."
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter the team manager's email?",
        validate: answer => {
            const pass = answer.match(/^\S+@\S+\.\S+$/);
            if (pass) {
                return true;
            }
            return "Please enter a valid email address."
        }
    },
    {
        type: "number",
        name: "officeNumber",
        message: "Enter the team manager's office number?"
    },
    {
        name: "addTeamMember",
        type: "confirm",
        message: "Do you want add any other team member?",
    }

];

// TODO:
function writeToFile(fileName, data) {
    console.log(data);
    return fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Done!");

    });
}

function AddTeamMember() {
    inquirer
        .prompt({
            type: "list",
            name: "memberType",
            message: "Add a team member",
            choices: [
                "Engineer",
                "Intern"
            ]
        }).then((answer) => {
            let questions = [
                {
                    type: "input",
                    name: "name",
                    message: "Enter a name for the " + answer.memberType.toLowerCase(),
                    validate: answer => {
                        if (answer !== "") {
                            return true;
                        }
                        return "Please enter at least one character."
                    }
                },
                {
                    type: "number",
                    name: "id",
                    message: "Enter id for the " + answer.memberType.toLowerCase()
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter email for the " + answer.memberType.toLowerCase(),
                    validate: answer => {
                        const pass = answer.match(/^\S+@\S+\.\S+$/);
                        if (pass) {
                            return true;
                        }
                        return "Please enter a valid email address."
                    }
                }];

            if (answer.memberType === "Engineer") {
                questions.push(
                    {
                        type: "input",
                        name: "github",
                        message: "Enter Github username for the " + answer.memberType.toLowerCase(),
                        validate: answer => {
                            if (answer !== "") {
                                return true;
                            }
                            return "Please enter at least one character."
                        }
                    }
                )
            }
            if (answer.memberType === "Intern") {
                questions.push({
                    type: "input",
                    name: "school",
                    message: "Enter school for " + answer.memberType.toLowerCase(),
                    validate: answer => {
                        if (answer !== "") {
                            return true;
                        }
                        return "Please enter at least one character."
                    }
                })
            }
            inquirer
                .prompt(questions)
                .then((answers) => {


                    //if member type is Intern then the Intern instance will be created
                    // and then the object will be added to the teamMembers array 
                    if (answer.memberType === "Intern"){
                        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                        teamMembers.push({Intern:intern});
                    }
                    //if member type is Engineer then the Engineer instance will be created
                    // and then the object will be added to the teamMembers array
                    if (answer.memberType === "Engineer") {
                        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                        teamMembers.push({Engineer:engineer});
                    }
                    
                    inquirer.prompt({
                        name: "addTeamMember",
                        type: "confirm",
                        message: "Do you want add any other team member?",
                    }).then(answers => {
                        if (answers.addTeamMember) {
                            AddTeamMember();
                        }   else{
                            console.log("I am in index.js and i am done building my team-> "+JSON.stringify(teamMembers));
                            writeToFile("./dist/MyTeam-AutoGenerated.html", displayTeamProfile(teamMembers));
                        }
                       

                    })
                })
        })
}

// TODO: Create a function to initialize ap
function init() {
    inquirer
        .prompt(managerQuestions)
        .then((answers) => {
             //the Manager instance will be created
            // and then the object will be added to the teamMembers array
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            teamMembers.push({Manager:manager});
            if (answers.addTeamMember) {
             AddTeamMember();
            }  else{

                writeToFile("./dist/MyTeam-AutoGenerated.html", displayTeamProfile(teamMembers));
            }
        });
}
// Function call to initialize app
init();