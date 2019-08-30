import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Dimensions
} from "react-native";

import ValueContext from '../context/ValueContext'
export default class MyButton extends React.Component {

static contextType = ValueContext;


render(){

  return(
<TouchableHighlight style={styles.highlight}onPress={()=> this.context.onValueChange(this.props.button)}>
              <View style={styles.ellipse}>
                <Text style={styles.tac}>{this.props.button}</Text>
              </View>
              </TouchableHighlight>
              )

}

}

butSize = Dimensions.get('window').height/9;
console.log(butSize);
const styles = StyleSheet.create({
  highlight:{

    backgroundColor: "rgb(156, 157, 165)",
    borderRadius: 100,
    borderColor: 100,
    width: butSize,
    height: butSize
  }
  ,
  ellipse: {
    height: butSize,
    width: butSize,
    borderColor: "rgb(156, 157, 165)",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: "rgb(156, 157, 165)",
    justifyContent: "center"
  },
  tac: {
    textAlign: "center",
    fontSize: 30
  }
});
