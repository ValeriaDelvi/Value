import React, { useState } from 'react'
import { Text, View, Button, StyleSheet} from 'react-native'

const CountScreen = () =>{
const [count,setCount] = useState(0);

  return (
    <View>
        <Button
        title='Increase'
        onPress={()=>{
        setCount( count + 1)
        }}
        />
        <Button
        title='Decrease'
        onPress={()=>{
        setCount(count -1)
            
        }}
        />
         <Text>Current count: {count}</Text>
    </View>

  )
};

const styles = StyleSheet.create({});
 
export default CountScreen;