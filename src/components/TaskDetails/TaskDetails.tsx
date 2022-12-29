// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const TaskDetails = () => {
  const taskDetails = useLoaderData();
  const { _id, title, description, userEmail, imageData, postTime } = taskDetails;
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/user/task/comments`)
      .then(res => res.json())
      .then(data => {
        const filteredComments = data.filter(comment => comment.taskId === _id);
        setComments(filteredComments);
      })
  }, [])

  return (
    <div className="w-full md:w-1/2 md:mx-auto px-2 md:px-0">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Task Details</h2>
      </div>
      <div className="md:flex gap-4">
        <div>
          <img className="w-full h-auto md:w-60 md:h-60 object-cover" src={imageData} alt="taskImage" />
        </div>
        <div className="mt-4 md:mt-0">
          <p className="font-semibold text-gray-600">User: <span className="font-normal">{userEmail}</span></p>
          <p className="font-semibold">Title: {title}</p>
          <p className="font-semibold">Description: <span className="font-normal">{description}</span></p>
          <p className="font-semibold">Posted On:
            <span className="font-normal">{postTime ? postTime : "N/A"}</span>
          </p>
        </div>
      </div>
      <div className="mt-4">
        <div>
          <h2 className="text-xl font-semibold">Comments:</h2>
        </div>
        <div className="rounded-sm my-2">
          {
            comments.map(comment => <div key={comment._id} className="bg-indigo-100 my-2 p-2">
              <p className="capitalize text-sm font-semibold">{comment.comment}</p>
              <p className="text-xs font-medium">Posted On: {comment.postedTime}</p>
            </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;