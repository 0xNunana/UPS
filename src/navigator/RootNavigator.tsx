
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import TabNavigator from './TabNavigator'
import ModalScreen from '../screens/ModalScreen'
import OrderScreen from '../screens/OrderScreen'
import Login from '../screens/Login'
import { useAuth } from '../../Auth'

export type RootStackParams={
   Main:undefined;
   MyModal:{userId:string, name:string}
   Order:{order:Order}
   Login:undefined
  
  }

const RootStack = createNativeStackNavigator<RootStackParams>()

const RootNavigator = ({}) => {
  const {isLoggedIn}=useAuth()
  return (

   
    <RootStack.Navigator>
      {isLoggedIn ? (  <>
      <RootStack.Group screenOptions={{headerShown:false}}>
            <RootStack.Screen name='Main' component={TabNavigator}/>
        </RootStack.Group>
        <RootStack.Group screenOptions={{headerShown:false,presentation:'modal'}}>
            <RootStack.Screen name='MyModal' component={ModalScreen}/>
        </RootStack.Group>

        <RootStack.Group >
            <RootStack.Screen name='Order' component={OrderScreen}/>
        </RootStack.Group>
      </>
        ):(
          <RootStack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        )}
    



    </RootStack.Navigator>
  )
}

export default RootNavigator