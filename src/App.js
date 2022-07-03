import { UseTimeout } from './Hooks/UseTimeout';
import {useEffect, useState} from "react";
import './App.css';
import { UseFetch } from './Hooks/UseFetch';

function App() {
  const {data, loading, error} = UseFetch(
    "https://api.github.com/search/users?q=masai")

  return (
    <div className="App">
     <h2>{loading && "Loading"}</h2>
     {data?.length > 0 && 
     data.map((item) => {
      return <h3 key={item.id }>{item.login}</h3>
     })}
    </div>
  );
}

export default App;
