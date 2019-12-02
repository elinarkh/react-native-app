import React, { Component } from "react";
import * as postActions from "../actions/postActions";
import {connect} from "react-redux";
import {View, Text, StyleSheet, ScrollView, Image, Button} from "react-native";


class PostScreen extends Component{

  componentDidMount(){
    this.props.getPost(this.props.navigation.getParam('id'));
  }

  render(){
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        <View style={styles.getStartedContainer}>
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
          <Button onPress={() => this.props.navigation.navigate('Home')} title="Back" style={styles.getButton}/>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  getStartedContainer: {
    lineHeight: 200,
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getTitleText: {
    fontSize: 25,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 100,
    textAlign: 'center',
  },
  getText: {
    fontSize: 15,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  getButton: {
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'left',
    marginLeft: -100,
  },
  welcomeImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
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

