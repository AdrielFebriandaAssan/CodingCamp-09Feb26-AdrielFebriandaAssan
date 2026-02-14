window.onload = function() {
    let savedName = localStorage.getItem("userName");
    if (!savedName) {
        const name = prompt("Masukkan nama Anda:");
        if (name && name.trim() !== "") {
            savedName = name;
            localStorage.setItem("userName", name);
        } else {
            savedName = "User"; 
        }
    }
    const nameDisplay = document.getElementById("name-display");
    if (nameDisplay) {
        nameDisplay.innerText = savedName;
    }
    const dateInput = document.getElementById("input-birthdate");
    if (dateInput) {
        const today = new Date().toISOString().split("T")[0];
        dateInput.max = today; 
    
        dateInput.min = "1900-01-01"; 
    }
};

function resetName() {
    localStorage.removeItem("userName");
    location.reload(); 
}

const form = document.getElementById("message-form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("input-name").value;
    const birthDate = document.getElementById("input-birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById("input-message").value;

    const now = new Date();
    const timeString = now.toString();

    document.getElementById("current-time").innerText = timeString;
    document.getElementById("res-name").innerText = name;
    document.getElementById("res-birthdate").innerText = birthDate;
    document.getElementById("res-gender").innerText = gender;
    document.getElementById("res-message").innerText = message;
});