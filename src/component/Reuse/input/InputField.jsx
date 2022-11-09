import React from 'react';
import { Input  } from "antd";
import "antd/dist/antd.min.css";

const InputField = (props) =>{
    return (
        <>
            <Input value={props.value} onChange={props.onChange} {...props.getStyle}/>
        </>
    );
}

export default InputField;
