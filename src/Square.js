import React from "react";

class Square extends React.Component {
    render() {
        return(
            <button
                className="square"
                onClick = {this.props.onClick}
                style={{backgroundColor:this.props.bgColor}}>
                {this.props.value}
            </button>
        );
    }
}

export default Square;