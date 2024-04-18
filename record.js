document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const tableBody = document.querySelector("tbody");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        
        var name = document.getElementById("name").value;
        var employeeId = document.getElementById("employeeID").value;
        var department = document.getElementById("department").value;
        var experience = parseInt(document.getElementById("exp").value);
        var email = document.getElementById("email").value;
        var mobile = document.getElementById("mbl").value;

        
        let role;
        if (experience > 5) {
            role = "Senior";
        } else if (experience >= 2 && experience <= 5) {
            role = "Junior";
        } else {
            role = "Fresher";
        }

        
        let roade = document.createElement("tr");
        roade.innerHTML = `
            <td>${name}</td>
            <td>${employeeId}</td>
            <td>${department}</td>
            <td>${experience}</td>
            <td>${email}</td>
            <td>${mobile}</td>
            <td>${role}</td>
            <td><button onclick="deleteRow(this)">Delete</button></td>`

        tableBody.appendChild(roade);
        form.reset();
    });
});

function deleteRow(btn) {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}