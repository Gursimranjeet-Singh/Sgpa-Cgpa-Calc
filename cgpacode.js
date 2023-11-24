let globalcredit;
let globalsubject;
let globalsem;
let count = 0;
let countsem = 1;
let cgpa = 0;
let sgpa = 0;



function ccalc() {
    //this will take no of sem entered
    globalsem = parseInt(document.getElementById("noofsem").value);
//this will take no of cridit entered
    globalcredit = parseInt(document.getElementById("totalcredit").value);
    //this will add no of subject entered
    globalsubject = parseInt(document.getElementById("noofsub").value);
    
     
    if (count < globalsubject && countsem <= globalsem) {
        
        sgpa += grade(parseInt(document.getElementById("marks").value)) * parseInt(document.getElementById("credit").value);
        document.getElementById("marks").value = "";
        document.getElementById("credit").value = "";
        count++;

        if(count<globalsubject){
            document.getElementById("subp").innerHTML = "Enter Marks and Credit For Subject - " + (count + 1);
        }
       else{
        document.getElementById("subp").innerHTML = "Enter Marks and Credit For Subject - " +"1";
       }
       
    }

    if (count >= globalsubject && countsem <= globalsem) {
        
        cgpa+=sgpa/(globalcredit);
         countsem++; 
         document.getElementById('semp').innerHTML = "Enter Details For Semester - " + (countsem);
         sgpa = 0;
         count = 0;
         document.getElementById("noofsub").value = "";
         document.getElementById("totalcredit").value = "";
     }
    
    if (countsem > globalsem) {
        window.alert("CGPA is " + (cgpa/globalsem));
        open("code.html","_self");
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
