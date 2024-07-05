# To-Do Application

## Description

This is a simple To-Do application built with ReactJS. The application allows users to add, view, edit, and delete tasks. It uses Redux for state management and supports persistent storage using the browser's local storage.

## Features

- Add new tasks
- View all tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed using a checkbox
- Persistent storage to save tasks across page reloads

## Installation and Setup

### Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

### Steps

1. Clone the repository:

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

2. Install dependencies:

```bash
npm install
```
3. Start the development server:

```bash
npm start
```
4. Open your browser and navigate to To-Do Application

### Responsiveness of To-Do Application in different devices 
#### Laptops/Large devices

![Screenshot 2024-07-05 115723](https://github.com/ShaikArshidBanu/To-Do-Application/assets/112767165/f890deda-261e-4a89-9097-2494869b276a)

#### Tablets/Medium devices 

![Screenshot 2024-07-05 115831](https://github.com/ShaikArshidBanu/To-Do-Application/assets/112767165/206ae17f-bed4-450e-8b07-8e6dc8a9fae3)

#### Mobile phones/Small Devices 

![Screenshot 2024-07-05 115815](https://github.com/ShaikArshidBanu/To-Do-Application/assets/112767165/116ba966-8f75-4a9c-9399-bc45f8ab2dc8)

### Project Structure
- `src/`: Source code directory
   - `components/`: React components
     - `TaskInput.js`: Component for adding a new task
     - `TaskList.js`: Component for displaying the list of tasks
     - `EditTaskModal.js`: Component for editing tasks
   - `redux/`: Redux related files
      - `taskSlice.js`: Redux slice for tasks
      - `store.js`: Redux store configuration
  - `App.js`: Main application component
  - `App.css`: Application styling
  - `index.js`: Entry point of the application
