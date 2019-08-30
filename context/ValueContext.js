import React from "react";

const Context = React.createContext("Binary");

export class ValueStore extends React.Component {
  state = { value: "" };

  decToBin = () => {
    let val = this.state.value;
    if(val.length!==0){
    val = parseInt(val);
    let bin = '';
    let newVal = val;
    let remainder;
    
    while(newVal!==0){
        remainder = (newVal%2);
        newVal = Math.floor(newVal /= 2);
        //console.log(remainder);
        bin = remainder + bin;
    }
    
    //textArea.innerHTML = '';
    this.setState({value: bin});
    }

    }

  onValueChange = value => {
    if (value === "C") {
      this.setState({ value: "" });
    } 
    else if(value==="="){
      this.decToBin();
    }
    else {
      this.setState({ value: this.state.value + value});
    }
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onValueChange: this.onValueChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
