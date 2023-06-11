//* JavaScript Get Date Methods
//* Date Get Methods
//TODO:  Method              Description
//?      getFullYear()       รับปีเป็นตัวเลขสี่หลัก (yyyy)
//?      getMonth()          รับเดือนเป็นตัวเลข (1-12)
//?      getDate()           รับวันที่เป็นตัวเลข (1-31)
//?      getDay()            รับวันธรรมดาเป็นตัวเลข (0-6)
//?      getHours()          รับชั่วโมง (0-23)
//?      getMinutes()        รับนาทีที่ (0-59)
//?      getSeconds()        รับวินาที (0-59)
//?      getMilliseconds()   รับ millisecond (0-999)
//?      getTime()           รับเวลา (มิลลิวินาทีตั้งแต่ 1 มกราคม 2513)

//* 1. The getFullYear() Method
{
    const d1 = new Date("2021-03-25");
    d1.getFullYear(); //2021
    const d2 = new Date(); //Thu Jun 08 2023 22:28:10 GMT+0700 (เวลาอินโดจีน)
    d2.getFullYear(); //2023
}

//* 2. The getMonth() Method
{
    const d1 = new Date("2021-03-25");
    d1.getMonth(); //3
    const d2 = new Date(); //Thu Jun 08 2023 22:28:10 GMT+0700 (เวลาอินโดจีน)
    d2.getMonth(); //6

    //* สามารถใช้ชื่ออาร์เรย์เพื่อแสดงเดือนเป็นชื่อ
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[d2.getMonth()]; //March
}

//* 3. The getDate() Method
{
    const d1 = new Date("2021-03-25");
    d1.getDate(); //25
    const d2 = new Date(); //Thu Jun 08 2023 22:28:10 GMT+0700 (เวลาอินโดจีน)
    d2.getDate(); //8
}

//* 4. The getHours() Method
{
    const d1 = new Date("2021-03-25"); 
    d1.getHours(); //7
    const d2 = new Date(); //Thu Jun 08 2023 22:28:10 GMT+0700 (เวลาอินโดจีน)
    d2.getHours(); //22
}

//* 5. The getMinutes() Method
{
    const d1 = new Date("2021-03-25"); 
    d1.getMinutes(); //0
    const d2 = new Date(); //Thu Jun 08 2023 22:28:10 GMT+0700 (เวลาอินโดจีน)
    d2.getMinutes(); //28
}

//* 6. The getSeconds() Method
{
    const d1 = new Date("2021-03-25"); 
    d1.getSeconds(); //0
    const d2 = new Date(); //Thu Jun 08 2023 22:28:10 GMT+0700 (เวลาอินโดจีน)
    d2.getSeconds(); //10
}

//* 7. The getMilliseconds() Method
{
    const d1 = new Date("2021-03-25"); 
    d1.getMilliseconds(); //0
    const d2 = new Date(); //Thu Jun 08 2023 22:28:10 GMT+0700 (เวลาอินโดจีน)
    d2.getMilliseconds(); //888
}

//* 8. The getDay() Method
{
    const d1 = new Date("2021-03-25"); 
    d1.getDay(); //4
    const d2 = new Date(); //Thu Jun 08 2023 22:28:10 GMT+0700 (เวลาอินโดจีน)
    d2.getDay(); //4

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d2.getDay()]; //Thursday

}

//* 9. The getTime() Method
//  การส่งคืนจำนวนมิลลิวินาทีตั้งแต่ 1 มกราคม 1970
{
    const d1 = new Date("1970-01-01");
    d1.getTime(); //0
    const d2 = new Date("2021-03-25");
    d2.getTime(); //1616630400000
    const d3 = new Date();
    d3.getTime(); //1686238403924
}

//* 10. The Date.now() Method
//  ส่งกลับจำนวนมิลลิวินาทีตั้งแต่ 1 มกราคม 1970
{
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;
    let years = Math.round(Date.now() / year); //53
}

//* 11. UTC Date Get Methods
//TODO:    Method	              Same As	            Description
//?        getUTCDate()	          getDate()	            Returns the UTC date
//?        getUTCFullYear()	      getFullYear()	        Returns the UTC year
//?        getUTCMonth()	      getMonth()	        Returns the UTC month
//?        getUTCDay()	          getDay()	            Returns the UTC day
//?        getUTCHours()	      getHours()	        Returns the UTC hour
//?        getUTCMinutes()	      getMinutes()	        Returns the UTC minutes
//?        getUTCSeconds()	      getSeconds()	        Returns the UTC seconds
//?        getUTCMilliseconds()	  getMilliseconds()	    Returns the UTC milliseconds
//  วิธี UTC ใช้เวลา UTC (เวลาสากลเชิงพิกัด)
//  เวลา UTC เหมือนกับ GMT (เวลามาตรฐานกรีนิช)
//  ความแตกต่างระหว่างเวลาท้องถิ่นและเวลา UTC อาจนานถึง 24 ชั่วโมง

//* 12. The getTimezoneOffset() Method
//  ส่งคืนความแตกต่าง (เป็นนาที) ระหว่างเวลาท้องถิ่นกับเวลา UTC
{
    let diff = d.getTimezoneOffset(); //-420 นาที
}