
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
        window.open("markup/cgpacode.html","_self");
    } else {
        window.open("markup/sgpacode.html","_self");
    }
}
