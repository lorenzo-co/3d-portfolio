import { usePlane } from "@react-three/cannon";
import * as THREE from "three";

const PI = Math.PI;

interface FloorProps {
	length: number,
	width: number,
	height: number,
}

const Floor = ({ length, width, height }: FloorProps) => {
	const [refFloor] = usePlane(() => ({
		rotation: [-PI/2, 0, 0],
		position: [0, 0, 0]
	}));
	const [refEast] = usePlane(() => ({
		rotation: [0, PI, 0],
		position: [0, 2.5, 5]
	}));
	const [refWest] = usePlane(() => ({
		rotation: [0, 0, 0],
		position: [0, 2.5, -5]
	}));

	const material = new THREE.MeshBasicMaterial({
		color: "white",
		opacity: 0.1,
		transparent: true,
	});


	return (
		<>
			<mesh ref={refFloor}>
				<planeGeometry attach='geometry' args={[length, width]}/>
				<meshStandardMaterial attach='material' color='darkgrey' />
			</mesh>
			<mesh ref={refEast} material={material}>
				<planeGeometry attach='geometry' args={[length, height]} />
				<meshStandardMaterial attach='material' />
			</mesh>
			<mesh ref={refWest} material={material}>
				<planeGeometry attach='geometry' args={[length, height]} />
				<meshStandardMaterial attach='material' />
			</mesh>
		</>
	);
};

export default Floor;