import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from './components/Header';
import { Touchable } from 'react-native-web';

export default function App() {
    const [todos, setTodos] = useState([
        {text: 'turu', key: 1},
        {text: 'backflip', key: 2},
    ]);
    const [selected, setSelected] = useState(false);

    const selectHandler = (id) => {
        setSelected(id);
    }
    const editable = selected ? true : false;
  return (
    <View style={styles.container}>
        <Header editable={editable}/>
        <View style={styles.content}>
            {/*form */}
            <View style={styles.list}>
                <FlatList
                    data={todos}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => selectHandler(item.key)} style={[styles.item, selected === item.key && styles.itemSelected]}>
                            <Text>{item.text}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <View style={styles.btnContainer}>
                <Button color="coral" title="Add Todo"/>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: "center",

  },
  content: {
    height: "90%",
    margin: 20,

  },   
  list: {
  },
  item: {
    backgroundColor: "#eaeaea",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  itemSelected: {
    borderWidth: 2,
    borderColor: "coral",
  },
  btnContainer: {
    marginTop: 10,
  },
});
