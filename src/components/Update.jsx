import React, { useState } from "react";
import axios from "axios";

function Update({ fetchTodos, task }) {
  const [taskname, setTaskname] = useState(task.taskname);
  const [iscompleted, setiscompleted] = useState(true);
  const PostData = (e) => {
    e.preventDefault();

    axios
      .put(
        `https://64b0f0fd062767bc48255c67.mockapi.io/api/v1/todo/${task.id}`,
        {
          iscompleted,
          taskname,
        }
      )
      .then((response) => {
        console.log(response.data);
        setTaskname("");
        setiscompleted(false);
        fetchTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {task.iscompleted ? (
        <button
          type="submit"
          className="btn btn-danger ms-1"
          onClick={PostData}
          disabled
        >
          Finished
        </button>
      ) : (
        <button
          type="submit"
          className="btn btn-danger ms-1"
          onClick={PostData}
        >
          Finished
        </button>
      )}
    </>
  );
}

export default Update;
