import React, { useState } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import ColorCounter from '../components/ColorCounter';




const COLOR_INCREMENT = 15;
const SquareScreenDifficult = () => {

    const [red, setRed]=useState(0);
    const [green, setGreen]= useState(0);
    const [blu, setBlu] = useState(0);
    console.log(red);

    const SetColor = (color, change) =>{ 
        //color === 'red', 'green', 'blu'
        //change === +15,-15
        //SetColor('red', COLOR_INCREMENT); la chiamata della funzione sarà così
        switch(color){
            case 'red':
            red + change > 255 || red + change < 0 ? null : setRed(red + change);
            return;

            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;

            case 'blu':
                    blu + change > 255 || blu + change < 0 ? null : setBlu(blu + change);
                    return;
            
        }
 }// end SetColor
   
   
    return(
        <View>
            <Text>
                Square screen con Switch: {"\n"}
                 -con operatore ternario
            
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

export default SquareScreenDifficult;