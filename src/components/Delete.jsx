import React, { useState } from "react";
import axios from "axios";

function Delete({ fetchTodos, task }) {
  const [taskname, setTaskname] = useState(task.taskname);
  const [iscompleted, setiscompleted] = useState(true);
  const PostData = (e) => {
    e.preventDefault();

    axios
      .delete(
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
    <button type="submit" className="btn btn-success ms-1" onClick={PostData}>
      Delete
    </button>
  );
}

export default Delete;
