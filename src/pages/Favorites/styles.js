import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Menu } from 'react-native-popup-menu';

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
  margin-left: 5px;
  padding: 0 10px;
`;

export const MenuButton = styled(Menu)`
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  margin-left: 5px;
  padding: 0 10px;
`;

export const TextMenu = styled.Text`
  font-size: 16px;
`;

export const TaskList = styled.FlatList`
  padding: 10px 5px ;
  margin-bottom: 90px;
`;

export const Task = styled.View`
  padding: 10px;
  font-size: 30px;
  flex-direction: row; 
  align-items: center; 
`;

export const TaskName = styled.Text`
  font-size: 16px;
`;

export const TaskButton = styled.TouchableOpacity`
  flex: 1;
  margin: 10px 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  padding: 10px;
  border-top-width : 0;
  border-left-width: 0;
  border-right-width: 0;
`;


export const TaskIconButton = styled.TouchableOpacity`
  
`;
