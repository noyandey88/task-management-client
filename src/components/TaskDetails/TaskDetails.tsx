// @ts-nocheck
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TaskDetails = () => {
  const taskDetails = useLoaderData();
  const { title, description, userEmail, imageData, postTime } = taskDetails;
  return (
    <div className="w-full md:w-1/2 md:mx-auto px-2 md:px-0">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Task Details</h2>
      </div>
      <div className="md:flex gap-4">
        <div>
          <img className="w-full h-auto md:w-60 md:h-60 object-cover" src={imageData} alt="taskImage" />
        </div>
        <div>
          <p className="font-semibold text-gray-400">User: <span className="font-normal">{userEmail}</span></p>
          <p className="font-semibold">Title: {title}</p>
          <p className="font-semibold">Description: <span className="font-normal">{description}</span></p>
          <p className="font-semibold">Posted On:
             <span className="font-normal">{postTime ? postTime : "N/A"}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;