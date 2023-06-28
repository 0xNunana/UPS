import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {AntDesign} from '@expo/vector-icons'
import {CompositeNavigationProp,useNavigation,useRoute,RouteProp} from '@react-navigation/native'
import { RootStackParams } from '../navigator/RootNavigator'
import { TabStack } from '../navigator/TabNavigator'
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import useCustomerOrders from '../../hooks/useCustomerOrders'
import DeliveryCard from '../components/DeliveryCard'


export type ModalProp = CompositeNavigationProp<
NativeStackNavigationProp<RootStackParams,"MyModal">,
BottomTabNavigationProp<TabStack>
>

type ModalScreenRouteProp = RouteProp<RootStackParams,"MyModal">
const ModalScreen = () => {
    
const navigation = useNavigation<ModalProp>()
const {params:{name,userId}}=useRoute<ModalScreenRouteProp>()
const {loading,error,orders}=useCustomerOrders(userId)

  return (
    <SafeAreaView className='bg-gray-300 flex-1'>
      <TouchableOpacity className='absolute right-5 top-5 z-10' onPress={()=>navigation.goBack()}>
        <AntDesign name='closecircle' size={30}/>
      </TouchableOpacity>

<View className='mt-2'>
    <View className='py-5 border-b border-[#67bdc7]'>
        <Text className='text-center text-xl font-bold text-[#67bdc7]'>{name}</Text>
        <Text className='text-center italic text-sm'>deliveries{userId}</Text>
    </View>
</View>
<FlatList
contentContainerStyle={{paddingBottom:200}}
keyExtractor={item=>item.trackingId}
data={orders}
renderItem={({item})=><DeliveryCard order={item}/>}

/>
{/* <ScrollView>
<DeliveryCard order={} />
<DeliveryCard/>
</ScrollView> */}

    </SafeAreaView>
  )
}

export default ModalScreen