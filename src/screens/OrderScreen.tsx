import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import {CompositeNavigationProp,useNavigation,RouteProp, useRoute}from '@react-navigation/native'
import { RootStackParams } from '../navigator/RootNavigator'
import { TabStack } from '../navigator/TabNavigator'
import DeliveryCard from '../components/DeliveryCard'

export type OrderScreenNavProp =CompositeNavigationProp<
NativeStackNavigationProp<RootStackParams,'Order'>,
BottomTabNavigationProp<TabStack>
>

type OrderRouteProp = RouteProp<RootStackParams,'Order'>



const OrderScreen = () => {
  const navigation = useNavigation<OrderScreenNavProp>()
  const {params:{order}}= useRoute<OrderRouteProp>()
useLayoutEffect(()=>{
navigation.setOptions({
  headerTitle:order?.trackingItems.customer.name,

})

})


  return (
    <View className='-mt-2'>
     <DeliveryCard order={order} fullWidth={true}/>
    </View>
  )
}

export default OrderScreen