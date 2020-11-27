import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends Component {
componentDidMount() {
    this.props.fetchPosts();
}

  state = {};
  render() {
    return <div>Post List</div>;
  }
}

const mapStateToProps = (state) => {
  return {posts: state.props}
}

export default connect(mapStateToProps, { fetchPosts })(PostList);