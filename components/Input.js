import React from 'react'
import { View, TextInput, StyleSheet, Text} from 'react-native';



const Input = props => {
  return (
    <View style={Styles.formControl}>
        <Text style={Styles.label}>{props.label}</Text>
        <TextInput 
            {...props}
            style={Styles.input}
            id={props.id}
          
            value={props.value}
            onChangeText={props.onChangeTextHandler} 
        />
      </View>
  )
}




const Styles = StyleSheet.create({

    formControl: {
        width: '80%'
    },

    label  : {
        marginVertical: 8
    },

    input : {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    }
})


export default Input
