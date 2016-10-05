import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Header, List, ListItem, View, Thumbnail, Title, Content, Text, Button, Icon} from 'native-base';

import {openDrawer, closeDrawer} from '../../actions/drawer';
import {replaceRoute, replaceOrPushRoute} from '../../actions/route';
import {setIndex} from '../../actions/list';
import Bottom from '../bottom';
import myTheme from '../../themes/base-theme';
import styles from './styles';

class Home extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
    replaceRoute: React.PropTypes.func,
    replaceOrPushRoute: React.PropTypes.func,
    setIndex: React.PropTypes.func,
    name: React.PropTypes.string,
    list: React.PropTypes.arrayOf(React.PropTypes.string)
  }

  replaceRoute(route) {
    this.props.replaceRoute(route);
  }

  navigateTo(route, index) {
    this.props.closeDrawer();
    this.props.setIndex(index);
    this.props.replaceOrPushRoute(route);
  }

  render() {
    return (
      <Container theme={myTheme} style={styles.container}>
      <View>
        <Header>
          <Title>ДайвПринт</Title>
          <Button transparent onPress={this.props.openDrawer}>
            <Icon name='ios-menu' style={{color: myTheme.toolbarIconColor}} />
          </Button>
        </Header>
        <Content>
          <Text>Home</Text>
        </Content>
        <Bottom page='home' />
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
    setIndex: index => dispatch(setIndex(index))
  };
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps, bindAction)(Home);
