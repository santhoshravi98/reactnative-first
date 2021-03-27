import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class App extends Component {
  state = {
    text : "Tap the Button"
  };
  changeTextHandler = (text) => {
    this.setState({
      text : text
    })
  }
  render(){
   
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  return (
    <View style={styles.container}>
      <Text>{this.state.text} </Text>
      <Button title="Click here" onPress={()=>this.changeTextHandler('Click here')}/>
      <StatusBar style="auto" />
    </View>
  );
}
}
export default App;


