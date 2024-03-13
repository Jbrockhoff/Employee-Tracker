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

//Creates menu for user input
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
    });
};

// To view all depts
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

//To view all roles
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

//To view all employees
function viewEmployees() {
    const sql = `SELECT id, first_name, last_name, role_id FROM employees`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err)
            return;
        }    
        console.table(rows)
        menu();

    });
}

//To add department
async function addDepartment() {
    const res = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is the new department name?',
            name: 'departmentName'
        }
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
}

//To add role
async function addRole() {
    const res = await inquirer.prompt([
        {
            type: 'input',
            message: "Enter the role title:",
            name: 'title'
        },

        {
            type: 'input',
            message: "Enter the salary for this role:",
            name: 'salary'
        },

        {
            type: 'input',
            message: 'Enter department ID:',
            name: 'departmentId'
        }
    ]);

    let sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
    let params = [res.title, res.salary, res.department_id];

    db.query(sql, params, (err, rows) => {
              if (err) {
                console.log(err);
                return;
              };
              console.log('Role has been added')
              menu();
            });
        };

//To add employee
async function addEmployee() {
    const res = await inquirer.prompt([
        {
            type: 'input',
            message: "What is the employee's first name?",
            name: 'first_name'
        },

        {
            type: 'input',
            message: "What is the employee's last name?",
            name: 'last_name'
        },

        {
            type: 'input',
            message: "What is the employee's salary ?",
            name: 'salary'
        },

        {
            type: 'input',
            message: "Who is this employee's manager?",
            name: 'manager_id'
        }
    ])

    let sql = `INSERT INTO employees (first_name, last_name, role_id, salary, department_id) VALUES (?, ?, ?, ?, ?)`;
    let params = Object.values(res)
    console.log(params)
  
    db.query(sql, params, (err, rows) => {
      if (err) {
        console.log(err);
        return;
      };
      console.log('Employee has been added')
      menu();
    });
}

//TODO Update employee
async function updateRole() {
    db.query('SELECT * FROM employees', async (err, employees) => {
        if (err) {
            console.log(err);
            return;
          };
         const updateEmployee = await inquirer.prompt ([
            {
                type: 'list',
                message: 'Which employee would you like to update?',
                choices: employees.map((e) => ({name: `${e.first_name} ${e.last_name}`, value: e.id})),
                name: 'employee_id'
            }
         ])

         console.log(updateEmployee.employee_id)
         //prompt store in const = newRole
         //prompt that grabs all of the roles (another db.query to select * from roles)
         //similar map to 205 for choices to map role name key and role_id
         //update query set role_id WHERE id = updateEmployee.employee_id 
    }
    )

}

         //prompt store in const = newRole
         //prompt that grabs all of the roles (another db.query to select * from roles)
         //similar map to 205 for choices to map role name key and role_id
         //update query set role_id WHERE id = updateEmployee.employee_id 



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


menu();