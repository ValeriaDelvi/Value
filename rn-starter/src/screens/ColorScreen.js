import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'

const ColorScreen = () => {

    const [colors, setColors] = useState([]);
    console.log(colors);
    return (
        <View>
            <Text>color :</Text>
            <Button
                title='Add a Color'
                onPress={() => {
                    setColors([...colors, randomRgb()]);
                }}
            />
            <FlatList
                keyExtractor={(item)=>item}
                data={colors}
                renderItem={({item})=>{
                    return  <View style={{ height: 100, width: 100, backgroundColor:item}}/>

                }}
            />

        </View>

    );
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blu = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blu})`
};

const styles = StyleSheet.create({});

export default ColorScreen;