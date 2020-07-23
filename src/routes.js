import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import App2 from '../App2';
import App from '../App';

export default createAppContainer(
    createMaterialTopTabNavigator({
        map: App2,
        nextScreen: {
            screen: App, 
            navigationOptions: {
                title: 'TÔ',
            }
        }
    },
    {
        tabBarPosition: 'bottom',
    })
)