import React, { useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';

const CameraController: React.FC<{ cameraPosition: [number, number, number]; moveSpeed: number }> = ({ cameraPosition, moveSpeed }) => {
    const { camera, invalidate } = useThree();

    useEffect(() => {
        camera.position.set(...cameraPosition);
        invalidate(); // Force a re-render to apply changes
    }, [cameraPosition, camera, invalidate]);

    useFrame(({ camera }) => {
        // Use arrow key input to move the camera
        function handleKeyDown(event: KeyboardEvent) {
            const { key } = event;
            switch (key) {
                case 'ArrowUp':
                    camera.position.z -= moveSpeed; // Move camera backwards
                    break;
                case 'ArrowDown':
                    camera.position.z += moveSpeed; // Move camera forwards
                    break;
                case 'ArrowLeft':
                    camera.position.x -= moveSpeed; // Move camera left
                    break;
                case 'ArrowRight':
                    camera.position.x += moveSpeed; // Move camera right
                    break;
                default:
                    break;
            }
            invalidate(); // Force re-render to apply changes
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    return null; // This component does not render anything
};

export default CameraController;
