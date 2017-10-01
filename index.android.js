/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
// import { StackNavigator } from 'react-navigation';
// import Login from './src/components/Login/Login';

// const App = StackNavigator ({
//   Splash: { screen: Splash },
//   Login: { screen: Login }
// });
const ReminderApp = () => (
<View style={{ flex: 1 }}>
  <Header headerText={'Reminder Application'} />
  <AlbumList />
</View>
);
// import Splash from './Splash';
// export default class ReminderApp extends Component {
//   render() {
//     return (
//       <Login />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('ReminderApp', () => ReminderApp);
