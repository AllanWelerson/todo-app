import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Title } from './styles';

const Home = () => {

  const navigation = useNavigation();

  return (
  <Container>
    <Title>Este é o titulo - Home</Title>
    <TouchableOpacity
      onPress={() => navigation.navigate('Item')}
      >
      <Text>
        Item
      </Text>
    </TouchableOpacity>
  </Container>
  );
}

export default Home;