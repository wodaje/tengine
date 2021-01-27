const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "main.html");
const render = require("./lib/htmlRenderer");
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
}

async function nextAns(out){

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
 
let file = true

    if (!fs.existsSync(OUTPUT_DIR)) {      
            fs.mkdir("output", { recursive: true }, (err) => {
                if (err) throw err
            });
            file = true
        } else if (!fs.existsSync(outputPath)) { 
            file = true
        }
        
        if (file) {
            fs.writeFileSync(outputPath, render(employees), "utf-8")
            console.log(`Done: ${outputPath}`)
        } else {
            console.log("failed to overwrite")
        }
}



const init =  async () => {
    try {      
        const out = await addEm()
        await nextAns(out)
        await looper()  
    }catch(error){
        console.log(error)
    }
}

init()

