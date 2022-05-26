import { StyleSheet, Text, View, FlatList, Button, StatusBar, TouchableWithoutFeedback, TextInput, Keyboard} from 'react-native';
import React, {useState, useRef} from 'react';
import Header from './components/Header';
import { Touchable } from 'react-native-web';
import Todo from './components/Todo';
import {v4 as uuidv4} from 'uuid';


export default function App() {
    const [todos, setTodos] = useState([
        {text: 'turu', key: uuidv4()},
        {text: 'backflip', key: uuidv4()},
    ]);
    const [selected, setSelected] = useState(false);
    const [edit, setEdit] = useState(false);
    const [formValue, setForm] = useState("");


    const selectHandler = (key = false) => {
        setEdit(false);
        setSelected(key);
    }
    const deleteTodo = () => {
        setTodos((prevTodos) => {
            let newTodos = [...prevTodos];
            newTodos = newTodos.filter((todo) => todo.key !== selected);
            return newTodos;
        });
    }

    const onSave = (key, title) => {
        setTodos((prevTodos) => {
            let newTodos = [...prevTodos];
            let todo = newTodos.find((todo) => todo.key === key);
            const todoIndex = newTodos.indexOf(todo);
            todo.text = title;
            newTodos[todoIndex] = todo;
            return newTodos;
        });
    }

    const addTodo = (title) => {
        setTodos((prevTodos) => {
            let newTodos = [...prevTodos];
            newTodos.push({
                text: title,
                key: uuidv4()
            })
            return newTodos;
        });
    }

    const resetState = () => {
        setSelected(false);
        setEdit(false);
        Keyboard.dismiss();
    }


  return (
        <TouchableWithoutFeedback
            onPress={resetState}
        >
        <View style={styles.container}>
            <StatusBar backgroundColor="#ff6a34"/>
            <Header editable={selected} deleteTodo={selected ? deleteTodo : undefined} editTodo={() => setEdit(true)} close={() => selectHandler(false)}/>
            <View style={styles.content}>
                <View style={styles.list}>
                    <FlatList
                        data={todos}
                        renderItem={({item}) => (
                            <Todo item={item} selectHandler={selectHandler} selected={selected}/>
                        )}
                    />
                </View>

                <View style={styles.form}>
                <View style={styles.horLine}></View>

                    <TextInput
                        placeholder='e.g. sleep'
                        style={styles.input}
                        value={formValue}
                        onChangeText={(val) => setForm(val)}
                    />
                    <View style={styles.btnContainer}>
                        <Button color="coral" title={edit ? "Edit Todo" :  "Add Todo"} onPress={() => {
                                if (edit) {
                                    onSave(selected, formValue)
                                } else {
                                    if (selected) {
                                        setSelected(false);
                                    }
                                    if (formValue !== ""){
                                        addTodo(formValue);
                                    }
                                }
                                setForm("");


                            }
                        }/>
                    </View>
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',

  },
  content: {
    height: "90%",
    margin: 20,

  },   
  list: {
  },
  btnContainer: {
    marginTop: 10,
  },
  form: {
  },
  horLine: {
      width: "100%",
      height: "5%",
      borderWidth: 2,
      borderTopColor: "#eaeaea",
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginTop: 10,
      marginBottom: 10,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1.5,
    borderColor: "grey",
    backgroundColor: "#eaeaea",
    height: 45,
},
});
