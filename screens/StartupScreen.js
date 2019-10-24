import React, { Component } from 'react'
import { View, ActivityIndicator, StyleSheet, AsyncStorage} from 'react-native';
import Colors from '../constants/Colors';
import {connect} from 'react-redux';
import * as actions from '../store/actions';



class StartupScreen extends Component {

    componentDidMount(){
        

        this.tryLogin();

        
    }

    tryLogin = async () => {
        const data = await AsyncStorage.getItem('woto-user-data');

        if(!data){
            this.props.navigation.navigate('Auth');
            return
        }

        const userData = JSON.parse(data);
        const {token, userId, expiryDate } = userData;

        const expirationDate = new Date(expiryDate);

        if(expirationDate <= new Date() || !token || !userId){
            this.props.navigation.navigate('Auth');
            return
        }

        this.props.navigation.navigate('Main')
        
        let loginData = {
            isAuth: true,
            token: token,
            userId: userId
        }
        this.props.setLoginStateToTrue(loginData)

    }


    render() {
        return (
            <View style={Styles.screen}>
            <ActivityIndicator size='large' color={Colors.primary}/>
        </View>
        )
    }
}


const Styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

mapDispatchToProps = dispatch => {
    return {
        setLoginStateToTrue: () => dispatch(actions.setLoginStateToTrue)
    }
}

export default connect(null, mapDispatchToProps)(StartupScreen)
