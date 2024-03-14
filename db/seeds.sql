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

       ('Bakery Manager', 110000, 2), 
       ('Head Baker', 60000, 2),
       ('Catering Manager', 50000, 2),
       ('Sales Associate', 40000, 2),

       ('Butchering Manager', 90000, 3), 
       ('Head Butcher', 40000, 3),
       ('Fish Sales Associate', 35000, 3),
       ('Meat Sales Associate', 25000, 3),

       ('Frozen Manager', 100000, 4), 
       ('Assistant Manager', 50000, 4),
       ('Team Lead', 40000, 4),
       ('Stocker', 30000, 4),

       ('OGP Manager', 120000, 5),
       ('Home Delivery Driver', 90000, 5),
       ('Delivery Assistant', 80000, 5),
       ('Order Prepper', 50000, 5);

INSERT INTO employees (first_name, last_name, role_id, salary) 
VALUES ('John', 'Doe', 1, 100000),
       ('Sarah', 'Smith', 1, 110000);

INSERT INTO employees (first_name, last_name, role_id, salary, manager_id) 
VALUES ('Dan', 'Mann', 2, 50000, 1),
       ('Michael', 'Jordan', 3, 50000, 1),
       ('Sun', 'Shine', 4, 40000, 1),
       ('George', 'Brett', 5, 100000, 1),
       ('Susan', 'Sarandon', 6, 60000, 1),
       ('Tony', 'Stark', 7, 50000, 1),
       ('Bruce', 'Banner', 8, 40000, 1),
       ('Tommy', 'Hilfiger', 9, 90000, 2),
       ('Henry', 'Ford', 10, 90000, 2),
       ('Lisa', 'Frank', 11, 35000, 2),
       ('Carol', 'Brunett', 12, 25000, 2),
       ('Lenny', 'Kravitz', 13, 100000, 2),
       ('Sam', "Adams", 14, 40000, 2),
       ('Nancy', 'Kerrigan', 15, 40000, 2),
       ('Anne', 'Hathaway', 16, 30000, 2),
       ('Eric', 'Green', 17, 120000, 2),
       ('Wolfgang', 'Gerhardt', 18, 90000, 2),
       ('Delaney', 'Nelson', 19, 80000, 2),
       ('Steven', 'Segal', 20, 50000, 2);

