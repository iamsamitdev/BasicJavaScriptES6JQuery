// ฟังก์ชันดึงวันที่ออกมา
var day = new Date().getDay();
console.log(new Date().getTime());

switch (day) {
    case 0:
        console.log("Sunday");
        document.body.style.backgroundColor = "red";
        document.body.style.color = "#fff";
        break;
    case 1:
        console.log("Monday");
        document.body.style.backgroundColor = "yellow";
        break;
    case 2:
        console.log("Tueday");
        document.body.style.backgroundColor = "pink";
        break;
    case 3:
        console.log("Wedsday");
        document.body.style.backgroundColor = "green";
        document.body.style.color = "#fff";
        break;
    case 4:
        console.log("Thursday");
        document.body.style.backgroundColor = "orange";
        break;
    case 5:
        console.log("Friday");
        document.body.style.backgroundColor = "deepskyblue";
        document.body.style.color = "#fff";
        break;
    case 5:
        console.log("Saturday");
        document.body.style.backgroundColor = "violet";
        document.body.style.color = "#fff";
        break;
    default:
        console.log("Invalid day");
        document.body.style.backgroundColor = "#fff";
        break;
}