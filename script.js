/******************
********NOTE*******
*******************
Authors:
	0 = Jackie
	1 = Kevin
	
Status:
	0 = Paused
	1 = Dead
	2 = Ongoing
	3 = Released
	
Image Array Explain in-order:

	0: Actual Element
	1: Which project it's referencing to
	2: Which class is it supposed to be
*/

var currentProject = 0;
var projectCount = 8;

var self = this;

function project(name, sub, author, status, plat, des, link, img){
	this.name = name;
	this.sub = sub;
	this.author = author;
	this.status = status;
	this.plat = plat;
	this.des = des;
	this.link = link;
	this.img = img;
}

var projectList = [
	new project("Smite Team Manager", "A MOBA team management software", [0], 0, "Window, C#, Lidgren, SFML", "Want to manage your smite team professionally? Ever wanted a digital whiteboard that you can draw and let your team mate see from diferent part of the world? This software allow you to connect into your own private chat (hosted by you), private whiteboard for scribble and click/drag gods to position them strategically.", "smiteTeemo", "gfx/smiteTeemo.png"),
	new project("Flashcard Quiz", "Create printable flashcard and quizzes", [0], 0, "Window, C#", "Remember when SAT was cool? Yeah... me neither, which is why I spent my time making SAT prep software instead of actually studying SAT (I still got almost perfect on math though). Introducing, the Word List Flashcard (sorry no better name). Input your flashcard, export to PDF and mass print them, or take multiple choice tests and fill in the blank.", "Adobecard", "gfx/adobeCard.png"),
	new project("Jackie's RPG Maker", "RPG Maker clone", [0], 0, "Window, C#, SFML, Dock Panel", "Every little kid have a dream, whether it's to become Kung Fury's Hackerman, or to be the next Final Fantasy creator. This was my attempt at creating RPG Maker clone. Come with a map editor, character, event system, animations and actually play test your game. ", "rpgmerker", "gfx/rpgmerker.png"),
	new project("Wandering Soul", "2d Sandbox game", [0], 0, "Window, C#, SFML", "Arguably one of the most interesting project I ever did. Map generator algorithm, AI, dynamic building thank to polymorphism, combats, autotile, etc. While the game itself is not finished, a lot of the foundation/feature was setted up, allow whoever that want to develop this to easily create new contents. What's the game about? Honestly, I have no idea. All I wanted was to make a 2d-top view Minecraft with terraria combat... and ehm,Haven and Hearth clone.", "WernderingSturm", "gfx/wurnderingsul.png"),
	new project("NChatN", "Improved Chat for NEaB", [1], 1, "", "You are about to enter another chatroom with little to no bug, a chatroom not only of typing but of clicking. A journey into a wonderous room of people. Next stop, NChatN room <br> Does not include The Scary Door or The Scary Key. Once you are logged in you are in, no door no key.", "NChatN", "gfx/nbnchatn.png"),
	new project("Plushie Bot", "Chat bot for NEaB", [1], 1, "Python 3", "A talking bot for a chatroom, do fun stuff (I repeat, only fun stuff like trig and math and stuff). Also come with other non-fun features like hang man and werewolves and uh, open source. Seriously, it's like Clever bot, but with math, what else can you expect?", "PlushieBot", "gfx/pleshiebut.png"),
	new project("Hacker News Feeds", "Get Hacker News feeds", [1], 3, "Javascript", "The Lazy Programmer's guide to get news with 1 click. This Firefox and Chrome extension will let you get news from Hacker News. Install it and beam up some news?", "HackerNewsFeed", "gfx/heckerNfoods.png"),
	new project("Wayward Sails", "2d MMORPG", [0, 1], 2, "Web, Python (b-end), JS/CSS/PIXI(f-end)", "What do you want in a MMO? Are you searching for Runescape grinding, NEaB community, Puzzle Pirates style sailing, Haven and Hearth building/destroy things/deed, and tons of event? We got them. Well.. we will get them, we don't have them yet. We do have a lot of awesome graphic though. Did you see that running animation or the drawing? Check back on this in a year and see some update, okay?", "WaywardSail", "gfx/waywardsoul.png")	
];

var filteredProjectList = projectList;

var img1 = [document.getElementById('project1Img'), 0, 0];
var img2 = [document.getElementById('project2Img'), 1, 1];
var img3 = [document.getElementById('project3Img'), 2, 2];
var img4 = [document.getElementById('project4Img'), 3, 3];
var img5 = [document.getElementById('project5Img'), 4, 4];
var img6 = [document.getElementById('project6Img'), 5, 5];
var img7 = [document.getElementById('project7Img'), 6, 6];

var imgClass = [
	"prjEndLeft",
	"prjMidEndLeft",
	"prjMidLeft",
	"prjCenter",
	"prjMidRight",
	"prjMidEndRight",
	"prjEndRight"
];

var developers = [
	"Jacqueline",
	"Kevin"
];

var currentProjectName = document.getElementById('projectName');
var currentProjectSub = document.getElementById('projectSub');
var currentProjectAuthor = document.getElementById('projectAuthor');
var currentProjectStatus = document.getElementById('devStatus');
var currentProjectPlat = document.getElementById('projectPlatform');
var currentProjectDes = document.getElementById('projectDescription');
var currentProjectLink = document.getElementById('projectLink');

restartImagesList();

