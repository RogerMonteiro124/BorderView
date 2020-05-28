import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TextInput
} from 'react-native';



const App = () => {

  const [borderProps,setBorderProps]=useState(0);
  const [inputNumber, setInputNumber] = useState("");
  const [ResultBorder, setResultBorder] = useState("");

  const copyBorderProps = ()=>{
    setBorderProps(parseInt(inputNumber));
    setResultBorder("Codigo: {borderRadius: "+inputNumber+"}")
  }
  useEffect(()=>{

  },[borderProps])
  return (
    <>
      <View style={styles.container}>
        <Text>Insira o raioda borda:</Text><TextInput
          style={styles.input}
          keyboardType="numeric"
          maxLength={3}
          onChangeText={(number) => setInputNumber(number)}
        >

        </TextInput>
        <TouchableHighlight style={{
          borderWidth: 1,
          borderColor: '#53eded',
          borderRadius:borderProps,
          paddingTop:50,
          paddingBottom:80
        }}
          onPress={copyBorderProps}
          underlayColor='#fff'>
            <Text style={styles.text}>Aplicar Style na Borda</Text>
        </TouchableHighlight>
        <Text>{ResultBorder}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
 container:{
   flex:1,
   alignSelf:"center",
   justifyContent:"center",   
 },
 text:{
  color:"#53eded",
   fontSize:25
 }
});

export default App;
