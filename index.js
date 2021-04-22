const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const htmlGenerator = require("./src/htmlGenerator");
const fs = require("fs");
const team = [];


menu = () => { 
    
inquirer.prompt(
    {
    message: "Add an Employee?",
    name: "action",
    type: "list",
    choices: ["Manager", "Engineer", "Intern", "No New Employees"]
    }
)
//the logic that will tell what function to run based on the user's response
.then((response) => {
    switch (response.action) {
        case "Manager":
            newManager();
            break;
        case "Engineer":
            newEngineer();
            break;
        case "Intern":
            newIntern();
            break;
        case "No New Employees":
            createTeamFile();
            break;
    }
});
};
//the questions are generated here based off of the users choice
newManager = () => {
        inquirer.prompt([
            
                {
                    type: "input",
                    name: "name",
                    message: "Please enter manager's name",
                    validate: data => {
                        if(data !== ""){
                            return true
                        } 
                        return "Please enter a valid name."
                    }
                },
                {
                    type: "input",
                    name: "id",
                    message: "Enter manager's id",
                    validate: data => {
                        if(data !== ""){
                            return true
                        } 
                        return "Please enter a valid ID."
                    }
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is the team manager's email?",
                    validate: data => {
                        if(data.match(/\S+@\S+\.\S+/)) {
                            return true
                        } 
                        return "Please enter a valid email address."
                    }
                },
                {
                    type: "input",
                    name: "officeNumber",
                    message: "Enter manager's office number",
                    validate: data => {
                        if(data !== ""){
                            return true
                        } 
                        return "Please enter a valid office number."}
                    }
            ]).then(({name, id, email, officeNumber}) => {
                //this is a promise  that can  pull the data based off of the responses
                const emp = new Manager(name, id, email, officeNumber)
                 
                team.push(emp)
                menu();
                //this should bring them back to first set of questions in which adds another employee. 
            })

        }
        
    
     newEngineer = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Enter Engineer's name",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Enter a valid name."}
            },
            {
                type: "input",
                name: "id",
                message: "Enter employee id",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Enter a valid ID."}
            },
            {
                type: "input",
                name: "email",
                message: "What is the engineer's email?",
                validate: data => {
                    if(data.match(/\S+@\S+\.\S+/)) {
                        return true
                    } 
                    return "Enter a valid email address."}
            },
            {
                type: "input",
                name: "Github",
                message: "Enter Engineer's Github Username",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Enter a valid username."}
            },
           

        ]).then(({name, id, email, Github}) => {
            const emp = new Engineer(name, id, email, Github)
            team.push(emp)
            menu();

        })
    }
    newIntern = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter Intern's name",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Enter a valid name."}
             
            },
            {
                type: "input",
                name: "id",
                message: "Enter employee id",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Enter a valid ID."}
            },
            {
                type: "input",
                name: "email",
                message: "What is the Intern's email?",
                validate: data => {
                    if(data.match(/\S+@\S+\.\S+/)) {
                        return true
                    } 
                    return "Enter a valid email address."}
            },
            {
                type: "input",
                name: "school",
                message: "Enter Intern's school.",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Enter a valid school."}
            },
           

        ]).then(({name, id, email, school}) => {
            const emp = new Intern(name, id, email, school)
            team.push(emp)
            menu();

        })
    }
    

    createTeamFile = () => {

        const htmlFile = htmlGenerator(team);
        fs.writeFileSync("./dist/index.html", htmlFile)
        console.log("Your team is set; Go to the dist folder to view.")
    }

menu();


