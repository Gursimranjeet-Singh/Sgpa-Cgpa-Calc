alert("Please read the data carefully.");
function submitmain() {
    let check, i;
    for (i = 0; i < 2; i++) {
        let a = document.getElementsByName("sc");
        if (a[i].checked) {
            check = a[i].value;
            break;
        }
    }
    if (check === "cgpa") {
        window.open("cgpacode.html","_self");
    } else {
        window.open("sgpacode.html","_self");
    }
}
