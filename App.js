import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from './components/Header';
import { Touchable } from 'react-native-web';
import Todo from './components/Todo';
import Dialog from './components/Dialog';
import {v4 as uuidv4} from 'uuid';


export default function App() {
    const [todos, setTodos] = useState([
        {text: 'turu', key: uuidv4()},
        {text: 'backflip', key: uuidv4()},
    ]);
    const [selected, setSelected] = useState(false);
    const [dialog, showDialog] = useState(false);


    const selectHandler = (key) => {
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


  return (
      <>
        {
            selected || dialog &&
            <Dialog title={selected ? "Edit Todo" : "Add Todo"} onSave={selected ? onSave : null} key={selected ?  selected : null} addTodo={!selected ? addTodo : null} showDialog={showDialog}/>
        }
        <View style={styles.container}>
            <Header editable={selected} deleteTodo={selected ? deleteTodo : undefined}/>
            <View style={styles.content}>
                <View style={styles.list}>
                    <FlatList
                        data={todos}
                        renderItem={({item}) => (
                            <Todo item={item} selectHandler={selectHandler} selected={selected}/>
                        )}
                    />
                </View>
                <View style={styles.btnContainer}>
                    <Button color="coral" title="Add Todo" onPress={() => {
                            if (selected) {
                                setSelected(false);
                            }
                            showDialog(true);
                        }
                    }/>
                </View>
            </View>
        </View>
      </>

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
});
