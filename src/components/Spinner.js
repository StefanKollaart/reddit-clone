import React from "react";
import "./spinner.scss";

export default class Spinner extends React.Component {
  render() {
    return (
      <div className="spinner">
        <div class="double-bounce1" />
        <div class="double-bounce2" />
      </div>
    );
  }
}
