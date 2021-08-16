
function renderTeams(data){
    let html = '';
    let htmlSegment='';
    data.forEach(user => {
        console.log("i am in displayTeamProfile js for each data -> "+JSON.stringify(user));

        if (Object.keys(user)[0].toString() === "Engineer"){
             htmlSegment = ` <div class="col">
                                    <div class="card w-100">
                                        <div class="card-header">
                                            <h2 class="card-title">${user.Engineer.name}</h2>
                                            <h3 class="card-title"><i class="fas fa-glasses"></i>Engineer</h3>
                                        </div>
                                        <div class="card-body">
                                            <ul class="list-group">
                                                <li class="list-group-item">ID: ${user.Engineer.id}</li>
                                                <li class="list-group-item">Email: <a href="mailto:${user.Engineer.email}">${user.Engineer.email}</a></li>
                                                <li class="list-group-item">GitHub: <a href="https://github.com/${user.Engineer.github}"
                                                        target="_blank" rel="noopener noreferrer">${user.Engineer.github}</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>`;
        } else if ( Object.keys(user)[0].toString() === "Intern"){
             htmlSegment = ` <div class="col">
                                    <div class="card w-100">
                                        <div class="card-header">
                                            <h2 class="card-title">${user.Intern.name}</h2>
                                            <h3 class="card-title"><i class="fas fa-user-graduate"></i>Intern</h3>
                                        </div>
                                        <div class="card-body">
                                            <ul class="list-group">
                                                <li class="list-group-item">ID: ${user.Intern.id}</li>
                                                <li class="list-group-item">Email: <a href="mailto:${user.Intern.email}">${user.Intern.email}</a></li>
                                                <li class="list-group-item">School: ${user.Intern.school}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>`;
        } else {
             htmlSegment = ` <div class="col">
                                    <div class="card w-100">
                                        <div class="card-header">
                                            <h2 class="card-title">${user.Manager.name}</h2>
                                            <h3 class="card-title"><i class="fas fa-mug-hot"></i>Manager</h3>
                                        </div>
                                        <div class="card-body">
                                            <ul class="list-group">
                                                <li class="list-group-item">ID: ${user.Manager.id}</li>
                                                <li class="list-group-item">Email: <a href="mailto:${user.Manager.email}">${user.Manager.email}</a></li>
                                                <li class="list-group-item">Office number: ${user.Manager.officeNumber}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>`;
        }
        

        html += htmlSegment;
    });

    return html;
    // let firstRow = document.querySelector('#firstRow');
    // firstRow.innerHTML = html;
}

function displayTeamProfile(data){

    return `<!doctype html>
    <html lang="en">
    
    <head>
        <title>Team Profile</title>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet">    
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
        <header class="container-fluid">
            <div class="row justify-content-center">
                <h1>My Team</h1>
            </div>
        </header>
        <div class="container">
            <div class="row" id="firstRow">
                ${renderTeams(data)}
            </div>
        </div>        
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
</body>
</html>`;
}

module.exports = displayTeamProfile;