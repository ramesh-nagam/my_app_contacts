import React, { useState, useReducer } from 'react';
import { useId } from 'react';
import { useDebugValue } from 'react';
import { useEffect } from 'react';

const initialState = {
  data: []
}

const apiReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST': {
      return { ...state, loading: true }
    }
    case 'FETCH_SUCCESS': {
      return { ...state, loading: false, data: action.payload }
    }
    case 'FETCH_FAIL': {
      return { ...state, loading: false, data: [] }
    }
  }
}


export default function useFetch2(url, method, body) {
  const [data, setData] = useState([]);
  let [state, dispatch] = useReducer(apiReducer, initialState);
  //console.log("latest data", state)
  useDebugValue(state)
  const id = useId();
  //console.log("new id", id)
  useEffect(() => {
    if (method === "GET") {
      dispatch({ type: "FETCH_REQUEST" })
      fetch(url)
        .then(response => response.json())
        .then(data => {
          dispatch({ type: "FETCH_SUCCESS", payload: data })
          setData(data)
        })
        .catch(err => {
          dispatch({ type: "FETCH_FAIL" })
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