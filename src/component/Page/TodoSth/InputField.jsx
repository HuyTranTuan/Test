import React from 'react';
import Input from 'antd/lib/input/Input';

const InputField = ({value, onKeyPress, onChange}) => {

    

    return (
        <Input type='text'  value={value} onChange={onChange}/>
    );
}

export default InputField;
