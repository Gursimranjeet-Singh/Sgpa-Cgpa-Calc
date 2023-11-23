let globalcredit; // 
let globalsubject;

function sgpabtn() {
    globalcredit = document.getElementById("totalcredit").value;
    globalsubject = document.getElementById("noofsub").value;
    window.open("dataentry.html");
}

function calc() {
    let count = 0;
    let cgpa = 0;

    while (count < globalsubject) {
        cgpa += grade(document.getElementById("marks").value) * document.getElementById("credit").value;
        count++; 
    }

    cgpa /= parseInt(globalcredit); 
    window.open("code.html");

    
    document.getElementById("codep").value = "Your CGPA is " + cgpa;
}

function grade(num) {
    if (num >= 90) {
        return 10;
    } else if (num >= 80 && num < 90) {
        return 9;
    } else if (num >= 70 && num < 80) {
        return 8;
    } else if (num >= 60 && num < 70) {
        return 7;
    } else if (num >= 55 && num < 60) {
        return 6;
    } else if (num >= 50 && num < 55) {
        return 5;
    } else {
        return 0;
    }
}
