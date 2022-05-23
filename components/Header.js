import { StyleSheet, Text, View, Button} from 'react-native';

export default function Header(props) {
    console.log(props.editable);
  return (
    <View style={styles.header}>
        <Text style={styles.title}>Todolist</Text>
        {
            props.editable &&
            <View style={styles.btnContainer}>
                <Button title="Edit"/>
                <Button title="Delete"/>
            </View>
        }
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        height: "10%",
        paddingTop: 38,
        backgroundColor: 'coral',
        flexDirection: "row",
        justifyContent: "space-around",
    },
    btnContainer: {
        flexDirection: "row",
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "white",

    },
});
