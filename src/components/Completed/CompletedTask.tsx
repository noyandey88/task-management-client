// @ts-nocheck
import React from 'react';
import { useNavigate } from 'react-router-dom';
type Task = {
  task: {
    _id: string;
    description: string;
    title: string;
    userEmail: string;
    imageData: string;
    status: string;
  }
  handleNotCompleted: Function
};

const CompletedTask = ({ task, handleNotCompleted }: Task) => {
  const { _id, title, description, status } = task;

  const navigate = useNavigate();

  return (
    status === 'completed' &&
    <div className="flex flex-col bg-indigo-100 px-2 py-4 rounded-md my-4 gap-3">
      <div>
        <h2 className="font-semibold">{title}</h2>
        <p>{description.slice(0, 100)}</p>
      </div>
      <div className='flex gap-4'>
        <button onClick={()=> navigate(`/task-details/${_id}`)} className="text-sm bg-indigo-600 py-1 px-4 text-white font-semibold rounded-md">Details</button>
        <button onClick={()=> handleNotCompleted(_id)} className="text-sm bg-indigo-600 py-1 px-4 text-white font-semibold rounded-md">Not Completed</button>
      </div>
      <form>
        <div className='flex gap-4'>
          <input className='flex-1' type="text" placeholder='Comment here...' />
          <button type="submit" className="text-sm bg-indigo-600 py-1 px-4 text-white font-semibold rounded-md">Post</button>
        </div>
      </form>
    </div>
  );
};

export default CompletedTask;