import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomerScreen from './src/screens/CustomerScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer} from '@react-navigation/native'
import RootNavigator from './src/navigator/RootNavigator';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://ogbomoso.stepzen.net/api/bold-shark/__graphql',
  headers: {'Authorization':'apikey ogbomoso::stepzen.io+1000::8a6c99bfc22c9f911135bda0babf0e7fd9579d26232e775a256081e126adc95c'},
  cache: new InMemoryCache(),
});



export default function App() {

  return (
   <ApolloProvider client={client}>
    <NavigationContainer>
<RootNavigator/>
      </NavigationContainer>
   </ApolloProvider>
  
      
  
     
   
  );
}

