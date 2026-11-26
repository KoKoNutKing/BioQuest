import { useState, type ComponentType } from 'react';
import { Canvas } from '@react-three/fiber';
import type { Area, Creature } from '../../content/world';
import { CameraControls } from '../creature-viewer/CameraControls';
import { LadybugAssembly } from './LadybugAssembly';
import { LadybugPreview } from './LadybugPreview';

type CreatureLabProps = {
  area: Area;
  creature: Creature;
  onBack: () => void;
};

const previews: Partial<Record<string, ComponentType>> = {
  ladybug: LadybugPreview,
};

export default function CreatureLab({ area, creature, onBack }: CreatureLabProps) {
  const Preview = previews[creature.preview];
  const [assembling, setAssembling] = useState(false);
  const canAssemble = creature.preview === 'ladybug';

  return (
    <>
      <div className="assembly-actions">
        <button className="back-button" type="button" onClick={onBack}>← Về bản đồ</button>
        {assembling && (
          <button className="back-button" type="button" onClick={() => setAssembling(false)}>Về chế độ quan sát</button>
        )}
      </div>
      <p className="location">{area.name} / Creature Lab</p>
      <h1 id="creature-lab-title">{assembling ? 'Lắp ráp bọ rùa' : creature.name}</h1>
      {assembling ? <LadybugAssembly labelledBy="creature-lab-title" /> : Preview ? (
        <>
          <div className="viewer-toolbar">
            <p className="instructions">Kéo để xoay góc nhìn. Cuộn chuột hoặc chụm hai ngón để thu phóng.</p>
            {canAssemble && (
              <button className="action-button" type="button" onClick={() => setAssembling(true)}>
                Bắt đầu lắp ráp
              </button>
            )}
          </div>
          <div className="viewer" role="group" aria-label={`Mô hình 3D minh họa ${creature.name.toLowerCase()}`}>
            <Canvas
              camera={{ position: [3.2, 2.5, 3.8], fov: 38 }}
              dpr={[1, 1.5]}
              fallback={<p className="notice">Thiết bị này không hỗ trợ xem mô hình 3D.</p>}
              frameloop="demand"
            >
              <ambientLight intensity={1.5} />
              <directionalLight position={[3, 5, 2]} intensity={2} />
              <Preview />
              <CameraControls minDistance={3} maxDistance={8} />
            </Canvas>
          </div>
        </>
      ) : (
        <p>Mô hình đang được chuẩn bị.</p>
      )}
    </>
  );
}
