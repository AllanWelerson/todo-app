import React, { useState, createContext } from 'react';
import { Alert } from 'react-native';

export const TaskContext = createContext();

const TaskProvider = ({children}) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [task, setTask] = useState({});
  const [newItem, setNewItem] = useState('');

  const handleDone = (name) => {
    const tasksDone = tasks.map(task => {
      if(task.name === name){
        task.done = !task.done;
      }
      return task;
    });

    setTasks(tasksDone);
  }

  const handleDeleteTask = (name) => {
    setTasks(tasks.filter(task => task.name !== name) );
  }

  const handleStar = (name) => {
    const tasksStar = tasks.map(task => {
                  if(task.name === name){
                    task.star = !task.star;
                  }
                  return task;
                });

    setTasks(tasksStar);
  }

  const handleItemDone = (name) => {

    let itens = task.itens.map(item => {
      if(item.name === name){
        item.done = !item.done;
      }

      return item;
    });

    task.itens = itens;

    setTasks(tasks.map(t => {
      if(t.name === task.name){
        t = task;
      }
      return t;
    }));

    setTask(task);
  }

  const handleDeleteItem = (name) => {
    
    setTask(tasks.filter(task => task.name !== name) );

    let itens = task.itens.filter(item => item.name !== name );

    task.itens = itens;

    setTasks(tasks.map(t => {
      if(t.name === task.name){
        t = task;
      }
      return t;
    }));

    setTask(task);
  }

  const handleAddTask = () => {

    let existsTask = tasks.filter(task => task.name === newTask).length > 0 ? true : false;

    if(newTask.trim().length === 0){
      Alert.alert('Digite algo');
      return false;
    }
    
    if(existsTask){
      Alert.alert('Já existe');
      return false;
    }

    let taskObj = {  name: newTask, done: false, star: false, itens: []};
    setTasks([...tasks, taskObj]);
    setNewTask('');

    return true;  
  }

  const handleAddItem = (newItem) => {

    let existsItem = task.itens.filter(item => item.name === newItem).length > 0 ? true : false;
    if(newItem.trim().length === 0){
      Alert.alert('Digite algo');
      return false;
    }

    if(existsItem){
      Alert.alert('Já existe');
      return false;
    }

    task.itens = [...task.itens, { name: newItem, done: false }];
    // console.log(task);
    
    setTasks(tasks.map(t => {
      if(t.name === task.name){
        t = task;
      }
      return t;
    }));

    setTask(task);
    setNewItem('');
  }

  return (
    <TaskContext.Provider value={{tasks, setTasks, handleDone, handleStar, handleAddTask, 
                                  newTask, setNewTask, handleDeleteTask,
                                  task, setTask, handleAddItem, newItem, setNewItem,
                                  handleItemDone, handleDeleteItem }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
