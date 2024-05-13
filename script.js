// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let employeesArray = [];

// Collect employee data
const collectEmployees = function() {

  while (true) {
    let firstName = prompt("Enter first name: ", "First Name");

    if (firstName === null) {
      break;
    }

    let lastName = prompt("Enter last name: ", "Last Name");

    if (lastName === null) {
      break;
    }

    let salaryInput = prompt("Enter salary: ", "Salary");

    if (salaryInput === null) {
      break;
    }

    let employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salaryInput 
    };

    employeesArray.push(employee);
  
    let choice = prompt("OK to continue or press 'cancel' to display data");

    if (choice === null) {
      return employeesArray;
    }
  }
  console.log(employeesArray);
}
// TODO: Get user input to create and return an array of employee objects


// Display the average salary
const calculateAverageSalary = function(employeesArray) {
  if (employeesArray.length === 0) {
    return 0; // Return 0 if there are no employees
  }

  let totalSalary = 0;

  employeesArray.forEach(employee => {
    // Parse the salary string into a number
    let salary = parseFloat(employee.salary.replace(/[^\d.]/g, ''));

    // Check if the parsed salary is a valid number
    if (!isNaN(salary)) {
      totalSalary += salary;
    }
  });

  return totalSalary / employeesArray.length;
}

// Function to display average salary
const displayAverageSalary = function(employeesArray) {
  const averageSalary = calculateAverageSalary(employeesArray);
  console.log("The average employee salary between our 3 employee(s) is $", averageSalary.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));
}

  
// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  const fullName = `${randomEmployee.firstName} ${randomEmployee.lastName}`;
  
  
  console.log("Congratulations to", fullName, ", our random drawing winner!");
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
