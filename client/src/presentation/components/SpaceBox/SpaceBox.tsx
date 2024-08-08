import React, {useEffect, useRef, useState} from 'react';
import {Canvas, useThree} from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import spaceship from '../../../assets/glbs/spacebox1.glb';
import CameraController from "./CameraController";

interface SpaceBoxProps {
    className?: string,
    cameraPosition: [number, number, number],
    moveSpeed: number
}

const SpaceBox: React.FC<SpaceBoxProps> = ( { className, cameraPosition, moveSpeed } ) => {
    const { scene } = useGLTF(spaceship) as any;
    console.log(cameraPosition)

        return (
        <Canvas className={className}>
            {/*<ambientLight intensity={2.5} />*/}
            <primitive object={scene} />
            <CameraController cameraPosition={cameraPosition} moveSpeed={moveSpeed} />
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        </Canvas>
    );
};

export default SpaceBox;
