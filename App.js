import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes';

import TaskProvider from './src/contexts/TaskContext';
import { MenuProvider } from 'react-native-popup-menu';

export default function App() {
  return (
    <>
      <TaskProvider>
        <MenuProvider>
          <StatusBar barStyle="light-content" backgroundColor="#95B2FC"/>
          <Routes />
        </MenuProvider>
      </TaskProvider>
    </>
  );
}


