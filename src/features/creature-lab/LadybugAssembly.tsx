import { Canvas, useThree, type ThreeEvent } from '@react-three/fiber';
import { useCallback, useEffect, useRef, useState } from 'react';
import { OrthographicCamera, Plane, Raycaster, Vector2, Vector3, type Object3D } from 'three';
import { LadybugBody, ladybugParts, type LadybugPart, type LadybugPartId } from './LadybugPreview';

const workPlane = new Plane(new Vector3(0, 1, 0), 0);
const snapDistance = 0.58;

type Drag = {
  part: LadybugPart;
  object: Object3D;
  pointerId: number;
  offset: Vector3;
};

type AssemblySceneProps = {
  fitted: readonly LadybugPartId[];
  dragging: LadybugPartId | null;
  onDragChange: (part: LadybugPartId | null) => void;
  onFit: (part: LadybugPartId) => void;
  onMiss: (part: LadybugPart) => void;
};

function AssemblyScene({ fitted, dragging, onDragChange, onFit, onMiss }: AssemblySceneProps) {
  const { camera, gl, invalidate, size } = useThree();
  const drag = useRef<Drag | null>(null);
  const zoom = Math.min(size.width / 6.8, size.height / 4.65);

  useEffect(() => {
    if (!(camera instanceof OrthographicCamera) || zoom <= 0) return;
    camera.zoom = zoom;
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
    invalidate();
  }, [camera, invalidate, zoom]);

  useEffect(() => {
    const canvas = gl.domElement;
    const raycaster = new Raycaster();
    const pointer = new Vector2();
    const intersection = new Vector3();

    function move(event: PointerEvent) {
      const current = drag.current;
      if (!current || current.pointerId !== event.pointerId) return;

      const bounds = canvas.getBoundingClientRect();
      pointer.set(
        ((event.clientX - bounds.left) / bounds.width) * 2 - 1,
        1 - ((event.clientY - bounds.top) / bounds.height) * 2,
      );
      raycaster.setFromCamera(pointer, camera);
      if (raycaster.ray.intersectPlane(workPlane, intersection)) {
        current.object.position.copy(intersection).add(current.offset);
        invalidate();
      }
    }

    function finish(event: PointerEvent) {
      const current = drag.current;
      if (!current || current.pointerId !== event.pointerId) return;

      const dropped = event.type === 'pointerup';
      if (dropped) move(event);
      const { object, part } = current;
      const [x, , z] = part.fittedPosition;
      const fits = dropped && Math.hypot(object.position.x - x, object.position.z - z) <= snapDistance;
      drag.current = null;
      onDragChange(null);
      if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
      object.position.set(...(fits ? part.fittedPosition : part.loosePosition));
      if (fits) onFit(part.id);
      else if (dropped) onMiss(part);
      invalidate();
    }

    canvas.addEventListener('pointermove', move);
    canvas.addEventListener('pointerup', finish);
    canvas.addEventListener('pointercancel', finish);
    canvas.addEventListener('lostpointercapture', finish);
    return () => {
      canvas.removeEventListener('pointermove', move);
      canvas.removeEventListener('pointerup', finish);
      canvas.removeEventListener('pointercancel', finish);
      canvas.removeEventListener('lostpointercapture', finish);
      const current = drag.current;
      drag.current = null;
      if (current && canvas.hasPointerCapture(current.pointerId)) canvas.releasePointerCapture(current.pointerId);
    };
  }, [camera, gl, invalidate, onDragChange, onFit, onMiss]);

  function start(event: ThreeEvent<PointerEvent>, part: LadybugPart) {
    const { button, isPrimary, pointerId } = event.nativeEvent;
    if (button !== 0 || !isPrimary || drag.current) return;

    const point = event.ray.intersectPlane(workPlane, new Vector3());
    if (!point) return;
    event.stopPropagation();
    const object = event.eventObject;
    gl.domElement.setPointerCapture(pointerId);
    drag.current = { part, object, pointerId, offset: object.position.clone().sub(point) };
    onDragChange(part.id);
  }

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[3, 5, 2]} intensity={2} />
      <mesh position={[0, -0.48, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.32, 48]} />
        <meshBasicMaterial color="#dbebd5" />
      </mesh>
      <mesh position={[0, -0.47, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.31, 1.33, 48]} />
        <meshBasicMaterial color="#93b698" />
      </mesh>
      <LadybugBody />
      {ladybugParts.map((part) => {
        const { id, model: Model, fittedPosition, loosePosition, handleSize } = part;
        const isFitted = fitted.includes(id);

        return (
          <group key={id}>
            {dragging === id && <group position={fittedPosition}><Model ghost /></group>}
            <group
              position={isFitted ? fittedPosition : loosePosition}
              onPointerDown={isFitted ? undefined : (event) => start(event, part)}
            >
              <Model />
              {!isFitted && (
                <mesh>
                  <boxGeometry args={handleSize} />
                  <meshBasicMaterial visible={false} />
                </mesh>
              )}
            </group>
          </group>
        );
      })}
    </>
  );
}

export function LadybugAssembly({ labelledBy }: { labelledBy: string }) {
  const [fitted, setFitted] = useState<LadybugPartId[]>([]);
  const [dragging, setDragging] = useState<LadybugPartId | null>(null);
  const [miss, setMiss] = useState<string | null>(null);
  const [round, setRound] = useState(0);
  const isComplete = fitted.length === ladybugParts.length;

  const fitPart = useCallback((part: LadybugPartId) => {
    setFitted((current) => current.includes(part) ? current : [...current, part]);
    setMiss(null);
  }, []);

  const missPart = useCallback((part: LadybugPart) => setMiss(`${part.name} chưa khớp. Hãy kéo gần viền xanh hơn.`), []);

  function restart() {
    setFitted([]);
    setDragging(null);
    setMiss(null);
    setRound((current) => current + 1);
  }

  return (
    <section className="ladybug-assembly" aria-labelledby={labelledBy}>
      <div className="viewer-toolbar">
        <p className="instructions">Kéo từng bộ phận vào viền xanh hoặc dùng các nút lắp nhanh.</p>
        <button className="back-button" type="button" onClick={restart}>Lắp lại</button>
      </div>
      <p className="assembly-status" role="status">
        {isComplete ? 'Đã lắp xong bọ rùa!' : `Đã lắp ${fitted.length}/${ladybugParts.length} bộ phận. ${miss ?? ''}`}
      </p>
      <div className="viewer assembly-viewer" role="group" aria-label="Khu vực kéo thả các bộ phận bọ rùa">
        <Canvas
          orthographic
          camera={{ position: [0, 6.8, 4.4] }}
          dpr={[1, 1.5]}
          fallback={<p className="notice">Hãy dùng các nút lắp nhanh để hoàn thành.</p>}
          frameloop="demand"
        >
          <AssemblyScene
            key={round}
            fitted={fitted}
            dragging={dragging}
            onDragChange={setDragging}
            onFit={fitPart}
            onMiss={missPart}
          />
        </Canvas>
      </div>
      <div className="assembly-actions quick-fit" role="group" aria-label="Lắp nhanh">
        {ladybugParts.map(({ id, name }) => (
          <button
            key={id}
            type="button"
            className="back-button"
            disabled={dragging !== null || fitted.includes(id)}
            onClick={() => fitPart(id)}
          >
            {fitted.includes(id) ? `Đã lắp ${name.toLowerCase()}` : `Lắp ${name.toLowerCase()}`}
          </button>
        ))}
      </div>
    </section>
  );
}
