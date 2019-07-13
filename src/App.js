import React from "react";
import axios from "axios";
import "./App.scss";
import "./Fonts.scss";

import Home from "./Home/index";
import SubredditDetails from "./SubredditDetails/index";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subredditViewOpen: false,
      subreddit: undefined
    };
  }

  openSubredditView = subreddit => {
    axios.get(`https://www.reddit.com/r/${subreddit}/about.json`).then(res => {
      this.setState({
        subredditViewOpen: true,
        subreddit: res.data.data
      });
      document.body.style.overflow = "hidden";
    });
  };

  closeSubredditView = () => {
    this.setState({
      subredditViewOpen: false,
      subreddit: undefined
    });
  };

  formatNumberWithDots = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  subredditView = () => {
    if (this.state.subredditViewOpen) {
      const items = [
        {
          label: "Title",
          data: this.state.subreddit.title
        },
        {
          label: "Public Description",
          data: this.state.subreddit.public_description
        },
        {
          label: "Subscriber Count",
          data: this.formatNumberWithDots(this.state.subreddit.subscribers)
        }
      ];
      return (
        <SubredditDetails
          title={this.state.subreddit.url}
          items={items}
          closeSubredditView={this.closeSubredditView}
        />
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <div className="app__outer">
        <Home openSubredditView={this.openSubredditView} />
        {this.subredditView()}
      </div>
    );
  }
}
