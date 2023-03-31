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
let totalWage=0;
let dayCount=0;
let empDailyWageArr=new Array();
let empDailyWageMap=new Map();

function MonthlyEmpWage()
{
    while(totalEmpHrs<MaxHrs && totalDays<empWorkingDays)
    {
        let check=Math.floor(Math.random()*10)%3;
        totalDays++;
        if(check==isPartTime)
        {
            empHrs=partTimeHrs;
        }
        else if(check==isFullTime)
        {
            empHrs=fullTimeHrs;
        }
        else
        {
            empHrs=0;
        }
        totalEmpHrs+=empHrs;
        let empWage=wagePerHr*empHrs;

        empDailyWageArr.push(empWage);
        empDailyWageMap.set(totalDays,empWage);
        //console.log("Employee daily Wage = "+empWage);
        empMonthlyWage +=empWage;
    }
    //console.log("Monthly Wage = "+empMonthlyWage);
    //console.log(empDailyWageArr);
    console.log(empDailyWageMap);
    empDailyWageArr.forEach(DailyWageSum);
    console.log(totalWage);

    let empMapArr=empDailyWageArr.map(EmpMapWithWageAndDate);
    //console.log(empMapArr);

    let empFullWageArr=empMapArr.filter(EmpFullTimeWage);
   //console.log(empFullWageArr);

    //console.log("First time Full time Wage Eared");
    //console.log(empMapArr.find(EmpFullTimeWage));
}
function DailyWageSum(wage){
    totalWage+=wage;
}
function EmpMapWithWageAndDate(wage)
{
    dayCount++;
    return dayCount+" - "+wage;
}
function EmpFullTimeWage(wage){
    return wage.includes("160");
}

MonthlyEmpWage();



