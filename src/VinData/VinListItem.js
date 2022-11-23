import * as React from 'react';

import { Text, View } from 'react-native';

const VinListItem = ({ item }) => {
	return (<View style={{ flexDirection: 'column', color: "black" }}>
		<Text style={{ fontSize: 11, fontStyle: "italic", textAlign: 'center', color: "black" }}>{item[0]}</Text>
		<Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: "black" }}>{item[1]}</Text>
	</View>);

}

export default VinListItem;