import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { SafeAreaProvider} from 'react-native-safe-area-context';

import FbookScreen from './screens/FbookScreen';
import InstaScreen from './screens/InstaScreen';

export default class App extends React.Component{
  render(){
    return (
      <SafeAreaProvider>
          <AppContainer/>
      </SafeAreaProvider>
    );
  }
}
const TabNavigator = createBottomTabNavigator({
  Facebook: {screen: FbookScreen},
  Instagram: {screen: InstaScreen}
});

const AppContainer = createAppContainer(TabNavigator);