import * as React from 'react';
import { View, FlatList } from 'react-native';
import VinListItem from './VinListItem';
import VinListHeader from './VinListHeader';
import { getEndPoint, transformData } from '../core/helper';
import SplashScreen from '../SplashScreen';
import TryAgain from '../TryAgain';

const Separator = () => (<View style={{ margin: 10 }} />);
const ListFooter = () => (<View style={{ height: 120 }} />);

const VinDetails = ({ vin, onNewQuery, onSuccess, onError }) => {

	const [dataSource, setDataSource] = React.useState(undefined);
	const [loading, setLoading] = React.useState(false);
	const [networkError, setNetworkError] = React.useState(false);


	React.useEffect(
		() => {
			(vin !== undefined && vin.trim() !== "") && fecthVinData();
		},
		[vin],
	);

	const fecthVinData = (abortController = undefined) => {

		setLoading(true);

		const endPoint = getEndPoint(vin);

		fetch(endPoint, { signal: abortController && abortController.signal })
			.then((response) => response.json())
			.then((json) => {
				setLoading(false);
				setDataSource(transformData(json));
				setNetworkError(false);
			})
			.catch((error) => {
				setLoading(false);
				setDataSource(undefined);
				setNetworkError(true);
			});
	}

	if (loading) return <SplashScreen />;
	if (networkError) return <TryAgain vin={vin} onTryAgain={fecthVinData} />

	return (<>
		<VinListHeader vin={vin} onNewQuery={onNewQuery} />

		<FlatList
			keyExtractor={(item, index) => index}
			renderItem={VinListItem}
			data={dataSource}
			ListFooterComponent={ListFooter}
			ItemSeparatorComponent={Separator} />
	</>);
}

export default VinDetails;