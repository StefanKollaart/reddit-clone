import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Home from "./Home/index";
import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";
import axios from "axios";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders exactly 10 posts", () => {
  const home = mount(<Home />);
  axios.get("https://www.reddit.com/best.json?limit=10").then(res => {
    const redditData = res.data.data.children.map(child => {
      return child.data;
    });
    home.setState(
      {
        posts: redditData,
        postsLoading: false
      },
      () => {
        expect(home.find(".home__posts").children()).to.have.lengthOf(10);
      }
    );
  });
});

it("renders homepage without opening subreddit view", () => {
  const app = shallow(<App />);
  expect(app.instance().subredditView() == null);
});
