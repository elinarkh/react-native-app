import React, { Component } from "react";
import * as postActions from "../actions/postActions";
import {connect} from "react-redux";
import {View, Text, StyleSheet} from "react-native";

class PostScreen extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount() {
    console.log("this props before didmount" + this.props );
    this.props.getPost(this.props.navigation.getParam('id'));
    console.log("this props after didmount" + this.props );
  }

  render() {
    return (
        <View>
            <Text>{ "hello" }</Text>
            <Text>{ this.props.post.description }</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
});

const mapStateToProps = (state) => ({
  post: state.post.post
});

const mapDispatchToProps = {
  getPost: postActions.getPost,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostScreen);

