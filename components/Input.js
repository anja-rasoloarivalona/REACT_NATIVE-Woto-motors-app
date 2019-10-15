import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const  Input = props => {

     const [enteredValue, setEnteredValue] = useState("");

     inputHandler = value => {
        setEnteredValue(value);
      };


      addInputHandler = () => {
        props.onAddInput(enteredValue);
        setEnteredValue('')
      }


    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={s.inputContainer}>
                <TextInput
                placeholder="input"
                style={s.input}
                onChangeText={inputHandler}
                value={enteredValue}
                />
                <Button title="ADD" onPress={addInputHandler} />
            </View>
        </Modal>
        
    )
}

const s = StyleSheet.create({
    input: {
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        margin: 10,
        width: "80%"
      },
    
      inputContainer: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: 'red',
        flex: 1

      },
})


export default Input
