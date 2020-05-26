import React from 'react';
import { View } from 'react-native';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from 'react-native-popup-menu';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Container, Title, MenuButton, TextMenu } from './styles';

const HeaderTask = ({title}) => {

  function setTypeList(a){

  }

  return (
    <Container>
    <Title>{title}</Title>
    
       
    {/* <MenuButton>    
      <MenuTrigger>
        <Ionicons name="ios-menu" size={20} color="#FFF"></Ionicons>
      </MenuTrigger>
      <MenuOptions>
        <MenuOption onSelect={() => setTypeList('all')}>
          <TextMenu>Todos</TextMenu>
        </MenuOption>
        <MenuOption onSelect={() => setTypeList('doing')} >
          <TextMenu>Pendentes</TextMenu>
        </MenuOption>
        <MenuOption onSelect={() => setTypeList('done')} >
          <TextMenu>Completos</TextMenu>
        </MenuOption>
      </MenuOptions>
    </MenuButton> */}

  </Container>
  );
}

export default HeaderTask;