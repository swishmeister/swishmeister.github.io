var popouts = ["popout-rangers", "popout-poe", "popout-nvidia"]
function openPopout(id) {
	hideAllPopouts()
	var popout = document.getElementById(id)
	if (popout != undefined) {
		popout.style.display = "block"
	}
	document.getElementsByTagName("body")[0].style.overflow = "hidden"
}
function hideAllPopouts() {
	for (let id of popouts) {
		var popout = document.getElementById(id)
		if (popout != undefined) {
			popout.style.display = "none"
		}
	}
	document.getElementsByTagName("body")[0].style.overflow = "inherit"
}