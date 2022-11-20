import * as React from 'react';
import { Text, View } from 'react-native';

const HelpPanel = () => {
	return (<View style={{ alignItems: "center", height: 600, marginTop: 30 }}>
		<Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Instructions</Text>
		<Text>Point and hold steady for a few seconds</Text>
		<Text>The VIN will be automatically decoded</Text>
	</View>);
}

export default HelpPanel;