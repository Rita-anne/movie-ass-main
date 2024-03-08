// import * as React from 'react';
// import { Icon } from 'react-native-elements';

// //screen
// import HomeScreen from './Home';
// import SearchScreen from './Search';
// import ProfileScreen from './Profile';
// import MyList from './MyList';
// import { MainNavigation } from './App';

// // bottom navigator

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {NavigationContainer} from '@react-navigation/native';


// import AntDesign from 'react-native-vector-icons/AntDesign';
// import { DrawerNavigation } from './DrawerNavigation';

// const Tab = createBottomTabNavigator();

// export default function MyTab(){
//     return (  
//             <Tab.Navigator>
//               <Tab.Screen name='search' component={HomeScreen} options={{ headerShown: false,
//                   tabBarIcon: ()=>
//                   <Icon name='search'/>  
//                 }}/>
                
//                 <Tab.Screen name='Search' component={SearchScreen} options={{ headerShown: false,
//                   tabBarIcon: ()=>
//                   <Icon name='search'/>  
//                 }}/>
               
//                 <Tab.Screen name='MyList' component={MyList} options={{ headerShown: false,
//                   tabBarIcon: ()=>
//                   <Icon name='folder'/>    
//                 }} /> 
//            </Tab.Navigator>
       
//     )
// }