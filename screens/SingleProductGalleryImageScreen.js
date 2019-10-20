import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions} from 'react-native';
import Colors from '../constants/Colors'

let width = Dimensions.get('window').width;

const SingleProductGalleryScreen = props => {

    const imagesUrl = props.navigation.getParam('imageUrls');

    return (
        <View style={styles.screen}>
            <FlatList
                style={styles.list}
                data={imagesUrl}
                keyExtractor={item => item}
                renderItem={itemData => <Image style={styles.image} source={{uri: itemData.item}}/>}/>
        </View>

    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },

    list: {
        flexGrow: 1,
        width: '100%'
    },

    image: {
        width: '100%',
        height: .55 * width,
        marginBottom: 10
    }

})

export default SingleProductGalleryScreen
