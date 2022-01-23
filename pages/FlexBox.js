import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Text } from 'react-native';

export default function FlexBox() {

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <View style={{ height: 60, flexDirection: 'row', alignItems: 'stretch', justifyContent: 'center' }}>
                    <View style={{ flex: 1, backgroundColor: '#ffff01', alignItems: 'center', justifyContent: 'center' }}><Text>1</Text></View>
                    <View style={{ flex: 2, backgroundColor: '#ff00ff', alignItems: 'center', justifyContent: 'center' }}><Text>1</Text></View>
                    <View style={{ flex: 3, backgroundColor: '#00ffff', alignItems: 'center', justifyContent: 'center' }}><Text>1</Text></View>
                </View>
                <View style={{ height: 60, backgroundColor: '#56f001', alignItems: 'center', justifyContent: 'center' }}><Text>1</Text></View>
                <View style={{ height: 60, backgroundColor: '#f6f501', alignItems: 'center', justifyContent: 'center' }}><Text>1</Text></View>

                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'stretch', justifyContent: 'center' }}>
                    <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}><Text>1</Text></View>
                    <View style={{ flex: 1, backgroundColor: '#ff00ff', alignItems: 'center', justifyContent: 'center' }}><Text>1</Text></View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        fontSize: 30
    }
});
