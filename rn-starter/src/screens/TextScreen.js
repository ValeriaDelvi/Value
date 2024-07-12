import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput} from 'react-native'

const TextScreen = () =>{
        const[name, setName]= useState('');
        const[password,setPassword] = useState('');

       
    return (
    <View>
        <Text>Enter your name:</Text>
        <TextInput 
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={name}
        onChangeText={newValue => setName(newValue)}
        placeholder='your name here'
        />
        <Text>My name is {name}</Text>

        {true ? <Text>vedo questo testo true</Text> : <Text>NIENTE</Text>}
        {false ? <Text>vedo questo testo</Text> : <Text>NIENTE false</Text>}
        
        <Text>Enter Password:</Text>
        <TextInput 
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={password}
        onChangeText={ newValue => setPassword(newValue)}
        placeholder='your password here'
        />

{password.length > 4 ? null : <Text>La password deve avere più di 5 caratteri</Text>}
    </View>

  )
}

const styles = StyleSheet.create({
    input:{
        margin:15,
        borderColor:'blue',
        borderWidth:1

    }

});

export default TextScreen;