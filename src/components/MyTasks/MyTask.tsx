// @ts-nocheck
import { motion } from 'framer-motion';
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
  handleDelete: Function
  handleComplete: Function
  index: number;
};

const MyTask = ({ task, handleDelete, handleComplete, index }: Task) => {
  const { _id, title, description, status, } = task;
  const navigate = useNavigate();

  return (
    status !== 'completed' &&
    <>
      <motion.div
        initial={{ y: 120 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: (50 - (index * 10)), duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col bg-blue-100 p-4 rounded-lg my-4 gap-3 shadow-md">
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-700">{description.slice(0, 100)}...</p>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <button onClick={() => handleComplete(_id)} className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Complete</button>
          <button onClick={() => navigate(`/task-details/${_id}`)} className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Details</button>
          <button onClick={() => navigate(`/update-task/${_id}`)} className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Update</button>
          <button onClick={() => handleDelete(_id)} className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Delete</button>
        </div>
      </motion.div>
    </>
  );
};

export default MyTask;