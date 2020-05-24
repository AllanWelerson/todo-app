import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';
import { Menu, MenuTrigger } from 'react-native-popup-menu';

export const Container = styled.View`
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
