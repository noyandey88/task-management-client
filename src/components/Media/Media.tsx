import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';
import Spinner from '../Spinner/Spinner';
import MediaTask from './MediaTask';

const Media = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}/tasks?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTasks(data);
        setLoading(false);
      }).catch((err) => {
        console.error(err);
        setLoading(false);
      })
  }, [user?.email]);

  if (loading) {
    return <Spinner/>
  }

  return (
    <div className="w-full md:w-1/2 md:mx-auto px-2 md:px-0">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Media</h2>
      </div>
      <div>
        {
          tasks.length !== 0 ?
            <>
              {
                tasks.map((task, i) => <MediaTask
                  key={i}
                  task={task}
                ></MediaTask>)
              }
            </>
            :
            <>
              <div>
                <h1 className="text-xl font-bold text-indigo-600">You do not have any media tasks</h1>
              </div>
            </>
        }
      </div>
    </div>
  );
};

export default Media;