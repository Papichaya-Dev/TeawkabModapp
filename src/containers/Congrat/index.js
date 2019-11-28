import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import ballon from '../images/ballon.png';
export default class CardImageExample extends Component {
  render() {
    return (
      <Container>
        <Content>
        <Header style={{backgroundColor : '#B80000'}} />
        <Icon
          ios="ios-trophy"
          android="md-trophy"
          style={styles.Iconheader}
        />
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text style={styles.Text}> 𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐮𝐥𝐚𝐭𝐢𝐨𝐧 </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    'https://ed.files-media.com/static-cache/resize-cache/790x528/ud/images/1/26/76867/22872_fdde2f7719b9bbaa0eed1cfd8858de17.jpg',
                }}
                style={{height: 300, width: 100, flex: 1}}
              />
              <Image source={ballon} style={styles.logo} />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Text style={styles.Textt}> 𝐍𝐚𝐦𝐞 𝐋𝐨𝐜𝐚𝐭𝐢𝐨𝐧</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
        <Text
          onPress={() => this.props.navigation.navigate('Home')}
          style={styles.buttontext}>
          𝐁𝐚𝐜𝐤
        </Text>
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
    color: 'black',
  },
  Text: {
    color: 'black',
    fontSize : 45,
    right : 30,
    top: -75
  },
  Iconheaderr: {
    position: 'absolute',
    top: 15,
    left: 100,
    color: 'black',
  },
  Textt :  {
    right: 50,
    left: 70,
    fontWeight: 'bold',
    fontSize: 30,
    color : 'red'
  },
  Iconheaderrr: {
    position: 'absolute',
    top:80,
    left: 100,
    color: 'black',
  },
  logo: {
    width: 280,
    height:300,
    top : -100,
    right : 43,
    position: 'absolute',
  },
  buttontext: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    width: 250,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 25,
    marginVertical: 20,
    paddingVertical: 16,
    top: 0,
    left: 83
  },
});

