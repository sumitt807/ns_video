import React, { useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default function UseState() {
    const [counter, setCounter] = useState(0);
    const [clicked, setCilked] = useState(0);

    const onClickHandler = () => {
        setCounter(counter + 5);
        setCilked(clicked + 1);
    }
    return (
        <View styles={styles.container}>
            <Text>{counter}</Text>
            <Button title='Click Me' onPress={onClickHandler} />
            <Text>{clicked}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        fontSize: 30
    }
});
