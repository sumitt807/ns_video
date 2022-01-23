import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const ListView = () => {
    return (
        <View style={styles.container}>
            <Text>
                Hello
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    }
});


