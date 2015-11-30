var startProject = 7;
var projectCount = 8;

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
	new project("Smite Team Manager", "A MOBA team management software"),
	new project("Flashcard Quiz", "Create printable flashcard and quizzes"),
	new project("Jackie's RPG Maker", "RPG Maker clone"),
	new project("Wandering Soul", "2d Sandbox game"),
	new project("NChatN", "Improved Chat for NEaB"),
	new project("Plushie Bot", "Chat bot for NEaB"),
	new project("Hacker News Feeds", "Get Hacker News feeds"),
	new project("Wayward Sails", "2d MMORPG")	
];

var img1 = document.getElementById('project1Img');
var img2 = document.getElementById('project2Img');
var img3 = document.getElementById('project3Img');
var img4 = document.getElementById('project4Img');
var img5 = document.getElementById('project5Img');
var img6 = document.getElementById('project6Img');
var img7 = document.getElementById('project7Img');

var currentProjectNames = document.getElementById('projectName');
var currentProjectNames = document.getElementById('projectSub');
var currentProjectNames = document.getElementById('projectAuthor');
var currentProjectNames = document.getElementById('projectStatus');
var currentProjectNames = document.getElementById('projectDescription');

var projectToLeft(){
	
}

var projectToRight(){
	
}