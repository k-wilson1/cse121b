const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];
/* for (let i = 0; i < studentReport.length; i++)
{if (studentReport[i]< LIMIT){
  console.log(studentReport[i]);
}
}
let i = 0;
while (i < studentReport.length) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
  i++;
}
*/
studentReport.forEach(item => {if (item < LIMIT) {
    console.log(item);
}
});

for (let i in studentReport) {
  if(studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
}
/*
const n = 3;

const today = newDate();
let todaystring = new
Intl.DateTimeFormat('en-US', options).format(today);
console.log(`Today is ${todaystring}.`);

for(let i = 1; 1 <= n; i++){
  let nextDay = newDate();
  nextDay.setDate(today.getDate() + i);
  let nextDayString = new
Intl.DateTimeFormat('en-US', options).format(nextDay);
  item.extContent = nextDayString;
  output[0].appendChild(item);
}
*/