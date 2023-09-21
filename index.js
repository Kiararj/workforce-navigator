const inquirer = require("inquirer");
const mysql = require('mysql2');
const db = require('./config/connection');

const prompts = [
    { type: "list",
      message: "What would you like to do?",
      choices: ["View All Departments", 
      "View All Roles", 
      "View All Employees", 
      "Add a Department", 
      "Add a Role", 
      "Add an Employee", 
      "Update an Employee Role"],
      name: "answer",
    },
];

// Function to initialize the app
function init() {
    inquirer
    .prompt(prompts)
    .then((response) => {
        console.log(response)
});
// For loop to determine which SQL function to run
if (response.answer === "View All Departments"){
  viewAllDepartments();
} else if (response.answer === "View All Roles"){
  viewAllRoles();
} else if (response.answer === "View All Employees"){
  viewAllEmployees();
} else if (response.answer === "Add a Department"){
  addDepartment();
} else if (response.answer === "Add a Role"){
  addRole();
} else if (response.answer === "Add an Employee"){
  addEmployee();
} else if (response.answer === "Update an Employee Role"){
  updateEmployeeRole();
};
};

const viewAllDepartments = () => {
  db.query('SELECT * FROM department;', );
};

const viewAllRoles = () => {
  db.query('SELECT * FROM roles;', );
};

const viewAllEmployees = () => {
  db.query('SELECT * FROM employees;', );
};

// const addDepartment = () => {
//    db.query('INSERT INTO department (id, name) VALUES ('', '');', );
// };


// -- Add a department --
// INERT INTO department (id, name)
// VALUES ('', '');

// -- Add an employee --
// INSERT INTO employee (title, salary, department_id)
// VALUES ('', '', '');

// -- Update an employee --
// UPDATE employee
// SET title = '', salary = '', department_id = ''
// WHERE role_id = ''; 


// Function call to initialize app
init();