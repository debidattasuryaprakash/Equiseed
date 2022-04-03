import React, { useEffect, useState } from "react";
import "./table.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Table() {
  const [event, setEvent] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/event")
      .then((res) => {
        setEvent(res.data.events);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <div className="header">Your Campaigns</div>
      {/* <div className="get__details" onClick={getDetails}>
        Get details
      </div> */}
      <div className="table">
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
                <td key={data.id}>{data.category}</td>
                <td id="status" key={data.id}>
                  {data.status}
                </td>
                <td key={data.id}>$25 out of $6000</td>
                <td key={data.id}>{data.deadline}</td>
                <Link to={`/event/${data._id}`}>
                  <td key={data.id} id="details">
                    View Event Details
                  </td>
                </Link>
              </tr>
            ))}
        </table>
      </div>
    </>
  );
}

export default Table;
