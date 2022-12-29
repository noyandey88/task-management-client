import React from 'react';

type MediaTaskProps = {
  task: {
    _id: string;
    description: string;
    title: string;
    userEmail: string;
    imageData: string;
    status: string;
  }
};

const MediaTask = ({ task }: MediaTaskProps) => {
  const { imageData, title, status } = task;
  return (
    <div className='md:flex gap-4 items-center bg-gray-100 my-4 p-1 rounded-sm'>
      <div>
        <img className="w-full h-60 md:w-60 md:h-60 object-cover" src={imageData} alt="imageData" />
      </div>
      <div className="mt-2 md:mt-0">
        <h2 className="font-semibold">Task Title: <span className="capitalize">{title}</span></h2>
        <p className="font-medium">Status: <span className="capitalize text-indigo-600">{status}</span></p>
      </div>
    </div>
  );
};

export default MediaTask;