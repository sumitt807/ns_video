import * as React from 'react';
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { simpleAlert } from '../components/Alerts';

export const ListView = () => {

    const [listItems, setlistItems] = useState([
        { key: 1, item: 'Item 1' },
        { key: 2, item: 'Item 2' },
        { key: 3, item: 'Item 3' },
        { key: 4, item: 'Item 4' },
        { key: 5, item: 'Item 5' },
        { key: 6, item: 'Item 11' },
        { key: 7, item: 'Item 21' },
        { key: 8, item: 'Item 31' },
        { key: 9, item: 'Item 41' },
        { key: 10, item: 'Item 51' },
        { key: 11, item: 'Item 11' },
        { key: 21, item: 'Item 21' },
        { key: 31, item: 'Item 31' },
        { key: 41, item: 'Item 41' },
        { key: 51, item: 'Item 51' },
    ])

    const [Refreshing, setRefreshing] = useState(false)
    const onRefresh = () => {
        setRefreshing(true);
        simpleAlert();
        setlistItems([...listItems, { key: 52, item: 'Item 52' }]);
        setRefreshing(false);
    }
    return (
        <View style={styles.container}>

            <ScrollView horizontal={true} style={{ height: 180 }}>
                {
                    listItems.map((object) => {
                        return (
                            <View style={styles.item} key={object.key}>
                                <Text style={styles.horizontalItem}>s{object.item}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
            <ScrollView refreshControl={
                <RefreshControl refreshing={Refreshing} onRefresh={onRefresh} />
            }>
                {
                    listItems.map((object) => {
                        return (
                            <View style={styles.item} key={object.key}>
                                <Text style={{ fontSize: 30 }}>{object.item}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
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


