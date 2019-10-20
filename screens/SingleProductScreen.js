import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, ScrollView, ActivityIndicator, Image, Dimensions, TouchableWithoutFeedback} from 'react-native';
import Colors from '../constants/Colors'


let width = Dimensions.get('window').width;

class SingleProductScreen extends Component {

    state = {
        product: null,
        loading: true,
        requiredDetail: 'overview'
    }

    componentDidMount(){
        const prodId = this.props.navigation.getParam('prodId');
        this.fetchProductDetailHandler(prodId)
        
    }

    fetchProductDetailHandler = prodId => {
        console.log('fetching id');

        let url = "https://africauto.herokuapp.com/products/" + prodId;
        fetch(url, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then( res => {
            if(res.status !== 200){
                throw new Error("Failed to fetch products")
            }
            return res.json()
        })
        .then( resData => {
            console.log('product', resData.product)
            this.setState({ loading: false, product: resData.product})
        })
        .catch( err => {
            console.log( err )
        })
    }
    
    render() {

        const { product, requiredDetail } = this.state

        if(this.state.loading){
            return (
                <View style={styles.centered}>
                    <ActivityIndicator />
                </View>
            )
        }

        let info;

        if(requiredDetail === 'overview'){
            info = (
                <View style={styles.detail}>
                    <View style={styles.overView}>
                        <Text>mise en circulation</Text>
                        <Text>2008</Text>
                    </View>
                    <View style={styles.overView}>
                        <Text>kilomètrage</Text>
                        <Text>200 000 km</Text>
                    </View>
                    <View style={styles.overView}>
                        <Text>état général</Text>
                        <Text>Très bon</Text>
                    </View>
                    <View style={styles.overView}>
                        <Text>boîte de transmission</Text>
                        <Text>Manuelle</Text>
                    </View>
                    <View style={styles.overView}>
                        <Text>Nombre de places</Text>
                        <Text>5</Text>
                    </View>
                </View>
            )
        }
        
        return (
            <ScrollView style={styles.screen}>
                <Image style={styles.image} source={{uri: product.general[0].mainImgUrl}}/>

                <View style={styles.main}>
                    <Text style={styles.mainTitle}>{product.general[0].made} {product.general[0].model} {product.general[0].year}</Text>
                    <View style={styles.mainPrice}>
                        <Text style={styles.mainPriceText}>{product.general[0].price} MRU</Text>
                    </View>  
                </View>

                <View style={styles.nav}>
                    <TouchableWithoutFeedback  onPress={() => this.setState({ requiredDetail: 'overview'})}>
                        <View style={requiredDetail === 'overview' ? {...styles.navItem, ...styles.navItemActive} : {...styles.navItem}}>
                            <Text style={requiredDetail === 'overview' ? {...styles.navItemText, ...styles.navItemTextActive} : {...styles.navItemText}}>OVERVIEW</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    
                    <TouchableWithoutFeedback onPress={() => this.setState({ requiredDetail: 'technical'})}>
                        <View style={requiredDetail === 'technical' ? {...styles.navItem, ...styles.navItemActive} : {...styles.navItem}}>
                            <Text style={requiredDetail === 'technical' ? {...styles.navItemText, ...styles.navItemTextActive} : {...styles.navItemText}}>TECHNICAL</Text>
                        </View>
                    </TouchableWithoutFeedback>
    
                    <TouchableWithoutFeedback onPress={() => this.setState({ requiredDetail: 'options'})}>
                        <View style={requiredDetail === 'options' ? {...styles.navItem, ...styles.navItemActive} : {...styles.navItem}}>
                            <Text style={requiredDetail === 'options' ? {...styles.navItemText, ...styles.navItemTextActive} : {...styles.navItemText}}>OPTIONS</Text>
                        </View>
                    </TouchableWithoutFeedback>              
                </View>

                {info}
                


                <Button title='gallery'
                        onPress={() => this.props.navigation.navigate('SingleProductGallery')}/>
            </ScrollView>
        )
    }
}




const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },

    image : {
        width: '100%',
        height: 0.55 * width
    },

    centered : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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

    nav: {
        width: '100%',
        height: 50,
        flexDirection: 'row'
    },

    navItem: {
        backgroundColor: Colors.dark,
        width: width / 3,
        alignItems: 'center',
        justifyContent: 'center',
        color: Colors.white,
    },

    navItemText: {
        color: Colors.white
    },

    

    navItemActive: {
        backgroundColor: Colors.white,   
        borderTopWidth: 1,
        borderTopColor: Colors.primary   
    },

    navItemTextActive: {
        color: Colors.primary
    },

    detail: {
        marginBottom: 200,
        paddingVertical: 20,
        paddingHorizontal: 35
    },

    overView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10
    }
})

export default SingleProductScreen