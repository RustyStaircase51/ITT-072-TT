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
    dashboardState.id.push(Date.now()),
    dashboardState.tasks.push(task),
    dashboardState.category.push(cat),
    dashboardState.status.push(false)


  console.log(dashboardState);
};



function clearTasks() {
  dashboardState.id = [];
  dashboardState.tasks = [];
  dashboardState.category = [];
  dashboardState.status = [];




  console.log(dashboardState);
};

function deleteTask(task_name) {
	let index_number = dashboardState.tasks.indexOf(task_name);
  let splice_element1 = dashboardState.id.splice(index_number, 1);
  let splice_element2 = dashboardState.tasks.splice(index_number, 1);
  let splice_element3 = dashboardState.category.splice(index_number, 1);
  let splice_element4 = dashboardState.status.splice(index_number, 1);

  
  
  
  console.log(index_number);
  console.log(splice_element1);
  console.log(splice_element2);
  console.log(splice_element3);
  console.log(splice_element4);
  console.log(dashboardState);
};



function completeTask(task_name) {
	task_name.status = true;

  console.log(dashboardState);
};



function CounterFinder() {
  let incompleteTasksNum = 0

  dashboardState.status.forEach(function(currentStatus){
    if (currentStatus === "incomplete")
      incompleteTasksNum += 1;
  
  });
  console.log(incompleteTasksNum);
  return incompleteTasksNum;
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
    li.textContent = task;

    
    const com_btn = document.createElement("button");
    com_btn.classList.add('complete_button');
    com_btn.textContent = "Complete";
    com_btn.addEventListener("click", () => {
		  handleTaskComplete(task);
      element.remove("complete_button");
      });


      
    const del_btn = document.createElement("button");
    del_btn.classList.add('delete_button');
    com_btn.textContent = "Delete";
    com_btn.addEventListener("click", () => {
		  handleTaskComplete(task);
      });  

    
    taskList.appendChild(li);
    taskList.appendChild(com_btn);
  });
};


function renderCounter() {
  const taskCounter = document.querySelector("#task_counter");
  const incompleteTasksNum = CounterFinder();
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
function handleTaskSubmit() {
  const form = document.querySelector("#createTask");
    form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const task_grabber = document.querySelector("#taskAdd");
    const category_grabber = document.querySelector("#categoryAdd");
    
    const task = task_grabber.value.trim();
    const category = category_grabber.value;

    if (task === "") {
      showMessage("That task needs a name.")
      return;
    }

    const duplicateTask = dashboardState.tasks.some(function(current_task) {
      return current_task.toLowerCase() === task.toLowerCase();
    });

    if (duplicateTask) {
      showMessage("That task already exists.");
      return;
    }
    
    addTask(task, category);
  });
};




function handleClearTasks() {  
  const clr_btn = document.querySelector("#clear_button");
  clr_btn.addEventListener("click", () => {
		  clearTasks();
      render();
    });
};

function handleTaskComplete(event) {
  
  completeTask(event);
  render();
};




handleTaskSubmit();
handleClearTasks();
render();