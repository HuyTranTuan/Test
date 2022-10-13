import React, { Component } from 'react';
import { Button } from "antd";
import "antd/dist/antd.min.css";

class ButtonCustom extends Component {
    render() {
        return (
            <Button type={this.props.type}>
                {this.props.name}
            </Button>
        );
    }
}

export default ButtonCustom;
