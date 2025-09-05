let tasks = [];
let counter = 0;

const addTask = (title, description, dueDate) => {
    tasks.push({
        id: counter++,
        title,
        description,
        dueDate,
        completed: false
    })
}

addTask("Task1", "desc for task1", new Date());
addTask("Task2", "desc for task2", new Date());
addTask("Task3", "desc for task3", new Date());

const displayTasks = () => {
    let taskList = document.getElementById("task-list");
    taskList.innerHTML = '';
    tasks.forEach((task) => {
        let taskItem = document.createElement('div');
        taskItem.innerHTML =
            `       <h3>${task.title}</h3>
                    <p>${task.description}</p>
                    <p>DueDate ${task.dueDate}</p>
                    <p>Completed: ${taskItem.completed ? 'completed' : 'incomplete'}</p>
                    <button onclick ="handleSetAsComplete(${task.id})">Set as complete </button>
                    <button onclick ="handleDelete(${task.id})">Delete</button>
`;
        taskList.appendChild(taskItem);
    });

};
displayTasks();

const handleSetAsComplete = (taskId) =>{
    let task = tasks.find((task) =>{(task.id === taskId)})
    if(task) {
        task.completed = true;
    }
    displayTasks();
}

const handleDelete = (taskId) =>{
    tasks = tasks.filter(task => task.id !== taskId);
    displayTasks();
}