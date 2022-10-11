import { StyleSheet, View, Text } from 'react-native';
import { Colors, DataTable, IconButton } from "react-native-paper";

export default function TodoList (
     props: {
        todoItems: {item: string}[],
        deleteCallback,
        editCallback
    }
) {
    return (
        <View style={styles.table}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title> Item </DataTable.Title>
              <DataTable.Title> Order </DataTable.Title>
              <DataTable.Title> Actions </DataTable.Title>
            </DataTable.Header>
          {
            props.todoItems?.map((todo, index) => (
              <DataTable.Row key={index}>
                <DataTable.Cell>
                    <Text>
                        {todo.item}
                    </Text>
                </DataTable.Cell>
                <DataTable.Cell>
                    <Text>
                        {index + 1}
                    </Text>
                </DataTable.Cell>
                <DataTable.Cell>
                    <View style={styles.buttonGroup}>
                    <IconButton
                        onPress={() => props.deleteCallback(index, props.todoItems)}
                        color={Colors.white}
                        icon="delete"/>
                    {/* <IconButton
                        onPress={() => props.editCallback(index)}
                        color={Colors.white}
                        icon="pencil"/> */}
                    </View>
                </DataTable.Cell>
              </DataTable.Row>
            ))
          }
          </DataTable>
        </View>
    )
}

const styles = StyleSheet.create({
    table: {
      marginTop: 40,
      backgroundColor: Colors.deepPurple600
    },
    buttonGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
  });