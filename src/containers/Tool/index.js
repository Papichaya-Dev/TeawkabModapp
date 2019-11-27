import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Icon,
} from 'native-base';
import {StyleSheet} from 'react-native';
export default class Achievement extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor : '#69CF9C'}} />
        <Icon
          ios="ios-list-box"
          android="md-list-box"
          style={styles.Iconheader}
        />
        <Text style={styles.logoText}>𝐌𝐚𝐧𝐮𝐚𝐥</Text>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  logoText: {
    color: 'black',
    fontSize: 30,
    marginTop: 20,
    opacity: 0.5,
    top: 0,
    left: 150,
    fontWeight: 'bold',
  },
  Iconheader: {
    position: 'absolute',
    top: 15,
    left: 185,
  },
});
