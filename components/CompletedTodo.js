// CompletedTodo.js
import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const CompletedTodo = ({ route }) => {
  const { params } = route;
  const completedTasks = params?.completedTasks || [];

  if (completedTasks.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No completed tasks</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={completedTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.rowContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  rowContainer: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9395D3',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
});

export default CompletedTodo;
