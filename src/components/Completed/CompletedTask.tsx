// @ts-nocheck
import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { postAComment } from '../../api/tasksApi';
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
  handleDelete: Function
};

const CompletedTask = ({ task, handleNotCompleted, handleDelete }: Task) => {
  const { _id, title, description, status } = task;

  const navigate = useNavigate();

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target;
    const commentData = {
      taskId: _id,
      comment: form?.comment?.value,
      postedTime: new Date().toLocaleString()
    };
    // console.log(commentData);
    postAComment(commentData)
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
          toast.success("Comment posted. Please check details to see the comment.")
        }
      }).catch((err) => {
        console.error(err);
        toast.error(err.message);
      })
  }

  return (
    <div className="flex flex-col bg-indigo-100 px-2 py-4 rounded-md my-4 gap-3">
      <div>
        <h2 className="font-semibold">{title}</h2>
        <p>{description.slice(0, 100)}</p>
      </div>
      <div className='flex gap-4'>
        <button onClick={() => navigate(`/task-details/${_id}`)} className="text-sm bg-indigo-600 py-1 px-4 text-white font-semibold rounded-md">Details</button>
        <button onClick={() => handleNotCompleted(_id)} className="text-sm bg-indigo-600 py-1 px-4 text-white font-semibold rounded-md">Not Completed</button>
        <button onClick={() => handleDelete(_id)} className="text-sm bg-indigo-600 py-1 px-4 text-white font-semibold rounded-md">Delete</button>
      </div>
      <form onSubmit={handleCommentSubmit}>
        <div className='flex gap-4'>
          <input className='flex-1 bg-gray-100 rounded-sm' name="comment" type="text" placeholder='Comment here...' required />
          <button type="submit" className="text-sm bg-indigo-600 py-1 px-4 text-white font-semibold rounded-md">Post</button>
        </div>
      </form>
    </div>
  );
};

export default CompletedTask;