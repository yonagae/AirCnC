import React, { useState , useEffect } from 'react'
import { View, AsyncStorage , Image, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

import api from '../services/api';

import logo from '../assets/logo.png';

export default function Login( { navigation } ) {

    const [email, setEmail] = useState ('')
    const [techs, setTechs] = useState ('')

    useEffect(() => {
        AsyncStorage.getItem('user').then( user=> {
            if( user ) {
                navigation.navigate('List');
            }
        })
    }, []);

    async function handleSubmit(){
        const response = await api.post('/sessions', {
            email

        })

        const { _id } = response.data;
        console.log(_id)
        //console.log(email);
       // console.log(techs);

       await AsyncStorage.sestItem('user', _id);       
       await AsyncStorage.sestItem('techs', techs);

       navigation.navigate('List');
    }

    return (
    <View style={styles.container}>
        <Image source={logo} />

        <View style={styles.form}>
          <Text style={styles.label}>Seu E-mail *</Text>
          <TextInput
             style={styles.input}
             placeholder="Seu email"
             placeholderTextColor="#999"
             keyboardType="email-address"
             autoCapitalize="none"
             autoCorrect={false}
             value={email}
             onChangeText={setEmail}
            />
        

         <Text style={styles.label}>Tecnologias *</Text>
          <TextInput
             style={styles.input}
             placeholder="Tecnologias de seu interesse"
             placeholderTextColor="#999"
             autoCapitalize="words"
             autoCorrect={false}
             value={techs}
             onChangeText={text => setTechs(text)}
            />      

            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Encontrar Spots</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:'center',
      alignItems: 'center'
    },

    from: {
        alignSelf : 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,

    },

    label: {
        fontWeight :'bold',
        color: '#444',
        marginBottom : 8,


    },

    input: {
        borderWidth: 1,
        borderColor : '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color : '#444',
        height: 44,
        marginBottom: 20,
        borderRadius:2 
    },

    button:{
        height:42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignContent : 'center',
        borderRadius :2,        
    },

    buttonText:{
        color : '#FFF',
        fontWeight:'bold',
        fontSize: 16,
    },

})