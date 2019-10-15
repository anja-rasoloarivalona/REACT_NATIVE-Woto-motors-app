import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const ProductsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Products Screens</Text>
            <Button title="Go to single"
                   // onPress={() => props.navigation.navigate({ routeName: 'SingleProduct' })} />
                    onPress={() => props.navigation.navigate('SingleProduct')} />
        </View>

    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ProductsScreen
