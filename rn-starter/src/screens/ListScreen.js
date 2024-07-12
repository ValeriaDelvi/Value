import React from "react";
import { Text, StyleSheet, FlatList} from "react-native";

const ListScreen = () => {
    const friends = [
        {name: "f1", age: 33},
        {name: "f2", age: 30},
        {name: "f3", age: 40},
        {name: "f4", age: 38},
        {name: "f5", age: 33},
        {name: "f6", age: 32}
    ]

    return(
        <FlatList
        keyExtractor={(friends)=> friends.name}
        data={friends}
        renderItem={({item})=> {
            return <Text style={styles.textStyle}>{item.name} - Age: {item.age}</Text>
        }}

        />
    )
};
const styles = StyleSheet.create({
    textStyle: {
        marginVertical:50,
        marginHorizontal:50
    }
});

export default ListScreen;