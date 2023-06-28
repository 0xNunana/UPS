import { View, Text } from 'react-native'
import React from 'react'
import {Entypo} from '@expo/vector-icons'
import MapView,{Marker} from 'react-native-maps';

type Props ={
    order:Order,
    fullWidth?:boolean
}

const DeliveryCard = ({order,fullWidth}:Props) => {
  return (
    <View className='mx-3 my-2 bg-[#67bdc7] rounded-lg' style={{elevation:3}}>
<View className='px-4 pt-5  items-center'>
     <Entypo name='box' size={50} color="white"/>
<View>
    <Text className='text-xs text-center uppercase text-white font-bold'>{order?.carrier}-{order?.trackingId}</Text>
    <Text className='text-white text-lg font-bold'>Expected Delivery:  
        {new Date(order?.createdAt).toLocaleDateString()}
        </Text>
</View>

    </View>
    <View className='border-b border-white h-[0.07px] ' />
<View className='items-center pb-5'>
    <Text className='text-base text-white font-bold mt-5'>Address</Text>
    <Text className='text-sm text-center text-white'>
        {order?.Address},{order?.City}
    </Text>
    <Text className='text-sm italic text-white'>Shipping Cost:&#8373; {order?.shippingCost}</Text>
</View>
<View className='border-b border-white h-[0.07px] ' />
<View className='p-5'>
{order?.trackingItems.items.map((item)=>(
    <View className='flex-row justify-between items-center' key={item.name}>
        
    <Text className='text-sm italic text-white'>{item.name}</Text>
    <Text className='text-white text-xl'>x{item.quantity}</Text>

   
    </View>
))}

</View>
<MapView initialRegion={{
    longitude:order?.Lng,
    latitude:order?.Lat,
    latitudeDelta:0.005,
    longitudeDelta:0.005,
}} style={{height:fullWidth ? '100%':200, width:'100%'}}>
    {order?.Lat && order.Lng &&(
        <Marker
        coordinate={{latitude:order.Lat,longitude:order.Lng}}
        title='Dekivery Location'
        identifier='destination'
        />
    )}
       

</MapView>

    </View>
    
  )
}

export default DeliveryCard