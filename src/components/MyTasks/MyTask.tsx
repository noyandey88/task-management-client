// @ts-nocheck
import React from 'react';

type Task = {
  task: {
    _id: string;
    description: string;
    title: string;
    userEmail: string;
    imageData: string;
    status: string;
  }
  handleDelete: Function
  handleComplete: Function
};

const MyTask = ({ task, handleDelete, handleComplete }: Task) => {
  const { _id, title, description, status } = task;

  return (
      status !== 'completed' &&
      <>
        <div className="flex flex-col bg-indigo-100 px-2 py-4 rounded-md my-4 gap-3">
          <div>
            <h2 className="font-semibold">{title}</h2>
            <p>{description.slice(0, 100)}</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => handleComplete(_id)} className="text-sm bg-indigo-600 py-1 px-4 text-white font-semibold rounded-md">Complete</button>
            <button className="text-sm bg-indigo-600 py-1 px-4 text-white font-semibold rounded-md">Details</button>
            <button className="text-sm bg-indigo-600 py-1 px-4 text-white font-semibold rounded-md">Update</button>
            <button onClick={() => handleDelete(_id)} className="text-sm bg-indigo-600 py-1 px-4 text-white font-semibold rounded-md">Delete</button>
          </div>
        </div>
      </>
  );
};

export default MyTask;