import React, { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, Header, InputSearch, SearchButton, TaskButton, TaskIconButton,
         TaskList, Task, TaskName  } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { TaskContext } from '../../contexts/TaskContext';

const Favorites = () => {
  const navigation = useNavigation();
  const { tasks, handleDone, handleStar} = useContext(TaskContext); 

  const [searchActive, setSearchActive] = useState(false);
  const [starred, setStarred] = useState([]);


  useEffect(() => {
    setStarred(tasks.filter(task => task.star === true));
  }, [tasks]);

  return (
  <Container>

   <Header>
      {
        searchActive === false
        ? <Title>Favoritas</Title>
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