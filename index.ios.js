import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { TabNavigator, TabView } from 'react-navigation';


function makeTabComponent(i) {
    return class extends React.Component {
      static navigationOptions = {
        title: `Tab #${i}`,
      };

      render() {
        return <Text>This is the {i}'th tab!</Text>;
      }
    }
}

const ReactNavigationTestCase = TabNavigator({
  Tab1: { screen: makeTabComponent(1) },
  Tab2: { screen: makeTabComponent(2) },
  Tab3: { screen: makeTabComponent(3) },
  Tab4: { screen: makeTabComponent(4) },
  Tab5: { screen: makeTabComponent(5) },
  Tab6: { screen: makeTabComponent(6) },
  Tab7: { screen: makeTabComponent(7) },
  Tab8: { screen: makeTabComponent(8) },
  Tab9: { screen: makeTabComponent(9) },
  Tab10: { screen: makeTabComponent(10) }
}, {
  initalRouteName: 'Tab1',
  tabBarComponent: TabView.TabBarTop,
  tabBarPosition: 'top',
  swipeEnabled: true,
  tabBarOptions: {
    scrollEnabled: true,
    tabStyle: { width: 100 }
  }
})

AppRegistry.registerComponent('ReactNavigationTestCase', () => ReactNavigationTestCase);
