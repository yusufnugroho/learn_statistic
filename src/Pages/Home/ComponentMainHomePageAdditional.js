import React from 'react';
import { observer } from 'mobx-react'
import { View, TextInput, Text, Button } from 'react-native-ui-lib'
import { Typography, Colors } from 'react-native-ui-lib';
import {
    StatusBar,
    StyleSheet,
    PixelRatio,
    ScrollView
  } from 'react-native'

import { Actions } from 'react-native-router-flux'
import ComponentMainHomePageAdditional from '../ShareComponent/BottomBar/ComponentMainBottomBar'

@observer
export default class ComponentMainHome extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            x: '',
            n: ''
        }
        const store = this.props.store
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlePostLogin = this.handlePostLogin.bind(this)
    }
    async handlePostLogin() {
        const store = this.props.store
        let result = parseFloat(this.state.x)+parseFloat(this.state.n)
        alert(result)
      }
    handleSubmit(){
        console.log('Submitted')
        console.log('X : ', this.state.x)
        console.log('N : ', this.state.n)
        const varX = this.state.x
        const varN = this.state.n

        console.log(varX)
        this.handlePostLogin()
    }
    render() {
        const store = this.props.store
        return (
        <View>
            <ScrollView>
                <View flex paddingH-25 paddingT-120 background-grey80>
                    <Text blue20 text20>Home</Text>
                    <View paddingV-60>
                        <TextInput text50 placeholder="X" dark10 onChangeText={(text) => this.setState({x: text})}/>
                        <TextInput text50 placeholder="N" secureTextEntry dark10 onChangeText={(text) => this.setState({n: text})}/>
                    </View>
                    <View margin-80 center>
                        <Button text70 white background-orange30 label="Calculate"  onPress={this.handleSubmit}/>
                        <Button link text70 orange30 label="Logout" marginT-20 onPress={ Actions.LoginPage }/>
                        <Button link text70 orange30 label="Home With Tab" marginT-20 onPress={ Actions.HomePageTab }/>
                    </View>
                </View>
            </ScrollView>
            <ComponentMainBottomBar/>
        </View>
        );
    }
}
Colors.loadColors({
    pink: '#FF69B4',
    gold: '#FFD700',
  });

Typography.loadTypographies({
    h1: {fontSize: 58, fontWeight: '300', lineHeight: 80},
    h2: {fontSize: 46, fontWeight: '300', lineHeight: 64},
});