window.onload = function() {
    alert("Please read the data carefully.");
};
let globalcredit;
let globalsubject;
let count = 0;
let cgpa = 0;

function scalc() {
    globalcredit = document.getElementById("totalcredit").value;
    globalsubject = parseInt(document.getElementById("noofsub").value);

    if (count < globalsubject) {
        document.getElementById("subp").innerHTML = "Enter Marks and Credit For Subject - " + (count + 2);
        count++;

        
        const marks = parseInt(document.getElementById("marks").value);
        const credit = parseInt(document.getElementById("credit").value);

       
        if (isNaN(marks) || isNaN(credit) || marks <= 0 || credit <= 0) {
            window.alert("Please enter valid marks and credit (greater than 0).");
            count--;
        } else if (marks < 0 || credit < 0) {
            window.alert("Please enter valid marks and credit (not negative).");
            count--; 
            document.getElementById("marks").value = "";
            document.getElementById("credit").value = "";
        } else {
            cgpa += grade(marks) * credit;
            document.getElementById("marks").value = "";
            document.getElementById("credit").value = "";
        }
    }

    if (count >= globalsubject) {
        cgpa /= parseInt(globalcredit);
        window.alert("Your CGPA is " + cgpa);
    }

    if (count >= globalsubject) {
        window.open("../index.html", "_self");
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



