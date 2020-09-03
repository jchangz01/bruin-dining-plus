import * as React from 'react';
import { SafeAreaView, FlatList, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MenuItem from "./MenuItem";

export function Menu({ data }) {
    return (<SafeAreaView><ScrollView>
        <FlatList
            data={data}
            renderItem={({ item }) => <MenuItem item={item} img={item.imgUrl ? item.imgUrl : "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}></MenuItem>}
            keyExtractor={(s) => s.location + s.name}
        />
    </ScrollView></SafeAreaView>);
}