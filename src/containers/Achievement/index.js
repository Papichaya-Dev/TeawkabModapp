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
import {StyleSheet, ImageBackground} from 'react-native';
import antlogo from '../images/anttrophy.jpg';
export default class Achievement extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor : 'darkred'}} />
        <Icon ios="ios-trophy" android="md-trophy" style={styles.Iconheader} />
        <Text style={styles.logoText}> 𝐀𝐜𝐡𝐢𝐞𝐯𝐞𝐦𝐞𝐧𝐭</Text>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={{
                    uri:
                      'http://www.myiconfinder.com/uploads/iconsets/256-256-41a967d24b6b709005d9523c2096ef01-award.png',
                  }}
                />
              </Left>
              <Body>
                <Text>𝐓𝐫𝐚𝐯𝐞𝐥 𝐞𝐧𝐝</Text>
                <Text note numberOfLines={1}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={{
                    uri:
                      'http://www.myiconfinder.com/uploads/iconsets/256-256-41a967d24b6b709005d9523c2096ef01-award.png',
                  }}
                />
              </Left>
              <Body>
                <Text>𝐓𝐫𝐚𝐯𝐞𝐥 𝐞𝐧𝐝</Text>
                <Text note numberOfLines={1}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
        <ImageBackground source={antlogo} style={styles.backgroundContainer} />
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
    left: 120,
    fontWeight: 'bold',
  },
  backgroundContainer: {
    flex: 1,
    width: 430,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Iconheader: {
    position: 'absolute',
    top: 15,
    left: 185,
    color: 'white',
  },
});
