import React from "react";
import "./Navigator.scss";

export default class Navigator extends React.Component {
  render() {
    return (
      <div
        className="navigator__outer"
        onClick={() => {
          this.props.navigate();
        }}
      >
        <div className="navigator__button">
          <svg
            width="12"
            height="20"
            viewBox="0 0 12 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.0607 3.06066C11.6464 2.47487 11.6464 1.52513 11.0607 0.93934C10.4749 0.353553 9.52513 0.353553 8.93934 0.93934L11.0607 3.06066ZM8.93934 19.0607C9.52513 19.6464 10.4749 19.6464 11.0607 19.0607C11.6464 18.4749 11.6464 17.5251 11.0607 16.9393L8.93934 19.0607ZM3.76777 10.3536L11.0607 3.06066L8.93934 0.93934L1.64645 8.23223L3.76777 10.3536ZM1.64645 11.7678L8.93934 19.0607L11.0607 16.9393L3.76777 9.64645L1.64645 11.7678ZM1.64645 8.23223C0.670136 9.20854 0.670136 10.7915 1.64645 11.7678L3.76777 9.64645C3.96303 9.84171 3.96303 10.1583 3.76777 10.3536L1.64645 8.23223Z"
              fill="#4583C2"
            />
          </svg>
        </div>
        <h2 className="navigator__label">{this.props.title}</h2>
      </div>
    );
  }
}
