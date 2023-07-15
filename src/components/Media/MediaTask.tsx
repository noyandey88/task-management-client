import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type MediaTaskProps = {
  task: {
    _id: string;
    description: string;
    title: string;
    userEmail: string;
    imageData: string;
    status: string;
  }
  index: number;
};

const MediaTask = ({ task, index }: MediaTaskProps) => {
  const { _id, imageData, title, status, description } = task;
  return (
    <motion.article
      initial={{ y: 120 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: (50 - (index * 10)), duration: 1 }}
      viewport={{ once: true }}
      className="flex bg-blue-100 shadow-md overflow-hidden rounded-md hover:shadow-xl">
      <div className={`rotate-180 p-2 [writing-mode:_vertical-lr] ${status === 'completed' ? "bg-gray-800" : "bg-gray-200"}`}>
        <time dateTime="2022-10-10" className={`flex items-center justify-center gap-4 text-xs font-bold uppercase ${status === "completed" ? "text-white" : "text-gray-800"}`}>
          {status}
        </time>
      </div>
      <div className="hidden sm:block sm:basis-56 p-2">
        <img alt="task" src={imageData} className="aspect-square h-full w-full object-cover" />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
          <div>
            <h3 className="font-bold uppercase text-gray-900">
              {title}
            </h3>
          </div>
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
            {description}
          </p>
        </div>
        <div className="sm:flex sm:items-end sm:justify-end">
          <Link to={`/task-details/${_id}`} className="block bg-blue-600 px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-blue-400">
            View
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default MediaTask;