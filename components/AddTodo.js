import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Import the useNavigation hook

const AddTodo = ({ route }) => {
  const { tasks, setTasksCallback } = route.params; // Extract tasks and setTasks from route.params
  const navigation = useNavigation();
  const [todoTitle, setTodoTitle] = useState('');
  const [todoDescription, setTodoDescription] = useState('');

  const handleAddTodo = () => {
    // Update the tasks array with the new todo
    const newTodo = { id: String(tasks.length + 1), title: todoTitle, subtitle: todoDescription };
    setTasksCallback([...tasks, newTodo]);

    // Log the updated tasks array
    console.log('Updated Tasks:', tasks);

    
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

      <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
        <Text style={styles.buttonText}>Add Todo</Text>
      </TouchableOpacity>
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
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default AddTodo;
