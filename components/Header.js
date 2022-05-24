import { StyleSheet, Text, View, Button} from 'react-native';

export default function Header(props) {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>Todolist</Text>
        {
            props.editable &&
            <View style={styles.btnContainer}>
                <Button title="Edit"/>
                <Button title="Delete" onPress={props.deleteTodo}/>
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
        width: "35%",
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "white",

    },
});
