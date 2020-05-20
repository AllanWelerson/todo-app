import React, { useState, useEffect } from 'react';
import { Text, Alert, Keyboard, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, Header, InputSearch, SearchButton,
         NewItemForm, InputNewItem, NewItemButton, TaskList, Task  } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {

  const navigation = useNavigation();

  const [searchActive, setSearchActive] = useState(false);
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  async function loadTasks(){
    
    const t = await AsyncStorage.getItem('tasks');

    if(t){
      setTask(JSON.parse(t));
    }

  }

  function handleAddTask() {

    let existsTask = tasks.filter(task => task.name === newTask).length > 0 ? true : false;
    if(newTask.trim().length === 0){
      Alert.alert('Type anything');
      return false;
    }
    
    if(existsTask){
      Alert.alert('Already exists');
      return false;
    }
      let taskObj = {  name: newTask};
      setTask([...tasks, taskObj]);
      setNewTask('');

      Keyboard.dismiss();
  }

  useEffect(() => {
    if(tasks.length != 0){
      AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks])

  useEffect(() => {
    loadTasks();
  }, []);

  return (
  <Container>

   <Header>
      {
        searchActive === false
        ? <Title>Tasks</Title>
        : <InputSearch 
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Search Tasks"
              />
      }
      <SearchButton onPress={() => setSearchActive(setSearchActive => !setSearchActive)}>
        <Ionicons name="ios-search" size={20} color="#FFF"></Ionicons>
      </SearchButton>

    </Header>
     <NewItemForm> 
      <InputNewItem 
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Add New Task"
        value={newTask}
        onChangeText={text => setNewTask(text)}
        returnKeyType="send"
        onSubmitEditing={handleAddTask}
      />

      <NewItemButton onPress={handleAddTask}>
        <Ionicons name="ios-add" size={20} color="#FFF"></Ionicons>
      </NewItemButton>

    </NewItemForm>
      
      <TaskList 
        data={tasks}
        keyExtractor={task => String(task.name)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: task }) => (
          <Task onPress={() => navigation.navigate('Item')}>
            <Text>
              {task.name}
            </Text>
          </Task>
        )}
      />
   
  </Container>
  );
}

export default Home;