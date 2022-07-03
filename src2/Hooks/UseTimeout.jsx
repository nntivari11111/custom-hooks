import {useState, useEffect} from "react";

const UseTimeout = () => {
    const [ready, setReady] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() =>{
      setReady(true);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return ready;
};

export {UseTimeout};