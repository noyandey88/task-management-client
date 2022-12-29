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
    <div>
      <div>
        <img src={imageData} alt="imageData" />
      </div>
    </div>
  );
};

export default MediaTask;