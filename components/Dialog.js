import React, {useRef} from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Button, TextInput} from 'react-native';


export default function Dialog({title, key, saveTodo, addTodo, showDialog}) {
    const titleRef = useRef();
  return (
      <>
        <TouchableOpacity style={styles.dialogContainer} onPress={() => showDialog(false)}></TouchableOpacity>
        <View style={styles.dialog}>
            <View style={styles.exit}>
                        <Button color="coral" title="Exit" style={styles.exit} onPress={() => showDialog(false)}/>
            </View>
                <View style={styles.header}>
                    <Text style={styles.title}>{title}</Text>

                </View>
                <View style={styles.form}>
                    <View style={styles.row}>
                        <Text style={styles.todoTitle}>Todo's Title</Text>
                        <TextInput 
                            placeholder='e.g. sleep'
                            style={styles.input}
                            ref={titleRef}
                        />
                    </View>
                </View>
                <Button color="coral" title="Save" onPress={() => addTodo ? addTodo(titleRef.current.value) : saveTodo(key, titleRef.current.value)}/>
        </View>
      </>

  )
}

const styles = StyleSheet.create({
    dialogContainer: {
        position: "absolute",
        zIndex: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    title: {
        fontSize: 20,
    },
    todoTitle: {
        fontSize: 13,
        marginBottom: 10,
    },
    dialog: {
        position: "absolute",
        left: "11%",
        top: "30%",
        zIndex: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        backgroundColor: "white",
        width: "80%",
        height: "32%",
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10,
    },
    input: {
        width: "100%",
        padding: 1,
        borderWidth: 1.5,
        borderColor: "grey",
        backgroundColor: "white",
        height: 35,
    },
    header: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    exit: {
        position: "absolute",
        top: 10,
        right: 10,
    },
});
