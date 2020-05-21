import React, { useState, useEffect, useContext } from 'react';
import { Keyboard, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, Header, InputSearch, SearchButton, TaskButton, TaskIconButton,
         NewItemForm, InputNewItem, NewItemButton, TaskList, Task, TaskName  } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { TaskContext } from '../../contexts/TaskContext';

const Home = () => {

  const navigation = useNavigation();
  const { tasks, setTasks, handleDone, handleStar, handleAddTask } = useContext(TaskContext); 

  const [searchActive, setSearchActive] = useState(false);
  // const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  async function loadTasks(){
    const t = await AsyncStorage.getItem('tasks');

    if(t){
      setTasks(JSON.parse(t));
    }

  }

  function addTask() {
    
    if(handleAddTask(newTask)){
      
      setNewTask('');
      Keyboard.dismiss();
    }
    
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
        ? <Title>Tarefas</Title>
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
        placeholder="Adicionar nova tarefa"
        value={newTask}
        onChangeText={text => setNewTask(text)}
        returnKeyType="send"
        onSubmitEditing={handleAddTask}
      />

      <NewItemButton onPress={() => addTask()}>
        <Ionicons name="ios-add" size={20} color="#FFF"></Ionicons>
      </NewItemButton>

    </NewItemForm>
      
      <TaskList 
        data={tasks}
        keyExtractor={task => String(task.name)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: task }) => (
          <Task onPress={() => navigation.navigate('Item')}>
            
            
            <TaskIconButton onPress={() => handleDone(task.name)}>
            { task.done
              ?<Ionicons name="ios-checkbox" size={26} color="#95B2FC"></Ionicons>
              :<Ionicons name="ios-square-outline" size={26} color="#95B2FC"></Ionicons>
            }
            </TaskIconButton>
            
            <TaskButton onPress={() => navigation.navigate("Item")}>
              <TaskName>
                {task.name}
              </TaskName>
            </TaskButton>

            <TaskIconButton onPress={() => handleStar(task.name)}>
              { task.star
                ? <Ionicons name="ios-star" size={26} color="#95B2FC"></Ionicons>
                : <Ionicons name="ios-star-outline" size={26} color="#95B2FC"></Ionicons>
              }
              
            </TaskIconButton>

          </Task>
        )}
      />
   
  </Container>
  );
}

export default Home;
