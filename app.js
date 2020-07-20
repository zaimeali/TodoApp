let myTodo = [
    {
        'id': 1,
        'task': 'Bring Milk',
        'isComplete': false
    },
    {
        'id': 2,
        'task': 'Bring Biscuit',
        'isComplete': true
    },
];

function refreshTodo() {
    let myList = document.getElementById('toDo');

    myTodo.map(({id, task, isComplete}, i) => {
        let list = document.createElement("li");
        let clickable = document.createElement("button");
        clickable.innerHTML = task;
        clickable.id = `task-${id}`;
        clickable.className = "btn btn-custom";
        clickable.setAttribute("onclick", `updateTodo(event, ${i})`);
        list.appendChild(clickable);
        list.className = isComplete ? "done" : "notDone";
        myList.appendChild(list);
    });
}

function updateTodo({target}, i){
    console.log(target.id, i);
    let flag = myTodo[i].isComplete;
    myTodo[i].isComplete = !flag;
    console.log(myTodo[i]);
    let parent = document.getElementById(target.id).parentElement;
    parent.className = myTodo[i].isComplete ? "done" : "notDone";
}


