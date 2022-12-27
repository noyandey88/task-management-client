import { createBrowserRouter } from 'react-router-dom';
import AddTask from '../../components/AddTask/AddTask';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import Home from '../../components/Home/Home';
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
      }
    ]
  }
])