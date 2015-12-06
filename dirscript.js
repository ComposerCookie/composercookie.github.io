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
}

function showStuff(which){
	hideEverything();
	document.getElementById(which).style.visibility = "visible";
}


window.addEventListener('load', function() {
    if (window.location.href.indexOf('#jackie') > -1) {
        showStuff("jackie");
    } else if (window.location.href.indexOf('#kevin') > -1) {
        showStuff("kevin");
    } else if (window.location.href.indexOf('#rpgmaker') > -1) {
        showStuff("rpgmerker");
    } else if (window.location.href.indexOf('#smiteTeemo') > -1) {
        showStuff("smiteTeemo");
    } else if (window.location.href.indexOf('#WernderingSturm') > -1) {
        showStuff("WernderingSturm");
    } else if (window.location.href.indexOf('#Adobecard') > -1) {
        showStuff("Adobecard");
    } else if (window.location.href.indexOf('#NChatN') > -1) {
        showStuff("NChatN");
    } else if (window.location.href.indexOf('#PlushieBot') > -1) {
        showStuff("PlushieBot");
    } else if (window.location.href.indexOf('#HackerNewsFeed') > -1) {
        showStuff("HackerNewsFeed");
    } else if (window.location.href.indexOf('#WaywardSail') > -1) {
        showStuff("WaywardSail");
    } else
		showStuff("jackie");
    }
	
});