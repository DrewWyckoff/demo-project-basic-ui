import React, { Dispatch, SetStateAction } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Colors, IconButton, TextInput } from "react-native-paper";


export default function TodoAdder (
  props: {
    currentItem,
    todoItems,
    handleButtonPress,
    handleTextChange
  }
) {
    return (
        <>
            <Text style={styles.inputLabel}>Enter another todo item and click "Add"</Text>
            <View style={styles.addTodoWrapper}>
                <TextInput
                    style={styles.input}
                    value={props.currentItem.item}
                    onChangeText={(text) => props.handleTextChange(text)}
                    label="Enter todo"/>
                <IconButton 
                    icon="plus"
                    color={Colors.white}
                    size={40}
                    style={styles.button}
                    onPress={() => props.handleButtonPress(props.currentItem.item, props.todoItems)}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
    },
    addTodoWrapper: {
      flexDirection: 'row',
      width: 300,
      marginTop: 10
    },
    inputLabel: {
      fontSize: 18
    },
    left: {
      margin: 15,
    }, 
    right: {
      margin: 15,
    },
    input: {
      width: 300
    },
    button: {
      backgroundColor:  Colors.deepPurple600
    },
    table: {
      marginTop: 40
    }
  });