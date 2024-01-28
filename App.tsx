import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Login from './App/Screens/LoginScreen/Login';

function App() {
  return (
    <SafeAreaView>
      <View style={styles.container }>
        <Login />
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App;
