import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer aria-label="Site Footer" className="border-t-2 border-blue-100 dark:border-slate-700 mt-4">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-0 lg:pt-24">
        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold dark:text-white">Task <span className="text-blue-500">Writer</span></h2>
            </div>
            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-200 lg:text-left">
              Welcome to our Todo Application! Stay organized and boost your productivity with our intuitive and efficient task management system.
            </p>
          </div>
          <nav aria-label="Footer Nav" className="mt-12 lg:mt-0">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12">
              <li>
                <Link className="text-gray-700 transition dark:text-gray-200 hover:text-gray-700/75" to="/">
                  Add Task
                </Link>
              </li>
              <li>
                <Link className="text-gray-700 transition dark:text-gray-200 hover:text-gray-700/75" to="/">
                  My Tasks
                </Link>
              </li>
              <li>
                <Link className="text-gray-700 transition dark:text-gray-200 hover:text-gray-700/75" to="/">
                  Completed
                </Link>
              </li>
              <li>
                <Link className="text-gray-700 transition dark:text-gray-200 hover:text-gray-700/75" to="/">
                  Media
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="mt-12 text-center text-sm text-gray-500 dark:text-gray-200 lg:text-right">
          Copyright &copy; 2023. All rights reserved.
        </p>
      </div>
    </footer>
  )
}