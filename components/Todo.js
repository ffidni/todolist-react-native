import React from 'react'
import { StyleSheet, Text, Pressable} from 'react-native';


export default function Todo({item, selectHandler, selected}) {
  return (
    <Pressable onLongPress={selected ? () => {} : () => selectHandler(item.key)} onPress={!selected ? () => {} : () => selectHandler(item.key)} style={[styles.item, selected === item.key && styles.itemSelected]}>
        <Text>{item.text}</Text>
    </Pressable>
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