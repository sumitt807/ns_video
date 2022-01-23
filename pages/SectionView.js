import * as React from 'react';
import { FlatList, RefreshControl, ScrollView, StyleSheet, Text, View, SectionList } from 'react-native';
import { useState } from 'react';

export const SectionView = () => {

    const [counter, setCounter] = useState(1);

    const [listItems, setlistItems] = useState([
        { title: 'Item-' + counter.toString(), data: ['Testing' + counter.toString(), 'Code' + counter.toString()] }
    ])

    const [Refreshing, setRefreshing] = useState(false)
    const onRefresh = () => {
        setRefreshing(true);
        tempCounter = counter + 1;
        setCounter(tempCounter);
        setlistItems([...listItems, { title: 'Item-' + tempCounter.toString(), data: ['Testing' + tempCounter.toString(), 'Code' + tempCounter.toString()] }]);
        setRefreshing(false);
    }


    return (
        <View style={styles.container}>
            <SectionList
                keyExtractor={(item, index) => index.toString()}
                sections={listItems}
                renderItem={({ item, index }) => (
                    <View>
                        <Text style={styles.item}>{item}-{index + 1}</Text>
                    </View>
                )}

                renderSectionHeader={({ section: { title } }) => (
                    <View style={styles.itemHeader}>
                        <Text style={{ fontSize: 30 }}>{title}</Text>
                    </View>
                )}
                refreshing={Refreshing}
                onRefresh={onRefresh}
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
        margin: 5,
        fontSize: 10
    },
    itemHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff00ff',
        margin: 5,
        fontSize: 10
    },
});