const htmlGenerator = (team) => {

    let html = `<!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
     <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;1,200&display=swap" rel="stylesheet">
  
     
         
     <style>
         body { margin: 0; font-family: sans-serif; text-align: center; background-color: #EBEBEB; }
         header { height: 200px; padding: 10px; background-color: burlywood; box-shadow: 0 0 5px black; margin-bottom: 25px; }
         main > section {background-color: white;  display: inline-block; vertical-align: top; padding: 10px; margin: 10px; box-shadow: 0 0 5px dimgrey; font-family:sans-serif;}
     </style>
        
         <title>Team Profile</title>
     </head>
     <body>
         <header class="text-center display-2" style="font-family: raleway; color: white; padding-top: 50px; ">The Team</header>
         <main>`;
     
         for (let emp of team) {
             html += `
                 <section>
                 <div style=" border: solid 1px brown; padding: 10px">`
                 switch (emp.getRole()){
                     case "Manager": html +=`<h2><svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="currentColor" class="bi bi-clipboard-data" viewBox="0 0 16 16">
                     <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z"/>
                     <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                     <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                   </svg>${emp.getRole()}</h2>`; break; 
                     case "Engineer": html += `<h2><svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="currentColor" class="bi bi-code-square" viewBox="0 0 16 16">
                     <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                     <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"/>
                   </svg>${emp.getRole()}</h2>`; break;
                     case "Intern": html += `<h2><svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
                     <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
                   </svg>${emp.getRole()}</h2>`; break;
                 }   
                 html += `<h3>${emp.getName()}</h3>
                             </div>
                         <p>id: ${emp.getId()}</p>
                         <p>email: <a href="mailto:${emp.getEmail()}">${emp.getEmail()}</a></p>
             `;
               switch (emp.getRole()){
                   // =+ means appends to existing string. in this case it would be html.
                 case "Manager": html += `<p>Office: ${emp.getOfficeNumber()}</p>`; break;
                 case "Engineer": html += `<p>GitHub: <a href="https://github.com/${emp.getGitHub()}"> https://github.com/${emp.getGitHub()}</a></p>`; break;
                 case "Intern": html += `<p>School: ${emp.getSchool()}</p>`; break;
             }
             html += `</section>`;
         }
         html += `
             </main>
         </body>
         </html>
         `;
         return html;
         };
 
 
 
 
 module.exports = htmlGenerator;