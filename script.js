// Get the necessary elements from the HTML
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    // Get the task text from the input
    const taskText = taskInput.value.trim();
    
    // Check if the input is not empty
    if (taskText !== '') {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.className = 'task-item';
        
        // Create a span for the task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        
        // Create a mark complete button
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Mark Complete';
        completeButton.className = 'complete-btn';
        
        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        
        // Add click event to mark as complete
        completeButton.addEventListener('click', function() {
            taskSpan.style.textDecoration = 'line-through'; // Cross out the task text
            completeButton.disabled = true; // Disable the complete button after it's clicked
        });
        
        // Add click event to delete button
        deleteButton.addEventListener('click', function() {
            listItem.remove(); // Remove the task from the list
        });
        
        // Add the elements to the list item
        listItem.appendChild(taskSpan);
        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);
        
        // Add the list item to the task list
        taskList.appendChild(listItem);
        
        // Clear the input field
        taskInput.value = '';
    }
}

// Add event listener to the Add button
addButton.addEventListener('click', addTask);

// Add event listener to the input field for Enter key
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
