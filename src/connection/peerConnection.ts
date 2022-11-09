const servers = {
	iceServers: [
		{
			urls: [
				"stun:stun.l.google.com:19302",
				"stun:stun1.l.google.com:19302",
				"stun:stun2.l.google.com:19302",
			]
		},
	]
};

export async function createOffer() {
	const peerConnection = new RTCPeerConnection(servers);

	peerConnection.onicecandidate = async (event) => {
		if (event.candidate) {
			console.log("New ICE candidate", event.candidate);
		}
	};

	const offer = await peerConnection.createOffer();
	await peerConnection.setLocalDescription(offer);

	console.log("Offer:", offer);
}