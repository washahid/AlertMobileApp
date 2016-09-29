import React, { Component } from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

export default class ControlPanel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView style={styles.container_drawer}>
        <Text style={styles.controlText}>Control Panel</Text>
        <TouchableOpacity style={styles.button}>
          <Text>Alerts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Settings</Text>
        </TouchableOpacity>
        <Text>this.props.text</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container_drawer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  controlText: {
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  }
})