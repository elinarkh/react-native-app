import React, {Component} from "react";
import { Button } from "react-native";
import View from "react-native-web/dist/exports/View";

class RegOrLogScreen extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
          <View>
              <View>
                  <Button onPress={()=> this.props.navigation('SignUpScreen')}>SignUp</Button>
                  <Button onPress={()=> this.props.navigation('SignInScreen')}>SignIn</Button>
              </View>
          </View>
        );
    }
}

export default RegOrLogScreen;