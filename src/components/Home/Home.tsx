/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import taskImage from '../../assets/task.png';

const Home = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img src={taskImage} alt="task-image" />
      <h1 className="text-2xl font-semibold">Welcome to Task Management App</h1>
    </div>
  );
};

export default Home;