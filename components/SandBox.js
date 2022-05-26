import React from 'react'
import {StyleSheet, Text, View} from 'react-native';

export default function SandBox() {
  return (
      <View style={styles.container}>
          <Text style={[styles.box, styles.boxOne]}>One</Text>
          <Text style={[styles.box, styles.boxTwo]}>Two</Text>
          <Text style={[styles.box, styles.boxThree]}>Three</Text>
          <Text style={[styles.box, styles.boxFour]}>Four</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-end",
        backgroundColor: "#ddd",
    }, 
    box: {
        padding: 10,
        backgroundColor: "#333",
        marginBottom: 10,
    },
    boxOne: {
        padding: 20,
        backgroundColor: "red",
    },
    boxTwo: {
        backgroundColor: "green",
    },
    boxThree: {
        backgroundColor: "blue",
    },
    boxFour: {
        backgroundColor: "yellow",
    }
});