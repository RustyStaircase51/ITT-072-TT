/*App State*/
const dashboardState = {
  tasks: [],
  category: [],
  status: [],
  selectedCategory: "all",  
};

/*Render Functions*/
function renderTasks() {
  const taskList = document.querySelector("#task_list");

  taskList.innerHTML = "";

  if (dashboardState.tasks.length === 0) {
    taskList.innerHTML = "<p>No tasks yet. Add one to get started.</p>";
    return;
  }

  dashboardState.tasks.forEach(function(task) {
    const li = document.createElement("li");
    li.textContent = task.title;
    taskList.appendChild(li);
  });
};


function CounterFinder() {
  let incompleteTasksNum = 0

  dashboardState.status.forEach(function(currentStatus){
    if (currentStatus === "incomplete")
      incompleteTasksNum += 1;
    
  });
};


function renderCounter() {
  const taskCounter = document.querySelector("#task_counter");

  taskCounter.innerHTML = "";

  if (dashboardState.tasks.length === 0) {
    taskCounter.innerHTML = "<h2>No tasks to complete.</h2>";
    return;
  }

  else {
    taskCounter.innerHTML = "<h2>"

  }};
};




function render() {
  renderTasks();
  renderCounter();
};






















/*State Functions*/
/*function addTask() {

};

function deleteTask() {

};

function toggleTask() {

};


*/
/*Event Functions*/
/*function handleTaskSubmit(event) {

};

function handleTaskDelete(event) {

};

render();
*/