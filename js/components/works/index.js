
// global fetch: true
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Container, Card, CardItem, View, Header, Title, Content, Text, Button, Icon } from 'native-base';
import Bottom from '../bottom';
import { openDrawer, closeDrawer } from '../../actions/drawer';
import { popRoute, replaceRoute, replaceOrPushRoute } from '../../actions/route';
import myTheme from '../../themes/base-theme';


class Works extends Component {

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
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount() {
    fetch('https://www.instagram.com/diveprint/media/')
    .then(response => response.json()).then((responseData) => {
      this.setState({ items: responseData.items });
    });
  }
  popRoute() {
    this.props.popRoute();
  }
  navigateTo(route) {
    this.props.closeDrawer();
    this.props.replaceOrPushRoute(route);
  }
  render() {
    return (
      <Container theme={myTheme}>
        <View>
          <Header>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" style={{ color: myTheme.toolbarIconColor }} />
            </Button>
            <Title>Работы</Title>
          </Header>
          <Content padder>
            <Card>
              {this.state.items.length > 0 ? this.state.items.map((item, i) =>
                 (<CardItem key={i}>
                   <Image style={{ resizeMode: 'cover' }} source={{ uri: item.images.standard_resolution.url }} />
                   <Text>
                     {item.caption.text}
                   </Text>
                 </CardItem>)

              ) : undefined}
            </Card>
          </Content>
          <Bottom page="works" />
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

export default connect(mapStateToProps, bindAction)(Works);
