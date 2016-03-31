import React, { View, Text, StyleSheet, Component, TouchableWithoutFeedback } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/application';

class AppRoot extends Component {
  handleOnClick() {
    let { dispatch } = this.props;
    dispatch(actions.fetchUser());
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    return (
      <View style={root.container}>
        <TouchableWithoutFeedback onPress={this.handleOnClick.bind(this)}>
          <Text>React Native Root</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default connect(state => state)(AppRoot);

let root = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
