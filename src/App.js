import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { CusHeader } from './components/common';
import {Header} from 'react-native-elements';
import firebase from 'firebase';

class App extends Component {

    componentDidMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyDkV73vR4vdEwPmT55d_lejWYH8CD1UIq8',
            authDomain: 'authentication-project-48d7d.firebaseapp.com',
            databaseURL: 'https://authentication-project-48d7d.firebaseio.com',
            projectId: 'authentication-project-48d7d',
            storageBucket: 'authentication-project-48d7d.appspot.com',
            messagingSenderId: '429636118010'
          })
    }

    render(){
        return(
            <View>
                <CusHeader headerText="my fuken auth app" />
                <Text> my fucken app </Text>
            </View>
        );
    }
}

export default App;