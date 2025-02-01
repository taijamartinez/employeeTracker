INSERT INTO department(name)
VALUES
('Engineering'),
('Sales'),
('HR');


INSERT INTO role (title, salary, department_id)
VALUES
('Software Engineer', 100000, 1),
('Sales Manager', 80000, 2),
('HR Specialist', 60000, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
('Aaron', 'Johnson', 1, NULL),
('Bill', 'Smith', 2, NULL),
('Carly', 'Brown', 3, NULL);
