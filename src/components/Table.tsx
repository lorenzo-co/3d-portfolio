import React, { useRef } from "react";
import { MeshProps } from "@react-three/fiber";
import * as THREE from "three";
import CubeLink from "./CubeLink";

import github_icon from "../assets/github_PNG40_default.png";
import twitter_icon from "../assets/twitter_logo_bird.png";

export const myLinks: Array<LinkType> = [
	{
		href: "https://github.com/lorenzo-co",
		handle: "lorenzo-co",
		name: "Github",
		description: "Here is were is ",
		color: "#777777",
		icon: github_icon
	},
	{
		href: "https://twitter.com",
		name: "Twitter",
		color: "#55DDFF",
		icon: twitter_icon
	},
	{
		href: "https://linkedin.com",
		name: "Linkedin",
		color: "#5555FF",
		icon: twitter_icon
	},
	{
		name: "coming...",
		color: "#AADD66",
		icon: github_icon },
];

export interface LinkType {
	href?: string,
	handle?: string,
	name: string,
	description?: string,
	icon: string,
	color: string
}

export function Table({ position, ...props }: MeshProps) {
	const group = useRef();

	const material = new THREE.MeshBasicMaterial({
		color: "#403838",
		opacity: 1,
		transparent: true,
	});

	return (
		<group ref={group} {...props} position={position} dispose={null}>
			<mesh material={material}>
				<boxGeometry attach='geometry' args={[2, 0.1, 1]}  />
				<meshStandardMaterial attach='material' color="black" />
			</mesh>
			{myLinks && myLinks.map((link, index) =>
				<CubeLink key={index} link={link} index={index} />
			)}
		</group>
	);
}

