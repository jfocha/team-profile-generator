const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// var teamData = [
//     Manager {
//       name: 'Manager One',
//       id: 1,
//       email: 'manager@manager.com',
//       officeNumber: 99
//     },
//     Engineer {
//       name: 'Engineer Two',
//       id: 2,
//       email: 'engineer@engineer.com',
//       github: 'engineerGit'
//     },
//     Intern {
//       name: 'Intern Three',
//       id: 3,
//       email: 'intern@intern.com',
//       school: 'UC Berkeley'
//     }
//   ];

const generateCards = teamData => {
    console.log(teamData);
    return `
    
        ${teamData
        //   .filter(({ feature }) => feature)
          .map(({ name, id, email, option }) => {
            return `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <h6 class="card-subtitle mb-2">Need Job getRole()</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: ${email}</li>
                <li class="list-group-item">${option}</li>
              </ul>
          </div>
          
          `;
          })
          .join('')}
  

        
      
    `;
  };
  
  module.exports = (teamData) => {
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet"  href="style.css">
        <title>Team Profile</title>
    </head>
  
    <body>
        <header>
            <h4>My Team</h4>
        </header>

        <div id="team" class="container">

        <!-- Content here -->

      
      ${generateCards(teamData)}
      

        <!-- Content here -->
    
        </div>
    
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
  };
