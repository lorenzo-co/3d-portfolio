import { atom, atomFamily, selector } from "recoil";
import { myLinks } from "../components/Table";

export const cubeHoveredState = atomFamily<boolean, number>({
	key: "cubeHoveredState",
	default: false
});

export const cubeHoveredIndex = atom<number>({
	key: "cubeHoveredIndex",
	default: -1
});

export const cubeHoveredIndexSelector = selector<number>({
	key: "cubeHoveredIndexSelector",
	get: ({ get }) => myLinks.findIndex((_link, index) => get(cubeHoveredState(index)))
});