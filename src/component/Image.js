import React, { useEffect, useState } from "react";
import Camera, { FACING_MODES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

const Image = ({ itemName }) => {
  const [isCameraUsed, setCameraUsed] = useState(false);
  const [isCameraOpen, setCameraOpen] = useState(false);
  const [stream, setStream] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (
      "mediaDevices" in navigator &&
      "getUserMedia" in navigator.mediaDevices
    ) {
      setCameraUsed(true);
    }
  }, []);
  const takePicture = () => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      setStream(stream);
      setCameraOpen(true);
    });
  };
  const onTakePhoto = (uri) => {
    onClose();
    console.log(uri);
    setImage(uri);
  };
  const onClose = () => {
    setCameraOpen(false);
    if (stream) {
      // カメラを終了
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  return (
    <div>
      <button onClick={takePicture} disabled={!isCameraUsed}>
        {itemName}
      </button>
      <button variant="outlined" onClick={onClose}>
        カメラを終了する
      </button>
      {isCameraOpen && (
        <Camera
          onTakePhoto={onTakePhoto}
          onCameraError={onClose}
          isFullscreen={true}
          idealFacingMode={FACING_MODES.ENVIRONMENT}
        />
      )}
      {image ? <img src={image} alt="image2" /> : <></>}
    </div>
  );
};

export default Image;
