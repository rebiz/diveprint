
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Footer, FooterTab, View, Header, Title, Content, Text, Button, Icon} from 'native-base';

import {openDrawer, closeDrawer} from '../../actions/drawer';
import {popRoute, replaceRoute, replaceOrPushRoute} from '../../actions/route';
import myTheme from '../../themes/base-theme';
class Contacts extends Component {

  static propTypes = {
    closeDrawer: React.PropTypes.func,
    replaceRoute: React.PropTypes.func,
    replaceOrPushRoute: React.PropTypes.func,
    setIndex: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string)
  }

  popRoute() {
    this.props.popRoute();
  }
  navigateTo(route) {
    this.props.closeDrawer();
    this.props.replaceOrPushRoute(route);
  }
  render() {
    const {props: {index, list}} = this;

    return (
      <Container theme={myTheme}>
        <Header>
        <Button transparent onPress={this.props.openDrawer}>
          <Icon name='ios-menu' style={{color: myTheme.toolbarIconColor}} />
        </Button>
          <Title>Контакты</Title>
        </Header>
        <Content padder>
          <Text>
            Контакты
          </Text>
        </Content>
        <Footer>
          <FooterTab>
            <View onPress={() => this.navigateTo('home')} >
              <Icon name='ios-home' />
            </View>
            <View>
              <Icon name='logo-instagram' />
            </View>
            <View>
              <Icon name='ios-keypad' />
            </View>
            <View>
              <Icon name='ios-calculator' />
            </View>
            <View active>
              <Icon name='ios-call' />
            </View>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: () => dispatch(popRoute()),
    closeDrawer: () => dispatch(closeDrawer()),
    replaceRoute: route => dispatch(replaceRoute(route)),
    replaceOrPushRoute: route => dispatch(replaceOrPushRoute(route))
  };
}

function mapStateToProps(state) {
  return {
    name: state.user.name,
    list: state.list.list
  };
}

export default connect(mapStateToProps, bindAction)(Contacts);
