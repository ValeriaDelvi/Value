import React, { useReducer } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer =(state, action)=>{ // action -> how to change my state
// state === {red: number, green: number, bluenumber}
//action === {colorToChange: 'red' || 'green'|| 'blue', amount: 15 || -15}
//CONVENTION action type-payload
//action === {type: 'change_red' || 'change_green'|| 'change_blue', payload: 15 || -15}
switch(action.colorToChange){
    case 'red':
        return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : {...state, red: state.red + action.amount}
    case 'green':
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0
            ? state
            : {...state, green: state.green + action.amount}
    case 'blu':
        return state.blu + action.amount > 255 || state.blu + action.amount < 0
        ? state
        : {...state, blu: state.blu + action.amount}
    default:
        return state;
}
}

const SquareScreenReduce = () => {
    const [state, dispatch] = useReducer(reducer, {red:0, green:0, blu:0 }); //dispatch -> run my reducer
    console.log(state) //{red:0, green:0, blu:0 }
  
   
    return(
        <View>
            <Text>
                Square screen con Reduce: {"\n"}
                o FunctionThatManageChangeTOAnObject     
            </Text>
            <ColorCounter 
            color="Red"
            onIncrease={()=> dispatch({colorToChange: 'red', amount: COLOR_INCREMENT})}
            onDecrease={()=> dispatch({colorToChange: 'red', amount: -1* COLOR_INCREMENT})}
            />
            <ColorCounter 
            color="Green"
            onIncrease={()=> dispatch({colorToChange: 'green', amount: COLOR_INCREMENT})}
            onDecrease={()=> dispatch({colorToChange: 'green', amount: -1* COLOR_INCREMENT})}
            />
            <ColorCounter 
            color="Blu"
            onIncrease={()=> dispatch({colorToChange: 'blu', amount: COLOR_INCREMENT})}
            onDecrease={()=> dispatch({colorToChange: 'blu', amount:-1* COLOR_INCREMENT})}
            />
            <View style={{
                    height:150,
                    width:150,
                    backgroundColor:`rgb(${state.red},${state.green},${state.blu})`   
            }}/>
         </View>

    );
};


const styles = StyleSheet.create({});

export default SquareScreenReduce;