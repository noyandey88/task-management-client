import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthProvider';
import MyTask from './MyTask';

const MyTasks = () => {
  const [tasks, setTasks] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/tasks?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTasks(data);
      })
  }, [user?.email])
  return (
    <div className="w-full md:w-1/2 md:mx-auto px-2 md:px-0">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">My Tasks</h2>
      </div>
      <div>
        {
          tasks.map((task, i) => <MyTask
            key={i}
            task={task}
          ></MyTask>)
        }
      </div>
    </div>
  );
};

export default MyTasks;