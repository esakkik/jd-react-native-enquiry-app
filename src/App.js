import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import TutionList from './tuition/TutionList';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TuitionDetail from './tuition/TuitionDetail';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={TutionList} options={{title: 'ENQUIRES'}} />
            <Stack.Screen
              name="Detail"
              component={TuitionDetail}
              options={({route}) => ({title: route.params.name})}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
