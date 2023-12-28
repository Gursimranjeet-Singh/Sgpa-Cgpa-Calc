alert("Please read the data carefully.");
let globalcredit;
let globalsubject;
let globalsem;
let count = 0;
let countsem = 1;
let cgpa = 0;
let sgpa = 0;

function ccalc() {
    globalsem = parseInt(document.getElementById("noofsem").value);
    globalcredit = parseInt(document.getElementById("totalcredit").value);
    globalsubject = parseInt(document.getElementById("noofsub").value);

    // Check if any input is blank
    if (!globalsem || !globalcredit || !globalsubject) {
        window.alert("Please enter valid values for all inputs.");
        return;
    }

    if (count < globalsubject && countsem <= globalsem) {
        const marks = parseInt(document.getElementById("marks").value);
        const credit = parseInt(document.getElementById("credit").value);

        // Check if marks or credit is blank
        if (!marks || !credit) {
            window.alert("Please enter valid values for marks and credit.");
            return;
        }

        if (marks <= 0 || credit <= 0) {
            window.alert("Please enter valid marks and credit (greater than 0).");
            return;
        }

        sgpa += grade(marks) * credit;
        document.getElementById("marks").value = "";
        document.getElementById("credit").value = "";
        count++;

        if (count < globalsubject) {
            document.getElementById("subp").innerHTML = "Enter Marks and Credit For Subject - " + (count + 1);
        } else {
            document.getElementById("subp").innerHTML = "Enter Marks and Credit For Subject - 1";
        }
    }

    if (count >= globalsubject && countsem <= globalsem) {
        cgpa += sgpa / globalcredit;
        countsem++;
        document.getElementById('semp').innerHTML = "Enter Details For Semester - " + countsem;
        sgpa = 0;
        count = 0;
        document.getElementById("noofsub").value = "";
        document.getElementById("totalcredit").value = "";
    }

    if (countsem > globalsem) {
        window.alert("CGPA is " + (cgpa / globalsem));
        open("../index.html", "_self");
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


