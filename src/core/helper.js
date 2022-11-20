const mainInfo = [
	"Wheels",
	"VIN",
	"Make",
	"Model",
	"ModelYear",
	"VehicleType",
	"BodyClass",
	"Doors",
	"FuelTypePrimary",
	"DriveType",
	"ABS",
	"PlantCountry",
	"PlantState"
];

const baseEndPoint = "https://vpic.nhtsa.dot.gov/api/vehicles/";

const apiMethods = {
	decodeVin: `${baseEndPoint}DecodeVin`,
	decodeVinValues: `${baseEndPoint}DecodeVinValues`,
	decodeVinExtended: `${baseEndPoint}DecodeVinExtended`,
	decodeVinValuesExtended: `${baseEndPoint}DecodeVinValuesExtended`,
};

export const transformData = (rawData) => {
	let data = [];
	if (rawData && rawData.Results && rawData.Results.length > 0) {
		data = Object.keys(rawData.Results[0]).map((key) => [key, rawData.Results[0][key]]).filter(item => item[1].trim() !== "");
	}

	const mainData = Array.from(data).filter(f => mainInfo.indexOf(f[0]) >= 0);
	const otherData = Array.from(data).filter(f => mainInfo.indexOf(f[0]) < 0);

	data = mainData.concat(otherData);

	return data;
}

export const getEndPoint = (vin) => `${apiMethods.decodeVinValuesExtended}/${vin}?format=json`;
