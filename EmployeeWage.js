const isPartTime=1;
const isFullTime=0;
const wagePerHr=20;
const fullTimeHrs=8;
const partTimeHrs=4;
const empWorkingDays=20;
let empMonthlyWage=0;
let empHrs=0;
function EmpWage(){
    for(let i=1;i<=empWorkingDays;i++)
    {
        let check=Math.floor(Math.random()*10)%3;
        if(check==isPartTime)
        {
            console.log("Day -"+i);
            console.log("Employee -PartTime");
            empHrs=partTimeHrs;
        }
        else if(check==isFullTime)
        {
            console.log("Day -"+i);
            console.log("Employee -FullTime");
            empHrs=fullTimeHrs;
        }
        else
        {
            console.log("Day -"+i);
            console.log("Employee is Absent");
            empHrs=0;
        }

        let empWage=wagePerHr*empHrs;
        console.log("Employee daily Wage = "+empWage);
        empMonthlyWage +=empWage;
    }
    console.log("  Monthly Wage = "+empMonthlyWage);
    
}
EmpWage();
