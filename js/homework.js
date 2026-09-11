/*App State*/
const dashboardState = {
  name: [],
  category: [],
  status: [],
  selectedCategory: "all",
  
};

/*State Functions*/
function addTask() {


};

function deleteTask() {



};

function toggleTask() {


};



/*Render Functions*/
function renderTasks() {
  const taskList = document.querySelector("#task_list");

  taskList.innerHTML = "";

  tasks.forEach(function(task) {
    const li = document.createElement("li");
    li.textContent = task.text;
    taskList.appendChild(li);
  });

};

function render() {


};

function renderEmptyMessage() {


};




/*Event Functions*/
function handleTaskSubmit(event) {


};



