import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import MainStore from './src/Model/MobX/MainStore'
import LoginPage from './src/Pages/Login/ComponentMainLogin'
import HomePageTabMultiplication from './src/Pages/Home/ComponentMainHomePageMultiplication'
import HomePageTabAdditional from './src/Pages/Home/ComponentMainHomePageAdditional'

export default class App extends React.Component {
  render() {
    return (
      <Router store={ MainStore }>
        <Scene key="root">
          <Scene key="LoginPage"
            component={ LoginPage }
            hideNavBar
            initial
          />
          <Scene key="HomePageTabMultiplication"
            component={ HomePageTabMultiplication }
            hideNavBar
          />
          <Scene key="HomePageTabAdditional"
          component={ HomePageTabAdditional }
          hideNavBar
        />
        </Scene>
    </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
