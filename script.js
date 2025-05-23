document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const taskInput = document.getElementById('new-task');
    const addButton = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');
    const currentDateElement = document.querySelector('.current-date');
    
    // Set current date
    const today = new Date();
    const formattedDate = formatDate(today);
    currentDateElement.textContent = formattedDate;
    
    // Event listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addTask();
    });
    
    // Checkbox functionality
    document.querySelectorAll('.task-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const taskText = this.nextElementSibling;
            if (this.checked) {
                taskText.classList.add('completed');
            } else {
                taskText.classList.remove('completed');
            }
        });
    });
    
    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;
        
        const li = document.createElement('li');
        li.className = 'task-item';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.addEventListener('change', function() {
            const textElement = this.nextElementSibling;
            if (this.checked) {
                textElement.classList.add('completed');
            } else {
                textElement.classList.remove('completed');
            }
        });
        
        const textSpan = document.createElement('span');
        textSpan.className = 'task-text';
        textSpan.textContent = taskText;
        
        li.appendChild(checkbox);
        li.appendChild(textSpan);
        
        taskList.appendChild(li);
        taskInput.value = '';
    }
    
    // Helper function to format date as DD-MM-YYYY
    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }
});
