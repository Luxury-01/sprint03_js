function getFormattedDate(dateObject) {
  let res = ""
  let options = {
    weekday: "long",
  };
  let date = {
    day: dateObject.getDay(),
    month: dateObject.getMonth(),
    year: dateObject.getFullYear (),
    hours: dateObject.getHours(),
    minutes: dateObject.getMinutes(),
    weekday: dateObject.toLocaleString("en-US", options),
  };

  if ( date.minutes < 10)
      date.minutes = "0" + date.minutes;
  if (date.hours < 10)
      date.hours = "0" + date.hours;
  if ( date.day < 10)
      date.day = "0" + date.day; 
  if ( date.month < 10)
      date.month = "0" + date.month;   

  res = date.day + "." + date.month + "." + date.year + " " + date.minutes + ":" + 
        date.hours + " " + date.weekday; 
  return res;
  //console.log(date);
}

const date0 = new Date(1993, 11, 1);
const date1 = new Date(1998, 0, -33); 
const date2 = new Date('42 03:24:00') ;
console.log(getFormattedDate(date0));
console.log(getFormattedDate(date1)); // 28.11.1997 00:00 Friday 
console.log(getFormattedDate(date2)); 

// var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));
// var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// options.timeZone = 'UTC';
// options.timeZoneName = 'short';
// console.log(date.toLocaleDateString('en-US', options));
