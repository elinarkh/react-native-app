import React, { Component } from "react";
import * as postActions from "../actions/postActions";
import {connect} from "react-redux";
import { View, Text, StyleSheet } from "react-native";

class PostScreen extends Component{

  componentDidMount(){
    //console.log("this props before didmount " + this.props );
    this.props.getPost(this.props.navigation.getParam('id'));
    //console.log("this props after didmount ");
  }

  render(){
    console.log("in render" + this.props.post);
    return (
        <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>{ "hello" }</Text>
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
  getStartedText: {
    fontSize: 25,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 200,
    textAlign: 'center',
  },
});

const mapStateToProps = (state) => ({
  post: state.post.post
});

const mapDispatchToProps = {
  getPost: postActions.getPost,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostScreen);

