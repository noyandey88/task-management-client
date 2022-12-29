type TaskInfo = {
  userEmail: string;
  taskTitle: string;
  taskDescription: string;
  imageData: BodyInit | null | undefined;
  status: boolean;
}

type TaskData = {
  title: string;
  description: string;
}

type CommentDataType = {
  taskId: string;
  comment: string;
  postedTime: string;
}

// post task data
export const addTask = async (taskData: TaskInfo) => {
  const time = new Date()
  const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API_KEY}`;
  const res = await fetch(url, {
    method: 'POST',
    body: taskData.imageData
  });
  const data = await res.json();
  const taskResponse = await fetch(`${process.env.REACT_APP_API_URL}/tasks`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({...taskData, imageData: data.data.url, postTime: time.toLocaleString()})
  });
  const postedTaskData = await taskResponse.json();
  return postedTaskData;
}

// update completed
export const updateTaskCompleted = async (id: string) => {
  const url = `${process.env.REACT_APP_API_URL}/task/update/${id}`;
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ status: 'completed' })
  });
  const data = await res.json();
  return data;
}


// update completed
export const updateTaskNotCompleted = async (id: string) => {
  const url = `${process.env.REACT_APP_API_URL}/task/update/${id}`;
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ status: 'incomplete' })
  });
  const data = await res.json();
  return data;
}


// update completed
export const updateTask = async (id: string, task: TaskData) => {
  const url = `${process.env.REACT_APP_API_URL}/task/update/${id}`;
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({...task})
  });
  const data = await res.json();
  return data;
}

// post a comment
export const postAComment = async (commentData: CommentDataType) => {
  const url = `${process.env.REACT_APP_API_URL}/task/comments`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({...commentData})
  });
  const data = await res.json();
  return data;
}

