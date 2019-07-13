import React from "react";
import "./Item.scss";

export default class SubredditDetailsItem extends React.Component {
  render() {
    return (
      <div className="subreddit-details-item__outer">
        <h3 className="subreddit-details-item__label">{this.props.label}</h3>
        <p>{this.props.data}</p>
      </div>
    );
  }
}
