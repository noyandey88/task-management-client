// @ts-nocheck
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { updateTaskNotCompleted } from '../../api/tasksApi';
import { useAuth } from '../../contexts/AuthProvider';
import CompletedTask from './CompletedTask';

const Completed = () => {
  // const { user } = useAuth();
  // const { data: tasks = [], isLoading, refetch } = useQuery({
  //   queryKey: ['tasks'],
  //   queryFn: async () => {
  //     const res = await fetch(`${process.env.REACT_APP_API_URL}/tasks?email=${user?.email}`);
  //     const data = await res.json();
  //     return data;
  //   }
  // });

  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/tasks?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTasks(data);
      })
  }, [user?.email]);

  const handleNotCompleted = (id: string) => {
    updateTaskNotCompleted(id)
      .then(data => {
        if (data.modifiedCount) {
          toast.success("Task Back to My task");
        }
      }).catch((err) => {
        console.error(err);
        toast.error(err.message);
      })
  }

  return (
    <div className="w-full md:w-1/2 md:mx-auto px-2 md:px-0">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Completed Tasks</h2>
        <div>
          {
            tasks?.map((task, i) => <CompletedTask
              key={i}
              task={task}
              handleNotCompleted={handleNotCompleted}
            ></CompletedTask>)
          }
        </div>
      </div>
    </div>
  );
};

export default Completed;