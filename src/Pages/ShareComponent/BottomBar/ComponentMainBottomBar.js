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
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

@observer
export default class ComponentMainBottomBar extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const store = this.props.store
        return (
            <View>
                <BottomNavigation
                    labelColor="white"
                    rippleColor="white"
                    style={{ height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
                    onTabChange={(newTabIndex) => alert(`New Tab at position ${newTabIndex}`)}
                >
                <Tab
                    barBackgroundColor="#37474F"
                    label="Movies & TV"
                    icon={<Icon size={24} color="white" name="tv"
                    onPress={()=>Actions.HomePageTab()}/>}
                />
                <Tab
                    barBackgroundColor="#00796B"
                    label="Music"
                    icon={<Icon size={24} color="white" name="music-note"
                    onPress={()=>Actions.HomePageAdditional()}/>}
                />
                <Tab
                    barBackgroundColor="#5D4037"
                    label="Books"
                    icon={<Icon size={24} color="white" name="book" />}
                />
                <Tab
                    barBackgroundColor="#3E2723"
                    label="Newsstand"
                    icon={<Icon size={24} color="white" name="airplay" />}
                />
            </BottomNavigation>
        </View>
        );
    }
}