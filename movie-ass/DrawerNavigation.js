import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './Profile';


const Drawer = createDrawerNavigator();

export function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Profile">
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Hello" component={Profile} />
      <Drawer.Screen name="ProJjjfile" component={Profile} />

      {/* <Drawer.Screen name="Article" component={} /> */}
    </Drawer.Navigator>
  );
}