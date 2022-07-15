import React ,{forwardRef} from "react";
const PinItem =forwardRef(({changeHandler,onBackSpaceHandler},ref)=>{
console.log(ref,"d")
    const handleKeyUp=(e)=>{
        console.log(e)
        if(e.keyCode===8){
            onBackSpaceHandler(e);
        }
        else{
            changeHandler(e);
        }
    };
    return(
        <div>
            <input ref={ref} maxLength={1} onKeyUp={handleKeyUp} />
        </div>
    )

});

export default PinItem;