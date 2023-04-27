//your code here

var addTodoBtn = document.getElementById("addTodoBtn");

var newTodoInput = document.getElementById("newTodoInput");
var todoList = document.getElementById("todoList");

function result() {
  if (newTodoInput.value) {
    var li = document.createElement("li");
li.textContent = newTodoInput.value;
    todoList.appendChild(li);
 newTodoInput.value="";
  }
}
addTodoBtn.addEventListener("click", result);
