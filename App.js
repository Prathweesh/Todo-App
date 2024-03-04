// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoApp from './components/TodoApp';
import AddTodo from './components/AddTodo';
import CompletedTodo from './components/CompletedTodo';
import EditTodo from './components/EditTodo';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const TodoStack = createNativeStackNavigator();

function TodoStackScreen() {
  return (
    <TodoStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <TodoStack.Screen
        name="TodoApp"
        component={TodoApp}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#9395D3',
          },
          headerTintColor: '#fff',
          title: ' Todo App',
          headerRight: () => (
            <TouchableOpacity>
              <Ionicons name="calendar-outline" size={24} color="#fff" style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
        }}
      />
      <TodoStack.Screen
        name="AddTodo"
        component={AddTodo}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#9395D3',
          },
          headerTintColor: '#fff',
          title: 'Add Todo',
        }}
      />
      <TodoStack.Screen
        name="EditTodo"
        component={EditTodo}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#9395D3',
          },
          headerTintColor: '#fff',
          title: 'Edit Todo',
        }}
      />
    </TodoStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconComponent;
        
            if (route.name === 'AllTasks') {
              iconComponent = focused ? <Ionicons name="list-circle" size={size} color={color} /> : <Ionicons name="list-circle-outline" size={size} color={color} />;
            } else if (route.name === 'CompletedTodo') {
              iconComponent = focused ? <Ionicons name="checkmark-circle" size={size} color={color} /> : <Ionicons name="checkmark-circle-outline" size={size} color={color} />;
            }
        
            return iconComponent;
          },
          tabBarStyle: { display: 'flex' },
        })}
      >
        <Tab.Screen
          name="AllTasks"
          component={TodoStackScreen}
          options={{
            headerShown: false, // Hide the header for this screen
          }}
        />
        <Tab.Screen
          name="CompletedTodo"
          component={CompletedTodo}
          options={{
            headerShown: false, // Hide the header for this screen
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
