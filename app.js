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
    const currentDate = new Date(); //declaring date as a constant
    const taskDeadline = new Date(deadline.value); // declaring the deadline as date 
    currentDate.setHours(0, 0, 0, 0); // to compare only the date value and not the time
    taskDeadline.setHours(0, 0, 0, 0);

    let checkStatus;
    if (taskDeadline < currentDate) { // Task 3 checking the deadline with current date
        checkStatus = "Overdue";
    } else {
        checkStatus = status.value;
    }
    let task = {
        name: taskName.value,
        category: category.value,
        deadline: deadline.value,
        status: checkStatus
    }
    console.log("Deadline:", taskDeadline);
    console.log("Today:", currentDate);

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

// Task 4 Function Filter Array by status
let filterStatus = document.getElementById("filterStatus");

filterStatus.addEventListener("change", function () {
    displayArray();
});

// Task 2 function to Display Array; Task 3 Also adding logic to update, filter tasks
function displayArray() {

    const list = document.getElementById("taskArray");
    list.innerHTML = ""; // clear previous list
    const selectedFilter = filterStatus.value; // Adding Filter 
    taskArray.forEach((task, index) => {
        if (selectedFilter !== "All" && task.status !== selectedFilter) {
            return;
        }
        const li = document.createElement("li");
        li.textContent = `${task.name} | ${task.category} | ${task.deadline} | `;


        const statusSelect = document.createElement("select"); // changing display only status to dropdown
        ["Not Assigned", "In Progress", "Completed", "Overdue"].forEach(optionValue => {
            const option = document.createElement("option");
            option.value = optionValue;
            option.textContent = optionValue;

            if (task.status === optionValue) {
                option.selected = true;
            }

            statusSelect.appendChild(option);
        });
        if (task.status === "Overdue") {
            statusSelect.disabled = true;
        }
        //  adding UI option to update task 
        statusSelect.addEventListener("change", function () {
            taskArray[index].status = statusSelect.value;
            displayArray(); // to get the updates data after the status change, calling the function again
        });
        li.appendChild(statusSelect);
        list.appendChild(li);
    });
}



// //Task 3 Updating Task Status

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
