import React from 'react';
import { observer } from 'mobx-react'
import { View, TextInput, Text, Button } from 'react-native-ui-lib'
import { Typography, Colors } from 'react-native-ui-lib';
import { Actions } from 'react-native-router-flux'


@observer
export default class ComponentMainLogin extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        const store = this.props.store
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlePostLogin = this.handlePostLogin.bind(this)
    }
    async handlePostLogin() {
        const store = this.props.store
        if((this.state.username).toLowerCase() === 'test' && (this.state.password).toLowerCase() === 'test') {
            alert('Login Success')
            Actions.HomePageTab()
            console.log('State (username, password): ', this.state.username, this.state.password)
        } else {
            alert('Login Failed, \n User/Pass -> "test/test" ')
            // Actions.HomePage()
        }
        // try {
        //     console.log('post login')
        //     let response = await fetch("http://localhost:20000/login", {
        //         method: "POST",
        //         headers: {
        //         Accept: "application/json",
        //         "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify({
        //             username: this.state.username,
        //             password: this.state.password
        //         })
        //     })
        //     let responseJson = await response.json()
        //     if(responseJson.boolSummaryCheckLogin === true){
        //         alert('Login Success')
        //         store.updateToken(responseJson.payload_db, '--', '--')
        //     } else {
        //         alert('Login Fail, Please Recheck Useraname/Password')
        //     }
        //     return responseJson;
        // } catch (error) {
        //     alert('error when trying hit server')
        //   console.error(error);
        // }
      }
    handleSubmit(){
        console.log('Submitted')
        console.log('Username : ', this.state.username)
        console.log('Password : ', this.state.password)
        this.handlePostLogin()
    }
    render() {
        const store = this.props.store
        return (
            <View flex paddingH-25 paddingT-120 background-grey80>
                <Text blue20 text20>Learn Statistic</Text>
                <View paddingV-60>
                    <TextInput text50 placeholder="username" dark10 onChangeText={(text) => this.setState({username: text})}/>
                    <TextInput text50 placeholder="password" secureTextEntry dark10 onChangeText={(text) => this.setState({password: text})}/>
                </View>
                <View margin-80 center>
                    <Button text70 white background-orange30 label="Login" onPress={ this.handleSubmit }/>
                    <Button link text70 orange30 label="Sign Up" marginT-20 onPress={()=> alert('This Function Still In Prototype')}/>
                    {/* <Button link text70 orange30 label="Move To Home" marginT-20 onPress={ Actions.HomePage }/> */}
                </View>
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