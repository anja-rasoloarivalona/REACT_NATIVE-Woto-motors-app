import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView} from 'react-native';

const SingleProductScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Single Product</Text>
            <Button title='gallery'
                    onPress={() => props.navigation.navigate('SingleProductGallery')}/>
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