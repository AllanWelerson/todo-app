import React, { useState, createContext } from 'react';
import { Alert } from 'react-native';

export const TaskContext = createContext();

const TaskProvider = ({children}) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

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

    let taskObj = {  name: newTask, done: false, star: false};
    setTasks([...tasks, taskObj]);
    setNewTask('');

    return true;  
  }

  return (
    <TaskContext.Provider value={{tasks, setTasks, handleDone, handleStar, handleAddTask, 
                                  newTask, setNewTask, handleDeleteTask}}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
