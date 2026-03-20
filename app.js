//Task Name
//Category
//Deadline
//Status - Inprogress, Completed, Overdue
// Auto Update task status Overdue
//Filter task by status or category
//Save task data using local storage 

// Task 1 Adding New Tasks


// Adding Task Name, Category, Deadline, Status as object
let taskArray = [];
let taskRoutine = { taskName: "", category: "", deadline: "", status: "" };
let btnAddtask = document.getElementById("btnAddtask");
let taskName = document.getElementById("taskName");
let category = document.getElementById("category");
let deadline = document.getElementById("deadline");
let status = document.getElementById("status");

// assigned the object to the array and added it to a function

btnAddtask = addEventListener("click", function addtask() {

    let task = {
        name: taskName.value,
        category: category.value,
        deadline: deadline.value,
        status: status.value,
    };
    if (taskName === "" || category === "" || deadline === "" || status === "") {
        alert("Please enter an item.")
        return;
    }
    taskArray.push(task);
    displayArray();
    // to clear the input fields
    taskNameInput.value = "";
    categoryInput.value = "";
    deadlineInput.value = "";
    statusInput.value = "In Progress";

    console.log(taskArray);
});







// Task 2 Displaying the Task List

displayTask()

//Task 3 Updating Task Status

// Hold Task 5 unitll today evening Persisting Task Data with Local Storage
