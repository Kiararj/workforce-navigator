INSERT INTO department(name)
VALUES("Human Resources"),
      ("Accounting"),
      ("Management"),
      ("Engineering");

INSERT INTO role(title, salary, department_id)
VALUES("HR Manager", 100000, 3),
      ("HR Specialist", 70000, 1),
      ("Accounting Manager", 130000, 3),
      ("Accountant", 90000, 2),
      ("Front End Developer", 80000, 4),
      ("Back End Developer", 110000, 4);

INSERT INTO employee(first_name, last_name, manager_id, role_id)
VALUES("James", "Blake", 1, 1),
      ("Ellie", "Goulding", NULL, 2),
      ("Aluna", "George", 3, 2),
      ("Calvin", "Harris", NULL, 4),
      ("Leo", "Skepi", NULL, 5),
      ("Lynn", "Gunn", NULL, 6)

