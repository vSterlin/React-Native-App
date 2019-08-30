import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight, Dimensions

} from "react-native";

import ValueContext from "../context/ValueContext";

export default class MyText extends React.Component {
  static contextType = ValueContext;

  state = {
    fontSz: 0
  }

  butSize = Dimensions.get('window').height/9;
  chooseFont = (length) => {

    if(this.butSize>=70){

    if(length<25){
      return 80;
    }

    else if(length<65&&length>=25){
      return 50;
    }
    else {
      return 30;
    }

  }
  else{
    if(length<10){
      return 80;
    }

    else if(length<35&&length>=10){
      return 50;
    }
    else {
      return 30;
    }
  }

  }
  

  render() {

    return (
      <Text
        onLayout={() => this.setState({fontSz : this.chooseFont(this.context.value.length)})
      }
        style={{color: 'white', fontSize: this.state.fontSz}}
      >
        {this.context.value}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 50
  }
});
