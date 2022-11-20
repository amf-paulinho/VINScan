import * as React from 'react';
import { Text, View, Button } from 'react-native';
import VinNumber from './VinNumber';

const TryAgain = ({ vin, onTryAgain }) => {

	return (<View style={{ alignItems: "center", height: 600, marginTop: 30 }}>

		<VinNumber vin={vin} />

		<View style={{ marginTop: 30, marginBottom: 30 }}>
			<Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Network request failed</Text>
			<Text>This problem could be due to slow or unstable internet connection.</Text>
		</View>

		<Button color="red" title='Try Again' onPress={() => onTryAgain()} />
	</View>);
}

export default TryAgain;