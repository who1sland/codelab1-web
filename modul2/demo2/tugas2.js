const addTaskButton = document.getElementById('addTaskButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = taskText;

        const editButton = document.createElement('button');
        editButton.textContent = '✏️';

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '🗑️';

        // Edit button functionality
        editButton.addEventListener('click', () => {
            if (editButton.textContent === '✏️') {
                const input = document.createElement('input');
                input.type = 'text';
                input.value = span.textContent;
                li.insertBefore(input, span);
                li.removeChild(span);
                editButton.textContent = '💾'; // Change button to save icon
            } else {
                const input = li.querySelector('input');
                span.textContent = input.value.trim();
                li.insertBefore(span, input);
                li.removeChild(input);
                editButton.textContent = '✏️'; // Change button back to edit icon
            }
        });

        // Delete button functionality
        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = '';
    }
});

// Allow adding tasks by pressing Enter
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTaskButton.click();
    }
});
