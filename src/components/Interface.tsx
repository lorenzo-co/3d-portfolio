import { useRecoilValue } from "recoil";
import { Box } from "@mui/material";

import Banner from "./Banner";
import { cubeHoveredIndex } from "../state/atom";
import { myLinks } from "./Table";

const Interface = () => {
	const cubeLinkIndex = useRecoilValue(cubeHoveredIndex);

	return (
		<Box className="interface absolute">
			{cubeLinkIndex > -1 && <Banner link={myLinks[cubeLinkIndex]} />}
		</Box>
	);
};

export default Interface;