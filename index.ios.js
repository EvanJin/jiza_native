import React, { AppRegistry, Component } from 'react-native';
import Root from './app/ios/container/';

class App extends Component {
  render() {
    return (
      <Root />
    );
  }
}

AppRegistry.registerComponent('jiza_app', () => App);
