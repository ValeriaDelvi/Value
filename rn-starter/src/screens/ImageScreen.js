import React from 'react'
import {Text, View } from 'react-native'

import ImageDetail from '../components/ImageDetail'

const ImageScreen = () =>{
  return (
      <View>
        <Text>Image Screen</Text>
        <ImageDetail 
        title="Forest" 
        imageSrc={require('../../assets/forest.jpg')}
        imageScore={9}/>
        <ImageDetail 
        title="Beach"  
        imageSrc={require('../../assets/beach.jpg')}
        imageScore={8}
        />
        <ImageDetail 
        title="Mountain"  
        imageSrc={require('../../assets/mountain.jpg')}
        imageScore={10}
        />
      </View>
  );
}

export default ImageScreen;