import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ListView } from './../pages/ListView';
import HomeScreen from './../pages/HomeScreen';
import UseState from './../pages/UseState';
import FlexBox from './../pages/FlexBox';
import { FlatView } from '../pages/FlatView';
import { SectionView } from '../pages/SectionView';


const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Section View" component={SectionView} />
                <Stack.Screen name="Flat View" component={FlatView} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Use State" component={UseState} />
                <Stack.Screen name="Flex Box" component={FlexBox} />
                <Stack.Screen name="List View" component={ListView} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default Navigation;