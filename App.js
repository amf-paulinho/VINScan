import * as React from 'react';

import { SafeAreaView } from 'react-native';
import { useCameraDevices } from 'react-native-vision-camera';
import { Camera } from 'react-native-vision-camera';
import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';
import HelpPanel from './src/HelpPanel';
import VinDetails from './src/VinData/VinDetails';

export default function App() {
  const [hasPermission, setHasPermission] = React.useState(false);

  const [torchIsActive, setTorchIsActive] = React.useState(false);

  const [VIN, setVIN] = React.useState(undefined);
  const [isActive, setIsActive] = React.useState(true);

  const devices = useCameraDevices();
  const device = devices.back;

  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.CODE_128], {
    checkInverted: true,
  });

  const newQueryHandler = () => {
    setVIN(undefined);
    setIsActive(true);
  }

  React.useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  React.useEffect(() => {

    if (barcodes && barcodes.length > 0 && barcodes[0].displayValue.trim() !== "") {
      setVIN(barcodes[0].displayValue);
      setIsActive(false);
    }

  }, [barcodes[0]]);

  const torchHandler = () => {
    console.log(torchIsActive);
    setTorchIsActive(status => !status);
  }

  const BottomPanel = ({ onTorch }) => {
    if (isActive)
      return <HelpPanel onTorch={onTorch} />;
    else
      return <VinDetails vin={VIN} onNewQuery={newQueryHandler} />;
  }

  return (
    device != null &&
    hasPermission && (<SafeAreaView>
      {isActive && <Camera
        style={{ height: "40%" }}
        device={device}
        isActive={isActive}
        frameProcessor={frameProcessor}
        frameProcessorFps={5}
        torch={torchIsActive ? 'on' : 'off'}
      />}

      <BottomPanel onTorch={torchHandler} />
    </SafeAreaView>));
}
