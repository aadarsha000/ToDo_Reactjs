import React, { useState } from "react";
import axios from "axios";

function Create({ fetchTodos }) {
  const [taskname, setTaskname] = useState("");
  const [iscompleted, setiscompleted] = useState(false);
  const PostData = (e) => {
    e.preventDefault();
    axios
      .post("https://64b0f0fd062767bc48255c67.mockapi.io/api/v1/todo", {
        taskname,
        iscompleted,
      })
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
      <form
        className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2"
        onSubmit={PostData}
      >
        <div className="col-12">
          <div className="form-outline">
            <input
              type="text"
              id="task"
              className="form-control"
              placeholder="Enter your Task here"
              value={taskname}
              onChange={(e) => setTaskname(e.target.value)}
            />
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </>
  );
}

export default Create;
