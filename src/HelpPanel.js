import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const HelpPanel = ({ onTorch }) => {


	return (<View style={styles.title}>
		<Text style={{ color: "black", fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Instructions</Text>
		<Text style={styles.text} >Point and hold steady for a few seconds</Text>
		<Text style={styles.text}>The VIN will be automatically decoded</Text>
		<View style={{ height: 40 }}></View>
		<Button title='Torch ON/OFF' onPress={() => onTorch()} />
	</View>);
}

const styles = StyleSheet.create({
	text: { color: 'black' },
	title: { alignItems: "center", height: 600, paddingTop: 30, color: 'black', backgroundColor: '#fffff0' },
});


export default HelpPanel;