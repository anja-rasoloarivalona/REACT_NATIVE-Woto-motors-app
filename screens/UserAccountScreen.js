import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const UserAccountScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>User Account</Text>
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

export default UserAccountScreen