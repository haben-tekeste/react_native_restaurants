import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async (searchInput) => {
    try {
      const response = await yelp.get("/search", {
        params: { term: searchInput, limit: 50, location: "san jose" },
      });
      setResults(response.data.businesses);
      setError("");
    } catch (err) {
      setError("Something wrong happened. Please try again");
    }
  };

  useEffect(() => {
    searchApi("shrimp");
  }, []);

  return [results, error, searchApi];
};
