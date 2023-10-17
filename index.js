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


// Functions that create tables to view departments, roles and employees, add department, add role, add employee, and update employee
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
 };

 const addRole = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'roleTitle',
        message: "Enter the title of the role:"
      },
      {
        type: 'number',
        name: 'roleSalary',
        message: "Enter the salary for this role:"
      },
      {
        type: 'number',
        name: 'departmentId',
        message: "Enter the department ID for this role:"
      }
    ])
    .then(answer => {
      const { roleTitle, roleSalary, departmentId } = answer;
      db.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [roleTitle, roleSalary, departmentId], (err, result) => {
        if (err) {
          throw err;
        }
        console.log(`New role added!`);
        init();
      });
    })
};

 const addEmployee = () => {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'employeeFirstName',
      message: "What is the employee's first name?"
    },
    {
      type: 'input',
      name: 'employeeLastName',
      message: "What is the employee's last name?"
    },
    {
      type: 'number',
      name: 'managerId',
      message: "What would you like the employee's manager_id to be?"
    },
    {
      type: 'number',
      name: 'roleId',
      message: "What would you like the employee's role_id to be?"
    }
  ])
  .then(answer => {
    const { employeeFirstName, employeeLastName, managerId, roleId } = answer;
    db.query('INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES (?, ?, ?, ?)', [employeeFirstName, employeeLastName, managerId, roleId], (err, result) => {
      if (err) {
        throw err;
      }
      console.log(`New employee added!`);
      init();
    });
  })
 };

 const updateEmployeeRole = () => {
  inquirer
    .prompt([
      {
        type: 'number',
        name: 'employeeId',
        message: "Enter the ID of the employee you want to update:"
      },
      {
        type: 'number',
        name: 'newRoleId',
        message: "Enter the new role ID for the employee:"
      }
    ])
    .then(answer => {
      const { employeeId, newRoleId } = answer;
      db.query('UPDATE employee SET role_id = ? WHERE id = ?', [newRoleId, employeeId], (err, result) => {
        if (err) {
          throw err;
        }
        console.log(`Employee's role updated successfully!`);
        init();
      });
    });
};



// Function call to initialize app
init();