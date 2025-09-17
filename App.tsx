import { StatusBar } from "expo-status-bar";
import { Canvas } from "@react-three/fiber";
import { MeshPortalMaterial, OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Canvas style={{ flex: 1 }}>
        <OrbitControls />
        <mesh>
          <planeGeometry args={[3, 5]} />
          <MeshPortalMaterial resolution={1024} blur={0} samples={0}>
            <mesh>
              <planeGeometry args={[3, 5]} />
              <meshBasicMaterial color="wheat" />
            </mesh>
            <mesh>
              <sphereGeometry />
              <meshBasicMaterial color="salmon" />
            </mesh>
            <mesh position={[-2.25, 0, 0]}>
              <sphereGeometry />
              <meshBasicMaterial color="salmon" />
            </mesh>
            <mesh position={[2.25, 0, 0]}>
              <sphereGeometry />
              <meshBasicMaterial color="salmon" />
            </mesh>
          </MeshPortalMaterial>
        </mesh>
      </Canvas>
    </>
  );
}
