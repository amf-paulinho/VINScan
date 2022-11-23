import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

const VinNumber = ({ vin }) => (<Text style={styles.barcodeTextURL}>{vin}</Text>);

const styles = StyleSheet.create({
	barcodeTextURL: {
		borderColor: "red",
		borderWidth: 2,
		padding: 5,
		fontSize: 26,
		color: 'navy',
		backgroundColor: 'yellow',
		fontWeight: 'bold',
	},
});

export default VinNumber;