import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const { logOut } = useAuth();

  const handleNavigate = () => {
    navigate('/login');
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successful");
    })
      .catch((err) => {
      toast.error(err.message)
      console.error(err);
    })
  }

  const menus = <>
    <li role="none" className="flex items-stretch">
      <Link
        className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-indigo-500 lg:px-8"
        to="/add-task"
      >
        <span>Add Task</span>
      </Link>
    </li>
    <li role="none" className="flex items-stretch">
      <Link
        className="flex items-center gap-2 py-4 text-indigo-500 transition-colors duration-300 hover:text-indigo-600 lg:px-8"
        to="/my-tasks"
      >
        <span>My Tasks</span>
      </Link>
    </li>
    <li role="none" className="flex items-stretch">
      <Link
        className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-indigo-500 lg:px-8"
        to="/completed"
      >
        <span>Completed</span>
      </Link>
    </li>
    <li role="none" className="flex items-stretch">
      <Link
        className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-indigo-500 lg:px-8"
        to="/media"
      >
        <span>Media</span>
      </Link>
    </li>
    <li className="flex items-stretch">
        <button onClick={handleNavigate} className="text-white bg-indigo-600 px-4 py-2 my-4 rounded-md hover:bg-indigo-700">Login</button>
    </li>
  </>

  return (
    <header className="relative z-20 w-full after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full lg:backdrop-blur-sm lg:after:hidden">
      <div className="relative mx-auto max-w-full px-2 md:px-0 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
        <nav
          aria-label="main navigation"
          className="flex items-stretch justify-between font-medium text-slate-700"
          role="navigation"
        >
          {/*      <!-- Brand logo --> */}
          <Link
            className="flex items-center gap-2 whitespace-nowrap py-3 text-lg lg:flex-1 font-bold"
            to="/"
          >
            Task <span className="text-indigo-500">Management</span>
          </Link>
          {/*      <!-- Mobile trigger --> */}
          <button
            className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${isToggleOpen
                ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                : ""
              }
            `}
            onClick={() => setIsToggleOpen(!isToggleOpen)}
            aria-expanded={isToggleOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
              ></span>
            </div>
          </button>
          {/*      <!-- Navigation links --> */}
          <ul
            role="menubar"
            aria-label="Select page"
            className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain px-2 pb-12 pt-16 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 bg-white/70 lg:pt-0 lg:opacity-100 ${isToggleOpen
              ? "visible opacity-100 backdrop-blur-sm"
              : "invisible opacity-0"
              }`}
          >
            {menus}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;