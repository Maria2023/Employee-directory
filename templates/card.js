function card(name, type, id, email, paramName, paramValue) {
    let icon = '';
    switch (type) {
        case ('Manager'): icon = '<i class="fas fa-user-tie"></i>';
        break
        case ('Engineer'): icon = '<i class="fa fa-laptop-code"></i>';
        break
        case ('Intern'): icon = '<i class="fas fa-graduation-cap"></i>';
        break
    }
    return `
<div class="card m-3">
    <h4 class="card-header">${name}</h4>
    <h5 class="card-header">${icon} ${type}</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: ${email}</li>
        <li class="list-group-item">${paramName}: ${paramValue}</li>
    </ul>
</div>
`
}

module.exports.card = card;