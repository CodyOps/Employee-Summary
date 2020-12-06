const fs = require("fs");

class TeamProfile {
  constructor(team) {
    this.team = team;
  }

  generateTeam() {
    let cards = "";
    for (let employee of this.team) {
      let name = employee.getName();
      let id = employee.getId();
      let email = employee.getEmail();
      let role = employee.getRole();
      let parameter = "";
      let summary = "";
      switch (role) {
        case "Manager":
          summary = employee.getOfficeNumber();
          parameter = "Office Number";
          break;
        case "Engineer":
          summary = employee.getGithub();
          parameter = "Github";
          break;
        case "Intern":
          summary = employee.getSchool();
          parameter = "School";
      }
      let employeeCard = card.card(name, role, id, email, parameter, summary);
      cards = cards + employeeCard;
    }
    let resHTML = html.html(cards);
    return resHTML;
  }
}

module.exports.TeamProfile = TeamProfile;
