import React, { useState } from "react";
import Camera, { FACING_MODES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { useNavigate } from "react-router-dom";

const Take = ({ setUri }) => {
  const [stream, setStream] = useState(null);
  const navigate = new useNavigate();
  const onTakePhoto = (uri) => {
    setUri(uri);
    onClose();
  };
  const onClose = () => {
    navigate(`${process.env.PUBLIC_URL}/confirm`);
  };

  return (
    <Camera
      onTakePhoto={onTakePhoto}
      onCameraError={onClose}
      isFullscreen={true}
      idealFacingMode={FACING_MODES.ENVIRONMENT}
    />
  );
};

export default Take;
