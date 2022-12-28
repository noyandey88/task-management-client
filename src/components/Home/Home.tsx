/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import taskImage from '../../assets/task.png';

const Home = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img src={taskImage} className="h-96" alt="task-image" />
      <h1 className="text-2xl font-semibold">Welcome to Task Management App</h1>
      <div className="mt-4">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 font-semibold rounded-md">Add Task</button>
      </div>
    </div>
  );
};

export default Home;