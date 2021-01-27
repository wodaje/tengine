const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// const { } = require("os");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "main.html");

// const render = require("./lib/htmlRenderer");

const empArray = ['Engineer', 'Manager', 'Intern']

let employees = [];

 const addEm = async () => {

  let buttocks = await inquirer.prompt([ 
    {
        type:"input",
        name: "name",
        message: "Please input Employee Name"
        },
    {
        type:"number",
        name: "id",
        message: "Enter Employee Id number"
        },
    {
        type:"input",
        name: "email",
        message: `Enter email`
        },
    {
        type:"list",
        name: "type",
        message: "Choose Employee Type",
        choices: empArray
     }
     

])
return buttocks
      //console.log(out.type) 
    //  switch(out.type){
    //      case "Manager":
    //      console.log("manager selected");
    //  }
     

  
}
  // inquirer
  // .prompt(quest)
  // .then((ans) => {
    
  //   switch (ans.title) {
    
  //     case "Manager":
  //       employees.push(new Manager(ans.name, ans.id, ans.email, ans.officeNumber))
  //       break;
    
  //     case "Engineer":
  //       employees.push(new Engineer(ans.name, ans.id, ans.email, ans.github))
  //       break;
    
  //     case "Intern":
  //       employees.push(new Intern(ans.name, ans.id, ans.email, ans.school))
  //       break;
  //   }

    
  //   if (ans.askAgain === true) {
  //     addEm()
  //   } else {
  //     renderOut()
  //   }
  // })


  async function nextAns(out){
    console.log(out.type)  
            
    switch (out.type) {
    
      case "Manager":
      inquirer.prompt  
        var outc = await inquirer.prompt([
        {
            type:"input",
            name: "officeNumber",
            message: "Office Number"
        }])
        employees.push(new Manager(out.name, out.id, out.email, outc.officeNumber))
        break;
    
      case "Engineer":
        var outc = await inquirer.prompt([
        {
            type:"input",
            name: "github",
            message: "Git Hub"
        }])  
      employees.push(new Engineer(out.name, out.id, out.email, outc.github))
        break;
    
      case "Intern":
        var outc = await inquirer.prompt([
        {
            type:"input",
            name: "school",
            message: "School"
        }])
        employees.push(new Intern(out.name, out.id, out.email, outc.school))
        break;
    }


  }

async function  looper(){
    var ans = await inquirer.prompt([
        {
            type:"confirm",
            name: "answer",
            message: "Do you want to add another employee"
        }])

    if (ans.answer === true) {
           await  init()
    } else {   
        renderOutput()
    }
}


function renderOutput(){
console.log(employees)

}

const init =  async () => {
    try {
        
        const out = await addEm()
        await nextAns(out)
        await looper()
        // const Html = genHtml(out)
        // await writeFsA("README.md", MD)
        // console.log("Successfully generated Web Page")     
    }catch(error){
        console.log(error)
    }
}

init()
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
