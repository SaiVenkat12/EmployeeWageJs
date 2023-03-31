const isPartTime=1;
const isFullTime=0;
const wagePerHr=20;
const fullTimeHrs=8;
const partTimeHrs=4;
let check=Math.floor(Math.random()*10)%3;
function EmpWage(){
    let empHrs=0;
    if(check==isPartTime)
    {
        console.log("Employee -PartTime");
        empHrs=partTimeHrs;
    }
    else if(check==isFullTime)
    {
        console.log("Employee -FullTime");
        empHrs=fullTimeHrs;
    }
    else
    console.log("Employee is Absent");

    let empWage=wagePerHr*empHrs;
    console.log("Employee daily Wage = "+empWage);
}
EmpWage();
