import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return (
        <View>
            <div onClick={myFunction()}>
                Hello
                <Image source={require('./assets/icon.png')} />
            </div>
        </View>
    )
}

export default Header


const myFunction = () => {
    console.log('Hello');
    return;
}