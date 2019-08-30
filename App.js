import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight
} from "react-native";

import MyButton from "./components/MyButton";
import MyText from "./components/MyText";

 import {ValueStore} from './context/ValueContext';
 import  ValueContext from './context/ValueContext';

export default class App extends React.Component {

static contextType = ValueContext;

  render() {
    return (
      <View style={styles.container}>
        <ValueStore>
        <View style={styles.black}>
          {/* <Text style={styles.text}>{this.context.value}</Text> */}
          <MyText/>
        </View>

        <View style={styles.white}>


          <View style={styles.columns}>
            <View style={styles.row}>
              <MyButton button="1"/>
              <MyButton button="2"/>
              <MyButton button="3"/>

              {/* <TouchableHighlight onPress={()=> this.setState({value: '1' + this.state.value})}>
              <View style={styles.ellipse}>
                <Text style={styles.tac}>1</Text>
              </View>
              </TouchableHighlight> */}
            </View>
          </View>

 <View style={styles.columns}>
            <View style={styles.row}>
              <MyButton button="4"/>
              <MyButton button="5"/>
              <MyButton button="6"/>

            </View>
          </View>


          <View style={styles.columns}>
            <View style={styles.row}>
              <MyButton button="7"/>
              <MyButton button="8"/>
              <MyButton button="9"/>

            </View>
          </View>


          <View style={styles.columns}>
            <View style={styles.row}>
              <MyButton button="0"/>
              <MyButton button="C"/>
              <MyButton button="="/>

            </View>
          </View>


        </View>
        </ValueStore>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(176, 192, 182)"
  },
  black: {
    flex: 5,
    backgroundColor: "rgb(176, 192, 182)",
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 20,
    marginRight: 20
  },
  white: {
    flex: 5,
    flexDirection: "column",
    marginBottom: 30
  },
  columns: {
    flex: 1,

    marginTop: 5,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  // Style for "Ellipse 2"
  ellipse: {
    height: 90,
    width: 90,
    borderColor: "#989898",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: "#989898",
    justifyContent: "center"
  },
  tac: {
    textAlign: "center",
    fontSize: 30
  },
  text: {
    color: 'white',
    fontSize: 40
  }
});
