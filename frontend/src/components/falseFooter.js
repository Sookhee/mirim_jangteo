import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import '../style/falseFooter.scss';

export default class FalseFooter extends Component {
    render() {
        return (
            <div className="false-footer">
                <div className="wrap-footer">
                    <div className="footer-title">&copy;mirimJangteo. All Rights Reserved.</div>
                </div>
            </div>
        );
    }
}