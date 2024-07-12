import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return <View>
    <Text style={styles.text}>HomeScreen hello</Text>
    <Button
      onPress={() => navigation.navigate('Components')}
      title="Go to component demo"
    />

    <Button
      onPress={() => navigation.navigate('List')}
      title="Go to list demo"
    />
    <Button
      onPress={() => navigation.navigate('Image')}
      title="Go to image demo"
    />
      <Button
      onPress={() => navigation.navigate('Count')}
      title="Go to count  demo"
    />
      <Button
      onPress={() => navigation.navigate('Color')}
      title="Go to Color demo"
    />
         <Button
      onPress={() => navigation.navigate('Text')}
      title="Go to Text demo"
    />

<Button
      onPress={() => navigation.navigate('Square1')}
      title="Go to Square Simple demo"
    />

<Button
      onPress={() => navigation.navigate('Square2')}
      title="Go to Square con If"
    />

<Button
      onPress={() => navigation.navigate('Square3')}
      title="Go to Square con Switch"
    />

<Button
      onPress={() => navigation.navigate('Square4')}
      title="Go to Square con Reduce"
    />
    
<Button
      onPress={() => navigation.navigate('CountR')}
      title="Go to count con Reduce"
    />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
