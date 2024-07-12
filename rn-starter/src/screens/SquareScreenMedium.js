import React, { useState } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import ColorCounter from '../components/ColorCounter';




const COLOR_INCREMENT = 15;
//è maiuscola per convenzione quando vogliamo un valore costante che NON è un props
//sopra tutto
const SquareScreenMedium = () => {

    const [red, setRed]=useState(0);
    const [green, setGreen]= useState(0);
    const [blu, setBlu] = useState(0);
    console.log(red);

    const SetColor = (color, change) =>{ 
        //color === 'red', 'green', 'blu'
        //change === +15,-15
        //SetColor('red', COLOR_INCREMENT); la chiamata della funzione sarà così
        if(color === 'red'){
            if(red + change > 255 || red + change < 0){
                return;
            } else {
                setRed(red + change)
            }
        }



//faccio il controllo qui con una nuova funzione sennò dovrei scrivere troppo codice ripetuto tipo questo, per ogni Button
 /* onIncrease={()=>{
        if ( red + COLOR_INCREMENT > 255) {
            return;
        } else
       setRed(red + COLOR_INCREMENT)
   }}
*/


    }
   
   
    return (
        <View>
            <Text>
                Square screen con If: {"\n"}
                1.Variabile const COLOR_INCREMENT = 15;{"\n"}
                 -in maiusc perchè valore costante{"\n"}
                2.Dobbiamo mettere dei controlli per non far andare i valori: {"\n"}
                 -sopra 255{"\n"}
                 -sotto 0{"\n"}
                 3.Solo Red implementato come esempio ma passiamo allo Switch
            
            </Text>
            <ColorCounter 
            color="Red"
            onIncrease={()=>SetColor('red', COLOR_INCREMENT)}
            onDecrease={()=>SetColor('red', -1* COLOR_INCREMENT)}
            />
            <ColorCounter 
            color="Green"
            onIncrease={()=>SetColor('green', COLOR_INCREMENT)}
            onDecrease={()=>SetColor('green', -1* COLOR_INCREMENT)}
            />
            <ColorCounter 
            color="Blu"
            onIncrease={()=>SetColor('blu', COLOR_INCREMENT)}
            onDecrease={()=>SetColor('blu', -1 *COLOR_INCREMENT)}
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

export default SquareScreenMedium;