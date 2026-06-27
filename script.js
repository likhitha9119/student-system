let count = 0;

function addStudent() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;

    if (name === "" || age === "" || course === "") {
        alert("Please fill all fields");
        return;
    }

    // Create list item
    let li = document.createElement("li");
    li.innerHTML = `
        ${name} | ${age} | ${course}
        <button onclick="deleteStudent(this)">X</button>
    `;

    document.getElementById("studentList").appendChild(li);

    // Update count
    count++;
    document.getElementById("total").innerText = count;

    // Clear inputs
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
}

function deleteStudent(btn) {
    btn.parentElement.remove();

    count--;
    document.getElementById("total").innerText = count;
}