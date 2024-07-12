import React from "react";
import { Text, StyleSheet, View } from "react-native";


const ComponentsScreen = () => {
    const yourname = <Text>Valeria</Text>
    return (
    <View>
     <Text style={styles.textTitle}>Getting started with react native!</Text>
     <Text style={styles.textSubtitle}> My name is {yourname}</Text>
     </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize:50,
        color: 'red'
    },
    textTitle: {
        fontSize:45
    },
    textSubtitle:{
        fontSize:20
    }
});

export default ComponentsScreen;