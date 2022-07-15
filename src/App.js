 // import { UseTimeout } from './Hooks/UseTimeout';
import React,{useState} from "react";
import './App.css';
//import { UseFetch } from './Hooks/UseFetch';
import Pin from "./components/Pin";



function App() {
  const [otp,setOtp]=useState("");

  // const {data, loading, error} = UseFetch(
  //   "https://api.github.com/search/users?q=masai")

  return (
    <div className="App">
     {/* <h2>{loading && "Loading"}</h2>
     {data?.length > 0 && 
     data.map((item) => {
      return <h3 key={item.id }>{item.login}</h3>
     })} */}

<Pin 
len={4}
setPinInput={(value)=>{
  setOtp(value);
}}
/>
<h4>The value of otp is {otp}</h4>


    </div>
  );
}

export default App;
