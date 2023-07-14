import { React, useEffect, useState } from "react";
import axios from "axios";
import Update from "./Update";
import Delete from "./Delete";

function Read({ todos, fetchTodos }) {
  return (
    <>
      <table className="table mb-4">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Todo item</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((data) => (
            <tr key={data.id}>
              <th scope="row">{data.id}</th>
              <td>{data.taskname}</td>
              {data.iscompleted ? <td>Completed</td> : <td>Not completed</td>}
              <td>
                <Delete fetchTodos={fetchTodos} task={data} />
                <Update fetchTodos={fetchTodos} task={data} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Read;
