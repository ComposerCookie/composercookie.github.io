var jackieSection = document.getElementById("jackie");
var kevinSection = document.getElementById("kevin");
var rpgmSection = document.getElementById("rpgmerker");
var smiterSection = document.getElementById("smiteTeemo");
var wanderSection = document.getElementById("WernderingSturm");
var flashcardSection = document.getElementById("Adobecard");
var nChatnSection = document.getElementById("NChatN");
var plushieSection = document.getElementById("PlushieBot");
var HKnewsSection = document.getElementById("HackerNewsFeed");
var waywardSection = document.getElementById("WaywardSail");

var jackieLink = document.getElementById("jackieLink");
var kevinLink = document.getElementById("kevinLink");
var rpgmLink = document.getElementById("rpgmLink");
var smiterLink = document.getElementById("smiteLink");
var wanderLink = document.getElementById("wanderingLink");
var flashcardLink = document.getElementById("flashcardLink");
var nChatnLink = document.getElementById("nchatnLink");
var plushieLink = document.getElementById("plushieLink");
var HKnewsLink = document.getElementById("hknewsLink");
var waywardLink = document.getElementById("waywerdLink");

var jackieImg = document.getElementById("jackieMainPic");

function hideEverything(){
	jackieSection.style.display = "none";
	kevinSection.style.display = "none";
	rpgmSection.style.display = "none";
	smiterSection.style.display = "none";
	wanderSection.style.display = "none";
	flashcardSection.style.display = "none";
	nChatnSection.style.display = "none";
	plushieSection.style.display = "none";
	HKnewsSection.style.display = "none";
	waywardSection.style.display = "none";
	
	jackieLink.style.backgroundColor = "transparent";
	kevinLink.style.backgroundColor = "transparent";
	rpgmLink.style.backgroundColor = "transparent";
	smiterLink.style.backgroundColor = "transparent";
	wanderLink.style.backgroundColor = "transparent";
	flashcardLink.style.backgroundColor = "transparent";
	nChatnLink.style.backgroundColor = "transparent";
	plushieLink.style.backgroundColor = "transparent";
	HKnewsLink.style.backgroundColor = "transparent";
	waywardLink.style.backgroundColor = "transparent";
}

function showStuff(which, highlight){
	hideEverything();
	document.getElementById(which).style.display = "block";
	document.getElementById(highlight).style.backgroundColor = "white";
}


window.addEventListener('load', function() {
    if (window.location.href.indexOf('#jackie') > -1) {
        showStuff("jackie", "jackieLink");
    } else if (window.location.href.indexOf('#kevin') > -1) {
        showStuff("kevin", "kevinLink");
    } else if (window.location.href.indexOf('#rpgmerker') > -1) {
        showStuff("rpgmerker", "rpgmLink");
    } else if (window.location.href.indexOf('#smiteTeemo') > -1) {
        showStuff("smiteTeemo", "smiteLink");
    } else if (window.location.href.indexOf('#WernderingSturm') > -1) {
        showStuff("WernderingSturm", "wanderingLink");
    } else if (window.location.href.indexOf('#Adobecard') > -1) {
        showStuff("Adobecard", "flashcardLink");
    } else if (window.location.href.indexOf('#NChatN') > -1) {
        showStuff("NChatN", "nchatnLink");
    } else if (window.location.href.indexOf('#PlushieBot') > -1) {
        showStuff("PlushieBot", "plushieLink");
    } else if (window.location.href.indexOf('#HackerNewsFeed') > -1) {
        showStuff("HackerNewsFeed", "hknewsLink");
    } else if (window.location.href.indexOf('#WaywardSail') > -1) {
        showStuff("WaywardSail", "waywerdLink");
    } else {
		showStuff("jackie", "jackieLink");
    }
	
});

function changeJackieImg(value){
	switch(value){
		case 0:
			jackieImg.src = "gfx/Jackie.png";
		break;
		case 1:
			jackieImg.src = "gfx/jackie1.png";
		break;
		case 2:
			jackieImg.src = "gfx/jackie2.png";
		break;
	}
};