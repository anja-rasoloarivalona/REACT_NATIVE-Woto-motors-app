import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const SingleProductScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Single Product</Text>
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

export default SingleProductScreen