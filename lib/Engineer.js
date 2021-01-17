const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee{

constructor(github, role){
super()
this.github = github
this.role = role

}

}

module.exports = Engineer