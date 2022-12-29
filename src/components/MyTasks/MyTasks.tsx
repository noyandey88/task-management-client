//@ts-nocheck
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { updateTaskCompleted } from '../../api/tasksApi';
import { useAuth } from '../../contexts/AuthProvider';
import MyTask from './MyTask';

const MyTasks = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/tasks?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTasks(data);
      })
  }, [user?.email]);

  // const { data: tasks = [], isLoading, refetch } = useQuery({
  //   queryKey: ['tasks'],
  //   queryFn: async () => {
  //     const res = await fetch(`${process.env.REACT_APP_API_URL}/tasks?email=${user?.email}`);
  //     const data = await res.json();
  //     return data;
  //   }
  // })

  const handleComplete = (id: string) => {
    updateTaskCompleted(id)
      .then(data => {
        if (data.modifiedCount) {
          // refetch()
          toast.success("Task Completed successfully");
          navigate('/completed')
        }
      }).catch((err) => {
        console.error(err);
        toast.error(err.message);
      })
  }

  const handleDelete = (id: string) => {
    fetch(`${process.env.REACT_APP_API_URL}/task/delete/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount) {
          // refetch()
          toast.success("Task deleted successfully");
        }
      }).catch((err) => {
        console.error(err);
        toast.error(err.message);
      })
  }

  return (
    <div className="w-full md:w-1/2 md:mx-auto px-2 md:px-0">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">My Tasks</h2>
      </div>
      {
        tasks?.length !== 0 ?
          <>
            <div>
              {
                tasks.map((task) => <MyTask
                  key={task._id}
                  task={task}
                  handleDelete={handleDelete}
                  handleComplete={handleComplete}
                ></MyTask>)
              }
            </div>
          </>
          :
          <>
            <div>
              <h1 className="text-xl font-bold text-indigo-600">You have no added tasks</h1>
            </div>
          </>
      }
    </div>
  );
};

export default MyTasks;