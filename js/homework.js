/*App State*/
const dashboardState = {
  name: ["complete homework"],
  category: ["notes"],
  status: ["incomplete"],
  selectedCategory: "all",
  
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

function renderCounter() {

};

function renderEmptyMessage() {

};


function render() {
  renderTasks();

};



/*State Functions*/
function addTask() {

};

function deleteTask() {

};

function toggleTask() {

};

function CounterFinder() {

};

/*Event Functions*/
function handleTaskSubmit(event) {

};

function handleTaskDelete(event) {

};