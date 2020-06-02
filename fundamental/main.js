// นี่คือการเขียนคำอธิบายใน JavaScript
// alert("Hello JSSSSS")
/* นี่ก็คือการ comment เช่นเดียวกัน 
    นี่เป็นคำอธิบายเพิ่มเติม
    จากส่วนแรก
*/

// คำสั่งในการแสดงผลข้อความออกไปที่หน้าเว็บ
document.write("Hello JavaScript<br>");
document.write("<b>ยินดีต้อนรับทุกท่าน</b>");
document.write("<h1><font color='red'>ยินดีต้อนรับทุกท่าน</font></h1>");

// การสร้างตัวแปรใน JavaScript
var name = "Samit Koyom";
var age = 28;

// แสดงผลไปที่ Console
//console.log(name);
//console.log(age);

// Method Confirmed
// var status = confirm("Are you OK ?");
// console.log(status);

// Method Prompt
// var msg = prompt("กรุณาป้อนชื่อ", "สามิตร");
// console.log(msg);

// Condition Operator
//var age = prompt("ป้อนอายุของคุณ", "0");
//var votable = (age >= 18)?"You can vote":"Cannot vote";
//console.log(votable);

// Condition if 
var age = 8;
if(age <= 10){ // true
    var x = "Children"; 
}else if(age <= 20){
    var x = "Young"; 
}else{ // false
    var x = "Old man"; 
}

console.log(x);

// ฟังก์ชันดึงวันที่ออกมา
var day = new Date().getDay();
console.log(new Date().getTime());

switch(day){
    case 0:
        console.log("Sunday");
        document.body.style.backgroundColor = "red";
        break;
    case 1:
        console.log("Monday");
        document.body.style.backgroundColor = "yellow";
        break;
    case 2:
        console.log("Tueday");
        document.body.style.backgroundColor = "pink";
        break;
    default:
        console.log("Invalid day");
        document.body.style.backgroundColor = "white";
        break;
}

// Day 1 Complete