import React, { useState } from 'react';
import { useEffect } from 'react';
export default function useFetch(url, method, body) {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (method === "GET") {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setData(data)
        })
        .catch(err => {
          console.log("Network error", err);
        })
    } else {
      fetch(url, { method, body: JSON.stringify(body) })
        .then(response => response.json())
        .then(data => {
          console.log("Data created/updated/delete")
        })
        .catch(err => {
          console.log("Network error", err);
        })
    }
  }, []);
  return data;
}