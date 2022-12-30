// @ts-nocheck
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { updateTaskNotCompleted } from '../../api/tasksApi';
import { useAuth } from '../../contexts/AuthProvider';
import Spinner from '../Spinner/Spinner';
import CompletedTask from './CompletedTask';
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Completed = () => {
  const { user } = useAuth();
  // const { data: tasks = [], isLoading, refetch } = useQuery({
  //   queryKey: ['tasks'],
  //   queryFn: async () => {
  //     const res = await fetch(`${process.env.REACT_APP_API_URL}/tasks?email=${user?.email}`);
  //     const data = await res.json();
  //     return data;
  //   }
  // });

  // const { user } = useAuth();
  // const [tasks, setTasks] = useState([]);
  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(`${process.env.REACT_APP_API_URL}/tasks/completed/${user?.email}?status=completed`)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       setTasks(data);
  //       setLoading(false);
  //     }).catch((err) => {
  //       console.error(err);
  //       setLoading(false);
  //     })
  // }, [user?.email]);

  const {data: tasks, isLoading, mutate} = useSWR(`${process.env.REACT_APP_API_URL}/tasks/user/${user?.email}?status=completed`, fetcher)

  const handleNotCompleted = (id: string) => {
    updateTaskNotCompleted(id)
      .then(data => {
        if (data.modifiedCount) {
          mutate();
          toast.success("Task Back to My task");
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
          mutate();
          toast.success("Completed Task deleted successfully");
        }
      }).catch((err) => {
        console.error(err);
        toast.error(err.message);
      })
  }

  if (isLoading) {
    return <Spinner/>
  }

  return (
    <div className="w-full md:w-1/2 md:mx-auto px-2 md:px-0">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Completed Tasks</h2>
        <div>
          {
            tasks?.length !== 0 ?
              <>
                {
                  tasks?.map((task, i) => <CompletedTask
                    key={i}
                    task={task}
                    handleNotCompleted={handleNotCompleted}
                    handleDelete={handleDelete}
                  ></CompletedTask>)
                }
              </>
              :
              <>
                <div className="mt-4">
                  <h2 className="text-xl font-bold text-indigo-600">You do not have any completed tasks.</h2>
                </div>
              </>
          }
        </div>
      </div>
    </div>
  );
};

export default Completed;