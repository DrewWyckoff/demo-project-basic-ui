import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, Colors, IconButton, Provider as PaperProvider, TextInput } from 'react-native-paper';
import TodoAdder from './components/TodoAdder';
import TodoList from './components/TodoList';
import useTodo from './hooks/useTodo.hook';

export default function App() {
  const {
    todoItems,
    currentItem,
    handleTextChange,
    removeTodoItem,
    addTodoItem,
  } = useTodo();

  return (
    <PaperProvider>
        <View>
        <Appbar.Header>
        <Appbar.Content title="Things to do" />
        </Appbar.Header>
        </View>
        <View style={styles.container}>
            <View style={styles.top}>
                <TodoAdder
                    todoItems={todoItems}
                    currentItem={currentItem}
                    handleTextChange={handleTextChange}
                    handleButtonPress={addTodoItem}></TodoAdder>
            </View>
            <View style={styles.bottom}>
            <TodoList 
                todoItems={todoItems}
                deleteCallback={removeTodoItem}
                editCallback={removeTodoItem}/>
            </View>
        </View>
    </PaperProvider>
  );
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
  top: {
    margin: 15,
  }, 
  bottom: {
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