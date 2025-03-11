// NeuralNetwork.tsx
import React, { useMemo, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

// Custom hook to detect media query match.
function useMediaQuery(query: string) {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);
		// Set the initial value
		if (media.matches !== matches) {
			setMatches(media.matches);
		}
		const listener = () => setMatches(media.matches);
		media.addEventListener('change', listener);
		return () => media.removeEventListener('change', listener);
	}, [matches, query]);

	return matches;
}

function NNScene() {
	// Define each layer as a grid: input, hidden, hidden, output (4 layers)
	const layersConfig = [
		{ rows: 3, cols: 3 },
		{ rows: 4, cols: 4 },
		{ rows: 4, cols: 4 },
		{ rows: 2, cols: 2 },
	];
	const layerSpacing = 3.0; // separation between layers along X
	const rowSpacing = 1.0; // spacing between rows (Y direction) in each layer
	const colSpacing = 1.0; // spacing between columns (Z direction) in each layer
	const tiltFactor = 3.0; // left-most layer gets z = -3, right-most layer gets z = 0

	// Use media query hook to check if the screen is at least md (768px)
	const isMdUp = useMediaQuery('(min-width: 768px)');

	// Compute node positions for each layer.
	const nodesPositions = useMemo(() => {
		return layersConfig.map((config, layerIndex) => {
			const { rows, cols } = config;
			const x = layerIndex * layerSpacing;
			// Compute the layer's overall tilt in Z.
			const layerTilt =
				-tiltFactor * (1 - layerIndex / (layersConfig.length - 1));
			// Center the grid vertically (Y) and in depth (Z)
			const offsetY = ((rows - 1) * rowSpacing) / 2;
			const offsetZ = ((cols - 1) * colSpacing) / 2;
			let layerNodes = [];
			for (let i = 0; i < rows; i++) {
				for (let j = 0; j < cols; j++) {
					const y = i * rowSpacing - offsetY;
					// Place nodes in a grid along Z, then add the layer tilt.
					const z = j * colSpacing - offsetZ + layerTilt;
					layerNodes.push(new THREE.Vector3(x, y, z));
				}
			}
			return layerNodes;
		});
	}, [layersConfig, layerSpacing, rowSpacing, colSpacing, tiltFactor]);

	// Flatten nodes for rendering.
	const nodesFlat = useMemo(() => nodesPositions.flat(), [nodesPositions]);

	// Build connections: every node in one layer connects to every node in the next.
	const connections = useMemo(() => {
		const conn: number[] = [];
		for (let i = 0; i < nodesPositions.length - 1; i++) {
			const currentLayer = nodesPositions[i];
			const nextLayer = nodesPositions[i + 1];
			currentLayer.forEach((start) => {
				nextLayer.forEach((end) => {
					conn.push(start.x, start.y, start.z, end.x, end.y, end.z);
				});
			});
		}
		return conn;
	}, [nodesPositions]);

	const connectionGeometry = useMemo(() => {
		const geometry = new THREE.BufferGeometry();
		geometry.setAttribute(
			'position',
			new THREE.Float32BufferAttribute(connections, 3),
		);
		return geometry;
	}, [connections]);

	// Set rotation based on screen size.
	// For smaller screens: rotate [-0.8, 0.3, 0]
	// For md and up: rotate so that left is top/back and right is close/down, e.g. [-0.5, -0.4, 0]
	const groupRotation: [number, number, number] = isMdUp
		? [0.6, -0.5, 0]
		: [-1, 0.2, -1.8];

	return (
		<group rotation={groupRotation} position={[3, 1.5, -1]}>
			{nodesFlat.map((pos, index) => (
				<mesh key={index} position={pos}>
					<sphereGeometry args={[0.12, 16, 16]} />
					<meshBasicMaterial color="#7C7C7C" />
				</mesh>
			))}
			<lineSegments geometry={connectionGeometry}>
				<lineBasicMaterial color="#7C7C7C" opacity={0.4} transparent />
			</lineSegments>
		</group>
	);
}

export default function NeuralNetwork() {
	return (
		<Canvas
			camera={{ position: [10, 0, 15], fov: 50 }}
			gl={{ alpha: true }}
			style={{ background: 'transparent', width: '100%', height: '100%' }}
		>
			<ambientLight intensity={0.5} />
			<NNScene />
			{/* Non-interactive: no OrbitControls */}
		</Canvas>
	);
}
