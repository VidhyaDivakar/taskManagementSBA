// Task 1 Adding New Tasks


// Adding Task Name, Category, Deadline, Status as object
let taskArray = [];
// let taskRoutine = { taskName: "", category: "", deadline: "", status: "" };
let btnAddtask = document.getElementById("btnAddtask");
let taskName = document.getElementById("taskName");
let category = document.getElementById("category");
let deadline = document.getElementById("deadline");
let status = document.getElementById("status");

// assigned the object to the array and added it to a function

btnAddtask.addEventListener("click", function addtask() {

    let task = {
        name: taskName.value,
        category: category.value,
        deadline: deadline.value,
        status: status.value
    };
    if (taskName.value === "" || category.value === "" || deadline.value === "" || status.value === "") {
        alert("Please enter all values.")
        return;
    }
    console.log("The task is", task);
    taskArray.push(task);
    displayArray();
    // to clear
    //  the input fields
    taskName.value = "";
    category.value = "";
    deadline.value = "";
    status.value = "In Progress";

    console.log(taskArray);
    });

// Display Array
function displayArray() {
    const list = document.getElementById("taskArray");
    list.innerHTML = ""; // clear previous list

    taskArray.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = `${task.name} | ${task.category} | ${task.deadline} | ${task.status}`;
        list.appendChild(li);
    });
}





// Task 2 Displaying the Task List


//Task 3 Updating Task Status

// Hold Task 5 unitll today evening Persisting Task Data with Local Storage
