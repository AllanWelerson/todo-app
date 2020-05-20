import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`

`;

export const Header = styled.View`
  background-color: #95B2FC;
  padding: 20px;
  flex-direction: row;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 25px;
  flex: 1;
`;

export const InputSearch = styled.TextInput.attrs({
  placeholderTextColor: '#FFF'
})`
  border: 1px solid #fff;
  flex: 1;
  border-radius: 6px;
  color: #FFF;
  padding: 0 6px;
  height: 34px;
`;

export const SearchButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  margin-left: 10px;
  padding: 0 12px;
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

export const NewItemButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  background-color: #95B2FC;
`;

export const TaskList = styled.FlatList`
  padding: 20px;
  margin-bottom: 180px;
`;

export const Task = styled.TouchableOpacity`
  border: 1px solid #ccc;
  border-top-width : 0;
  border-left-width: 0;
  border-right-width: 0;
  padding: 10px 20px;
  font-size: 30px;
  margin-top: 10px;  
`;