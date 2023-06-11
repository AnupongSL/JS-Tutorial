//* JavaScript Date Objects

//TODO: Creating Date Objects
//? new Date()
//? new Date(date string)
//? new Date(year,month)
//? new Date(year,month,day)
//? new Date(year,month,day,hours)
//? new Date(year,month,day,hours,minutes)
//? new Date(year,month,day,hours,minutes,seconds)
//? new Date(year,month,day,hours,minutes,seconds,ms)
//? new Date(milliseconds)
//TODO

//* 1. JavaScript new Date()
//  สร้างวัตถุวันที่ด้วยวันที่และเวลาปัจจุบัน
{
    const d = new Date(); 
    //Thu Jun 08 2023 21:47:42 GMT+0700 (เวลาอินโดจีน)
}

//* 2. new Date(date string)
//  สร้างวัตถุวันที่จากสตริงวันที่
{
    // Mon Oct 13 2014 11:13:00 GMT+0700 (เวลาอินโดจีน)
    const d = new Date("October 13, 2014 11:13:00");

    // Fri Mar 25 2022 07:00:00 GMT+0700 (เวลาอินโดจีน)
    const e = new Date("2022-03-25");
}

//* 3. new Date(year, month, ...)
//  สร้างวัตถุวันที่พร้อมระบุวันที่และเวลา
//  ตัวเลข 7 ตัวระบุปี เดือน วัน ชั่วโมง นาที วินาที และมิลลิวินาที (ตามลำดับ)
{
    // Mon Dec 24 2018 10:33:30 GMT+0700 (เวลาอินโดจีน)
    const d = new Date(2018, 11, 24, 10, 33, 30, 0);
}
//  การระบุเดือนที่สูงกว่า 11 จะไม่ทำให้เกิดข้อผิดพลาด แต่เพิ่มการล้นในปีถัดไป
//  โดยใช้ตัวเลข 6, 4, 3 หรือ 2 ตัว
//  6 ตัวเลขระบุปี เดือน วัน ชั่วโมง นาที วินาที
//  5 ตัวระบุปี เดือน วัน ชั่วโมง นาที
//  2 ตัวระบุปีและเดือน
//! หากคุณระบุเพียงพารามิเตอร์เดียว จะถือว่าเป็นมิลลิวินาที

//* 4. new Date(milliseconds)
//  สร้างวัตถุวันที่ใหม่เป็นมิลลิวินาทีบวกศูนย์เวลา
//  01 มกราคม 1970 บวก 100,000,000,000 มิลลิวินาที คือ
{   
    //Sat Mar 03 1973 16:46:40 GMT+0700 (เวลาอินโดจีน)
    const d = new Date(100000000000);
}

//  01 มกราคม 1970 ลบ 100,000,000,000 มิลลิวินาที คือ
{
    //Mon Oct 31 1966 21:13:20 GMT+0700 (เวลาอินโดจีน)
    const d = new Date(-100000000000);
}

//  01 มกราคม 1970 บวก 24 ชั่วโมง คือ
{
    const d = new Date(24 * 60 * 60 * 1000);
    // or
    const d1 = new Date(86400000);
}

//  01 มกราคม 1970 บวก 0 มิลลิวินาที คือ
{
    // Thu Jan 01 1970 07:00:00 GMT+0700 (เวลาอินโดจีน)
    const d = new Date(0);
}

//* 5. Displaying Dates แสดงวันที่
{
    const d = new Date();
    let d1 = d.toString(); //Thu Jun 08 2023 21:58:17 GMT+0700 (เวลาอินโดจีน)
    let d2 = d.toDateString(); //Thu Jun 08 2023
    let d3 = d.toUTCString(); //Thu, 08 Jun 2023 14:58:48 GMT
    let d4 = d.toISOString(); //2023-06-08T14:59:24.833Z
}