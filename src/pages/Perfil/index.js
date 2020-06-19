import React, {useState, useEffect} from 'react';
import { View, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

import { Container, Photo, Name } from './styles';

import user from '../../assets/user.png';

const Perfil = () => {

  const urlImage = require('../../assets/user.png');
  const [image, setImage] = useState(null);

  useEffect(() => {
    setImage(urlImage);
  },[]);

  return (
    <Container>

      <Photo source={image}/>
      <Name>Image Perfil</Name>
    </Container>
  );
}

export default Perfil;