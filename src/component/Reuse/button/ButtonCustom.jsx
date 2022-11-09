import React from 'react';
import { Button } from "antd";
import "antd/dist/antd.min.css";

const ButtonCustom = (props) =>{
    return (
        <Button type={props.type} onClick={props.onClick}>
            {props.name}
        </Button>
    );
}

export default ButtonCustom;
