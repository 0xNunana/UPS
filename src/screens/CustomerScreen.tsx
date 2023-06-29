import { View, Text ,ScrollView, Image, ActivityIndicator, TextInput} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useNavigation,CompositeNavigationProp} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import { RootStackParams } from '../navigator/RootNavigator'
import { TabStack } from '../navigator/TabNavigator'
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs'
import { GET_CUSTOMERS } from '../../graphql/queries'
import {useQuery} from "@apollo/client"
import CustomerCard from '../components/CustomerCard'

export type NavProp = CompositeNavigationProp<
NativeStackNavigationProp<RootStackParams>,
BottomTabNavigationProp<TabStack,"Customers">
>

const CustomerScreen = () => {

    const [input ,setInput]=useState('')
    const {loading,error,data}=useQuery(GET_CUSTOMERS)
  
  return (
    <ScrollView className='bg-[#67bdc7]'>
      <Image source={{uri:"https://links.papareact.com/3jc"}}  className='h-64 w-full' />
<TextInput placeholder='Search by Customer'
className='bg-white pt-5 pb-3 px-10 mx-2'
onChangeText={setInput} value={input}/>


{data?.getCustomer?.filter((customer:CustomerList)=>customer.value.name.includes(input)).
map(({name:ID,value:{email,name}}:CustomerResponse)=>(
  <CustomerCard key={ID} email={email} name={name} userId={ID}/>
))}


    </ScrollView>
  )
}

export default CustomerScreen