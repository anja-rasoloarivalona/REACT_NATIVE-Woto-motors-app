import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const FilterScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Filter screen</Text>
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

export default FilterScreen