function filterProject(value){
	var filterer = function(element, index, array){
		switch (value){
			case 0:
				return true;
				break;
			case 1:
				if (element.author[0] == 0){
					return true;
				}
				break;
			case 2:
				if (element.author[0] == 1 || (element.author.length >= 2 && element.author[1] == 1)){
					return true;
				}
				break;
		}
	}
	filteredProjectList = projectList.filter(filterer);
	restartImagesList();
}

function projectShift(toRight){
	for (var i = 1; i < 8; i++){
		updateImgElement(self["img" + i], toRight);
	}
	if (toRight){
		currentProject--;
		if (currentProject < 0){
			currentProject = filteredProjectList.length - 1;
		}
	}
	else{
		currentProject++;
		if (currentProject >= filteredProjectList.length){
			currentProject = 0;
		}
	}
	updateProjectText(filteredProjectList[currentProject]);
};

function projectShifts(ele){
	var loopCount = getShiftCount(self["img" + ele][2]);
	var isUp = getShiftIsUp(self["img" + ele][2]);
	for (var i = 0; i < loopCount; i++){
		projectShift(isUp);
	}
};

function getShiftIsUp(value){
	switch (value){
		case 0: 
		case 1: 
		case 2:
		case 3:
			return true;
			break;
		case 4:
		case 5:
		case 6:
			return false;
			break;
	}
};

function getShiftCount(value){
	switch (value){
		case 0:
		case 6:
			return 3;
			break;
		case 1:
		case 5:
			return 2;
			break;
		case 2:
		case 4:
			return 1;
			break;
		case 3:
			return 0;
			break;
	}
};

function projectHover(img){
	updateProjectText(filteredProjectList[self["img" + img][1]]);
};

function updateImgElement(element, isUp){
	element[0].classList.remove(imgClass[element[2]]);
	if (isUp){
		element[2]++;
		if (element[2] >= 7){
			element[2] = 0;
			element[1] = getProperIndex(isUp, 4);
			element[0].style.backgroundImage = "url('" + filteredProjectList[element[1]].img + "')";
		}
	}
	else{
		element[2]--;
		if (element[2] < 0){
			element[2] = 6;
			element[1] = getProperIndex(isUp, 4);
			element[0].style.backgroundImage = "url('" + filteredProjectList[element[1]].img + "')";
		}
	}
	element[0].classList.add(imgClass[element[2]]);
};

function restartImagesList(){
	
	for (var i = 0; i < 7; i++){
		self["img" + (i + 1)][2] = i;
	}
	
	var cap = filteredProjectList.length;
	if (cap > 7){
		cap = 7;
	}
	for (var i = 0; i < cap; i++){
		self["img" + (i + 1)][1] = i;
	}
	
	currentProject = 0;
	
	img4[0].style.backgroundImage = "url('" + filteredProjectList[currentProject].img + "')";
	
	updateProjectText(filteredProjectList[currentProject]);
	
	img3[0].style.backgroundImage = "url('" + filteredProjectList[getProperIndex(false, 1)].img + "')";
	img2[0].style.backgroundImage = "url('" + filteredProjectList[getProperIndex(false, 2)].img + "')";
	img1[0].style.backgroundImage = "url('" + filteredProjectList[getProperIndex(false, 3)].img + "')";
	
	img5[0].style.backgroundImage = "url('" + filteredProjectList[getProperIndex(true, 1)].img + "')";
	img6[0].style.backgroundImage = "url('" + filteredProjectList[getProperIndex(true, 2)].img + "')";
	img7[0].style.backgroundImage = "url('" + filteredProjectList[getProperIndex(true, 3)].img + "')";
	
	for (var i = 0; i < 7; i++){
		projectShift(true);
	}
}

function getProperIndex(isUp, awayValue){
	var index = currentProject;
	if (isUp){
		index += awayValue; //
		if (index >= filteredProjectList.length){
			index -= filteredProjectList.length;
		}
	}
	else{
		index -= awayValue;
		if (index < 0){
			index += filteredProjectList.length;
		}
	}
	return index;
}

function updateProjectText(proj){
	currentProjectName.innerHTML = proj.name;
	currentProjectSub.innerHTML = proj.sub;
	getAuthorString(proj.author);
	getStatusWithID(proj.status);
	currentProjectPlat.innerHTML = "Platform: " + proj.plat;
	currentProjectDes.innerHTML = proj.des;
	currentProjectLink.href = "directory.html#" + proj.link;
}

function getAuthorString(authors){
	var string = "Devs: " + developers[authors[0]];
	for (var i = 1; i < authors.length; i++){
		string += ", " + developers[authors[i]];
	}
	currentProjectAuthor.innerHTML = string;
}

function getStatusWithID(id){
	switch(id){
		case 0:
			currentProjectStatus.innerHTML = "Paused";
			currentProjectStatus.style.color = "#EDFF26";
			break;
		case 1:
			currentProjectStatus.innerHTML = "Dead";
			currentProjectStatus.style.color = "#A32424";
			break;
		case 2:
			currentProjectStatus.innerHTML = "Ongoing";
			currentProjectStatus.style.color = "#58DE40";
			break;
		case 3:
			currentProjectStatus.innerHTML = "Released";
			currentProjectStatus.style.color = "#28691C";
			break;
	}
}

window.addEventListener('DOMContentLoaded', function() {
	document.body.style.opacity = 0;
});

window.addEventListener('load', function() {
	setTimeout(function () { document.body.style.opacity = 1; }, 1000);
});
