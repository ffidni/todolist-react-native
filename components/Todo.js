import React from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native';


export default function Todo({item, selectHandler, selected}) {
  return (
    <TouchableOpacity onPress={() => selectHandler(item.key)} style={[styles.item, selected === item.key && styles.itemSelected]}>
        <Text>{item.text}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
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
});