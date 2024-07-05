import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const EditTaskModal = ({ isOpen, onRequestClose, onSave, currentTask }) => {
  const [newTask, setNewTask] = useState(currentTask);

  const handleSave = () => {
    onSave(newTask);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Task"
      className="edit-modal"
      overlayClassName="edit-modal-overlay"
    >
      <h2>Edit Task</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onRequestClose}>Cancel</button>
    </Modal>
  );
};

export default EditTaskModal;
