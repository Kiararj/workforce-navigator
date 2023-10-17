// Imports required packages
const inquirer = require("inquirer");
const mysql = require('mysql2');
const db = require('./config/connection');
// Prompts for the user to choose an action 
const prompts = [
      {type: "list",
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
      if (response.answer === "View All Departments"){
        viewAllDepartments();
        console.log("View all departments");
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
      }
    }
)};


// Functions that create tables, add department, add role, add employee, and update employee
const viewAllDepartments = () => {
  db.query('SELECT * FROM department;', (err, results) => {
    if(err){
      throw err;
    }
    console.table(results);
    init();
  });
};

const viewAllRoles = () => {
  db.query('SELECT role.id, title, salary, department.name AS department FROM role JOIN department ON role.department_id = department.id;', (err, results) => {
    if (err){
      throw err;
    }
    console.table(results);
    init();
  });
};

const viewAllEmployees = () => {
  db.query('SELECT * FROM employee;', (err, results) => {
    if (err){
      throw err;
    }
    console.table(results);
    init();
  });
};

const addDepartment = () => {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'departmentName',
      message: 'What would you like to name the department?'
    }
  ])
  .then(answer => {
    const newDepartmentName = answer.departmentName;
    db.query('INSERT INTO department (name) VALUES (?)', [newDepartmentName], (err, result) => {
      if (err) {
        throw err;
      }
      console.log(`New department added!`);
      init();
    });
  })
  .catch(error => {
    console.error(error);
  });
 };

//  const addRole = () => {

//  };

//  const addEmployee = () => {
//   inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'employeeFirstName',
//       message: "What is the employee's first name?"
//     },
//     {
//       type: 'input',
//       name: 'employeeLastName',
//       message: "What is the employee's last name?"
//     },
//     {
//       type: 'number',
//       name: 'managerId',
//       message: "What would you like the employee's manager_id to be?"
//     },
//     {
//       type: 'number',
//       name: 'roleId',
//       message: "What would you like the employee's role_id to be?"
//     }
//   ])
//   .then(answer => {
//     const newEmployeeFirstName = answer.EmployeeFirstName;
//     db.query('INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES (?, ?, ?, ?)', [newEmployeeFirstName], (err, result) => {
//       if (err) {
//         throw err;
//       }
//       console.log(`New employee added!`);
//       init();
//     });
//   })) 
//   })
//  };

//  const updateEmployeeRole () => {

//  }
// -- Add an employee --
// INSERT INTO employee (title, salary, department_id)
// VALUES ('', '', '');

// -- Update an employee --
// UPDATE employee
// SET title = '', salary = '', department_id = ''
// WHERE role_id = ''; 


// Function call to initialize app
init();