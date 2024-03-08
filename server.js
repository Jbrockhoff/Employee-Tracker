const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        user: 'root',
        password: 'LeoKitty2024*',
        databade: 'employees_db'

    }
);

// TODO: view all depts

//TODO: view all roles

//TODO: view all employees

//TODO: add department

//TODO: add a role

//TODO: add an employee

//TODO: Update an employee role

//TODO: Update employee managers

//TODO: View employees by manager

//TODO: View employees by department

//TODO: delete departments

//TODO: delete roles

//TODO: delete employees

//TODO: view total utilized budget of a dept (combined salaries of all employees in dept)