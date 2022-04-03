import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EventDetails = () => {
  useEffect(() => {
    fetchEvent();
  });
  const [event, setEvent] = useState([]);

  const fetchEvent = async () => {};

  return (
    <>
      <div className="Details">
        <p>Event</p>
      </div>
    </>
  );
};

export default EventDetails;
