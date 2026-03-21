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
    }


if (taskName.value === "" || category.value === "" || deadline.value === "" || status.value === "") {
    alert("Please enter all values.")
    return;
}
taskArray.push(task);
displayArray();
taskName.value = "";  // to clear the input fields
category.value = "";
deadline.value = "";
status.value = "In Progress";

console.log(taskArray);
});

// Task 2 function to Display Array
function displayArray() {
    const list = document.getElementById("taskArray");
    list.innerHTML = ""; // clear previous list

    taskArray.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = `${task.name} | ${task.category} | ${task.deadline} | ${task.status}`;
        list.appendChild(li);
    });
}

// //Task 3 Updating Task Status 
function updateStatus (){
const currentDate = new Date();
const taskDeadline = new Date(deadline.value);

if (taskDeadline < currentDate){
    status.value = "Overdue";
    console.log("Past due");
} else {
    status.value = "In Progress"
}
}

// function updateStatus() {
//     const dueDate = new Date('2025-10-15');
//     const d = new Date();

//     if (deadline.value > d) {
//         status.value == Overdue; change itto not editable
//         console.log('Past due');
//     }
// } else {
//     status.value !== Overdue;
// }





// Automatically check each task’s deadline and mark tasks as “Overdue” if the current date has passed the deadline.
// Update the displayed task list whenever a task’s status changes.


// Hold Task 5 unitll today evening Persisting Task Data with Local Storage
