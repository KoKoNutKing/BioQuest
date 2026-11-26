import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

type CameraControlsProps = {
  minDistance: number;
  maxDistance: number;
  maxPolarAngle?: number;
  panRadius?: number;
  resetCount?: number;
};

export function CameraControls({
  minDistance, maxDistance, maxPolarAngle = Math.PI, panRadius, resetCount,
}: CameraControlsProps) {
  const { camera, gl, invalidate } = useThree();
  const activeControls = useRef<OrbitControls | null>(null);

  useEffect(() => {
    const canvas = gl.domElement;
    const controls = new OrbitControls(camera, canvas);
    controls.enablePan = panRadius !== undefined;
    controls.screenSpacePanning = false;
    controls.maxTargetRadius = panRadius ?? Infinity;
    controls.minDistance = minDistance;
    controls.maxDistance = maxDistance;
    controls.maxPolarAngle = maxPolarAngle;
    if (controls.enablePan) {
      canvas.tabIndex = 0;
      canvas.setAttribute('aria-label', 'Điều khiển camera bằng phím mũi tên');
      controls.listenToKeyEvents(canvas);
    }
    activeControls.current = controls;
    const requestRender = () => invalidate();
    controls.addEventListener('change', requestRender);
    requestRender();

    return () => {
      activeControls.current = null;
      if (controls.enablePan) {
        canvas.removeAttribute('tabindex');
        canvas.removeAttribute('aria-label');
      }
      controls.removeEventListener('change', requestRender);
      controls.dispose();
    };
  }, [camera, gl, invalidate, minDistance, maxDistance, maxPolarAngle, panRadius]);

  useEffect(() => {
    activeControls.current?.reset();
  }, [resetCount]);

  return null;
}
