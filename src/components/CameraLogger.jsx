import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export default function CameraLogger() {
  const { camera } = useThree(); // Access the camera from the scene

  useEffect(() => {
    const logCameraPosition = () => {
      console.log("Camera Position:", [
        parseFloat(camera.position.x.toFixed(2)),
        parseFloat(camera.position.y.toFixed(2)),
        parseFloat(camera.position.z.toFixed(2)),
      ]);
    };

    // Log camera position on every render
    const interval = setInterval(logCameraPosition, 100); // Logs every 100ms

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [camera]);

  return null;
}
