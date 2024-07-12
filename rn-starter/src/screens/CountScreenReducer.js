import React, { useReducer } from 'react'
import { Text, View, Button, StyleSheet} from 'react-native'

const NUMBER=1;

const reducer = (state, action)=>{
    switch(action.changeCount){
        case'increment':
        return {...state, count: state.count + action.amount}
        case'decrement':
        return {...state, count: state.count + action.amount}
        default :
         return state;
    }
}

const CountScreenReducer = () =>{
    const[state, dispatch]=useReducer(reducer,{count:0})

  return (
    <View>
        <Text>
            Count con Reducer:
            - togliere useState e variabili

        </Text>
        <Button
        title='Increase'
        onPress={()=>{dispatch({changeCount: 'increment', amount: NUMBER})}}
        />
        <Button
        title='Decrease'
        onPress={()=>{dispatch({changeCount: 'decrement', amount:-1* NUMBER})}}
        />
         <Text>Current count: {state.count}</Text>
    </View>

  )
};

const styles = StyleSheet.create({});
 
export default CountScreenReducer;