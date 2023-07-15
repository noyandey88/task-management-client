// @ts-nocheck
import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { updateTask } from '../../api/tasksApi';

const UpdateTask = () => {
  const taskData = useLoaderData();
  const { _id, title, description } = taskData;
  const navigate = useNavigate();

  console.log(taskData);
  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target;

    const updateTaskElements = {
      title: form.title.value,
      description: form.description.value
    };

    updateTask(_id, updateTaskElements)
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Task data update successfully");
          navigate('/my-tasks')
        }
        console.log(data);
      }).catch((err) => {
        console.error(err);
        toast.error(err.message);
      })

    console.log(updateTaskElements)
  }

  return (
    <div className="w-full md:w-1/2 md:mx-auto px-2 md:px-0">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold dark:text-white">Update Task</h2>
      </div>
      <div>
        <form onSubmit={handleUpdate} className="space-y-2">
          <div>
            <input defaultValue={title} name="title" type="title" className="w-full px-1 py-1 form-input border-indigo-300 rounded-sm dark:bg-gray-200" id="title" placeholder="Task Title" />
          </div>
          <div>
            <textarea defaultValue={description} name="description" id="description" cols={30} rows={5} className="w-full px-1 py-1 form-textarea border-indigo-300 rounded-sm dark:bg-gray-200" placeholder="Write your task description here..."></textarea>
          </div>
          <div>
            <button type="submit" className="w-full px-1 py-1 bg-blue-600 text-white font-semibold rounded-sm">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;