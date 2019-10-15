import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const MessagesScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Messages Screens</Text>
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

export default MessagesScreen