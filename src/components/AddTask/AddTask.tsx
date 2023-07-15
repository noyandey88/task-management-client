// @ts-nocheck
import { motion } from 'framer-motion';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { addTask } from '../../api/tasksApi';
import { AuthContext } from '../../contexts/AuthProvider';
import Spinner from '../Spinner/Spinner';

const AddTask = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

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
    setLoading(true);
    addTask(data)
      .then(taskData => {
        console.log(taskData);
        form.reset();
        navigate('/my-tasks');
        toast.success("Task added successfully");
        setLoading(false);
      }).catch((err) => {
        console.log(err);
        setLoading(false);
      })
  };

  return (
    <>
      {
        loading ? (
          <Spinner />
        ) :
          <motion.div
            initial={{ opacity: 0.85 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 md:mx-auto px-2 md:px-0">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold dark:text-white">Add Task</h2>
            </div>
            <div>
              <form onSubmit={handleTaskSubmit} className="space-y-2">
                <motion.div
                  initial={{ y: 200 }}
                  whileInView={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 50, duration: 1 }}
                  viewport={{ once: true }}
                >
                  {/* <label htmlFor="title">Task Title:</label> */}
                  <input name="title" type="title" className="w-full px-1 py-1 form-input dark:bg-gray-900 dark:text-slate-200 border-blue-300/50 rounded-sm placeholder:text-sm placeholder:text-slate-400" id="title" placeholder="Task Title" required />
                </motion.div>
                <motion.div
                  initial={{ y: 200 }}
                  whileInView={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 40, duration: 1 }}
                  viewport={{ once: true }}
                >
                  {/* <label htmlFor="task">Task Description</label> */}
                  <textarea name="description" id="description" cols={30} rows={5} className="w-full px-1 py-1 form-textarea border-blue-300/50 dark:bg-gray-900 dark:text-slate-200 rounded-sm placeholder:text-sm placeholder:text-slate-400" placeholder="Write your task description here..." required></textarea>
                </motion.div>
                <motion.div
                  initial={{ y: 200 }}
                  whileInView={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 30, duration: 1 }}
                  viewport={{ once: true }}
                >
                  <input type="file" name="image" id="image" className="w-full px-1 py-1 form-input border-none border-blue-300/50 rounded-sm bg-transparent text-sm text-slate-500 dark:text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-blue-700 hover:file:bg-violet-100" accept="image/*" required />
                </motion.div>
                <motion.div
                  initial={{ y: 200 }}
                  whileInView={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 25, duration: 1 }}
                  viewport={{ once: true }}
                >
                  <button type="submit" className="w-full px-1 py-2 bg-blue-600 text-white font-semibold rounded-sm">Submit</button>
                </motion.div>
              </form>
            </div>
          </motion.div>
      }

    </>
  );
};

export default AddTask;