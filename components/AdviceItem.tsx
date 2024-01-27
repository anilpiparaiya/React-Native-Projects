import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export type AdviceItemProps = {
    adviceText: string;
}

const AdviceItem = (props: AdviceItemProps) => {
  return (
    <View style={styles.adviceContainer}>

        {/* advice */}
        <Text style={styles.adviceText} allowFontScaling>
          {props.adviceText}
        </Text>
    </View>
  );
};

export default AdviceItem;

const styles = StyleSheet.create({
  adviceContainer:{
    height: "40%",
    width: "70%",
    backgroundColor: "#24A19C",
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.5,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset:{
      height:5,
      width:5
    },
    borderRadius: 35,
    padding: 15,
    
  },
  adviceText:{
    fontSize: 23,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 35
  }
});