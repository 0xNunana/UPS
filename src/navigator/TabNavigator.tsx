import { View, Text } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import CustomerScreen from '../screens/CustomerScreen'
import OrderScreen from '../screens/OrdersScreen'
import {Ionicons,Entypo} from '@expo/vector-icons'


export type TabStack ={
    Customers:undefined;
    Orders:undefined
}

const Tab = createBottomTabNavigator<TabStack>()

const TabNavigator = () => {
  return (
  <Tab.Navigator screenOptions={({route})=>({
    headerShown:false,
    tabBarActiveTintColor:'#67bdc7',
    tabBarInactiveTintColor:'gray',
    tabBarIcon:({focused})=>{
        if (route.name ==='Customers'){
            return (
                <Entypo name="users" size={24} color={focused ? "#67bdc7" : "gray"} /> 
            )
        }
        else if (route.name==='Orders'){
            return(
                <Entypo name="box" size={24} color={focused ? "#E86A7C" : "gray"} />
            )
        }
    }
    })}>
    <Tab.Screen name='Customers' component={CustomerScreen}/>
    <Tab.Screen name='Orders' component={OrderScreen} options={{
        tabBarLabel:({focused,color})=>(
            <Text style={{color:focused ? "#E86A7C": color,fontSize:10}}>Orders</Text>
        )
    }}/>
    
  </Tab.Navigator>
  )
}

export default TabNavigator