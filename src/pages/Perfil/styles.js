import styled from 'styled-components/native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export const Container = styled.View`
  padding-top: 100px;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.Text`
  color: #000;
  font-size: 40px;
  margin-top: 50px;
`;

export const Photo = styled.Image`
  width: 250px;
  height: 250px;
  background-color: #fff;
  border-radius: 500px;
`;
