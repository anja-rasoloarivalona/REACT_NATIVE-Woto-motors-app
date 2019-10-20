import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image, Dimensions } from 'react-native';
import Icon from '../assets/Icon';
import Colors from '../constants/Colors';


let width = Dimensions.get('window').width;


const ProductCard = props => {

    


    return (
        <TouchableWithoutFeedback>
            <View style={styles.card}>
                <Image style={styles.image} source={{uri: props.image}}/>             
                <View style={styles.main}>
                    <Text style={styles.mainTitle}>{props.made} {props.model} {props.year}</Text>
                    <View style={styles.mainPrice}>
                        <Text style={styles.mainPriceText}>{props.price} MRU</Text>
                    </View>
                    
                </View>
                <View style={styles.details}>

                    <View style={styles.detailsItem}>
                        <Text style={styles.detailsItemText}>130 000</Text>
                        <Icon name='Road' width='20' height='20' fill={Colors.grey}/>
                    </View>
                    <View style={styles.detailsItem}>
                        <Text style={styles.detailsItemText}>essence</Text>
                        <Icon name='GasStation' width='20' height='20' fill={Colors.grey}/>
                    </View>
                    <View style={styles.detailsItem}>
                        <Text style={styles.detailsItemText}>manuelle</Text>
                        <Icon name='Gear' width='20' height='20' fill={Colors.grey}/>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
        
    )
}

const styles = StyleSheet.create({
    card : {
        width: '100%',
        backgroundColor: Colors.white,
        marginBottom: 15
    },


    image: {
        width: '100%',
        height: .55 * width,
        
    },

    main: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 17,
        borderBottomWidth: 1,
        borderBottomColor: Colors.greyLight,
    },

    mainTitle : {
        fontSize: 20,
        fontWeight: '600'
    },

    mainPrice: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        
    },

    mainPriceText: {
        color: Colors.white
    },

    details: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 12,
        justifyContent: 'space-between',
    },
    detailsItem : {
        flexDirection: 'row'
    },

    detailsItemText: {
        marginRight: 20,
        color: Colors.grey
    }

})

export default ProductCard
