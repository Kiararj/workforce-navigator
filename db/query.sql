-- View all departments --
SELECT * FROM department;

-- View all roles --
SELECT * FROM role;

-- View all employees --
SELECT * FROM employee;

-- Add a department --
INERT INTO department (id, name)
VALUES ('', '');

-- Add an employee --
INSERT INTO employee (title, salary, department_id)
VALUES ('', '', '');

-- Update an employee --
UPDATE employee
SET title = '', salary = '', department_id = ''
WHERE role_id = ''; 

