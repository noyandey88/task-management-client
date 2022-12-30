/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import taskImage from '../../assets/task.png';

const Home = () => {
 
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center flex-col">
      <img src={taskImage} className="h-96" alt="task-image" />
      <h1 className="text-2xl font-semibold dark:text-white">Welcome to Task Writer</h1>
      <div className="mt-4">
        <button onClick={() => navigate("/add-task")} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 font-semibold rounded-md">Add Task</button>
      </div>
    </div>
  );
};

export default Home;