import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../redux/taskSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import EditTaskModal from './EditTaskModal';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState({ id: null, text: '' });

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  const openEditModal = (task) => {
    setCurrentTask(task);
    setIsModalOpen(true);
  };

  const handleSaveTask = (newText) => {
    if (newText.trim()) {
      dispatch(editTask({ id: currentTask.id, text: newText.trim() }));
    }
  };

 

  return (
    <>
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id} className="task-item">
          <div>
          <input 
            type="checkbox" 
            checked={task.completed} 
            onChange={() => handleToggleTask(task.id)} 
          />
          <span className={task.completed ? 'completed' : ''}>{task.text}</span>
          </div>
          <div>
          <button onClick={() => openEditModal(task)} className="button-1">
            <FontAwesomeIcon icon={faEdit} size="lg" />
          </button>
          <button onClick={() => handleDeleteTask(task.id)} className="button-2">
            <FontAwesomeIcon icon={faTrash} size="lg" />
          </button>
          </div>
        </li>
      ))}
    </ul>
    <EditTaskModal 
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onSave={handleSaveTask}
        currentTask={currentTask.text}
      />
    </>
  );
};

export default TaskList;
