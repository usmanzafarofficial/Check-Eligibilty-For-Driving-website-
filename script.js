let submit = document.getElementById("submit"); 
let result = document.getElementById("ans"); 

submit.onclick = function() {
    let age = document.getElementById("myage").value;
    age = Number(age);

    if (age >= 18) {
        result.textContent = "You are Eligible for driving";

        let licence = false; // Replace this with the actual condition to check for a license
        if (licence) {
            console.log("You Have a Licence");
        } else {
            console.log("Get a licence");
        }
    } else {
        result.textContent = "You are NOT Eligible for driving";
    }
};
