import mysql from 'mysql2'
import inquirer from 'inquirer'

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "employeeTracker_db"
});

db.connect(function (err) {
    if (err) throw err
    console.log("MySQL is connected")
    workSpreadSheet()
})

function workSpreadSheet() {
    inquirer.prompt([{
        type: 'list',
        name: 'choice',
        message: "What would you like to do?",
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add Department", "Add Role", "Add Employee", "Update Employee Role", "Exit"]
    }]).then(response => {
        switch (response.choice) {
            case "View All Departments":
                viewAllDepartments()
                break;
            case "Add Department":
                addDepartment()
                break;
            default: break
        }
    })
}

function viewAllDepartments() {
    db.query('SELECT * FROM departments', function (err, res) {
        if (err) throw err
        console.table(res)
        workSpreadSheet()
    })
}

function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            name: 'addDep',
            message: "What department would you like to add?"
        }
    ]).then(response => {
        db.query("INSET INTO departments SET ?", {
            department_name: response.addDep
        })
    
        console.log(`Added ${response.addDep} to Departments table`)
        workSpreadSheet()
    })
}

