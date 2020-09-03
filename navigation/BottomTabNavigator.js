import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import DiningHallScreen from '../screens/DinningHallScreen';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="De Neve"
        component={DiningHallScreen}
        options={{
          title: 'De Neve',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="food" />,
        }}
      />
      <BottomTab.Screen
        name="Covel"
        component={DiningHallScreen}
        options={{
          title: 'Covel',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-pizza" />,
        }}
      />
      <BottomTab.Screen
        name="BPlate"
        component={DiningHallScreen}
        options={{
          title: 'BPlate',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="leaf" />,
        }}
      />
      <BottomTab.Screen
        name="Feast"
        component={DiningHallScreen}
        options={{
          title: 'Feast',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="rice" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'De Neve':
      return 'Bruin Dining+';
    case 'Covel':
      return 'Bruin Dining+';
    case 'BPlate':
      return 'Bruin Dining+';
    case 'Feast':
      return 'Bruin Dining+'
  }
}
