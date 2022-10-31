import { alpha, Box, darken, lighten, Typography } from "@mui/material";

import { LinkType } from "./Table";
import { useEffect, useState } from "react";

interface Props {
	link: LinkType
}

const Banner = ({ link }: Props) => {
	const [show, setShow] = useState<boolean>(false);
	const bgColor = alpha(darken(link.color, 0.4), 0.4);
	const borderColor = alpha(lighten(link.color, 0.6), 0.4);
	const textColor = lighten(link.color, 0.6);

	useEffect(() => {
		if(!show){
			setTimeout(() => {
				setShow(true);
			}, 10);
		}
	}, []);


	return (
		<Box className="top-20 fit-content flex x-center">
			<Box className={`banner-border ${!show ? "width-transition" : "width-transition2"}`} sx={{ backgroundColor: borderColor }}>
				<Box className="banner" sx={{ backgroundColor: bgColor }}>
					<Box color={textColor} className={`${!show ? "opacity-transition" : "opacity-transition2"}`}>
						<Typography fontWeight="bold" >{link.name}</Typography>
						{link.description &&
						<Typography>
							{link.description}
						</Typography>}
						{link.handle &&
							<Typography>
								{link.handle}
							</Typography>}
						<Typography fontSize="12">Click on the cube to open a new window</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Banner;