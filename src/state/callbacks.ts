import { myLinks } from "../components/Table";
import { cubeHoveredState } from "./atom";
import { CallbackInterface } from "recoil";

export const getActiveCubeIndexCallback = () => async ({ set, snapshot }: CallbackInterface) =>  {
	const cubeStateList = myLinks.map(async (_link, i) => {
		return await snapshot.getPromise(cubeHoveredState(i));
	});

	const activeCube = cubeStateList.findIndex(cubeState => cubeState);
	console.log(activeCube);
	set;
};