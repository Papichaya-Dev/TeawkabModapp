import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet, Image} from 'react-native';
import firebase from 'react-native-firebase';
import logoo from '../images/ant.png';

export default class SplashPage extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? 'Home' : 'SignUp');
      });
    }, 1800);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={logoo} style={styles.logo} />
          <Text style={styles.logoText}>𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨</Text>
        </View>
        <Text style={{color: 'black', fontSize: 40}}>𝐓𝐞𝐚𝐰 𝐤𝐚𝐛 𝐌𝐨𝐝</Text>
        <ActivityIndicator color="blue" size="large" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 400,
    height: 180,
  },
});
