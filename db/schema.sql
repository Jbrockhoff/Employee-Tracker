DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
    id               INT          NOT NULL PRIMARY KEY AUTO_INCREMENT,
    department_name  VARCHAR(30)  NOT NULL
);

CREATE TABLE role (
    id             INT          NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title          VARCHAR(30)  NOT NULL,
    salary         DECIMAL      NOT NULL,
    department_id  INT          NOT NULL,

    FOREIGN KEY (department_id)
    REFERENCES department(id)
);

CREATE TABLE employees (
    id             INT          NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name     VARCHAR(30)  NOT NULL,
    last_name      VARCHAR(30)  NOT NULL,
    role_id        INT          NOT NULL,
    manager_id     INT          NOT NULL,

    FOREIGN KEY (role_id)
    REFERENCES role(id)
);

