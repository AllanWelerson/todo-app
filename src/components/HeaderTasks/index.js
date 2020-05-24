import React from 'react';
import { View } from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from 'react-native-popup-menu';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Container, Title, InputSearch, SearchButton, MenuButton, TextMenu } from './styles';

const HeaderTasks = ({searchText, searchActive, title, setSearchText, setSearchActive, setTypeList}) => {
  return (
    <Container>
      {
        searchActive === false
        ?<Title>{title}</Title>
          
        : <InputSearch
              value={searchText} 
              onChangeText={text => setSearchText(text)}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Procurar Tarefas"
              />
      }

      <SearchButton onPress={() => setSearchActive(setSearchActive => !setSearchActive)}>
        <Ionicons name="ios-search" size={20} color="#FFF"></Ionicons>
      </SearchButton>
      
      <MenuButton>    
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
      </MenuButton>

    </Container>
  );
}

export default HeaderTasks;