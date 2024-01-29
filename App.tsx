import {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import axios from 'axios';

export default function App() {
  const [products, setProducts] = useState('');

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

  return (
    <View style={styles.container}>
      <Text style={styles.products}>{products}</Text>
      <Button title="Get Products" onPress={getProducts} color="green" />
      <Button title="Get One Product" onPress={getOneProduct} color="green" />
      <Button
        title="Get Random Product"
        onPress={getRandomProduct}
        color="green"
      />

      <Button
        title="Get All Recipes"
        onPress={getAllRecipes}
        color="green"
      />

      <Button title="Add Your Product" onPress={addNewProduct} color="green" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  products: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
});
