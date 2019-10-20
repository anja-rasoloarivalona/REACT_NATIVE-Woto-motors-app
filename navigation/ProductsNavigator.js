import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Ionicons, Entypo, Feather } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ProductsScreen from '../screens/ProductsScreen';
import SingleProductScreen from '../screens/SingleProductScreen';
import SingleProductGalleryScreen from '../screens/SingleProductGalleryImageScreen';
import FilterScreen from '../screens/FiltersScreen';
import FavoriteScreen from '../screens/FavoritesScreen';
import UserAccountScreen from '../screens/UserAccountScreen';
import MessagesScreen from '../screens/MessagesScreen';

import Icon from '../assets/Icon';


import Colors from '../constants/Colors'




const styles = StyleSheet.create({
    messageIcon: {
        padding: 10,
        marginRight: 20
    }
})


const defaultStackNavOptions = ({ navigation }) => ({
    headerTintColor: Colors.primary,
    headerTitle: 'WOTO',
    headerTitleStyle: {
        fontWeight: 'bold'
    },
    headerRight: 
            <TouchableWithoutFeedback onPress = { () => {navigation.navigate('Messages')}}>
                <View style={styles.messageIcon}>
                    <Icon name='Message' width='30' height='30' fill={Colors.primary}/>
                </View>
            </TouchableWithoutFeedback>
})



const ProductsNavigator = createStackNavigator({
    Products: ProductsScreen,
    SingleProduct : SingleProductScreen,
    SingleProductGallery:  SingleProductGalleryScreen,
    Messages: MessagesScreen

}, {
    defaultNavigationOptions: defaultStackNavOptions
    }
)

ProductsNavigator.navigationOptions =  ({ navigation }) => {
    let tabBarVisible;
      navigation.state.routes.map(route => {
        if (route.routeName === "SingleProductGallery" || route.routeName === 'Messages') {
          tabBarVisible = false;
        } else {
          tabBarVisible = true;
        }
      });
    return {
      tabBarVisible
    };
};


const filter = createStackNavigator({
    Filter: FilterScreen
}, {defaultNavigationOptions: defaultStackNavOptions})

const favorite = createStackNavigator({
    Favorite: FavoriteScreen
}, {defaultNavigationOptions: defaultStackNavOptions})

const userAccount = createStackNavigator({
    UserAccount: UserAccountScreen
}, {defaultNavigationOptions: defaultStackNavOptions})





const bottomTabNavigatorConfig = {
        Products: {
           screen: ProductsNavigator,
           navigationOptions: {        
               tabBarIcon: tabInfo => {
                    return <Ionicons name="md-home" size={25} color={tabInfo.tintColor} />
               },             
           }
        },
        Filter: {
            screen: filter,
            navigationOptions: {
                tabBarIcon: tabInfo => {
                    return <Entypo name="magnifying-glass" size={25} color={tabInfo.tintColor} />
                },
            }
        },
        Favorite: {
            screen: favorite,
            navigationOptions: {
                tabBarIcon: tabInfo => {
                    return <Ionicons name="md-heart-empty" size={25} color={tabInfo.tintColor} />
                    }
                }
            },
        User: {
            screen: userAccount,
            navigationOptions: {
                tabBarIcon: tabInfo => {
                    return <Feather name="user" size={25} color={tabInfo.tintColor} />
                    }
                }
        }
    
}

const BottomNavigator = createBottomTabNavigator(bottomTabNavigatorConfig, {
    tabBarOptions: {
        showLabel: false,
        activeTintColor: Colors.primary
    },
})



export default createAppContainer(BottomNavigator)