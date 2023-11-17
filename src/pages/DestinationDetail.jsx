// src/pages/DestinationDetail.js
import React from "react";
import { useParams } from "react-router-dom";

const DestinationDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Destination Detail Page</h2>
      <p>Display details for destination with ID: {id}</p>
    </div>
  );
};

export default DestinationDetail;
