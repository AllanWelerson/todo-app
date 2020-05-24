import styled from 'styled-components/native';

export const Container = styled.View`

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
