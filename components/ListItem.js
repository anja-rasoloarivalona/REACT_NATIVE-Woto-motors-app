import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = props => {
    return (
        <TouchableOpacity activeOpacity={.4} onPress={props.onDelete.bind(this, props.id)}>
            <View style={s.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>

        
    )
}

const s = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: "yellow",
        borderColor: "red",
        borderWidth: 1
      }
})


export default ListItem;
