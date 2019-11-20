import React, { Component } from "react";
import * as postActions from "../actions/postActions";
import {connect} from "react-redux";
import { View, Text } from "react-native";

class PostScreen extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount() {
    console.log(this.props.id)
    this.props.getPost(this.props.id);
  }

  render() {
    return (
      <View className="post-detail">
        <View>
          <View className="post-block">
            <Text>{ this.props.post.title }</Text>
            <Text>{ this.props.post.description }</Text>
          </View>
        </View>
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  post: state.post
})

const mapDispatchToProps = {
  getPost: postActions.getPost,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostScreen);

