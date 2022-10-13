import React, { Component } from 'react';
import { Input  } from "antd";
import "antd/dist/antd.min.css";

class InputField extends Component {
    constructor(props){
        super(props);
        this.onFieldChange = this.onFieldChange.bind(this);
    }
    onFieldChange(event) {
        this.props.setState({input: event.target.value});
    }
    render() {
        return (
            <>
                <Input 
                    placeholder={this.props.placeholder}
                    allowClear={{ clearIcon: this.props.allowClear }}
                    status={ !this.props.status }
                    onChange={this.onFieldChange.bind(this)}
                >

                </Input>
            </>
        );
    }
}

export default InputField;
