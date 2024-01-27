import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AdviceItem from './components/AdviceItem';
import UIButton from './components/UIButton';
import axios from 'axios';

export default function App() {

  const [advice,setAdvice] = useState("");

  // generate random id
  const getRandomId = (min: number, max: number) =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
}
  // get advice by calling api 
  const getAdvice = () => {

    axios.get("http://api.adviceslip.com/advice/" + getRandomId(1,200)).
          then((response) => {
          setAdvice(response.data.slip.advice);
    });

    
    
  };
 

  useEffect(()=>{
    
      getAdvice();
    
    
  },[])


 

  return (
    <View style={styles.container}>
      <AdviceItem adviceText={advice}/>
      <UIButton buttonText="Get Some Advice" onPress={getAdvice}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24A19C',
    alignItems: 'center',
    justifyContent: 'center',
  }
});