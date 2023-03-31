const isPartTime = 1;
const isFullTime = 0;
const wagePerHr = 20;
const fullTimeHrs = 8;
const partTimeHrs = 4;
const empWorkingDays = 20;
const MaxHrs = 100;

let empMonthlyWage = 0;
let empHrs = 0;
let totalDays = 0;
let totalEmpHrs = 0;
let empDailyWageArr = new Array();
function MonthlyEmpWage() {
    while (totalEmpHrs < MaxHrs && totalDays < empWorkingDays) {
        let check = Math.floor(Math.random() * 10) % 3;
        totalDays++;
        if (check == isPartTime) {
            empHrs = partTimeHrs;
        }
        else if (check == isFullTime) {
            empHrs = fullTimeHrs;
        }
        else {
            empHrs = 0;
        }
        totalEmpHrs += empHrs;
        let empWage = wagePerHr * empHrs;
        empDailyWageArr.push(empWage);
        //console.log("Employee daily Wage = "+empWage);
        empMonthlyWage += empWage;
    }
    console.log("Total hrs: " + totalEmpHrs + " Total Days: " + totalDays);
    console.log("Monthly Wage = " + empMonthlyWage);
}
function EmpWageArray() {
    console.log("Daily Wage Array");
    console.log(empDailyWageArr);
}
MonthlyEmpWage();
EmpWageArray();




