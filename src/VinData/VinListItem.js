import * as React from 'react';

import { Text, View } from 'react-native';

const VinListItem = ({ item }) => {
	return (<View style={{ flexDirection: 'column' }}>
		<Text style={{ fontSize: 11, fontStyle: "italic", textAlign: 'center' }}>{item[0]}</Text>
		<Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>{item[1]}</Text>
	</View>);

}

export default VinListItem;