const inquirer = require("inquirer");
const mysql = require('mysql2');
const db = require('./config/connection');

const prompts = [
    { type: "list",
      message: "What would you like to do?",
      choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role"]
    },
];

// Function to initialize the app
function init() {
    inquirer
    .prompt(prompts)
    .then((response) => {
        console.log(response)
})
};

// Function call to initialize app
init();