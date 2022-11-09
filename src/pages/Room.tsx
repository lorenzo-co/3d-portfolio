import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";

import Floor from "../components/Floor";
import Player from "../components/Player";
import FPV from "../components/FPV";
import { Table } from "../components/Table";
import Interface from "../components/Interface";
import { createOffer } from "../connection/peerConnection";

// TODO:
// - add red button with timer in the air
// - add text with anime js to Ready, Set, Go!

const Room = () => {
	const [showRoom, setShowRoom] = useState<boolean>(false);

	useEffect(() => {
		createOffer().then(_ => console.log("Offer created!"));
	}, []);

	useEffect(() => {
		if(!showRoom){
			setTimeout(() => {
				setShowRoom(true);
			}, 1000);
		}
	}, []);

	return (
		<>
			<Interface />
			<Canvas>
				<Suspense fallback={null}>
					<FPV />
					<Sky sunPosition={[100, 0, 0]} mieCoefficient={0.025}  rayleigh={10}/>
					<ambientLight intensity={0.5} />
					<Physics size={1000}>
						<Player />
						<Floor length={1000} width={10} height={5}/>
						<Table position={[0, 0.6, 2.5]} />
					</Physics>
				</Suspense>
			</Canvas>
			<div className='absolute cross-air'>+</div>
		</>
	);
};

export default Room;