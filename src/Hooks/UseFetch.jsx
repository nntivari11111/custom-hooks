import React from "react";
import { useEffect } from "react";
import { useState } from "react";


const UseFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
  
    const FetchData = () => {
      fetch(url)
      .then(res => res.json())
      .then((res) => {
        setData(res.items);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
    };
  
    useEffect(() => {
      FetchData();
    }, [url]);

    return {
        data, loading, error
    }
};
    


export {UseFetch};