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

function hideEverything(){
	jackieSection.style.visibility = "hidden";
	kevinSection.style.visibility = "hidden";
	rpgmSection.style.visibility = "hidden";
	smiterSection.style.visibility = "hidden";
	wanderSection.style.visibility = "hidden";
	flashcardSection.style.visibility = "hidden";
	nChatnSection.style.visibility = "hidden";
	plushieSection.style.visibility = "hidden";
	HKnewsSection.style.visibility = "hidden";
	waywardSection.style.visibility = "hidden";
	
	jackieLink.style.backgroundColor = "none";
	kevinLink.style.backgroundColor = "none";
	rpgmLink.style.backgroundColor = "none";
	smiterLink.style.backgroundColor = "none";
	wanderLink.style.backgroundColor = "none";
	flashcardLink.style.backgroundColor = "none";
	nChatnLink.style.backgroundColor = "none";
	plushieLink.style.backgroundColor = "none";
	HKnewsLink.style.backgroundColor = "none";
	waywardLink.style.backgroundColor = "none";
}

function showStuff(which, highlight){
	hideEverything();
	document.getElementById(which).style.visibility = "visible";
	document.getElementById(highlight).style.backgroundColor = "lightyellow";
}


window.addEventListener('load', function() {
    if (window.location.href.indexOf('#jackie') > -1) {
        showStuff("jackie", "jackieLink");
    } else if (window.location.href.indexOf('#kevin') > -1) {
        showStuff("kevin", "kevinLink");
    } else if (window.location.href.indexOf('#rpgmaker') > -1) {
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