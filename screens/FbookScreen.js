import React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';

export default class FbookScreen extends React.Component{
  render(){
    return(
      <View>
        <Header
          backgroundColor={'#ffb6c1'}
          centerComponent={{
          text: 'Buzz App',
          style: {color: '#000000', fontSize: 20, fontWeight: 'bold'},
                }}
        />
        <View style={{textAlign:'center',}}>
          <Text style={{color:'blue', marginTop:100}}>Facebook</Text>
        </View>
      </View>
    );
  }
}