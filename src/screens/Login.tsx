
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import { useAuth } from '../../Auth';



const Login = () => {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const {setIsLoggedIn} =useAuth()
  const handleLogin = () => {
    if (email==="" || password==="")return
    else if (email.length > 1 && email.includes('@') && password.length >1){
        setIsLoggedIn(true);
       
    }
   
  };

  return (
    <View className='flex-1 bg-[#d4a2aa] justify-center '>
        <View className='mx-7 '>

     <View className='items-center pb-10'>
     <Image className='w-20 h-20' source={require('../../assets/logo.png')} />
     </View>
      
      
<View className='py-5 space-y-4'>
<View>
<Text>Email:</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        className='bg-white pl-1'
      />
</View>
     <View>

     <Text>Password:</Text>
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className='bg-white pl-1'
      />

     </View>
</View>



      <Button title="Login" onPress={handleLogin} color={email && password ? 'blue' : 'gray'}/>

      <Text>
        Don't have an account? 
        <Text  style={styles.registerText}> Register here</Text>
      </Text>

        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  registerText: {
    color: 'blue',
  },
});

export default Login;

// import React, { createContext, useState, useContext, ReactNode } from 'react';

// // Define a type for the context
// type AuthContextType = {
//   isLoggedIn: boolean;
//   setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
// };

// // Create the context with the type. We pass an initial context value that matches the type.
// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // Define a type for the AuthProvider props
// type AuthProviderProps = {
//   children: ReactNode;
// };

// export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = (): AuthContextType => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };
