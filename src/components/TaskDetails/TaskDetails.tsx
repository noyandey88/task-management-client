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
          <img className="h-60 object-cover" src={imageData} alt="taskImage" />
        </div>
        <div>
          <h4>User: {userEmail}</h4>
          <h2>Title: {title}</h2>
          <p>Description: {description}</p>
          <p>Posted On: {postTime ? postTime : "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;