import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  SegmentedControlIOS
} from 'react-native';



class TipSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [ 'OK 15%', 'Good 18%', 'Great 20%', 'WOW 25%' ],
      percentages: [ 0.15, 0.18, 0.20, 0.25 ],
      selectedIndex: 0
    };
  }

  static PropTypes = {
    selectionChanged: PropTypes.func.isRequired
  };

  render() {
    return (
      <View style={styles.segment}>
        <SegmentedControlIOS
          values={this.state.values}
          selectedIndex={this.state.selectedIndex}
          tintColor={'#60b7e2'}
          onChange={(event) => {
            this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
            // call the selection changed prop function with the value of percentage
            this.props.selectionChanged(this.state.percentages[this.state.selectedIndex]);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  segment: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  }
});

export default TipSelector;
