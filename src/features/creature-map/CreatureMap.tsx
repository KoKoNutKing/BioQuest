import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import { LadybugPreview } from '../creature-lab/LadybugPreview';
import { CameraControls } from '../creature-viewer/CameraControls';
import { Butterfly, Crab } from './CreatureModels';

const groundColor = '#e5efe2';

const creatures = [
  {
    name: 'Bọ rùa', color: '#be3326', model: LadybugPreview,
    x: -3.7, y: 0.29, z: 1.1, heading: 2.7, shadowWidth: 0.83, shadowDepth: 0.97,
  },
  {
    name: 'Bướm', color: '#7b4cc4', model: Butterfly,
    x: -0.5, y: 0, z: -2.65, heading: 0.16, shadowWidth: 1.12, shadowDepth: 0.63,
  },
  {
    name: 'Cua', color: '#c75c25', model: Crab,
    x: 3.6, y: 0, z: 1.1, heading: 0.47, shadowWidth: 1.21, shadowDepth: 0.65,
  },
];

export default function CreatureMap({ onBack }: { onBack: () => void }) {
  const [cameraResetCount, setCameraResetCount] = useState(0);

  return (
    <>
      <button className="back-button" onClick={onBack}>← Về bản đồ</button>
      <p className="location">PoC</p>
      <h1>Bản đồ 3D</h1>
      <div className="viewer-toolbar">
        <p className="instructions">
          Kéo để xoay. Giữ chuột phải rồi kéo hoặc dùng phím mũi tên để dịch camera. Cuộn để thu phóng.
          Trên màn hình cảm ứng, kéo hai ngón để dịch và chụm hai ngón để thu phóng.
        </p>
        <button type="button" className="back-button" onClick={() => setCameraResetCount((count) => count + 1)}>
          Góc nhìn ban đầu
        </button>
      </div>
      <div className="viewer creature-map-viewer" role="group" aria-label="Cảnh 3D với bọ rùa, bướm và cua">
        <Canvas
          camera={{ position: [7, 8.5, 13], fov: 42 }}
          dpr={[1, 1.5]}
          fallback={<p className="notice">Thiết bị này không hỗ trợ xem mô hình 3D.</p>}
          frameloop="demand"
        >
          <color attach="background" args={[groundColor]} />
          <fog attach="fog" args={[groundColor, 17, 34]} />
          <ambientLight intensity={1.5} />
          <directionalLight position={[2, 6, 4]} intensity={2} />
          <mesh position={[0, -0.015, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[60, 60]} />
            <meshBasicMaterial color={groundColor} />
          </mesh>
          <gridHelper args={[22, 22, '#a9bdab', '#c2d2c1']} />
          {creatures.map(({ name, model: Model, x, y, z, heading, shadowWidth, shadowDepth }) => (
            <group key={name} position={[x, 0, z]}>
              <mesh position={[0, 0.012, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[shadowWidth, shadowDepth, 1]}>
                <circleGeometry args={[1, 28]} />
                <meshBasicMaterial color="#4e7258" transparent opacity={0.2} depthWrite={false} />
              </mesh>
              <group position={[0, y, 0]} rotation={[0, heading, 0]}>
                <Model />
              </group>
            </group>
          ))}
          <CameraControls
            minDistance={5}
            maxDistance={28}
            maxPolarAngle={Math.PI / 2 - 0.08}
            panRadius={9}
            resetCount={cameraResetCount}
          />
        </Canvas>
      </div>
      <ul className="creature-map-legend" aria-label="Sinh vật trong cảnh">
        {creatures.map(({ name, color }) => (
          <li key={name}><span aria-hidden="true" style={{ backgroundColor: color }} />{name}</li>
        ))}
      </ul>
    </>
  );
}
