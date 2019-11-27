/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React,{Component} from 'react';
import {StyleSheet, Platform, Image, Text, View,TextInput,TouchableOpacity,ImageBackground} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import firebase from 'react-native-firebase';
import images from '../images/loca.png';
import lo from '../images/v.png';

export default class Home extends React.Component {
  state = {currentUser: null};
  componentDidMount() {
    const {currentUser} = firebase.auth();
    this.setState({currentUser});
    //firebase.auth().signOut();
  }
  render() {
    const {currentUser} = this.state;
    return (
      <View style={styles.container}>
        <ImageBackground source={images} style={styles.backgroundContainer}>
        <Image source={lo} style={styles.logo} />
        <Text style={{fontSize: 25}}>Hi  </Text>
        <Text style={{color: 'blue', fontSize: 25}}>
          {currentUser && currentUser.email}
        </Text>
        <TouchableOpacity
              style={styles.button} />

            </ImageBackground>
      </View>,
       <Container>
       <Header style={{backgroundColor : '#F2F2FF'}} >
       <Button style ={styles.buttontool}>
         <Icon ios="ios-book" android="md-book" style={styles.inputIconn} />
          <View>
            <Text style={styles.SingupText}>
              <Text
                onPress={() => this.props.navigation.navigate('Tool')}
                style={styles.input}>
                𝐓𝐨𝐨𝐥
              </Text>
            </Text>
          </View>
              <Text
                onPress={() => this.props.navigation.navigate('Login')}
                style={styles.SingupTextt} />
            </Button>
       <Icon ios="ios-contact" android="md-contact" style={styles.Iconheader} />
        <Text style={styles.Textuser} >
          {currentUser && currentUser.email}
        </Text>
       </Header>
       <Content />
       <Footer>
         <FooterTab >
         <Button vertical>
         <Icon ios="ios-trophy" android="md-trophy" style={styles.inputIconn} />
              <View>
            <Text style={styles.SingupText}>
              <Text
                onPress={() => this.props.navigation.navigate('Achievement')}
                style={styles.input}>
                𝐀𝐜𝐡𝐢𝐞𝐯𝐞𝐦𝐞𝐧𝐭
              </Text>
            </Text>
          </View>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text style={styles.input} >𝐀𝐩𝐩</Text>
            </Button>
            <Button vertical>
            <Icon ios="ios-car" android="md-car" style={styles.inputIconn} />
              <Text style={styles.input} >𝐉𝐨𝐮𝐫𝐧𝐞𝐲</Text>
            </Button>
         </FooterTab>
       <Footer  style={{backgroundColor : '#F2F2FF'}}  /></Footer >
     </Container>
   );
 }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttontext: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
  },
  button: {
    width: 250,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 16,
  },
  backgroundContainer: {
    flex: 1,
    width: 900,
    height: 900,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundContainerfoot: {
    flex: 1,
    width: 900,
    height: 900,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 400,
    height: 180,
  },
  input: {
    fontSize: 16,
    color: 'white',
  },
  Iconheader: {
    position: 'absolute',
    top: 15,
    left: 15,
  },
  Textuser:{
    position: 'absolute',
    top: 19,
    left: 50,
    color:'black',
    fontWeight:'bold'
  },
  buttontool: {
    position: 'absolute',
    top: 1,
    left: 320,
    backgroundColor:'#CDCDD2',
    width:87,
    height:35,
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 16,
  },
  
});
