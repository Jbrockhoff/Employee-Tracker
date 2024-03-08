const inquirer= require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        user: 'root',
        password: 'LeoKitty2024*',
        database: 'employees_db'
    }
);

function menu() {
    inquirer.prompt({ 
        name: 'action',
        message: 'What would you like to do?',
        choices: ['View Department', 'View Roles', 'View Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role'],
        type: 'list'
    }).then(res => {
        if(res.action === 'View Department') {
            viewDepartment()
        }; 

        if(res.action === 'View Roles') {
            viewRoles()
        };

        if(res.action === 'View Employees') {
            viewEmployees()
        };

        if(res.action === 'Add Department') {
            addDepartment()
        };
        if(res.action === 'Add Role') {
            addRole()
        };

        if(res.action === 'Add Employee') {
            addEmployee()
        };

        if(res.action === 'Update Employee Role') {
            updateRole()
        };

    }) 
}
// TODO: view all depts
  function viewDepartment() {
 
    const sql = `SELECT id, department_name AS department FROM department`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err)
            return;
        }    

        console.table(rows)
        menu();
    });
}
//TODO: view all roles
function viewRoles() {
    const sql = `SELECT id, title FROM role`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err)
            return;
        }    
        console.table(rows)
        menu();

    });
}
//TODO: view all employees
function viewEmployees() {
    const sql = `SELECT id, title FROM role`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err)
            return;
        }    
        console.table(rows)
        menu();

    });
}

//TODO: add department
async function addDepartment() {
    const res = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is the new department name?',
            name: 'departmentName'
        },
        
    ])

    let sql = `INSERT INTO department (department_name) VALUES (?)`;
    let params = [res.departmentName];
  
    db.query(sql, params, (err, rows) => {
      if (err) {
        console.log(err);
        return;
      };
      console.log('Department has been added')
      menu();
    });
};
//TODO add role
async function addRole() {
    const res = await inquirer.prompt([
        {
            type: 'input',
            message: "What is the employee's first name?",
            name: 'firstName'
        },
        {
            type: 'input',
            message: "What is the employee's last name?",
            name: 'lastName'
        },
        {
            type: 'input',
            message: "What is the employee's salary ?",
            name: 'salary'
        },
        {
            type: 'input',
            message: 'Which department is this role in?',
            name: 'departmentID'
        },
        
    ])

    let sql = `INSERT INTO role ('first_name', 'last_name', 'salary', 'department_id') VALUES (?, ?, ?, ?)`;
    let params = [res.roleName];
  
    db.query(sql, params, (err, rows) => {
      if (err) {
        console.log(err);
        return;
      };
      console.log('Role has been added')
      menu();
    });
}


//TODO: delete departments
// app.delete('/api/department/:id', (req, res) => {
//     let sql = 'DELETE FROM department WHERE id = ?';
//     let params = [params.id];
  
//     db.query(sql, params, (err, result) => {
//       if (err) {
//         res.statusMessage(400).json({ error: res.message });
//       } else if (!result.affectedRows) {
//         res.json({
//           message: 'Department not found'
//         });
//       } else {
//         res.json({
//           message: 'deleted',
//           changes: result.affectedRows,
//           id: params.id
//         });
//       }
//     });
//   });
// //TODO: delete roles
// app.delete
// //TODO: delete employees
// app.delete
// //TODO: view total utilized budget of a dept (combined salaries of all employees in dept)
// //app.?


// app.use((req, res) => res.setMaxListeners(404).end());

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
menu()