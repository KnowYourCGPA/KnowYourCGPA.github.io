function calculateCGPA(){
    let PCL2042_m = parseFloat(document.getElementsByName("PCL2042_m")[0].value);
let PCL2042_c = 3;

let CSL2041_m = parseFloat(document.getElementsByName("CSL2041_m")[0].value);
let CSL2041_c = 4;

let CSL2061_m = parseFloat(document.getElementsByName("CSL2061_m")[0].value);
let CSL2061_c = 4;

let CSL2022_m = parseFloat(document.getElementsByName("CSL2022_m")[0].value);
let CSL2022_c = 3;

let CSP2022_m = parseFloat(document.getElementsByName("CSP2022_m")[0].value);
let CSP2022_c = 1;

let CSL2051_m = parseFloat(document.getElementsByName("CSL2051_m")[0].value);
let CSL2051_c = 3;

let CSP2051_m = parseFloat(document.getElementsByName("CSP2051_m")[0].value);
let CSP2051_c = 1;

let CSC2001_m = parseFloat(document.getElementsByName("CSC2001_m")[0].value);
let CSC2001_c = 1;

let previousCGPA = 8.00;

function getP(marks) {
    if (marks > 100) return 0;
    if (marks > 90) return 10;
    if (marks > 80) return 9;
    if (marks > 70) return 8;
    if (marks > 60) return 7;
    if (marks > 50) return 6;
    if (marks > 40) return 5;
    if (marks > 30) return 4;
    if (marks > 20) return 3;
    if (marks > 10) return 2;
    if (marks > 0) return 1;
    else return 0;
}

totalPoints = ((PCL2042_c * getP(PCL2042_m)) + (CSL2041_c * getP(CSL2041_m)) + (CSL2061_c * getP(CSL2061_m)) + (CSL2022_c * getP(CSL2022_m)) + (CSP2022_c * getP(CSP2022_m)) + (CSL2051_c * getP(CSL2051_m)) + (CSP2051_c * getP(CSP2051_m)) + (CSC2001_c * getP(CSC2001_m)));
totalCredits = (PCL2042_c + CSL2041_c + CSL2061_c + CSL2022_c + CSP2022_c + CSL2051_c + CSP2051_c + CSC2001_c);

const sgpaPointer = (totalPoints / totalCredits).toFixed(2);
newCGPA = ((previousCGPA*2 + Number(sgpaPointer))/3).toFixed(2);

const printSGPA = document.getElementById("displaySGPA");
printSGPA.textContent = `Your SGPA is: ${sgpaPointer}`;

}

function resetForm() {
    document.getElementById("segmentContainer").reset();
}