import { ThreeEvent } from "@react-three/fiber";
import React, { useMemo, useState } from "react";
import { LinkType } from "./Table";
import * as THREE from "three";
import { useSetRecoilState } from "recoil";

import { cubeHoveredIndex } from "../state/atom";
import { lighten } from "@mui/material";

interface Props {
  link: LinkType,
  index: number,
}

const CUBE_EDGE = 0.15;

const CubeLink = ({ link, index }: Props) => {
	const [hovered, setHovered] = useState<boolean>(false);
	const setHoveredIndex = useSetRecoilState(cubeHoveredIndex);
	const lightenedColor = useMemo(() => lighten(link.color, 0.3), [link.color]);

	const textureLoader = new THREE.TextureLoader();


	const material = new THREE.MeshBasicMaterial({
		color: hovered ? lightenedColor : link.color,
		map: textureLoader.load(link.icon),
	});

	const handleLinkClick = () => {
		if(link.href){
			window.location.assign(link.href);
		}
	};

	const handleIn = (e: ThreeEvent<PointerEvent>) => {
		e.stopPropagation();
		setHovered(true);
		setHoveredIndex(index);
	};

	const handleOut = (e: ThreeEvent<PointerEvent>) => {
		e.stopPropagation();
		setHovered(false);
		setHoveredIndex(-1);
	};

	return (
		<mesh
			material={material}
			position={[(0.5 * (index % 3) - 0.5), 0.05 + (CUBE_EDGE / 2), (index % 2) * 0.5 - 0.25]}
			rotation={[0, 0.4 + 0.7 * index, 0]}
			onPointerMove={handleIn}
			onPointerLeave={handleOut}
			onClick={link.href ? handleLinkClick : undefined}
		>
			<boxGeometry attach='geometry' args={[CUBE_EDGE, CUBE_EDGE, CUBE_EDGE]} />
			<meshStandardMaterial
				attach='material'
			/>
		</mesh>
	);
};

export default CubeLink;