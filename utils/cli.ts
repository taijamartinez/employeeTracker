import inquirer from 'inquirer';
import {
    getAllDepartments, getAllRoles, getAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole
} from "./queries";

async function mainMenu() {
    const { action } = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role",
                "Exit"
            ]
        }
    ]);

switch (action) {
    case "View all departments":
        console.table(await getAllDepartments());
        await mainMenu();
        break;
    case "View all roles":
        console.table(await getAllRoles());
        await mainMenu();
        break;
    case "View all employees":
        console.table(await getAllEmployees());
        await mainMenu();
        break;
    case "Add a department":
        const departmentName = await inquirer.prompt([
            {
                type: "input",
                name: "departmentName",
                message: "What is the name of the department?"
            }
        ]);
        await addDepartment(departmentName.departmentName);
        console.log("Department added successfully!");
        break;

    case "Add a role":
    const { title, salary, departmentId } = await inquirer.prompt([
        { type: "input", name: "title", message: "Enter role title:" },
        { type: "number", name: "salary", message: "Enter role salary:" },
        { type: "number", name: "departmentId", message: "Enter department ID:" }
    ]);
    await addRole(title, salary, departmentId);
    console.log("Role added successfully!");
    await mainMenu();
    break;   

    case "Add an employee":
            const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
                { type: "input", name: "firstName", message: "Enter first name:" },
                { type: "input", name: "lastName", message: "Enter last name:" },
                { type: "number", name: "roleId", message: "Enter role ID:" },
                { type: "number", name: "managerId", message: "Enter manager ID (or leave blank):", default: null }
            ]);
            await addEmployee(firstName, lastName, roleId, managerId);
            console.log("Employee added successfully!");
            await mainMenu();
            break;
        case "Update an employee role":
            const { employeeId, newRoleId } = await inquirer.prompt([
                { type: "number", name: "employeeId", message: "Enter employee ID to update:" },
                { type: "number", name: "newRoleId", message: "Enter new role ID:" }
            ]);
            await updateEmployeeRole(employeeId, newRoleId);
            console.log("Employee role updated successfully!");
            await mainMenu();
            break;
        case "Exit":
            console.log("Exiting Employee Tracker!");
            process.exit();
    }
}

// start the cli
    mainMenu();