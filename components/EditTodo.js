import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Import the useNavigation hook

const EditTodo = ({ route }) => {
  const { taskId, tasks, setTasks } = route.params;
  const navigation = useNavigation();
  const [todoTitle, setTodoTitle] = useState(tasks.find(task => task.id === taskId)?.title || '');
  const [todoDescription, setTodoDescription] = useState(tasks.find(task => task.id === taskId)?.subtitle || '');

  const handleUpdateTodo = () => {
    // Update the task in the tasks array
    setTasks(prevTasks => {
      return prevTasks.map(task =>
        task.id === taskId ? { ...task, title: todoTitle, subtitle: todoDescription } : task
      );
    });

    // Navigate back to TodoApp.js
    navigation.goBack();
  };

  const handleCancel = () => {
    // Navigate back to TodoApp.js without updating the task
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Todo Title"
        value={todoTitle}
        onChangeText={setTodoTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Todo Description"
        value={todoDescription}
        onChangeText={setTodoDescription}
      />
<View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={handleUpdateTodo}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleCancel}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
  </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 0,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  button: {
    backgroundColor: '#9395D3',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width:80,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonContainer:{
    flexDirection: 'row',  // Display buttons side by side
    justifyContent: 'space-around',  // Adjust as needed
    width: '100%',
  },
});

export default EditTodo;
