/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/routes';
//import App from './App3'

AppRegistry.registerComponent(appName, () => App);
