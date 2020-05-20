import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

const Favorites = () => {
  return (
    <Container>
      <RectButton onPress={() => {}}>
      <Text>Foo</Text>
    </RectButton>
      <Title>Favoritos</Title>
    </Container>
  );
}

export default Favorites;