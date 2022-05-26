import { StyleSheet, Text, View,  TouchableOpacity, Button} from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header(props) {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>Todolist</Text>
        {
            props.editable &&
            <View style={styles.btnContainer}>
                <MaterialIcons size={25} color="#333" name="edit" onPress={props.editTodo}/>
                <MaterialIcons size={25} color="#333" name="delete" onPress={props.deleteTodo}/>
                <MaterialIcons size={25} color="#333" name="close" onPress={props.close}/>
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
        justifyContent: "space-evenly",
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "40%",
    },
    title: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        color: "white",

    },
});
