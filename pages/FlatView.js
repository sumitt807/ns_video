import * as React from 'react';
import { FlatList, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export const FlatView = () => {

    const [listItems, setlistItems] = useState([
        { title: 'Item 1' },
        { title: 'Item 2' },
        { title: 'Item 3' },
        { title: 'Item 4' },
        { title: 'Item 5' },
        { title: 'Item 11' },
        { title: 'Item 21' },
        { title: 'Item 31' },
        { title: 'Item 41' },
        { title: 'Item 51' },
        { title: 'Item 11' },
        { title: 'Item 21' },
        { title: 'Item 31' },
        { title: 'Item 41' },
        { title: 'Item 51' },
    ])

    const [Refreshing, setRefreshing] = useState(false)
    const onRefresh = () => {
        setRefreshing(true);
        setlistItems([...listItems, { title : 'Item 69' }]);
        setRefreshing(false);
    }
    return (
        <View style={styles.container}>
            <FlatList
                refreshing={Refreshing}
                onRefresh={onRefresh}
                keyExtractor={(item, index) => index.toString()}
                data={listItems}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={{ fontSize: 30 }}>{item.title}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff00ff',
        margin: 10,
        height: 65,

    },
    horizontalItem: {
        fontSize: 30,
        marginHorizontal: 30
    }
});



