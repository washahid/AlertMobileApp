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
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Drawer from 'react-native-drawer'
import ControlPanel from './src/ControlPanel'


const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}

class AlertMobileApp extends Component {
  state={
    drawerOpen: false,
    drawerDisabled: false,
  };

  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };

    render () {
    return (
      <Drawer
        type="overlay"
        open={true}
        ref={(ref) => this._drawer = ref}
        content={<ControlPanel text='Control Panel' />}
        tapToClose={true}
        openDrawerOffset={0.1} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        >
        <View >
        <View style={{width: 60, height: 50, backgroundColor: 'powderblue'}}  >
          <Text style={styles.menubutton} onPress={() => {this._drawer.open()}}>
            Menu
          </Text>
        </View>
      </View>
      </Drawer>
    )
  }

  render_old() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container_drawer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
    button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  menubutton: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

AppRegistry.registerComponent('AlertMobileApp', () => AlertMobileApp);
