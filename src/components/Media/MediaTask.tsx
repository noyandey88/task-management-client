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
};

const MediaTask = ({ task }: MediaTaskProps) => {
  const { _id, imageData, title, status, description } = task;
  return (
    <>
      <article className="flex bg-white transition shadow-md overflow-hidden rounded-md hover:shadow-xl">
        <div className={`rotate-180 p-2 [writing-mode:_vertical-lr] ${status === 'completed' ? "bg-gray-800" : "bg-gray-200"}`}>
          <time dateTime="2022-10-10" className={`flex items-center justify-center gap-4 text-xs font-bold uppercase ${status === "completed" ? "text-white" : "text-gray-800"}`}>
            {/* <span>2022</span>
            <span className="w-px flex-1 bg-gray-900/10" />
            <span>Oct 10</span> */}
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
      </article>
    </>
  );
};

export default MediaTask;