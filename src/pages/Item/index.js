import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HeaderTask from '../../components/HeaderTask';
import { TaskContext } from '../../contexts/TaskContext';

import {  Container, NewItemForm, InputNewItem, NewItemButtom, ItemList, ItemView, 
          ItemName, ItemButton, ItemNameDone } from './styles';

const Item = () => {

  const { task, handleAddItem, newItem, setNewItem, handleItemDone, handleDeleteItem } = useContext(TaskContext); 
  const [itens, setItens] = useState([]);

  function deleteItem(name) {
    Alert.alert(
      'Apagar Item',
      `Deseja apagar item ${name} ?`,
      [
        {text: 'Não', onPress: () => {}, style: 'cancel'},
        {text: 'Sim', onPress: () => handleDeleteItem(name)},
      ]
    );
  }

  return (
    <Container>
      <HeaderTask title={task.name}/>
      <NewItemForm>
        <InputNewItem 
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar novo item"
          value={newItem}
          onChangeText={item => setNewItem(item)}
          returnKeyType="send"
          onSubmitEditing={() => handleAddItem(newItem)}
        />

        <NewItemButtom onPress={() => handleAddItem(newItem)}>
          <Ionicons name="ios-add" size={20} color="#FFF"/>
        </NewItemButtom>

      </NewItemForm>

      <ItemList 
        data={task.itens}
        keyExtractor={item => String(item.name)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: item }) => (
          <ItemView>
            
            <ItemButton onPressIn={() => handleItemDone(item.name)}
                        onLongPress={() => deleteItem(item.name)}>
              {item.done
                ? <ItemNameDone> {item.name} </ItemNameDone>
                : <ItemName> {item.name} </ItemName>
              }
              
            </ItemButton>


          </ItemView>
        )}
      />

    </Container>
  );
}

export default Item;