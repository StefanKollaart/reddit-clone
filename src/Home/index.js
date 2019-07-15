import React from "react";
import axios from "axios";

import Title from "../components/Title";
import Post from "./Post";
import Spinner from "../components/Spinner";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      postsLoading: true
    };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    axios.get("https://www.reddit.com/best.json?limit=10").then(res => {
      const redditData = res.data.data.children.map(child => {
        return child.data;
      });
      this.setState({
        posts: redditData,
        postsLoading: false
      });
    });
  };

  renderLoader = () => {
    if (this.state.postsLoading) {
      return <Spinner margin={true} />;
    } else {
      return null;
    }
  };

  renderPost = (post, index) => {
    return (
      <Post
        key={`home-post-${index}`}
        title={post.title}
        subreddit={post.subreddit}
        score={post.score}
        url={`https://reddit.com/${post.permalink}`}
        openSubredditView={this.props.openSubredditView}
        id={index}
        loading={index == this.props.whichSubredditLoading}
      />
    );
  };

  render() {
    return (
      <div className="home__outer">
        <Title heading="Home" subheading="Top 10 posts" leftAligned={true} />
        {this.renderLoader()}
        <div className="home__posts">
          {this.state.posts.map(this.renderPost)}
        </div>
      </div>
    );
  }
}
