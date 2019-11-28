import React, {Component} from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-ionicons';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
} from 'native-base';
import {StyleSheet} from 'react-native';
export default class CardShowcaseExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#F1F960'}}>
          <Text style={styles.input}> 𝐉 𝐨 𝐮 𝐫 𝐧 𝐞 𝐲  </Text>
          <Icon style={styles.icon} ios="ios-car" android="md-car" size={24} />
        </Header>
        <Content>
          <Card style={{backgroundColor: '#FAFFA9'}}>
            <CardItem style={{backgroundColor : 'floralwhite '}} >
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>วัดเล่งเน่ยยี่</Text>
                  <Text note>Update 11/26/2019</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://ed.files-media.com/static-cache/resize-cache/790x528/ud/images/1/26/76867/22872_fdde2f7719b9bbaa0eed1cfd8858de17.jpg'}} style={{height: 250, width: 380, flex: 1}}
                />
                <Text>
                  วัดเล่งเน่ยยี่ ตั้งอยู่บนถนนเจริญกรุง ระหว่างซอยเจริญกรุง 19 และ 21 ภายในเขตป้อมปราบศัตรูพ่าย กรุงเทพมหานคร 
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon ios="ios-star" android="md-star" size={24} />
                  <Icon ios="ios-star" android="md-star" size={24} />
                  <Icon ios="ios-star" android="md-star" size={24} />
                  <Text>3 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>วัดเล่งเน่ยยี่</Text>
                  <Text note>Update 11/26/2019</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://teen.mthai.com/app/uploads/2019/01/11209395_832509880164603_4705924394121286484_n.jpg'}} style={{height: 250, width: 380, flex: 1}}/>
                <Text>
                  วัดเล่งเน่ยยี่ ตั้งอยู่บนถนนเจริญกรุง ระหว่างซอยเจริญกรุง 19 และ 21 ภายในเขตป้อมปราบศัตรูพ่าย กรุงเทพมหานคร 
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>วัดเล่งเน่ยยี่</Text>
                  <Text note>Update 11/26/2019</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'http://www.wanyud.com/uploads/2016/12/14/o_1b3u6ekt61c3l19jmgjvg6213ke7.jpg'}} style={{height: 250, width: 380, flex: 1}}/>
                <Text>
                  วัดเล่งเน่ยยี่ ตั้งอยู่บนถนนเจริญกรุง ระหว่างซอยเจริญกรุง 19 และ 21 ภายในเขตป้อมปราบศัตรูพ่าย กรุงเทพมหานคร 
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  icon: {
    top: 8,
  },
});
