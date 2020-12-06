const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const makeHTML = require("./lib/makeHTML");

// const userinput = require("./lib/UserAnswers");
// const generateHTML = require("./lib/makeHTML");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

class UserAnswers {
  constructor() {
    this.Answers = [];
    this.counter = 1;
  }

  async requestInput() {
    let type = "Manager";
    let manager = await this.askQuestions(type);
    manager.type = type;
    this.Answers.push(manager);
    let askMore = true;
    while (askMore === true) {
      let newMember = await inquirer.prompt({
        type: "list",
        message: "Please select another team member or click on Exit to quit:",
        choices: ["Engineer", "Intern", "Exit"],
        name: "type",
      });
      type = newMember.type;
      if (type === "Exit") {
        askMore = false;
      } else {
        let employee = await this.askQuestions(type);
        employee.type = type;
        this.Answers.push(employee);
      }
    }
  }

  async askQuestions(type) {
    let parameter = "";
    switch (type) {
      case "Manager":
        parameter = "office number";
        break;
      case "Engineer":
        parameter = "git hub";
        break;
      case "Intern":
        parameter = "university";
        break;
    }
    let answer = await inquirer.prompt([
      {
        type: "input",
        message: `Please input ${type}'s name:`,
        name: "name",
      },
      {
        type: "input",
        message: `Please input ${type}'s email:`,
        name: "email",
      },
      {
        type: "input",
        message: `Please input ${type}'s ID:`,
        name: "id",
      },
      {
        type: "input",
        message: `Please input ${type}'s ${parameter}:`,
        name: "addParam",
      },
    ]);
    return answer;
  }
}

async function init() {
  input = new UserAnswers();
  await input.requestInput();

  let softwareteam = [];

  let employee = {};
  if (employee.type === "Manager") {
    employee = new Manager(
      employee.name,
      employee.id,
      employee.email,
      employee.addParam
    );
  }
  if (employee.type === "Engineer") {
    employee = new Engineer(
      employee.name,
      employee.id,
      employee.email,
      employee.addParam
    );
  }
  if (employee.type === "Intern") {
    employee = new Intern(
      employee.name,
      employee.id,
      employee.email,
      employee.addParam
    );
  }
  softwareteam.push(employee);

  // let teamPage = new makeHTML.TeamProfile(softwareteam);
  // let html = makeHTML.TeamProfile.generateTeam();

  // fs.writeFile("./output/MyTeam.html", html, (err) => {
  //   if (err) throw err;
  //   else console.log("HTML file generated successfully");
  // });

  render(answers);
}

init();
