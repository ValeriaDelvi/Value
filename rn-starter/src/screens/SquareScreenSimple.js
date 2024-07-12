import React, { useState } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import ColorCounter from '../components/ColorCounter';

 // const COLOR_INCREMENT = 15;
    //dato che aggiungiamo e togliamo sempre 15, puo diventare una variabile ma lo vediamo nel SquareScreenMedium
    //perchè è maiuscola?
    //è una convenzione per quando vogliamo usare un valore costante che NON è un props
    //sopra tutto

const SquareScreenSimple = () => {

    const [red, setRed]=useState(0);
    const [green, setGreen]= useState(0);
    const [blu, setBlu] = useState(0);
   
   
    return (
        <View>
            <Text>square screen</Text>
            <ColorCounter 
            color="Red"
            onIncrease={()=>{setRed(red +15)}}
            onDecrease={()=>{setRed(red - 15)}}
            />
            <ColorCounter 
            color="Green"
            onIncrease={()=>{setGreen(green +15)}}
            onDecrease={()=>{setGreen(green - 15)}}
            />
            <ColorCounter 
            color="Blu"
            onIncrease={()=>{setBlu(blu +15)}}
            onDecrease={()=>{setBlu(blu - 15)}}
            />
            <View style={{
                    height:150,
                    width:150,
                    backgroundColor:`rgb(${red},${green},${blu})`   
            }}/>
         </View>

    );
};


const styles = StyleSheet.create({});

export default SquareScreenSimple;