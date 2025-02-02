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
        const departments= await getAllDepartments();
        console.table (departments); //prints in table format instead of json format
        await mainMenu();
        break;

    case "View all roles":
        const allRoles= await getAllRoles();
        console.table (allRoles); //prints in table format instead of json format
        await mainMenu();
        break;

    case "View all employees":
        const allEmployees= await getAllEmployees();
        console.table (allEmployees); //prints in table format instead of json format
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
        await mainMenu();
        break;

    case "Add a role":
        const department = await getAllDepartments();
        const departmentChoices: {name: string; value: number}[] = department.map(dep => ({
        name: dep.name,
        value: dep.id
    }));

        const { title, salary, departmentId } = await inquirer.prompt([
            { type: "input", name: "title", message: "Enter role title:" },
            { type: "number", name: "salary", message: "Enter role salary:" },
            { 
              type: "list", 
              name: "departmentId", 
              message: "Which department does this role belong to?",
              choices: departmentChoices
        }
]);
    await addRole(title, salary, departmentId);
    console.log("Role added successfully!");
    await mainMenu();
    break;   

    case "Add an employee":
        const availableRole = await getAllRoles();
        const roleOptions = availableRole.map(role => ({
            name: role.title,
            value: role.id
        }));

        const employee = await getAllEmployees();
        const managerChoices = employee.map(emp => ({
            name: `${emp.first_name} ${emp.last_name}`,
            value: emp.id
        }));

        managerChoices.unshift({ name: "None", value: null });

            const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
                { type: "input", name: "firstName", message: "Enter first name:" },
                { type: "input", name: "lastName", message: "Enter last name:" },
                { 
                    type: "list", 
                    name: "roleId", 
                    message: "What is the employee's role?",
                    choices: roleOptions
                },

                { type: "list", 
                  name: "managerId", 
                  message: "Who is the employee's manager?",
                  choices: managerChoices
                }
            ]);

            await addEmployee(firstName, lastName, roleId, managerId);
            console.log("Employee added successfully!");
            await mainMenu();
            break;

    case "Update an employee role":
        const employees = await getAllEmployees();
        const employeeChoices = employees.map(emp => ({
            name: `${emp.first_name} ${emp.last_name}`,
            value: emp.id
        }));

            const { employeeId} = await inquirer.prompt([
                { 
                    type: "list", 
                    name: "employeeId", 
                    message: "Which employee's roll do you want to update?",
                    choices: employeeChoices
                }
            ]);
            const roles = await getAllRoles();
            const roleChoices = roles.map(role => ({
                name: role.title,
                value: role.id
            }));

            const { newRoleId } = await inquirer.prompt([
                {
                    type: "list",
                    name: "newRoleId",
                    message: "What is the employee's new role?",
                    choices: roleChoices
                }
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