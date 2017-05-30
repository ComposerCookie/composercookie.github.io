function showWayward() {
	document.getElementById("wayward").style.display="block";
	window.setTimeout(fadeWayward, 10);
}

function fadeWayward() {
	document.getElementById("wayward").style.opacity="1";
}