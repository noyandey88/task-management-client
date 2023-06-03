import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const { user, logOut } = useAuth();

  // theme toggle
  const [theme, setTheme] = useState<boolean>(true);

  useEffect(() => {
    // @ts-ignore
    const siteTheme = JSON.parse(window.localStorage.getItem("theme"));
    const element = document.documentElement;
    if (siteTheme) {
      element.classList.remove("light");
      element.classList.add("dark");
      document.body.style.backgroundColor = "#181D31";

    } else {
      element.classList.remove("dark");
      element.className = "light";
      document.body.style.backgroundColor = "#ffffff";
    }
  }, [theme]);

  const handleThemeChange = () => {
    window.localStorage.setItem("theme", JSON.stringify(theme))
    setTheme(!theme);
  }

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
    <li className="flex items-stretch mr-8">
      <button onClick={handleThemeChange} className="px-4 py-2 my-4 rounded-md hover:bg-indigo-100 dark:hover:bg-blue-400">
        {
          !theme ?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
        }
      </button>
    </li>
    {
      user?.uid &&
      <>
        <li role="none" className="flex items-stretch">
          <Link
            className="flex items-center gap-2 py-4 transition-colors duration-300 dark:text-white hover:text-blue-500 lg:px-8"
            to="/add-task"
          >
            <span>Add Task</span>
          </Link>
        </li>
        <li role="none" className="flex items-stretch">
          <Link
            className="flex items-center gap-2 py-4 text-blue-500 dark:text-white transition-colors duration-300 hover:text-blue-600 lg:px-8"
            to="/my-tasks"
          >
            <span>My Tasks</span>
          </Link>
        </li>
        <li role="none" className="flex items-stretch">
          <Link
            className="flex items-center gap-2 py-4 transition-colors duration-300 dark:text-white hover:text-blue-500 lg:px-8"
            to="/completed"
          >
            <span>Completed</span>
          </Link>
        </li>
        <li role="none" className="flex items-stretch">
          <Link
            className="flex items-center gap-2 py-4 transition-colors duration-300 dark:text-white hover:text-blue-500 lg:px-8"
            to="/media"
          >
            <span>Media</span>
          </Link>
        </li>
      </>
    }
    <>
      {
        user?.uid ?
          <li className="flex items-stretch">
            <button onClick={handleLogOut} className="text-white bg-blue-600 px-4 py-2 my-4 rounded-md hover:bg-blue-700">Logout</button>
          </li>
          :
          <li className="flex items-stretch">
            <button onClick={handleNavigate} className="text-white bg-blue-600 px-4 py-2 my-4 rounded-md hover:bg-blue-700">Login</button>
          </li>
      }
    </>
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
          <div
            className="flex items-center gap-2 whitespace-nowrap dark:text-white py-3 text-2xl md:text-lg lg:flex-1 font-bold"
          >
            <Link to="/">
              Task <span className="text-blue-500">Writer</span>
            </Link>
          </div>
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
                className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300 dark:bg-white"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300 dark:bg-white"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300 dark:bg-white"
              ></span>
            </div>
          </button>
          {/*      <!-- Navigation links --> */}
          <ul
            className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain px-2 pb-12 pt-16 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 bg-white/70 dark:bg-dark/70 lg:pt-0 lg:opacity-100 ${isToggleOpen
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