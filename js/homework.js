/*App State*/
const dashboardState = {
  id: [],
  tasks: [],
  category: [],
  status: [],
  selectedCategory: "all",  
};






/*State Functions*/



function addTask(task, cat) {
  const duplicateTask = dashboardState.tasks.some(function(task) {
    return task.title.toLowerCase() === title.toLowerCase();
  });

  if (duplicateTask) {
    showMessage("That task already exists.");
    return;
  }

  dashboardState.tasks.push({
    id: Date.now(),
    tasks: task,
    category: cat,
    status: false
  });
};



function clearTasks() {
  let id_array = dashboardState.id   
  let tasks_array = dashboardState.tasks
  let category_array = dashboardState.category
  let status_array = dashboardState.status
  
  id_array = [];
  tasks_array = [];
  category_array = [];
  status_array = [];
};



function completeTask(task_name) {
	task_name.status = true;
};



function CounterFinder() {
  let incompleteTasksNum = 0

  dashboardState.status.forEach(function(currentStatus){
    if (currentStatus === "incomplete")
      incompleteTasksNum += 1;
  
    return incompleteTasksNum;
  });
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

    const com_btn = document.createElement("button");
    btn.classList.add('complete_button');
    btn.textContent = "Complete";
    com_btn.addEventListener("click", () => {
		  handleTaskComplete(task);
      });

    taskList.appendChild(li);
    taskList.appendChild(com_btn);
    taskList.appendChild(del_btn);
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
    taskCounter.innerHTML = "<h2>" + incompleteTasksNum + " tasks remaining</h2>"

  }
};



function render() {
  renderTasks();
  renderCounter();
};






/*Event Functions*/
function handleTaskSubmit(event) {
  // gets form input
  // validates input
  // calls addTask()


  addTask();
};

function handleClearTasks() {
      com_btn.addEventListener("click", () => {
		  handleTaskComplete(task);
      });
  clearTasks();
  render();
};

function handleTaskComplete(event) {
  completeTask(event);
  render();
};
