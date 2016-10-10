
/*Add new Todo task to the table.
 *If it's first task, it will create table.
*/
function addTodo(form) {
	var elems = form.elements;
	var newTodo = elems.newTodo.value;

	if (!newTodo) {
		emptyTodoError();
	} else {
		if (!document.getElementById('todoList')) {
			var table = document.createElement('table');
			table.setAttribute('id', 'todoTable');
			table.innerHTML = "<tbody id='todoList'>"
								+ "<tr>"
								+ "<th>Task</th>"
								+ "<th>Actions</th>"
								+ "</tr>"
								+ "<tbody>";
			document.body.appendChild(table);

		}
		var tbody = document.getElementById('todoList');
		var newRow = document.createElement('tr');
		newRow.className = "todoRow";
		newRow.innerHTML = "<td class='tasks'>" + newTodo + "</td>"
							+ "<td class='actions'>"
							+ "<a href='' onclick='return deleteTodo(this.parentElement.parentElement)'>Delete</a><span>  </span>"
							+ "<a href='' onclick='return doneTodo(this.parentElement.parentElement)'>Done</a>"
							+ "</td>";
		tbody.appendChild(newRow);		
	}
	return false;
}

/*
 *Delete task from table.
 *If task is the last, it will delete all table.
*/
function deleteTodo(del) {
	if (document.getElementsByClassName('tasks').length > 1) {
			del.remove();
	} else {
		document.getElementById('todoTable').remove();
	}
	return false;
}

/*
 *Mark task as done.
*/
function doneTodo(done) {
	done.getElementsByClassName('tasks')[0].setAttribute('class', 'tasks done');
	return false;
}

/*
 *Show alert message if you try add empty task.
*/
function emptyTodoError() {
	alert("Todo field can't be empty");
}