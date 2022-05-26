import { StyleSheet, Text, View, FlatList, Button, StatusBar, TouchableWithoutFeedback, TextInput, Keyboard} from 'react-native';
import React, {useState, useRef} from 'react';
import Header from './components/Header';
import { Touchable } from 'react-native-web';
import Todo from './components/Todo';
import {v4 as uuidv4} from 'uuid';
import SandBox from './components/SandBox';


export default function App() {
    const [todos, setTodos] = useState([
        {text: 'turu', key: uuidv4()},
        {text: 'backflip', key: uuidv4()},
        {text: 'backflip', key: uuidv4()},
        {text: 'backflip', key: uuidv4()},
        {text: 'backflip', key: uuidv4()},

    ]);
    const [selected, setSelected] = useState(false);
    const [edit, setEdit] = useState(false);
    const [formValue, setForm] = useState("");


    const selectHandler = (key = false) => {
        setEdit(false);
        setSelected(key);
        setForm("");
    }
    const deleteTodo = () => {
        setTodos((prevTodos) => {
            let newTodos = [...prevTodos];
            newTodos = newTodos.filter((todo) => todo.key !== selected);
            return newTodos;
        });
    }

    const onEdit = () => {
        let title = todos.find((todo) => todo.key === selected).text;
        setEdit(true);
        setForm(title);
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
        //<SandBox/>
        <TouchableWithoutFeedback
            onPress={resetState}
        >
        <View style={styles.container}>
            <StatusBar backgroundColor="#ff6a34"/>

            <Header 
            editable={selected} 
            deleteTodo={selected ? deleteTodo : undefined} 
            editTodo={onEdit} 
            close={() => selectHandler(false)}
            />

            <View style={styles.content}>
            <View style={styles.form}>
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
                <View style={styles.horLine}></View>
                <View style={styles.list}>
                    <FlatList
                        data={todos}
                        renderItem={({item}) => (
                            <Todo item={item} selectHandler={selectHandler} selected={selected}/>
                        )}
                    />
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
      flex: 1,
    height: "90%",
    margin: 20,
  },   
  list: {
      flex: 1,
  },
  btnContainer: {
    marginTop: 10,
  },
  form: {
  },
  horLine: {
      width: "100%",
      borderWidth: 2,
      borderTopColor: "#eaeaea",
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginTop: 15,
      marginBottom: 15,
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
