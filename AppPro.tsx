import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import axios from 'axios';

export default function App() {
  const getRandomId = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
  };

  const getProducts = () => {
    axios
      .get('https://dummyjson.com/products')

      .then(function (response) {
        console.log('Response from API:', response.data);
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
      });
  };

  const getOneProduct = () => {
    axios
      .get('https://dummyjson.com/products/1')

      .then(function (response) {
        console.log('Response from API:', response.data);
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
      });
  };

  const getRandomProduct = () => {
    axios
      .get('https://dummyjson.com/products/' + getRandomId(1, 200))

      .then(function (response) {
        console.log('Response from API:', response.data);
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
      });
  };

  const getAllRecipes = () => {
    axios
      .get('https://dummyjson.com/recipes')
      .then(function (response) {
        console.log('Response from API:', response.data);
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
      });
  };

  const getAllTodos = () => {
    axios
      .get('https://dummyjson.com/todos')
      .then(function (response) {
        console.log('Response from API:', response.data);
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
      });
  };


  // Post requests using Axios

  const addNewProduct = () => {
    axios
      .post(
        'https://dummyjson.com/products/add',
        {
          title: 'BMW Pencil',
          /* other product data */
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error('Error:', error);
      });
  };

  const addNewTodo = () => {
    axios
      .post(
        'https://dummyjson.com/todos/add',
        {
          todo: 'Use DummyJSON in the project',
          completed: false,
          userId: 5,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error('Error:', error);
      });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={getProducts}>
        <Text>Get Products</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={getOneProduct}>
        <Text>Get One Product</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={getRandomProduct}>
        <Text>Get Random Product</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={getAllRecipes}>
        <Text>Get All Recipes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={getAllTodos}>
        <Text>Get All Todos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={addNewProduct}>
        <Text>Add Your Product</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={addNewTodo}>
        <Text>Add Your Todo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    marginVertical: 5,
  },
});
