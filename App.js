import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SplashPage from './src/containers/SplashPage';
import SignUp from './src/containers/Signup';
import Login from './src/containers/Login';
import Home from './src/containers/Home';
import Achievement from './src/containers/Achievement';
import Tool from './src/containers/Tool';
import Journey from './src/containers/Journey';
import Congrat from './src/containers/Congrat';
const App = createStackNavigator({
  SplashPage: {
    screen: SplashPage,
    navigationOptions: {
      header: null,
    },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
      navigationOptions: {},
    },
  },
  Achievement: {
    screen: Achievement,
    navigationOptions: {
      header: null,
      navigationOptions: {},
    },
  },
  Tool: {
    screen: Tool,
    navigationOptions: {
      header: null,
      navigationOptions: {},
    },
  },
  Journey: {
    screen: Journey,
    navigationOptions: {
      header: null,
      navigationOptions: {},
    },
  },
  Congrat: {
    screen: Congrat,
    navigationOptions: {
      header: null,
      navigationOptions: {},
    },
  },
  initialRouteName: 'SplashPage',
});

export default createAppContainer(App);
