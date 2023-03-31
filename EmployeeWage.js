const isPartTime=1;
const isFullTime=0;
const wagePerHr=20;
const fullTimeHrs=8;
const partTimeHrs=4;
const empWorkingDays=20;
const MaxHrs=100;

let empMonthlyWage=0;
let empHrs=0;
let totalDays=0;
let totalEmpHrs=0;

function MonthlyEmpWage()
{
    while(totalEmpHrs<MaxHrs && totalDays<empWorkingDays)
    {
        let check=Math.floor(Math.random()*10)%3;
        totalDays++;
        if(check==isPartTime)
        {
            console.log("Day -"+totalDays);
            console.log("Employee -PartTime");
            empHrs=partTimeHrs;
        }
        else if(check==isFullTime)
        {
            console.log("Day -"+totalDays);
            console.log("Employee -FullTime");
            empHrs=fullTimeHrs;
        }
        else
        {
            console.log("Day -"+totalDays);
            console.log("Employee is Absent");
            empHrs=0;
        }
        totalEmpHrs+=empHrs;
        let empWage=wagePerHr*empHrs;
        console.log("Employee daily Wage = "+empWage);
        empMonthlyWage +=empWage;
    }
    console.log("Total hrs: "+totalEmpHrs+" Total Days: "+totalDays);
    console.log("Monthly Wage = "+empMonthlyWage);
}
MonthlyEmpWage();
