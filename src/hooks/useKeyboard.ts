import { useCallback, useEffect, useState } from "react";

function actionByKey(key: string): string {
	const keyActionMap: Record<string, string> = {
		KeyW: "moveForward",
		KeyS: "moveBackward",
		KeyA: "moveLeft",
		KeyD: "moveRight",
		Space: "jump",
		KeyF: "interact"
	};

	return keyActionMap[key];
}

const useKeyboard = () =>{
	const [actions, setActions] = useState<{[index: string]:boolean}>({
		moveForward: false,
		moveBack: false,
		moveLeft: false,
		moveRight: false,
		jump: false,
		interact: false
	});

	const handleKeyDown = useCallback((e: KeyboardEvent) => {
		const action: string = actionByKey(e.code);
		if(action) {
			setActions((prev)=>({
				...prev,
				[action]: true
			}));
		}
	}, []);

	const handleKeyUp = useCallback((e: KeyboardEvent) => {
		const action: string = actionByKey(e.code);
		if(action) {
			setActions((prev)=>({
				...prev,
				[action]: false
			}));
		}
	}, []);

	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("keyup", handleKeyUp);
		};
	}, [handleKeyDown, handleKeyUp]);

	return actions;
};

export default useKeyboard;