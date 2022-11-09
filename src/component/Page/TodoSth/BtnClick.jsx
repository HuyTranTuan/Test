import React from 'react';
import { Button } from 'antd';

const BtnClick = ({type, text, shape, size, loading, disabled, onClick}) => {


    return (
        <Button  type={type} disabled={disabled} onClick={onClick}>{text}</Button>
    );
}

export default BtnClick;
