//* JavaScript Set Date Methods
//  วิธี Set Date ให้คุณตั้งค่าวันที่ (ปี, เดือน, วัน, ชั่วโมง, นาที, วินาที, มิลลิวินาที) สำหรับ Date Object
//TODO:  Method              Description
//?      setDate()           Set the day as a number (1-31)
//?      setFullYear()       Set the year (optionally month and day)
//?      setHours()          Set the hour (0-23)
//?      setMilliseconds()   Set the milliseconds (0-999)
//?      setMinutes()        Set the minutes (0-59)
//?      setMonth()          Set the month (0-11)
//?      setSeconds()        Set the seconds (0-59)
//?      setTime()           Set the time (milliseconds since January 1, 1970)

//* 1. The setFullYear() Method
{
  const d = new Date(); //Thu Jun 08 2023 22:28:10 GMT+0700 (เวลาอินโดจีน)
  d.setFullYear(2020); //Thu Jun 08 2020 22:28:10 GMT+0700 (เวลาอินโดจีน)
  d.setFullYear(2020, 11, 3); //Thu Dec 03 2020 22:28:10 GMT+0700 (เวลาอินโดจีน)
}

//* 2. The setMonth() Method
{
  const d = new Date(); //Thu Jun 08 2023 22:28:10 GMT+0700 (เวลาอินโดจีน)
  d.setMonth(11); //Thu Dec 08 2023 22:28:10 GMT+0700 (เวลาอินโดจีน)
}

//* 3. The setDate() Method
{
  const d = new Date(); //Thu Jun 08 2023 22:28:10 GMT+0700 (เวลาอินโดจีน)
  d.setDate(10); //Thu Dec 10 2023 22:28:10 GMT+0700 (เวลาอินโดจีน)
  d.setDate(d.getDate() + 10); //Thu Jun 18 2023 22:28:10 GMT+0700 (เวลาอินโดจีน)
}

//* 4. The setHours() Method
{
  const d = new Date(); //Thu Jun 08 2023 22:28:10 GMT+0700 (เวลาอินโดจีน)
  d.setHours(10); //Thu Dec 08 2023 10:28:10 GMT+0700 (เวลาอินโดจีน)
}

//* 5. The setMinutes() Method
{
  const d = new Date(); //Thu Jun 08 2023 22:28:10 GMT+0700 (เวลาอินโดจีน)
  d.setMinutes(40); //Thu Dec 08 2023 22:40:10 GMT+0700 (เวลาอินโดจีน)
}

//* 6. The setSeconds() Method
{
  const d = new Date(); //Thu Jun 08 2023 22:28:10 GMT+0700 (เวลาอินโดจีน)
  d.setSeconds(15); //Thu Dec 08 2023 22:28:15 GMT+0700 (เวลาอินโดจีน)
}

//* 7. Compare Dates เปรียบเทียบวันที่
//  สามารถเปรียบเทียบวันที่ได้อย่างง่ายดาย
//  ตัวอย่างต่อไปนี้เปรียบเทียบวันที่ของวันนี้กับ 14 มกราคม 2100
{
  let text = "";
  const today = new Date();
  const someday = new Date();
  someday.setFullYear(2100, 0, 14);

  if (someday > today) {
    text = "Today is before January 14, 2100.";
  } else {
    text = "Today is after January 14, 2100.";
  }
  // Today is before January 14, 2100.
}