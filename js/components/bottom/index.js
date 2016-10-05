
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Footer, FooterTab, View, Icon} from 'native-base';

import {openDrawer, closeDrawer} from '../../actions/drawer';
import {popRoute, replaceRoute, replaceOrPushRoute} from '../../actions/route';

class Bottom extends Component {

  static propTypes = {
    closeDrawer: React.PropTypes.func,
    replaceRoute: React.PropTypes.func,
    replaceOrPushRoute: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    page: React.PropTypes.string
  }

  popRoute() {
    this.props.popRoute();
  }
  navigateTo(route) {
    this.props.closeDrawer();
    this.props.replaceOrPushRoute(route);
  }
  render() {
    const {props: {page}} = this;

    return (
        <Footer>
          <FooterTab>
            <View active={page === 'home'} onPress={() => this.navigateTo('home')} >
              <Icon name='ios-home' />
            </View>
            <View active={page === 'works'} onPress={() => this.navigateTo('works')} >
              <Icon name='logo-instagram' />
            </View>
            <View active={page === 'services'} onPress={() => this.navigateTo('services')} >
              <Icon name='ios-keypad' />
            </View>
            <View active={page === 'calc'} onPress={() => this.navigateTo('calc')}>
              <Icon name='ios-calculator' />
            </View>
            <View active={page === 'contacts'} onPress={() => this.navigateTo('contacts')} >
              <Icon name='ios-call' />
            </View>
          </FooterTab>
        </Footer>
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

export default connect(mapStateToProps, bindAction)(Bottom);
