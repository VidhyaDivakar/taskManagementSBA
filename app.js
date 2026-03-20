//Task Name
//Category
//Deadline
//Status - Inprogress, Completed, Overdue
// Auto Update task status Overdue
//Filter task by status or category
//Save task data using local storage 

// Task 1 Adding New Tasks



let taskArray = [];
let taskRoutine = { taskName: "", category: "", deadline: "", status: "" };
let btnAddtask = document.getElementById("btnAddtask");
// Task Name, Category, Deadline, Status as object
// assigned the object to the variable and added it to a function

btnAddtask = addEventListener("click", function addtask() {
    taskArray = taskRoutine.Value;
    if (taskName === "" || category === "" || deadline === "") {
        alert("Please enter an item.")
        return;
    }
});





let taskArr = [];

// Task 2 Displaying the Task List

displayTask()

//Task 3 Updating Task Status

// Hold Task 5 unitll today evening Persisting Task Data with Local Storage
