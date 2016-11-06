
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, List, ListItem, Thumbnail, View, Header, Title, Content, Text, Button, Icon } from 'native-base';
import Bottom from '../bottom';
import { openDrawer, closeDrawer } from '../../actions/drawer';
import { popRoute, replaceRoute, replaceOrPushRoute } from '../../actions/route';
import myTheme from '../../themes/base-theme';

class Services extends Component {

  static propTypes = {
    closeDrawer: React.PropTypes.func,
    replaceRoute: React.PropTypes.func,
    replaceOrPushRoute: React.PropTypes.func,
    setIndex: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
  }

  popRoute() {
    this.props.popRoute();
  }
  navigateTo(route) {
    this.props.closeDrawer();
    this.props.replaceOrPushRoute(route);
  }
  render() {
    const { props: { index, list } } = this;

    return (
      <Container theme={myTheme}>
        <View>
        <Header>
          <Button transparent onPress={this.props.openDrawer}>
          <Icon name="ios-menu" style={{ color: myTheme.toolbarIconColor }} />
        </Button>
          <Title>Услуги</Title>
        </Header>
        <Content padder>
          <List>
          <ListItem>
            <Thumbnail square size={80} source={require('../../../images/blackwhite.jpg')} />
            <Text style={{ color: '#000' }}> Черно-белое копирование и печать</Text>
            <Text note>Профессионально, оперативно, качественно и копируем черно-белые документы!</Text>
          </ListItem>
          <ListItem>
            <Thumbnail square size={80} source={require('../../../images/color.jpg')} />
            <Text style={{ color: '#000' }}>Цветное копирование и цветная печать</Text>
            <Text note>У нас Вам быстро и по доступной цене сделают цветные копии документов</Text>
          </ListItem>
          <ListItem>
            <Thumbnail square size={80} source={require('../../../images/pereplet.jpg')} />
            <Text style={{ color: '#000' }}>Брошюровка и переплет</Text>
            <Text note>Твердый и мягкий переплет книг, дипломных проектов и диссертаций</Text>
          </ListItem>
        </List>
        </Content>
        <Bottom page="services" />
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
    replaceOrPushRoute: route => dispatch(replaceOrPushRoute(route)),
  };
}

function mapStateToProps(state) {
  return {
    name: state.user.name,
    list: state.list.list,
  };
}

export default connect(mapStateToProps, bindAction)(Services);
