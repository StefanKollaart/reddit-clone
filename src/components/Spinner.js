import React from "react";
import "./spinner.scss";

export default class Spinner extends React.Component {
  render() {
    return (
      <div
        className={`spinner__outer ${
          this.props.spinner ? "spinner__outer--margin" : ""
        }`}
      >
        <div className="double-bounce1" />
        <div className="double-bounce2" />
      </div>
    );
  }
}
