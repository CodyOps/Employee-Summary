function file(name, type, id, email, parameterName, parameterValue) {
  let icon = "";
  switch (type) {
    case "Manager":
      icon = '<i class="fas fa-user-tie"></i>';
      break;
    case "Engineer":
      icon = '<i class="fa fa-laptop-code"></i>';
      break;
    case "Intern":
      icon = '<i fas fa-university"></i>';
      break;
  }
  return `
<div class="card m-3">
    <h4 class="card-header">${name}</h4>
    <h5 class="card-header">${icon} ${type}</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: ${email}</li>
        <li class="list-group-item">${parameterName}: ${parameterValue}</li>
    </ul>
</div>
`;
}

module.exports.file = file;
