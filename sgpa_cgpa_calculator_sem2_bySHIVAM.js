function calculateCGPA() {
    let subject1_m = parseFloat(document.getElementsByName("Subject1_m")[0].value);
    let subject1_c = 3;

    let subject2_m = parseFloat(document.getElementsByName("Subject2_m")[0].value);
    let subject2_c = 3;

    let subject3_m = parseFloat(document.getElementsByName("Subject3_m")[0].value);
    let subject3_c = 1;

    let subject4_m = parseFloat(document.getElementsByName("Subject4_m")[0].value);
    let subject4_c = 3;

    let subject5_m = parseFloat(document.getElementsByName("Subject5_m")[0].value);
    let subject5_c = 1;

    let subject6_m = parseFloat(document.getElementsByName("Subject6_m")[0].value);
    let subject6_c = 2;

    let subject7_m = parseFloat(document.getElementsByName("Subject7_m")[0].value);
    let subject7_c = 2;

    let subject8_m = parseFloat(document.getElementsByName("Subject8_m")[0].value);
    let subject8_c = 3;

    let subject9_m = parseFloat(document.getElementsByName("Subject9_m")[0].value);
    let subject9_c = 3;

    let subject10_m = parseFloat(document.getElementsByName("Subject10_m")[0].value);
    let subject10_c = 1;
    
    let subject11_m = parseFloat(document.getElementsByName("Subject11_m")[0].value);
    let subject11_c = 1;

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

    totalPoints = ((subject1_c * getP(subject1_m)) + (subject2_c * getP(subject2_m)) + (subject3_c * getP(subject3_m)) + (subject4_c * getP(subject4_m)) + (subject5_c * getP(subject5_m)) + (subject6_c * getP(subject6_m)) + (subject7_c * getP(subject7_m)) + (subject8_c * getP(subject8_m))+(subject9_c*getP(subject9_m))+(subject10_c*getP(subject10_m))+(subject11_c*getP(subject11_m)));

    totalCredits = (subject1_c + subject2_c + subject3_c + subject4_c + subject5_c + subject6_c + subject7_c + subject8_c + subject9_c + subject10_c + subject11_c) ;

    const sgpaPointer = (totalPoints / totalCredits).toFixed(2);
    newCGPA = ((previousCGPA * 2 + Number(sgpaPointer)) / 3).toFixed(2);

    const printSGPA = document.getElementById("displaySGPA");
    printSGPA.textContent = `Your SGPA is: ${sgpaPointer}`;

}

function resetForm() {
    document.getElementById("segmentContainer").reset();
}