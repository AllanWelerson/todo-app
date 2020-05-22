import styled from 'styled-components/native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export const Container = styled.View`
  padding-top: 100px;
`;

export const Title = styled.Text`
  color: red;
  
`;

export const Caixa = styled(Swipeable)`
  background-color: red;
  padding: 20px;
`;

