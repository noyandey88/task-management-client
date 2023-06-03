// @ts-nocheck
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { addTask } from '../../api/tasksApi';
import { AuthContext } from '../../contexts/AuthProvider';

const AddTask = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleTaskSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target;
    const title = form?.title?.value;
    const description = form?.description?.value;
    const taskImage = form?.image.files[0];
    const userEmail = user?.email;
    const formData = new FormData();
    formData.append('image', taskImage);
    const data = {
      title,
      description,
      imageData: formData,
      userEmail,
      status: "incomplete"
    }
    // add task to database
    addTask(data)
      .then(taskData => {
        console.log(taskData);
        form.reset();
        navigate('/my-tasks');
        toast.success("Task added successfully");
      }).catch((err) => {
        console.log(err);
      })
  };

  return (
    <div className="w-full md:w-1/2 md:mx-auto px-2 md:px-0">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold dark:text-white">Add Task</h2>
      </div>
      <div>
        <form onSubmit={handleTaskSubmit} className="space-y-2">
          <div>
            {/* <label htmlFor="title">Task Title:</label> */}
            <input name="title" type="title" className="w-full px-1 py-1 form-input dark:bg-gray-800 border-blue-300/50 rounded-sm" id="title" placeholder="Task Title" required />
          </div>
          <div>
            {/* <label htmlFor="task">Task Description</label> */}
            <textarea name="description" id="description" cols={30} rows={5} className="w-full px-1 py-1 form-textarea border-blue-300/50 dark:bg-gray-800 rounded-sm" placeholder="Write your task description here..." required></textarea>
          </div>
          <div>
            <input type="file" name="image" id="image" className="w-full px-1 py-1 form-input border-blue-300/50 rounded-sm dark:bg-gray-200" accept="image/*" required />
          </div>
          <div>
            <button type="submit" className="w-full px-1 py-2 bg-blue-600 text-white font-semibold rounded-sm">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;