import pool from "../db/connection";

// Get all departments
export async function getAllDepartments() {
    const result = await pool.query(`SELECT * FROM department;`);
    //console.log("Departments:", result.rows); //check if it works
    return result.rows;
}

// Get all roles
export async function getAllRoles() {
    const result = await pool.query(`
        SELECT 
        role.id, 
        role.title, 
        role.salary, 
        department.name AS department
        FROM role
        JOIN department ON department.id = role.department_id
    `);
    //console.log("Roles:", result.rows); //check if it works
    return result.rows;
}

//get all employees
export async function getAllEmployees() {
    const result = await pool.query(`
        SELECT 
            e.id, 
            e.first_name, 
            e.last_name, 
            role.title AS job_title, 
            department.name AS department, 
            role.salary, 
            COALESCE(CONCAT(m.first_name, ' ', m.last_name), 'None') AS manager
        FROM employee e
        JOIN role ON role.id = e.role_id
        JOIN department ON department.id = role.department_id
        LEFT JOIN employee m ON e.manager_id = m.id;
    `);
    return result.rows;
}

// add department
export async function addDepartment(name: string) {
    await pool.query("INSERT INTO department (name) VALUES ($1)", [name]);
}

// add role
export async function addRole(title: string, salary: number, departmentId: number) {
    await pool.query("INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)", 
        [title, salary, departmentId]);
}

// add employee
export async function addEmployee(firstName: string, lastName: string, roleId: number, managerId: number | null) {
    await pool.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)",
        [firstName, lastName, roleId, managerId]);
}

// update employee role
export async function updateEmployeeRole(employeeId: number, newRoleId: number) {
    await pool.query("UPDATE employee SET role_id = $1 WHERE id = $2", 
        [newRoleId, employeeId]);
}

//async function testQueries() {
    //await getAllDepartments();
    //await getAllRoles();
    //await getAllEmployees();
    //process.exit(); // make sure script exits after testing
//}

//run all queries when executing `queries.ts`
//testQueries();
