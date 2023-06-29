import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
import useCustomerOrders from '../../hooks/useCustomerOrders';
import { NavProp } from '../screens/CustomerScreen';
import {Entypo} from '@expo/vector-icons'

type Props={
    name:string;
    email?:string;
    userId:string
}


const CustomerCard = ({name,email,userId}:Props) => {
const {loading,error,orders}= useCustomerOrders(userId)
const navigation = useNavigation<NavProp>()

  return (
  <TouchableOpacity onPress={()=>navigation.navigate('MyModal',{name:name,userId:userId})}>
    <View className='rounded-lg p-5 bg-white my-2 mx-2'>
        <View>
            <View className='flex-row justify-between'>
            <View className='py-1 space-y-2'>
                <Text className='text-2xl font-bold'>{name}</Text>
                <Text className='text-sm'>ID:{userId}</Text>
            </View>

            <View className='flex-row items-center  justify-end'>
            <Text className='text-[#67bdc7]'>{loading? "loading..." : ` ${orders.length} X` }</Text>
            <Entypo name="box" color="#67bdc7" size={50} style={{marginBottom:5 ,marginLeft:'auto'}}/>
            </View> 


            </View>
           


        </View>

        <View className='h-[0.7px] bg-black mt-2'/>
        <Text className='text-gray-500'>{email}</Text>
    </View>
  </TouchableOpacity>
  )
}

export default CustomerCard