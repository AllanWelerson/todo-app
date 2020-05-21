import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes';

import TaskProvider from './src/contexts/TaskContext';

export default function App() {
  return (
    <>
      <TaskProvider>
        <StatusBar barStyle="light-content" backgroundColor="#95B2FC"/>
        <Routes />
      </TaskProvider>
    </>
  );
}


