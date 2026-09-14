/*App State*/
const dashboardState = {
  id: [],
  tasks: [],
  category: [],
  status: [],
  selectedCategory: "all",  
};






/*State Functions: changes data*/

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



function markTask(task_name) {
	let index_num = dashboardState.tasks.indexOf(task_name);
  if (dashboardState.status.index_num === false) {
  const splice_change_1 = dashboardState.status.splice(index_num, 1, true)
  }

  console.log(splice_change)
  console.log(index_num)
  console.log(dashboardState);
};




function CounterFinder() {
  let incompleteTasksNum = 0

  dashboardState.status.forEach(function(currentStatus){
    if (currentStatus === false)
      incompleteTasksNum += 1;
  
  });
  console.log(incompleteTasksNum);
  return incompleteTasksNum;
};


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

  if (dashboardState.tasks.length === 0) {
    taskList.innerHTML = "<p>No tasks yet. Add one to get started.</p>";
    return;
  }


    dashboardState.tasks.forEach(function(task) {
      let indexNumber = dashboardState.tasks.indexOf(task);
      let taskCategory = dashboardState.category.indexNumber;
      if (dashboardState.selectedCategory === "all" || dashboardState.selectedCategory === taskCategory) {
      
        const li = document.createElement("li");
        li.textContent = task;

        
        const com_btn = document.createElement("button");
        com_btn.classList.add('complete_button');
        com_btn.textContent = "Complete";
        com_btn.addEventListener("click", () => {
          handleTaskMark(task)
          if (com_btn.textContent === "Complete") {
            com_btn.textContent = "Undo";
          }
          else {
            com_btn.textContent = "Complete";
          };
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






/*Event Functions: User Action*/
function handleTaskSubmit() {
  const form = document.querySelector("#taskForm");
    form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const task_grabber = document.querySelector("#taskAdd");
    const category_grabber = document.querySelector("#categoryAdd");
    
    const task = task_grabber.value.trim();
    const category = category_grabber.value;

    if (task === "") {
      const error_mes = document.querySelector("#error_message") 
      error_mes.innerHTML = ("That task needs a name.");
      return;
    }

    const duplicateTask = dashboardState.tasks.some(function(current_task) {
      return current_task.toLowerCase() === task.toLowerCase();
    });

    if (duplicateTask) {
      const error_mes = document.querySelector("#error_message") 
      error_mes.innerHTML = ("That task already exists.");
      return;
    }
    
    form.reset();
    addTask(task, category);
    render();
  });
};

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


function handleCategory(event) {
  const category_button = document.querySelector("#category");
  const new_category = category_button.value
  category_button.addEventListener("change", () => {
    CategoryChanger(new_category);
    render();
  });

};







handleTaskSubmit();
handleClearTasks();
render();