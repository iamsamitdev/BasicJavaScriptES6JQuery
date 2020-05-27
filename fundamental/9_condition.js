// Condition If .. else if ... else

var age = 8;
if(age <= 10){
    var txt = "Children";
}else if(age <= 20){
    var txt = "Young";
}else{
    var txt = "Old man";
}

console.log(txt);

// โปรแกรมตัดเกรด
var score = prompt("Enter score :", 0);
if(score >= 80 && score <= 100){
    var grade = "A";
}else if(score >= 70 && score < 80){
    var grade = "B";
}else if(score >= 60 && score < 70){
    var grade = "C";
}else if(score >= 50 && score < 60){
    var grade = "D";
}else if(score < 50){
    var grade = "F";
}else{
    var grade = "Invalid Data";
}

console.log("Your grade is "+ grade);

