/*App State*/
const dashboardState = {
  id: [],
  tasks: [],
  category: [],
  status: [],
  selectedCategory: "all",  
};






/*State Functions: changes data*/

//Adds the task information to the corresponding array in dashboardState
function addTask(task, cat) {
    dashboardState.id.push(Date.now()),
    dashboardState.tasks.push(task),
    dashboardState.category.push(cat),
    dashboardState.status.push(false)
};


//Emptys all the information from the arrays in dashboardState
function clearTasks() {
  dashboardState.id = [];
  dashboardState.tasks = [];
  dashboardState.category = [];
  dashboardState.status = [];
};

//Gives the task's name, finds it's index, then splices (removes) all of the task's information from the arrays
function deleteTask(task_name) {
	let index_number = dashboardState.tasks.indexOf(task_name);
  let splice_element1 = dashboardState.id.splice(index_number, 1);
  let splice_element2 = dashboardState.tasks.splice(index_number, 1);
  let splice_element3 = dashboardState.category.splice(index_number, 1);
  let splice_element4 = dashboardState.status.splice(index_number, 1);
};


//Marks task as complete by replacing the false with true via splicing
function markTask(task_name) {
	let index_num = dashboardState.tasks.indexOf(task_name);
  const splice_change_1 = dashboardState.status.splice(index_num, 1, true)
};



//counts all of the incomplete tasks and returns the number of tasks remaining
function CounterFinder() {
  let incompleteTasksNum = 0

  dashboardState.status.forEach(function(currentStatus){
    if (currentStatus === false)
      incompleteTasksNum += 1;
  
  });
  return incompleteTasksNum;
};

//determines the category's name it receives then changes dashboardState's selectedCategory 
function CategoryChanger(category_name){
  if (category_name === "all"){
    dashboardState.selectedCategory = "all"
  }
  else if (category_name === "quiz"){
    dashboardState.selectedCategory = "quiz"
  }
  else if (category_name === "reading"){
    dashboardState.selectedCategory = "reading"
  }
  else if (category_name === "notes"){
    dashboardState.selectedCategory = "notes"
  }
  else if (category_name === "assignment"){
    dashboardState.selectedCategory = "assignment"
  }
};







/*Render Functions: update page*/


function renderTasks() {
  const taskList = document.querySelector("#task_list");

  taskList.innerHTML = "";
//Tells the user what to do if no tasks are created
  if (dashboardState.tasks.length === 0) {
    taskList.innerHTML = "<p>No tasks yet. Add one to get started.</p>";
    return;
  }

    dashboardState.tasks.forEach(function(task, indexNumber) {
      let taskCategory = dashboardState.category[indexNumber];
//this will only pick up the task and display it if 1. the selectedCategory is all or 2. the selectedCategory matches the task's category
      if (dashboardState.selectedCategory === "all" || dashboardState.selectedCategory === taskCategory) {
        

        const li = document.createElement("li");
        li.textContent = task;
        
      if (dashboardState.status[indexNumber] === false){
          li.style.color = "red";
      }
      else if (dashboardState.status[indexNumber] === true){
          li.style.color = "green";
      }

        const com_btn = document.createElement("button");
        com_btn.classList.add('complete_button');
        com_btn.textContent = "Complete";
        com_btn.addEventListener("click", () => {
          handleTaskMark(task)
          });


          
        const del_btn = document.createElement("button");
        del_btn.classList.add('delete_button');
        del_btn.textContent = "Delete";
        del_btn.addEventListener("click", () => {
          handleTaskDelete(task);
          });  

        
        taskList.appendChild(li);
        taskList.appendChild(com_btn);
        taskList.appendChild(del_btn);
        
    } });
};


//shows "no tasks to complete" if they have deleted all tasks or have created no tasks. If there is a task it will tell them how many still need completed
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


//Calls both render functions
function render() {
  renderTasks();
  renderCounter();
};






/*Event Functions: User Action*/

//gathers information from the form and figures out if it can add it or if it needs to display an error message
function handleTaskSubmit() {
  const form = document.querySelector("#taskForm");
    form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const task_grabber = document.querySelector("#taskAdd");
    const category_grabber = document.querySelector("#categoryAdd");
    
    const task = task_grabber.value.trim();
    const category = category_grabber.value;
//Error Validation
    if (task === "") {
      const error_mes = document.querySelector("#error_message") 
      error_mes.innerHTML = ("That task needs a name.");
      return;
    }

    const duplicateTask = dashboardState.tasks.some(function(current_task) {
      return current_task.toLowerCase() === task.toLowerCase();
    });
//Error Validation
    if (duplicateTask) {
      const error_mes = document.querySelector("#error_message") 
      error_mes.innerHTML = ("That task name already exists.");
      return;
    }
    
    form.reset();
    const error_mes = document.querySelector("#error_message") 
    error_mes.innerHTML = ""
    addTask(task, category);
    render();
  });
};

//Gives the Clear All button an event listener
function handleClearTasks() {  
  const clr_btn = document.querySelector("#clear_button");
  clr_btn.addEventListener("click", () => {
		  clearTasks();
      render();
    });
};


function handleTaskMark(event) {
  
  markTask(event);
  render();
};


function handleTaskDelete(event) {  
		deleteTask(event);
    render();
};

//handles the dropdown for category change
function handleCategory() {
  const category_button = document.querySelector("#category");
 
  category_button.addEventListener("click", () => {
    CategoryChanger(category_button.value);
    render();
  });

};





//Initalization

handleTaskSubmit();
handleClearTasks();
handleCategory();
render();