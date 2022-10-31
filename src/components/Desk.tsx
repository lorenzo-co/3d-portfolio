
import { useBox } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";

const Desk = () => {
	console.log("log this");

	const [ref] = useBox(() => ({
		rotation: [0, 0, 0],
		position: [0, 2, 0]
	}));

	return <primitive ref={ref} object={result.asset} color='blue'/>;
};

export default Desk;

