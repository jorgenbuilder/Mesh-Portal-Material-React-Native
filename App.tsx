import { StatusBar } from "expo-status-bar";
import { Canvas } from "@react-three/fiber";
import { MeshPortalMaterial } from "@react-three/drei";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Canvas style={{ flex: 1 }}>
        <mesh>
          <planeGeometry />
          <MeshPortalMaterial resolution={1024} blur={0} samples={0}>
            <mesh>
              <sphereGeometry />
            </mesh>
          </MeshPortalMaterial>
        </mesh>
      </Canvas>
    </>
  );
}
