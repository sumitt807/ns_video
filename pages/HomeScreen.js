import * as React from 'react';
import { Button, View } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Use State" onPress={() => navigation.navigate('Use State')} />
            <Button title="Flex Box" onPress={() => navigation.navigate('Flex Box')} />
            <Button title="List View" onPress={() => navigation.navigate('List View')} />
            <Button title="Flat View" onPress={() => navigation.navigate('Flat View')} />
        </View>
    );
}

export default HomeScreen