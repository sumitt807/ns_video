import * as React from 'react';
import { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
    const [counter, setCounter] = useState(0);
    const [clicked, setCilked] = useState(0);

    const onClickHandler = () => {
        setCounter(counter + 5);
        setCilked(clicked + 1);
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title="Show Video" onPress={() => navigation.navigate('Video')} />
            <Button title="Flex Box" onPress={() => navigation.navigate('Flex Box')} />

            <Text>{counter}</Text>
            <Button title='Click Me' onPress={onClickHandler} />
            <Text>{clicked}</Text>
        </View>
    );
}

export default HomeScreen