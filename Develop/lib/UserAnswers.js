const inquirer = require("inquirer");

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
    let param = "";
    switch (type) {
      case "Manager":
        param = "office number";
        break;
      case "Engineer":
        param = "git hub";
        break;
      case "Intern":
        param = "school";
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
        message: `Please input ${type}'s ${param}:`,
        name: "addParam",
      },
    ]);
    return answer;
  }
}

module.exports.UserAnswers = UserAnswers;
