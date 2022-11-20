import * as React from 'react';

import { Button, View } from 'react-native';
import VinNumber from '../VinNumber';

const VinListHeader = ({ vin, onNewQuery }) => {
	return (<View style={{ marginBottom: 15 }}>
		<VinNumber vin={vin} />
		<Button title='Scan another VIN' onPress={() => onNewQuery()} />
	</View>)
}

export default VinListHeader;