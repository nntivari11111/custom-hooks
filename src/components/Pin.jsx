import React,{useState,useRef} from "react";
import PropTypes from "prop-types";
import PinItem from "./PinItem";

const Pin =({len,setPinInput})=>{
    const [inputBoxlen]=useState (new Array (len).fill(1));
    const [inputBoxValue,setInputBoxValue]=useState(
        new Array(len).fill("")
    );
    const inputRef=useRef([]);
    const handleChange=(e,index)=>{
        inputBoxValue[index]=e.target.value;
        setInputBoxValue(inputBoxValue);
        if (e.target.value.len>0 && index<len-1){
            inputRef.current[index + 1].focus();
        }
        setPinInput(inputBoxValue.join(""));
    };


    const handleBackspace =(e,index)=>{
        if(index>0){
            inputRef.current[index-1].focus();
        } 
    inputBoxValue[index]=e.target.value;
    setInputBoxValue(inputBoxValue);
    setPinInput(inputBoxValue.join(""));
    }

    const handlePaste=(e)=>{
        e.preventDefault();
        const data=e.clipboardData 
        .getData("text")
        .split("")
        .filter((_,index)=> index<len);
        data.forEach((value,index)=>{
            inputBoxValue[index]=value;
            inputRef.current[index].value=value
            if(index < len-1){
                inputRef.current[index+1].focus();
            }
        });
    }
    console.log(inputBoxlen,"f",PinItem)
    return (
        <div onPaste={handlePaste}>

            {inputBoxlen.map((_,index)=>{
              return <PinItem 
               key={index}
               ref={(element)=>{inputRef.current[index]=element;}}
               changeHandler={(e)=>handleChange(e,index)}
               onBackSpaceHandler={(e)=>handleBackspace(e,index)}
               />;
            })}
        </div>
    );
};

export default Pin

Pin.propTypes={
    len:PropTypes.number,
    setPinInput:PropTypes.func,
}