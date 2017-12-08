import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import MainStore from './src/Model/MobX/MainStore'
import LoginPage from './src/Pages/Login/ComponentMainLogin'
import HomePage from './src/Pages/Home/ComponentMainHome'
import HomePageTab from './src/Pages/Home/ComponentMainHomeTab'
import HomePageAdditional from './src/Pages/Home/ComponentHomePageAdditional'

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
          <Scene key="HomePage"
            component={ HomePage }
            hideNavBar
          />
          <Scene key="HomePageTab"
            component={ HomePageTab }
            hideNavBar
          />
          <Scene key="HomePageAdditional"
          component={ HomePageAdditional }
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
