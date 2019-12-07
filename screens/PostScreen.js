import React, { Component } from "react";
import * as postActions from "../actions/postActions";
import {connect} from "react-redux";
import {View, Text, StyleSheet, ScrollView, Image, Button} from "react-native";
import {Card} from "react-native-elements";


class PostScreen extends Component{

  componentDidMount(){
    this.props.getPost(this.props.navigation.getParam('id'));
  }

  render(){
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Card containerStyle={styles.container}>
          <Button onPress={() => this.props.navigation.navigate('Home')} title="Back" style={styles.getButton}/>
          <Text style={styles.getTitleText}>
            { this.props.post.title }
          </Text>
          <Image
            source={{uri: this.props.post.image}}
            style={styles.welcomeImage}
          />
          <Text style={styles.getText}>
            { this.props.post.description }
          </Text>
        </Card>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStartedContainer: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
  },
  getTitleText: {
    fontSize: 25,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  getText: {
    fontSize: 15,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
    padding: 20,
  },
  getButton: {
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
  },
  welcomeImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

const mapStateToProps = (state) => ({
  post: state.post.post,
  ...state.auth,
});

const mapDispatchToProps = {
  getPost: postActions.getPost,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostScreen);

