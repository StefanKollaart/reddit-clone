import React from "react";
import SubredditDetailsItem from "./Item.js";
import Title from "../components/Title";
import Navigator from "../components/Navigator";

import "./index.scss";

export default class SubredditDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClosing: false
    };
  }

  renderSubredditDetailsItem = (item, index) => {
    return (
      <SubredditDetailsItem key={`subreddit-details-item-${index}`} {...item} />
    );
  };

  navigate = () => {
    this.setState({
      isClosing: true
    });
    setTimeout(() => {
      this.props.closeSubredditView();
      this.setState({
        isClosing: false
      });
    }, 1000);
  };

  render() {
    return (
      <div
        className={`subreddit-details__outer ${
          this.state.isClosing ? "subreddit-details__outer--closing" : ""
        }`}
      >
        <div className="subreddit-details__wrapper">
          <Navigator title="Home" navigate={this.navigate} />
          <Title
            heading={this.props.title}
            subheading="Subreddit details"
            style={{ marginBottom: 88 }}
          />
          <div className="subreddit-items">
            {this.props.items.map(this.renderSubredditDetailsItem)}
          </div>
        </div>
      </div>
    );
  }
}
