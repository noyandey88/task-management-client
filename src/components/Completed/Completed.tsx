// @ts-nocheck
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useAuth } from '../../contexts/AuthProvider';

const Completed = () => {
  const { user } = useAuth();
  const { data: tasks = [], isLoading, refetch } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/tasks?email=${user?.email}`);
      const data = await res.json();
      return data;
    }
  });

  return (
    <div className="w-full md:w-1/2 md:mx-auto px-2 md:px-0">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Completed Tasks</h2>
        <div>
          {
            tasks?.map((task: []) => <h1>{task.title}</h1>)
          }
        </div>
      </div>
    </div>
  );
};

export default Completed;