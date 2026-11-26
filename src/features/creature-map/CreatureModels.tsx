const sides = [-1, 1];

export function Butterfly() {
  const bodyColor = '#372350';

  return (
    <group position={[0, 0.88, 0]}>
      <mesh scale={[0.14, 0.15, 0.69]}>
        <sphereGeometry args={[1, 20, 12]} />
        <meshStandardMaterial color={bodyColor} />
      </mesh>
      <mesh position={[0, 0.02, 0.61]}>
        <sphereGeometry args={[0.19, 16, 12]} />
        <meshStandardMaterial color={bodyColor} />
      </mesh>
      {sides.map((side) => (
        <group key={side}>
          <group rotation={[0, 0, side * 0.32]}>
            <mesh position={[side * 0.69, -0.025, -0.41]} scale={[0.65, 0.085, 0.49]}>
              <sphereGeometry args={[1, 24, 16]} />
              <meshStandardMaterial color="#a761d5" />
            </mesh>
            <mesh position={[side * 0.96, 0.02, 0.33]} rotation={[0, side * -0.34, 0]} scale={[1.02, 0.09, 0.57]}>
              <sphereGeometry args={[1, 24, 16]} />
              <meshStandardMaterial color="#7743c0" />
            </mesh>
            <mesh position={[side * 1.29, 0.10, 0.49]} rotation={[0, side * -0.34, 0]} scale={[0.37, 0.035, 0.24]}>
              <sphereGeometry args={[1, 16, 12]} />
              <meshStandardMaterial color="#e7bdf6" />
            </mesh>
            <mesh position={[side * 0.77, 0.055, -0.48]} scale={[0.24, 0.035, 0.17]}>
              <sphereGeometry args={[1, 16, 12]} />
              <meshStandardMaterial color="#f4ce73" />
            </mesh>
          </group>
          <mesh position={[side * 0.15, 0.18, 0.73]} rotation={[0.43, 0, -side * 0.35]}>
            <cylinderGeometry args={[0.021, 0.03, 0.34, 8]} />
            <meshStandardMaterial color={bodyColor} />
          </mesh>
          <mesh position={[side * 0.21, 0.32, 0.8]}>
            <sphereGeometry args={[0.045, 12, 8]} />
            <meshStandardMaterial color={bodyColor} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export function Crab() {
  const shellColor = '#db692e';
  const legColor = '#a83f25';

  return (
    <group>
      <mesh position={[0, 0.42, 0]} scale={[0.95, 0.43, 0.64]}>
        <sphereGeometry args={[1, 24, 16]} />
        <meshStandardMaterial color={shellColor} />
      </mesh>
      {sides.map((side) => (
        <group key={side}>
          {[-0.36, -0.03, 0.3].map((depth) => (
            <mesh key={depth} position={[side * 1.01, 0.25, depth]} rotation={[0, -side * depth, side * 1.09]}>
              <cylinderGeometry args={[0.087, 0.062, 0.77, 9]} />
              <meshStandardMaterial color={legColor} />
            </mesh>
          ))}
          <mesh position={[side * 0.37, 0.81, 0.34]} rotation={[0.27, 0, -side * 0.14]}>
            <cylinderGeometry args={[0.067, 0.082, 0.36, 10]} />
            <meshStandardMaterial color={shellColor} />
          </mesh>
          <mesh position={[side * 0.39, 1, 0.39]}>
            <sphereGeometry args={[0.14, 16, 12]} />
            <meshStandardMaterial color="#fff4d5" />
          </mesh>
          <mesh position={[side * 0.39, 1.02, 0.503]}>
            <sphereGeometry args={[0.063, 12, 8]} />
            <meshStandardMaterial color="#30211e" />
          </mesh>
          <mesh position={[side * 0.83, 0.47, 0.52]} rotation={[0, -side * 0.64, 0]}>
            <boxGeometry args={[0.65, 0.19, 0.24]} />
            <meshStandardMaterial color={legColor} />
          </mesh>
          <group position={[side * 1.26, 0.53, 0.86]} rotation={[0, side * 0.14, 0]}>
            <mesh scale={[0.34, 0.24, 0.34]}>
              <sphereGeometry args={[1, 20, 12]} />
              <meshStandardMaterial color={shellColor} />
            </mesh>
            <mesh position={[side * 0.19, 0.03, 0.23]} rotation={[0, -side * 0.14, 0]} scale={[0.15, 0.18, 0.36]}>
              <sphereGeometry args={[1, 20, 12]} />
              <meshStandardMaterial color={shellColor} />
            </mesh>
            <mesh position={[-side * 0.17, 0, 0.18]} rotation={[0, side * 0.26, 0]} scale={[0.115, 0.14, 0.3]}>
              <sphereGeometry args={[1, 20, 12]} />
              <meshStandardMaterial color="#ed8841" />
            </mesh>
          </group>
        </group>
      ))}
    </group>
  );
}
