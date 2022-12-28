import React from 'react';

type Task = {
  task: {
    _id: string;
    description: string;
    title: string;
    userEmail: string;
    imageData: string;
  }
}

const MyTask = ({ task }: Task) => {
  const { _id, title, description } = task;
  return (
    <>
      <div className="flex justify-between items-center bg-indigo-100 px-2 py-6 rounded-md my-4">
        <div>
          <h2 className="font-semibold">{title}</h2>
        </div>
        <div className="flex gap-2">
          <button className="text-sm bg-indigo-600 py-1 px-4 text-white font-semibold rounded-md">Update</button>
          <button className="text-sm bg-indigo-600 py-1 px-4 text-white font-semibold rounded-md">Delete</button>
          <button className="text-sm bg-indigo-600 py-1 px-4 text-white font-semibold rounded-md">Completed</button>
        </div>
      </div>
    </>
  );
};

export default MyTask;