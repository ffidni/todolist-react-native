import { StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

export default function Header(props) {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>Todolist</Text>
        {
            props.editable &&
            <View style={styles.btnContainer}>
                <Button color="#ff6a34" title="Edit" onPress={props.editTodo}/>
                <Button color="#ff6a34" title="Delete" onPress={props.deleteTodo}/>
                <Button color="#ff6a34" title="Close" onPress={props.close}/>
            </View>
        }
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 35,
        paddingBottom: 15,
        backgroundColor: 'coral',
        flexDirection: "row",
        justifyContent: "space-around",
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "50%",
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "white",

    },
});
