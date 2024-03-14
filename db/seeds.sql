USE employees_db;

INSERT INTO department (department_name) 
VALUES ('Deli'), 
       ('Bakery'),
       ('Meat and Fish'),
       ('Frozen'),
       ('OGP');

INSERT INTO roles (title, salary, department_id) 
VALUES ('Manager', 100000, 1), 
       ('Assistant Manager', 50000.00, 1),
       ('Associate', 40000, 1),
       ('Jr. Associate', 30000, 1),

       ('Head Baker', 110000, 2), 
       ('Assistant Baker', 60000, 2),
       ('Catering Manager', 50000, 2),
       ('Sales Associate', 40000, 2),

       ('Butcher', 90000, 3), 
       ('Assistant Meat Handler', 40000, 3),
       ('Fish Sales Associate', 35000, 3),
       ('Meat Sales Associate', 25000, 3),

       ('Trainer', 100000, 4), 
       ('Assistant Manager', 50000, 4),
       ('Inventory Manager', 40000, 4),
       ('Stocker', 30000, 4),

       ('Delivery Driver', 120000, 5),
       ('Primary Delivery Assistant', 90000, 5),
       ('Secondary Delivery Assistant', 80000, 5),
       ('Substitute Driver', 50000, 5);

INSERT INTO employees (first_name, last_name, role_id, salary) 
VALUES ('John', 'Doe', 1, 40000),
       ('Sarah', 'Smith', 1, 100000);

INSERT INTO employees (first_name, last_name, role_id, salary, manager_id) 
VALUES 
       ('Michael', 'Jordan', 3, 50000, 1),
       ('Henry', 'Ford', 10, 90000, 2),
       ('Lisa', 'Frank', 11, 35000, 2);

