import React, { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, Header, InputSearch, SearchButton, TaskButton, TaskIconButton,
         TaskList, Task, TaskName, MenuButton, TextMenu  } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from 'react-native-popup-menu';

import HeaderTasks from '../../components/HeaderTasks';
import { TaskContext } from '../../contexts/TaskContext';

const Favorites = () => {
  const navigation = useNavigation();
  const { tasks, handleDone, handleStar} = useContext(TaskContext); 

  const [searchText, setSearchText] = useState('');
  const [searchActive, setSearchActive] = useState(false);
  const [starred, setStarred] = useState([]);
  const [typeList, setTypeList] = useState('all');
  

  function handleSearch() {

    setStarred(tasks.filter(task => {
      let returnTask = true;
      
      if(task.star !== true){
        returnTask = false;
      }
      
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
    setStarred(tasks.filter(task => task.star === true));
  }, [tasks]);

  return (
  <Container>

    <HeaderTasks  title="Favoritas" 
                  searchText={searchText} 
                  searchActive={searchActive} 
                  setSearchText={setSearchText}
                  setSearchActive={setSearchActive}
                  setTypeList={setTypeList}/>

      <TaskList 
        data={starred}
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
export default Favorites;