import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Completed from '../../components/Completed/Completed';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import Login from '../../components/Login/Login';
import Media from '../../components/Media/Media';
import Register from '../../components/Register/Register';
import Spinner from '../../components/Spinner/Spinner';
import TaskDetails from '../../components/TaskDetails/TaskDetails';
import UpdateTask from '../../components/UpdateTask/UpdateTask';
import Main from '../../Layout/Main';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const LazyMyTask = React.lazy(() => import("../../components/MyTasks/MyTasks"));
const LazyHome = React.lazy(() => import("../../components/Home/Home"));
const LazyAddTask = React.lazy(() => import("../../components/AddTask/AddTask"));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: (
          <React.Suspense fallback={<Spinner />}>
            <LazyHome />
          </React.Suspense>
        )
      },
      {
        path: '/add-task',
        element: (
          <React.Suspense fallback={<Spinner />}>
            <PrivateRoute>
              <LazyAddTask />
            </PrivateRoute>
          </React.Suspense>
        )
      },
      {
        path: '/my-tasks',
        // element: <PrivateRoute><MyTasks /></PrivateRoute>
        element: (
          <React.Suspense fallback={<Spinner />}>
            <PrivateRoute>
              <LazyMyTask />
            </PrivateRoute>
          </React.Suspense>
        )
      },
      {
        path: '/completed',
        element: (
          <PrivateRoute>
            <Completed />
          </PrivateRoute>
        )
      },
      {
        path: '/media',
        element: (
          <PrivateRoute>
            <Media />
          </PrivateRoute>
        )
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/update-task/:id',
        loader: ({ params }) => fetch(`${process.env.REACT_APP_API_URL}/task/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateTask />
          </PrivateRoute>
        )
      },
      {
        path: '/task-details/:id',
        loader: ({ params }) => fetch(`${process.env.REACT_APP_API_URL}/task/${params.id}`),
        element: (
          <PrivateRoute>
            <TaskDetails />
          </PrivateRoute>
        )
      }
    ]
  }
])