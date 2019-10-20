import React from 'react';
import {Text} from 'react-native';
import { Ionicons, Entypo, Feather } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import ProductsScreen from '../screens/ProductsScreen';
import SingleProductScreen from '../screens/SingleProductScreen';
import SingleProductGalleryScreen from '../screens/SingleProductGalleryImageScreen';
import FilterScreen from '../screens/FiltersScreen';
import FavoriteScreen from '../screens/FavoritesScreen';
import UserAccountScreen from '../screens/UserAccountScreen';


import Colors from '../constants/Colors'


const defaultStackNavOptions = {
    /*headerTitleStyle: {
      fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
      fontFamily: 'open-sans'
    },*/
    headerTintColor: Colors.primary,
    headerTitle: 'WOTO',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
  };

const ProductsNavigator = createStackNavigator({
    Products: ProductsScreen,
    SingleProduct : SingleProductScreen,
    SingleProductGallery:  SingleProductGalleryScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
    }
)

ProductsNavigator.navigationOptions =  ({ navigation }) => {
    let tabBarVisible;
      navigation.state.routes.map(route => {
        if (route.routeName === "SingleProductGallery") {
          tabBarVisible = false;
        } else {
          tabBarVisible = true;
        }
      });
    return {
      tabBarVisible,
    };
  };


const bottomTabNavigatorConfig = {
        Products: {
           screen: ProductsNavigator,
           navigationOptions: {
               tabBarIcon: tabInfo => {
                    return <Ionicons name="md-home" size={25} color={tabInfo.tintColor} />
               }
           }
        },
        Filter: {
            screen: FilterScreen,
            navigationOptions: {
                tabBarIcon: tabInfo => {
                    return <Entypo name="magnifying-glass" size={25} color={tabInfo.tintColor} />
                }
            }
        },
        Favorite: {
            screen: FavoriteScreen,
            navigationOptions: {
                tabBarIcon: tabInfo => {
                    return <Ionicons name="md-heart-empty" size={25} color={tabInfo.tintColor} />
                    }
                }
            },
        User: {
            screen: UserAccountScreen,
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
    }
})

export default createAppContainer(BottomNavigator)