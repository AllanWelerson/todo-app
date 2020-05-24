import React, { useState, useEffect, useContext } from 'react';
import { AsyncStorage, Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, TaskButton, TaskIconButton,
         NewItemForm, InputNewItem, NewItemButton, TaskList, Task, TaskName, MenuButton, TextMenu  } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HeaderTasks from '../../components/HeaderTasks';
import { TaskContext } from '../../contexts/TaskContext';

const Home = () => {

  const navigation = useNavigation();
  const { tasks, 
          setTasks, 
          handleDone, 
          handleStar, 
          handleAddTask, 
          newTask, 
          setNewTask, 
          handleDeleteTask } = useContext(TaskContext); 

  const [searchText, setSearchText] = useState('');
  const [searchActive, setSearchActive] = useState(false);
  const [tasksHome, setTasksHome] = useState([]);
  const [typeList, setTypeList] = useState('all');

  async function loadTasks(){
    const t = await AsyncStorage.getItem('tasks');

    if(t){
      setTasks(JSON.parse(t));
    }

  }

  function deleteTask(name) {
    Alert.alert(
      'Apagar Tarefa',
      `Deseja apagar tarefa ${name} ?`,
      [
        {text: 'Não', onPress: () => {}, style: 'cancel'},
        {text: 'Sim', onPress: () => handleDeleteTask(name)},
      ]
    );
  }

  function handleSearch() {

      setTasksHome(tasks.filter(task => {
        let returnTask = true;
        if(searchText.length){
          if (!task.name.includes(searchText)){
            returnTask = false;
          }
        }

        if(typeList === 'done' && task.done !== true){
          returnTask = false;
        }

        if(typeList === 'doing' && task.done === true){
          returnTask = false;
        }
        
        return returnTask;
      
      }));
   
  }
  
  useEffect(() => {
    handleSearch();
  }, [searchText, typeList]) 

  useEffect(() => {
    if(tasks.length != 0){
      AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    }

    handleSearch();

  }, [tasks]);

  useEffect(() => {
    loadTasks();
  }, []);


  return (
  <Container>
    <HeaderTasks  title="Tarefas" 
                  searchText={searchText} 
                  searchActive={searchActive} 
                  setSearchText={setSearchText}
                  setSearchActive={setSearchActive}
                  setTypeList={setTypeList}/>

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

      <NewItemButton onPress={() => handleAddTask()}>
        <Ionicons name="ios-add" size={20} color="#FFF"></Ionicons>
      </NewItemButton>

    </NewItemForm>
      
      <TaskList 
        data={tasksHome}
        keyExtractor={task => String(task.name)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: task }) => (
          <Task>
            
            <TaskIconButton onPress={() => handleDone(task.name)}>
            { task.done
              ?<Ionicons name="ios-checkbox" size={26} color="#95B2FC"></Ionicons>
              :<Ionicons name="ios-square-outline" size={26} color="#95B2FC"></Ionicons>
            }
            </TaskIconButton>
            
            <TaskButton onPress={() => navigation.navigate("Item")}
                        onLongPress={() => deleteTask(task.name)}>
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

const triggerStyles = {
  triggerText: {
    color: '#fff',
    fontSize: 25,
  },
  triggerWrapper: {
    padding: 5,
  },
};

const menuStyles = {
  flex: 1,
}

export default Home;
