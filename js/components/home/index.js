import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { Container, Header, View, Title, Text, Content, Button, Icon } from 'native-base';

import { openDrawer, closeDrawer } from '../../actions/drawer';
import { replaceRoute, replaceOrPushRoute } from '../../actions/route';
import Bottom from '../bottom';
import myTheme from '../../themes/base-theme';
import styles from './styles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Home extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
    replaceRoute: React.PropTypes.func,
    replaceOrPushRoute: React.PropTypes.func,
  }

  replaceRoute(route) {
    this.props.replaceRoute(route);
  }

  navigateTo(route) {
    this.props.closeDrawer();
    this.props.replaceOrPushRoute(route);
  }

  render() {
    const imageStyle = StyleSheet.create({
      backgroundImage: {
        margin: 10,
        width: windowWidth * 0.93,
        height: windowHeight * 0.43,
        flex: 1,
        resizeMode: 'stretch', // or 'stretch'
      },
    });
    return (
      <Container theme={myTheme} style={styles.container}>
        <View>
          <Header>
            <Title>ДайвПринт</Title>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" style={{ color: myTheme.toolbarIconColor }} />
            </Button>
          </Header>
          <Content>
            <Image style={imageStyle.backgroundImage} source={require('../../../images/home.jpg')} />
            <Text>
              Копировальный центр «ДайвПринт» приветствует на сайте клиентов и партнёров, с которыми налажено постоянное взаимовыгодное сотрудничество, а также наших будущих заказчиков!
            </Text>
          </Content>
          <Bottom page="home" />
        </View>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    closeDrawer: () => dispatch(closeDrawer()),
    replaceRoute: route => dispatch(replaceRoute(route)),
    replaceOrPushRoute: route => dispatch(replaceOrPushRoute(route)),
  };
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps, bindAction)(Home);
