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
app.get
//TODO: view all roles
app.get
//TODO: view all employees
app.get
//TODO: add department
app.post
//TODO: add a role
app.post
//TODO: add an employee
app.post
//TODO: Update an employee role
app.put
//TODO: Update employee managers
app.put
//TODO: View employees by manager
app.get
//TODO: View employees by department
app.get
//TODO: delete departments
app.delete
//TODO: delete roles
app.delete
//TODO: delete employees
app.delete
//TODO: view total utilized budget of a dept (combined salaries of all employees in dept)
//app.?


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});