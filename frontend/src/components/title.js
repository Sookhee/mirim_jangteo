import React, { Component } from "react";
import "../style/title.scss";

class Title extends Component{
    render(){
        return(
            <div className="title">
                {this.props.title}
            </div>
        );
    }
}

export default Title;