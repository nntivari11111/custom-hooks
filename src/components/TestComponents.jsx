import React from "react";
import { UseTimeout } from "../Hooks/UseTimeout";

const TestComponents = () => {
    const ready2 = UseTimeout(7000)
    return (
        <div>
            <h3>TestComponents</h3>

            <div>
                <h4>{ready2 ? "Ready2" : "Not-Ready2"}</h4>
            </div>
        </div>
        
    );
};

export {TestComponents};