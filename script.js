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

var currentProject = 3;
var projectCount = 8;

var self = this;

function project(name, sub, author, status, des, link, img){
	this.name = name;
	this.sub = sub;
	this.author = author;
	this.status = status;
	this.des = des;
	this.link = link;
	this.img = img;
}

var projectList = [
	new project("Smite Team Manager", "A MOBA team management software", [0], 0, "Will update this later", "smiter.html", "gfx/smiteTeemo.png"),
	new project("Flashcard Quiz", "Create printable flashcard and quizzes", [0], 0, "Will update this later", "flashcard.html", "gfx/adobeCard.png"),
	new project("Jackie's RPG Maker", "RPG Maker clone", [0], 0, "Will update this later", "rpgmaker.html", "gfx/rpgmerker.png"),
	new project("Wandering Soul", "2d Sandbox game", [0], 0, "Will update this later", "wandering.html", "gfx/wurnderingsul.png"),
	new project("NChatN", "Improved Chat for NEaB", [1], 1, "Will update this later", "nchatn.html", "gfx/nbnchatn.png"),
	new project("Plushie Bot", "Chat bot for NEaB", [1], 1, "Will update this later", "plushiebot.html", "gfx/pleshiebut.png"),
	new project("Hacker News Feeds", "Get Hacker News feeds", [1], 3, "Will update this later", "hkerNews.html", "gfx/heckerNfoods.png"),
	new project("Wayward Sails", "2d MMORPG", [0, 1], 2, "Will update this later", "wayward.html", "gfx/waywardsoul.png")	
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

var currentProjectName = document.getElementById('projectName');
var currentProjectSub = document.getElementById('projectSub');
var currentProjectAuthor = document.getElementById('projectAuthor');
var currentProjectStatus = document.getElementById('projectStatus');
var currentProjectDes = document.getElementById('projectDescription');

restartImagesList();

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

function projectShifts(toRight, ele){
	for (var i = 0; i < getShiftCount(self["img" + ele][2]); i++){
		projectShift(toRight);
	}
}

function getShiftCount(value){
	switch (value){
		case 0:
			return 3;
			break;
		case 1:
			return 2;
			break;
		case 2:
			return 1;
			break;
		case 3:
			return 0;
			break;
		case 4:
			return 1;
			break;
		case 5:
			return 2;
			break;
		case 6:
			return 3;
			break;
	}
}

function projectHover(img){
	updateProjectText(filteredProjectList[self["img" + img][1]]);
}

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
}

function restartImagesList(){
	
	for (var i = 0; i < 7; i++){
		self["img" + (i + 1)][1] = i;
		self["img" + (i + 1)][2] = i;
	}
	
	img4[0].style.backgroundImage = "url('" + filteredProjectList[currentProject].img + "')";
	
	updateProjectText(filteredProjectList[currentProject]);
	
	img3[0].style.backgroundImage = "url('" + filteredProjectList[getProperIndex(false, 1)].img + "')";
	img2[0].style.backgroundImage = "url('" + filteredProjectList[getProperIndex(false, 2)].img + "')";
	img1[0].style.backgroundImage = "url('" + filteredProjectList[getProperIndex(false, 3)].img + "')";
	
	img5[0].style.backgroundImage = "url('" + filteredProjectList[getProperIndex(true, 1)].img + "')";
	img6[0].style.backgroundImage = "url('" + filteredProjectList[getProperIndex(true, 2)].img + "')";
	img7[0].style.backgroundImage = "url('" + filteredProjectList[getProperIndex(true, 3)].img + "')";
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
	currentProjectDes.innerHTML = proj.des;
}

function getAuthorString(authors){
	var string = authors[0];
	for (var i = 1; i < authors.length; i++){
		string += ", " + authors[i];
	}
	currentProjectAuthor.innerHTML = string;
}

function getStatusWithID(id){
	switch(id){
		case 0:
			currentProjectStatus.innerHTML = "Paused";
			break;
		case 1:
			currentProjectStatus.innerHTML = "Dead";
			break;
		case 2:
			currentProjectStatus.innerHTML = "Ongoing";
			break;
		case 3:
			currentProjectStatus.innerHTML = "Released";
			break;
	}
}