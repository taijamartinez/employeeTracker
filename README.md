# Employee Tracker
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description
View and manage the departments, roles, and employees in your company.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Credit](#credit)
- [Project Links](#project-links)
- [Questions](#questions)

## Installation
1. Clone the repository by running:  
git clone https://github.com/taijamartinez/employeeTracker.git in your terminal.
2. Install dependencies by running npm install in your terminal.

3. Run psql -U postgres in your terminal.
4. Next, run <br> CREATE DATABASE employee_db;    
\q
5. Then, run <br>psql -U postgres -d employee_db -f db/schema.sql<br>
psql -U postgres -d employee_db -f db/seeds.sql
5. Create a new .env file by runnng touch .env
6. Then, open the .env file and add:<br>DB_USER=postgres<br>
DB_HOST=localhost<br>
DB_NAME=employee_db<br>
DB_PASSWORD=yourpassword<br>
DB_PORT=5432<br><br>
IMPORTANT: replace yourpassword with your actual PostgreSQL password.

## Usage
1. Start the Employee Tracker program by running npm start.
2. Select an option from the menu, follow the prompts and input the information of your choosing.


## License
This application is covered under the MIT license.

## Contributing
If you would like to contribute to my project please follow these steps!

1. Fork the repository on GitHub.
2. Clone your fork to your computer.
3. Create a new branch for your changes.
4. Make your changes and commit them using descriptive messages.
5. Push your branch and open a pull request!

## Tests
1. Run the Employee Tracker and add sample text for each prompt to ensure everything is working and the category was updated successfully. 

2. Make sure every question stores your answer in the appropriate field by viewing the tables again.

## Credit

-CoPilot: Helped me with the getAllRoles and getAllEmployees functions in queries.ts

-ChatGPT: Helped me with the type: list in cli.ts to creat a list of options to choose from. Also, helped with correct files/folders needed.


## Project Links
Repository: https://github.com/taijamartinez/employeeTracker.git

Project Screen Recording: https://drive.google.com/file/d/1ihQhJRWZXGhH0M9luR12biQFWjxElrS0/view

## Questions
Reach me here with additional questions:

GitHub: https://github.com/taijamartinez

Email: taijasmartinez@gmail.com
