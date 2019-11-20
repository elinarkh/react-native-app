import React, {useState , useEffect} from "react";
import * as postActions from "../actions/postActions";
import {connect} from "react-redux";
import View from "react-native-web/dist/exports/View";
import Text from "react-native-web/dist/exports/Text";

function PostScreen(props) {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `http://5da5c7ce57f48b0014fbad58.mockapi.io/api/posts/${1}`,
      );

      const result = await data.json();
      setData(result);
    };
    fetchData();
  }, []);
  return (
    <View className="post-detail">
      <View>
        <View className="post-block">
          <Text>{ data.title }</Text>
          <Text>{ data.description }</Text>
        </View>
      </View>
    </View>

  )
}
const mapStateToProps = (state) => ({
  post: state.post
});

const mapDispatchToProps = {
  getPost: postActions.getPost,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostScreen);

