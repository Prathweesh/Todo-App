
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const TodoApp = () => {
  const navigation = useNavigation();
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Task 1', subtitle: 'Subtitle 1' },
    { id: '2', title: 'Task 2', subtitle: 'Subtitle 2' },
    { id: '3', title: 'Task 3', subtitle: 'Subtitle 3' },
    // Add more tasks as needed
  ]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleEdit = (taskId) => {
    // Navigate to EditTodo.js with taskId as a parameter
    const taskToEdit = tasks.find(task => task.id === taskId);
    navigation.navigate('EditTodo', { taskId, tasks, setTasks, taskToEdit });
  };

  const handleDelete = (taskId) => {
    // Remove the task with the given taskId from the tasks array
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleComplete = (taskId) => {
    const completedTask = tasks.find((task) => task.id === taskId);

    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });

    // Update the completedTasks array with the completedTask
    setCompletedTasks((prevCompletedTasks) => [completedTask, ...prevCompletedTasks]);
  };
  
  
  
  const handleAddTodo = () => {
    navigation.navigate('AddTodo', {
      tasks,
      setTasksCallback: setTasks, // Pass the callback function instead of setTasks directly
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.rowContainer}>
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
            <View style={styles.actionsContainer}>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => handleEdit(item.id)}
              >
                <Ionicons name="pencil-outline" size={24} color="#9395D3" />
              </TouchableOpacity>
             
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => handleComplete(item.id)}
              >
                <Ionicons name="checkmark-outline" size={24} color="#9395D3" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => handleDelete(item.id)}
              >
                <Ionicons name="trash-outline" size={24} color="#9395D3" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => handleAddTodo() }
      >
        <Text style={{ color: '#fff' }}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', // Set position to relative
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
    marginTop:10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#9395D3',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
  actionsContainer: {
    flexDirection: 'row',
  },
  actionButton: {
    marginLeft: 10,
    marginBottom:20,
  },
  floatingButton: {
    bottom: 20, // Adjust the bottom position as needed
    left: 300, // Adjust the right position as needed
    marginHorizontal: 16,
    backgroundColor: '#9395D3',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
});

export default TodoApp;
