import React from "react";
import "./Title.scss";

export default class Title extends React.Component {
  render() {
    return (
      <div className="title__outer" style={this.props.style}>
        <h1 className="title__heading">{this.props.heading}</h1>
        <h2 className="title__subheading">{this.props.subheading}</h2>
      </div>
    );
  }
}
