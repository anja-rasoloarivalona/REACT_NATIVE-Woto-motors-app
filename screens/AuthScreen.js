import React, { Component } from 'react'
import { View , Text, StyleSheet, Button, KeyboardAvoidingView, AsyncStorage, ActivityIndicator} from 'react-native';
import Colors from '../constants/Colors';
import {timeStampGenerator} from '../utilities/timeStampGenerator';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import Input from '../components/Input';
import openSocket from 'socket.io-client';



class AuthScreen extends Component {

    state = {

        loginForm: {
            email: {
                value: ''
            },

            password:{
                value: ''
            }
        },

        loading: false,
        error: null
    }

    componentDidMount(){
        console.log('is auth', this.props.isAuth)
    }

    changeInputHandler = (text, input) => {
        this.setState( prevState => {
            const updatedForm = {
                ...prevState.loginForm,
                [input]: {
                    ...prevState.loginForm[input],
                    value: text
                }
            }
            return {
                loginForm: updatedForm
            }
        })
    }

    loginHandler = () => {

        console.log('auth......')

        this.setState({ loading: true})

        const {loginForm} = this.state

        let timeStamp = timeStampGenerator();

        fetch('https://africauto.herokuapp.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: loginForm.email.value,
                password: loginForm.password.value,
                timeStamp: timeStamp
            })
        })
        .then( res => {
            if(res.status === 422){
                throw new Error('validation failed')
            }
            
            if(res.status === 401){
                throw new Error('Wrong email or password')
            }

            if(res.status !== 200 && res.status !== 201){
                throw new Error('Could not authenticate you')
            }

            return res.json()
        })
        .then( resData => {

            console.log('authed finished', resData)

           let socket = openSocket('https://africauto.herokuapp.com', {query: `data=${resData.userId} ${resData.connectionId}`});
           socket.connect()

                this.props.loginSucceeded(resData);

                const remainingMilliSeconds = 24 * 60 * 60 * 1000 //24hours
                const expiryDate = new Date( new Date().getTime() + remainingMilliSeconds ).toISOString()

                AsyncStorage.setItem('woto-user-data', JSON.stringify({
                    token: resData.token,
                    userId: resData.userId,
                    expiryDate: expiryDate
                }))

                this.props.navigation.navigate('Main')
        })
        .catch( err => {
            this.setState({ loading: false})
            console.log('err', err)
        })
    }
 

    render() {

        let button;
        if(this.state.loading){
            button = <ActivityIndicator size='small'/>
        } else {
            button =   <Button onPress={this.loginHandler} 
                            title='login'/>
        }
        return (
            <KeyboardAvoidingView style={Styles.screen} behavior='padding' keyboardVerticalOffset={50}>
                <Text style={Styles.title}>WOTO</Text>

                <View style={Styles.form}>

                <Input
                    id='email'
                    label='email'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    value={this.state.loginForm.email.value}
                    onChangeTextHandler={text => this.changeInputHandler(text, 'email')}
                />

                <Input
                    id='password'
                    label='password'
                    keyboardType='default'
                    secureTextEntry
                    autoCapitalize='none'
                    value={this.state.loginForm.password.value}
                    onChangeTextHandler={text => this.changeInputHandler(text, 'password')}
                    />

                    {button}
            </View>


          

        </KeyboardAvoidingView>
        )
    }
}



const Styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    title : {
        color: Colors.primary,
        fontSize: 40,
        fontWeight: 'bold'
    },


    form: {
        width: '100%',
        margin: 20,
        alignItems: 'center'
        
    },

    formControl: {
        width: '80%'
    },

    label  : {
        marginVertical: 8
    },

    input : {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    }


})


const mapDispatchToProps = dispatch => {
    return {
        loginSucceeded: (data) => dispatch(actions.loginSucceeded(data)),
        loginFailed: () => dispatch(actions.loginFailed())
    }
}


const mapStateToProps = state => {
    return {
        isAuth: state.auth.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen)
