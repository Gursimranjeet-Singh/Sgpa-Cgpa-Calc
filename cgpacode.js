let globalcredit;
let globalsubject;
let globalsem;
let count = 0;
let countsem = 1;
let cgpa = 0;
let sgpa = 0;

// Initialize the semester prompt
document.getElementById('semp').innerHTML = "Enter Details For Semester - 1";

function ccalc() {
    globalcredit = parseInt(document.getElementById("totalcredit").value);
    globalsubject = parseInt(document.getElementById("noofsub").value);
    globalsem = parseInt(document.getElementById("noofsem").value);

    if (count < globalsubject && countsem < globalsem) {
        document.getElementById("subp").innerHTML = "Enter Marks and Credit For Subject - " + (count + 1);
        count++;
        sgpa += grade(parseInt(document.getElementById("marks").value)) * parseInt(document.getElementById("credit").value);
        document.getElementById("marks").value = "";
        document.getElementById("credit").value = "";
    }

    if (count >= globalsubject && countsem < globalsem) {
        // Increment the semester count AFTER checking the condition
        countsem++; // Increment the semester count
        document.getElementById('semp').innerHTML = "Enter Details For Semester - " + (countsem + 1);
        sgpa = 0;
        count = 0;
        document.getElementById("noofsub").value = "";
        document.getElementById("totalcredit").value = "";
    }

    if (count >= globalsubject && countsem >= globalsem) {
        window.alert("CGPA is " + cgpa / globalsem);
    }
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
