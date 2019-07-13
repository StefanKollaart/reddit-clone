import React from "react";
import "./post.scss";

export default class HomePost extends React.Component {
  render() {
    return (
      <div className="home-post__outer">
        <a
          className="home-post__title"
          href={this.props.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {this.props.title}
        </a>
        <div className="home-post-details__outer">
          <p
            className="home-post-details__subreddit"
            onClick={() => {
              this.props.openSubredditView(this.props.subreddit);
            }}
          >
            r/{this.props.subreddit}
          </p>
          <p className="home-post-details__divider">·</p>
          <p className="home-post-details__votes">
            <strong>{this.props.score}</strong> points
          </p>
        </div>
      </div>
    );
  }
}
