import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as postActions from '../actions/postActions';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {Card} from "react-native-elements";

class HomeScreen extends Component {

  constructor(props){
    super(props);
    console.log(props);
  }

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            { this.props.posts.map(post =>
                <TouchableHighlight key={post.id} id={post.id} onPress={() => this.props.navigation.navigate('Post', {id: post.id})} underlayColor='#F5FCFF'>
                  <Card stele={styles.getStartedContainer}>
                    <Text style={styles.getStartedText}>
                      { post.title }
                    </Text>
                    <Image
                      source={{uri: post.image}}
                      style={styles.welcomeImage}
                    />
                    </Card>
                </TouchableHighlight>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 10,
  },
  welcomeImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  getStartedContainer: {
    padding: 20,
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 25,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

const mapStateToProps = (state) => ({
  posts: state.post.posts,
});

const mapDispatchToProps = {
  getPosts: postActions.getPosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
