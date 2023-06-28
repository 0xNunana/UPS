import { View, Text, ScrollView ,Image, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { CompositeNavigationProp,RouteProp, useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../navigator/RootNavigator'
import { TabStack } from '../navigator/TabNavigator'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import useOrders from '../../hooks/useOrders'
import OrderCard from '../components/OrderCard'

export type OrderProp = CompositeNavigationProp<
NativeStackNavigationProp<RootStackParams>,
BottomTabNavigationProp<TabStack,'Orders'>

>
type OrderRouteProp = RouteProp<RootStackParams,"Order">





const OrdersScreen = () => {
  const navigation = useNavigation<OrderRouteProp>()
  const {loading,error,orders}=useOrders()
  const [ascending,setAscending]= useState<boolean>(false)

  return (
   <ScrollView className='bg-[#E86A7C]/90'>
    <Image source={{uri:"https://links.papareact.com/m51"}}
    className='h-64 w-full'
    />
<View>
  <TouchableOpacity className='bg-white/50 p-3 mx-5 my-2' style={{elevation:2}} onPress={()=>setAscending(!ascending)} >
<Text className='text-gray-600 text-center text-base'>
{ascending ? "Showing: Oldest First": "Showing: Most Recent First"}
</Text>
  </TouchableOpacity>
  {
    orders?.sort((a,b)=>{
      if (ascending){
        return new Date(a.createdAt)> new Date (b.createdAt) ? 1 : -1;
      }else{
        return new Date(a.createdAt)> new Date (b.createdAt) ? -1: 1;
      }
    }).map((order)=>(
      <OrderCard key={order.trackingId} item={order}/>
    ))
  }
</View>

   </ScrollView>
  )
}

export default OrdersScreen