import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons,Feather} from "@expo/vector-icons"
import { useNavigation,CompositeNavigationProp } from '@react-navigation/native'
import { RootStackParams } from '../navigator/RootNavigator'
import { TabStack } from '../navigator/TabNavigator'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type OrderScreenNavProps = CompositeNavigationProp<
BottomTabNavigationProp<TabStack,"Orders">,
NativeStackNavigationProp<RootStackParams>
>

type props={
  item:Order
}

const OrderCard = ({item}:props) => {
  const navigation = useNavigation<OrderScreenNavProps>()
  return (
  <TouchableOpacity className='px-5 ' onPress={()=>navigation.navigate('Order',{order:item})}>
    <View className='my-2 bg-white rounded-lg flex-row items-center justify-between'>
      <View className='p-4 items-center'>
        <MaterialCommunityIcons name='truck-delivery' size={20} color="#E86A7C"/>
        <Text>
           {new Date(item.createdAt).toLocaleDateString()}
          
          </Text>
      </View>

<View>
  <Text className='text-gray-400'>
    {item.carrier}-{item.trackingId} 
 
    </Text>
  <Text className='text-gray-500 text-xl'>
{item.trackingItems.customer.name} 
  </Text>
</View>



<View className='flex-row items-center p-4'>
  <Text className='text-sm text-[#E86A7C]'>
    {item.trackingItems.items.length}x</Text>
 <Feather name='box' size={20} style={{marginLeft:10}}/>
</View>


    </View>
  </TouchableOpacity>
  )
}

export default OrderCard