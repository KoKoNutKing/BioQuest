import type { ComponentType } from 'react';

const sides = [-1, 1];
const bodyColor = '#24201e';

type ShapeProps = { ghost?: boolean };
type Position = [number, number, number];

function PartMaterial({ color, ghost }: ShapeProps & { color: string }) {
  if (ghost) {
    return <meshBasicMaterial color="#18744a" wireframe transparent opacity={0.4} depthWrite={false} />;
  }

  return <meshStandardMaterial color={color} />;
}

export function LadybugBody() {
  return (
    <mesh scale={[0.73, 0.24, 0.97]}>
      <sphereGeometry args={[1, 24, 16]} />
      <meshStandardMaterial color={bodyColor} />
    </mesh>
  );
}

function LadybugHead({ ghost }: ShapeProps) {
  return (
    <mesh position={[0, 0.03, 0]} scale={[0.4, 0.31, 0.37]}>
      <sphereGeometry args={[1, 24, 16]} />
      <PartMaterial color={bodyColor} ghost={ghost} />
    </mesh>
  );
}

function LadybugShell({ ghost }: ShapeProps) {
  return (
    <group>
      {sides.map((side) => (
        <group key={side}>
          <mesh position={[side * 0.029, 0.13, 0.07]} scale={[0.74, 0.51, 0.98]}>
            <sphereGeometry args={[1, 24, 16, side === 1 ? Math.PI / 2 : -Math.PI / 2, Math.PI, 0, Math.PI / 2]} />
            <PartMaterial color="#d5412d" ghost={ghost} />
          </mesh>
          {[0, 0.44, -0.46].map((depth) => (
            <mesh key={depth} position={[side * 0.36, depth === 0 ? 0.55 : 0.49, depth]} scale={[0.14, 0.09, 0.14]}>
              <sphereGeometry args={[1, 16, 12]} />
              <PartMaterial color={bodyColor} ghost={ghost} />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

function LadybugLegs({ ghost }: ShapeProps) {
  return (
    <group>
      {sides.map((side) => (
        <group key={side}>
          {[-0.51, -0.07, 0.38].map((depth) => (
            <mesh key={depth} position={[side * 0.66, -0.17, depth]} rotation={[0, 0, side * Math.PI / 3]}>
              <cylinderGeometry args={[0.035, 0.05, 0.55, 8]} />
              <PartMaterial color={bodyColor} ghost={ghost} />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

export type LadybugPartId = 'head' | 'shell' | 'legs';

export type LadybugPart = {
  id: LadybugPartId;
  name: string;
  model: ComponentType<ShapeProps>;
  fittedPosition: Position;
  loosePosition: Position;
  handleSize: Position;
};

export const ladybugParts: readonly LadybugPart[] = [
  {
    id: 'head', name: 'Đầu', model: LadybugHead,
    fittedPosition: [0, 0, -0.91], loosePosition: [-2.4, 0, -0.25], handleSize: [1.05, 0.65, 0.96],
  },
  {
    id: 'shell', name: 'Cặp cánh cứng', model: LadybugShell,
    fittedPosition: [0, 0, 0], loosePosition: [2.25, 0, 0], handleSize: [1.55, 1.15, 2],
  },
  {
    id: 'legs', name: 'Chân', model: LadybugLegs,
    fittedPosition: [0, 0, 0], loosePosition: [0, 0, -2.15], handleSize: [2.03, 0.6, 1.18],
  },
];

export function LadybugPreview() {
  return (
    <group>
      <LadybugBody />
      {ladybugParts.map(({ id, model: Model, fittedPosition }) => (
        <group key={id} position={fittedPosition}><Model /></group>
      ))}
    </group>
  );
}
