import React from 'react';

const AddTask = () => {
  return (
    <div className="w-full md:w-1/2 md:mx-auto px-2 md:px-0">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Add Task</h2>
      </div>
      <div>
        <form className="space-y-2">
          <div>
            {/* <label htmlFor="title">Task Title:</label> */}
            <input name="title" type="title" className="w-full px-1 py-1 form-input border-indigo-300 rounded-sm" id="title" placeholder="Task Title" />
          </div>
          <div>
            {/* <label htmlFor="task">Task Description</label> */}
            <textarea name="task" id="task" cols={30} rows={5} className="w-full px-1 py-1 form-textarea border-indigo-300 rounded-sm" placeholder="Write your task description here..."></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;