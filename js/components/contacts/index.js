
import React, {Component} from 'react';
import {Linking} from 'react-native';
import {connect} from 'react-redux';
import {Container,List, ListItem, View, Header, Title, Content, Text, Button, Icon} from 'native-base';
import Bottom from '../bottom';
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
      <View>
        <Header>
        <Button transparent onPress={this.props.openDrawer}>
          <Icon name='ios-menu' style={{color: myTheme.toolbarIconColor}} />
        </Button>
          <Title>Контакты</Title>
        </Header>
        <Content padder>
          <List>
              <ListItem iconLeft onPress={() => Linking.openURL('tel:84957204199')}>
                  <Icon name='ios-call' />
                  <Text>+7(495)720-41-99</Text>
              </ListItem>
              <ListItem iconLeft>
                  <Icon name='ios-mail' />
                  <Text>orders@dive-print.ru</Text>
              </ListItem>
              <ListItem iconLeft>
                  <Icon name='ios-mail' />
                  <Text>7204199@gmail.com</Text>
              </ListItem>
          </List>
        </Content>
        <Bottom page='contacts' />
        </View>
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

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps, bindAction)(Contacts);
