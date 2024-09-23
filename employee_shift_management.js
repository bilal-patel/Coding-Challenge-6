//Task 1 - Create an Employees Array of Employee Objects

// Setting up a class
class Employee  {
    constructor (name, shifts) {
        this.name = name;
        this.shifts = shifts;
    }
}
// Create 4 employees w/ shifts
let john = new Employee ('John', [
    {day: 'Monday', hours: 8 },
    {day: 'Wednesday', hours: 6 }
]);

let sara = new Employee ('Sara', [
    {day: 'Tuesday', hours: 3 },
    {day: 'Wednesday', hours: 7 }
]);

let steve = new Employee ('Steve', [
    {day: 'Friday', hours: 9 },
    {day: 'Thursday', hours: 12 }
]);

let kyle = new Employee ('Kyle', [
    {day: 'Monday', hours: 8 },
    {day: 'Sunday', hours: 3 }
]);


// create an array of products
const employees = [john, sara, steve, kyle];
//console.log(JSON.stringify(employees, null, 2)); executing task 1 - using JSON.stringify as I chose to use a class and output was not showing correctly

// Task 2 - Create a Function to Display Employee Shift Details
const displayEmployeeShifts = employee => {
    console.log(`Employee: ${employee.name}`)
    employee.shifts.forEach(shift => {
        console.log (`Days: ${shift.day}, Hours: ${shift.hours}`);
    });
}
// displayEmployeeShifts(steve); REMOVE // to test

//Task 3 - Create a Function to Assign a New Shift

const assignShift = (employeeName, day, hours) => {
    const employee = employees.find(e => e.name === employeeName); // find employee by their name

    // if not found
    if (!employee) return;

    // check if employee has shift that day
    const hasShift = employee.shifts.some(shift => shift.day === day);

    if (hasShift) {
        console.log(`${employeeName} has a shift on ${day}`);
    } else {// add new shift if one doesnt have a shift
    employee.shifts.push({ day: day, hours: hours});
    console.log(`adding shift on ${day} for ${employeeName}.`);
    }
}

//assignShift('Kyle', 'Saturday', 8); - Remove // to test function

//Task 4 - Create a Function to Calculate Total Hours Worked
const calculateTotalHours = employeeName => {
    const employee = employees.find(e => e.name === employeeName); //find employees
    return employee ? employee.shifts.reduce((total, shift ) => total + shift.hours, 0) :0; // find if employee exists than calc hours using reduce
}
//console.log(calculateTotalHours('Kyle')); To test calct total hours remove //

// Task 5 - Create a Function to List Employees with Free Days

const listAvailableEmployees = (day) => {
    const freeEmployees = employees.filter(employee => !employee.shifts.some(shift => shift.day === day) // find avail employee
    );

freeEmployees.forEach(employee => console.log(employee.name)); // log name of avail employeee
}
//listAvailableEmployees ('Monday'); // Test 5 remove //