import * as React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

const SplashScreen = () => {
	return (<View style={{ marginTop: 100 }}>
		<ActivityIndicator size="large" />
		<Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Decoding VIN... Please wait.</Text>
	</View>
	);
}

export default SplashScreen;