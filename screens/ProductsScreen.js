import React, { Component } from 'react'
import { View, StyleSheet, Button, FlatList, ActivityIndicator } from 'react-native';
import Product from '../components/ProductCard';
import Colors from '../constants/Colors';
import { connect } from 'react-redux'


class ProductsScreen extends Component {

    state = {
        loading: true,
        products: []
    }

    componentDidMount(){
        this.fetchProductsHandler();

        console.log('auth', this.props.auth, this.props.token)
    }


    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }


    fetchProductsHandler = () => {
        let url = "https://africauto.herokuapp.com/products";
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
            let products = this.shuffle(resData.products)
            this.setState({ products: products, loading: false})
  
        })
        .catch( err => {
            console.log( err )
        })
    }




    render() {
 
        let { loading  } = this.state;

        let products = this.state.products

        if(loading){
           return (
                <View style={styles.centered}>
                    <ActivityIndicator size="large"/>
                </View>
           )
        }
   
        return (
            <View style={styles.screen}>

                <FlatList
                    style={styles.list} 
                    data={products}
                    keyExtractor={item => item._id}
                    renderItem={itemData => <Product  
                                                image={itemData.item.general[0].mainImgUrl}
                                                made={itemData.item.general[0].made}
                                                model={itemData.item.general[0].model}
                                                year={itemData.item.general[0].year}
                                                price={itemData.item.general[0].price}
                                                
                                                onViewDetail={ () => {
                                                    this.props.navigation.navigate('SingleProduct', {prodId: itemData.item._id})
                                                }}/>
                                }
                />

                {
                    /*
            <Button title="Go to single"
                    // onPress={() => props.navigation.navigate({ routeName: 'SingleProduct' })} />
                        onPress={() => this.props.navigation.navigate('SingleProduct')} />
                    */
                }


            
                
            </View>
        )
    }
}





const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.greyLight
    },
    centered : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    list: {
        flexGrow: 1,
        width: '100%'
    }
})

const mapStateToProps = state => {
    return {
        auth: state.auth.auth,
        token: state.auth.token,
        userId: state.auth.userId,
    }
}
export default connect(mapStateToProps)(ProductsScreen)
