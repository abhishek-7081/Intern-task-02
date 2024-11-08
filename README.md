# Intern-task-02

# Project To-Do List

This document provides an overview of the tasks required to complete the project, including HTML, CSS, and JavaScript development. Use this to-do list to guide development, track progress, and ensure the implementation of essential features.

---

## Table of Contents

1. [Project Setup](#project-setup)
2. [HTML Structure](#html-structure)
3. [CSS Styling](#css-styling)
4. [JavaScript Functionality](#javascript-functionality)
5. [Testing and Debugging](#testing-and-debugging)

---

### 1. Project Setup

- [ ] **Initialize the Project Repository**
  - Create a new Git repository.
  - Set up the initial commit.
- [ ] **File Structure**
  - Create core files:
    - `index.html`
    - `style.css`
    - `app.js`
- [ ] **Install Dependencies**
  - If using libraries, install necessary packages (e.g., via npm or CDN links).

### 2. HTML Structure

- [ ] **Create Basic HTML Structure in `index.html`**
  - Define main sections: `Header`, `Main Content`, and `Footer`.
  - Add placeholder elements for forms, lists, buttons, etc.
- [ ] **Build Form Elements**
  - Create input fields, labels, and submit buttons.
  - Include IDs and classes for easy styling and functionality.

### 3. CSS Styling

- [ ] **Define Global Styles in `style.css`**
  - Set default font styles, color schemes, and layout properties.
- [ ] **Section-Specific Styling**
  - **Header**: Background color, font styling.
  - **Content Area**: Margin, padding, and text alignment.
  - **Footer**: Background color, font size, positioning.
- [ ] **Responsive Design**
  - Add media queries for mobile, tablet, and desktop views to ensure compatibility across devices.

### 4. JavaScript Functionality

Below are the core JavaScript functions to add interactivity to the project:

- **Initialization**
  - [ ] Create an `init()` function to set up event listeners and default states.

- **Event Listeners**
  - [ ] Set up listeners for:
    - Button clicks (e.g., add, delete, mark complete).
    - Form submissions.
    - Toggle actions, if applicable.

- **Task Management Functions**
  - [ ] **`addTask(taskName)`**: Adds a new task to the list.
  - [ ] **`deleteTask(taskId)`**: Removes a task by ID.
  - [ ] **`markComplete(taskId)`**: Marks a task as complete.

  ```javascript
  // Example JavaScript functions for task management
  function addTask(taskName) {
      const newTask = document.createElement("li");
      newTask.textContent = taskName;
      document.getElementById("taskList").appendChild(newTask);
  }

  function deleteTask(taskId) {
      const task = document.getElementById(taskId);
      if (task) task.remove();
  }

  function markComplete(taskId) {
      const task = document.getElementById(taskId);
      if (task) task.classList.toggle("completed");
  }
  
