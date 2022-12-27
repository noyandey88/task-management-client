import { createBrowserRouter } from 'react-router-dom';
import AddTask from '../../components/AddTask/AddTask';
import Completed from '../../components/Completed/Completed';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import Home from '../../components/Home/Home';
import Media from '../../components/Media/Media';
import MyTasks from '../../components/MyTasks/MyTasks';
import Main from '../../Layout/Main';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/add-task',
        element: <AddTask/>
      },
      {
        path: '/my-tasks',
        element: <MyTasks/>
      },
      {
        path: '/completed',
        element: <Completed/>
      },
      {
        path: '/media',
        element: <Media/>
      }
    ]
  }
])