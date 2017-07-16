/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Slider
} from 'react-native';

export default class tipCalculator extends Component {
  constructor(props) {
    super(props);
    // set the initial state
    this.state = {
      amountTotal: 0,
      tipPercentage: 0.15,
      tipTotal: 0,
      split: 1,
      amountPerPerson: 0
    };
  }

  calculateTip(value) {
    this.state.amountTotal = parseInt(value);
    this.state.tipTotal = value * this.state.tipPercentage.toFixed(2);
    this.setState(this.state);
    this.splitBill(this.state.split);
  }

  splitBill(value) {
    this.state.split = value;
    this.state.amountPerPerson = ((this.state.amountTotal + this.state.tipTotal) / value).toFixed(2);
    this.setState(this.state);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Amount Total:
        </Text>

        <TextInput
          style={styles.textInput}
          onChangeText={this.calculateTip.bind(this)}
        >
        </TextInput>

        <Text>
          Split Amongst: {this.state.split}
        </Text>

        <Slider
          maximumValue={10}
          minimumValue={1}
          step={1}
          value={this.state.split}
          style={styles.slider}
          onValueChange={this.splitBill.bind(this)}
        >
        </Slider>

        <Text>
          Amount per person:
        </Text>

        <Text style={styles.amount}>
          {this.state.amountPerPerson}$
        </Text>

        <Text>
          Total Tip:
        </Text>

        <Text style={styles.amount}>
          {this.state.tipTotal}$
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  slider: {
    width: '100%',
    height: 40,
    margin: 20
  },
  textInput: {
    textAlign: 'left',
    color: '#333',
    margin: 5,
    height: 50,
    width: '100%',
    borderColor: '#60b7e2',
    borderWidth: 1
  },
  amount: {
    fontWeight: 'bold',
    textAlign: 'left'
  }
});

AppRegistry.registerComponent('tipCalculator', () => tipCalculator);
