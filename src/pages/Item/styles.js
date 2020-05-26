import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
 
`;

export const NewItemForm = styled.View`
  flex-direction: row;
  padding: 20px;
`;

export const InputNewItem = styled.TextInput`
  flex: 1;
  height: 40px;
  font-size: 20px;
  color: #95B2FC;
  border: 1px solid #95B2FC;
  border-top-width : 0;
  border-left-width: 0;
  border-right-width: 0;
`;

export const NewItemButtom = styled(RectButton)`
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  background-color: #95B2FC;
`;

export const ItemList = styled.FlatList`
  padding: 10px 5px ;
  margin-bottom: 170px;
`;

export const ItemView = styled.View`
  padding: 10px;
  font-size: 30px;
  flex-direction: row; 
  align-items: center; 
`;

export const ItemName = styled.Text`
  font-size: 16px;
  text-align: center;
`;

export const ItemNameDone = styled.Text`
  font-size: 16px;
  text-decoration: line-through;
  text-align: center;
`;

export const ItemButton = styled.TouchableOpacity`
  flex: 1;
  margin: 10px 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  padding: 10px;
  border-top-width : 0;
  border-left-width: 0;
  border-right-width: 0;
`;
