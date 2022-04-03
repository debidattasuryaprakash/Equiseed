import React, { useState } from "react";
import "./table.css";
import axios from "axios";

function Table() {
  const [event, setEvent] = useState([]);
  const getEvent = () => {
    axios
      .get("http://localhost:4000/api/v1/event")
      .then((res) => {
        setEvent(res.data.events);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <button onClick={getEvent}>Get Data</button>
      <table className="content-table">
        <thead>
          <tr>
            <td>Title</td>
            <td>Status</td>
            <td>Amt. Raised</td>
            <td>Due Date</td>
            <td>Action</td>
          </tr>
        </thead>
        {event.length &&
          event.map((data) => (
            <tr>
              <td>{data.category}</td>
              <td id="status">{data.status}</td>
              <td>$25 out of $6000</td>
              <td>{data.deadline}</td>
              <td>View Event Details</td>
            </tr>
          ))}
      </table>
    </>
  );
}

export default Table;
