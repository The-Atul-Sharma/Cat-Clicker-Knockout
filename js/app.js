//Knockout.js File
var initialCats = [
	{
		clickCount: 0,
		name: 'Tabby',
		imgSrc: 'img/Cat1.jpg',
		imgAttribution: 'https://placekitten.com/g/500/300',
		nicknames: ['Tabtab', 'T-Bone', 'Mr. T', 'Tahiba Tab Tabby Catty Cat']
	},
	{
		clickCount: 0,
		name: 'Tiger',
		imgSrc: 'img/Cat2.jpg',
		imgAttribution: 'https://placekitten.com/g/500/300',
		nicknames: ['Tigger']
	},
	{
		clickCount: 0,
		name: 'Scaredy',
		imgSrc: 'img/Cat3.jpg',
		imgAttribution: 'https://placekitten.com/g/500/300',
		nicknames: ['Casper']
	},
	{
		clickCount: 0,
		name: 'Shadow',
		imgSrc: 'img/Cat4.jpg',
		imgAttribution: 'https://placekitten.com/g/500/300',
		nicknames: ['Shooby']
	},
	{
		clickCount: 0,
		name: 'Sleepy',
		imgSrc: 'img/Cat5.jpg',
		imgAttribution: 'https://placekitten.com/g/500/300',
		nicknames: ['Zzzzz']
	},
];

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nicknames = ko.observableArray(data.nicknames);

	this.level = ko.computed(function() {
		var clicks = this.clickCount();
		return clicks < 10 ? 'Newborn'
			  : clicks < 50 ? 'Infant'
			  : clicks < 100 ? 'Child'
			  : clicks < 200 ? 'Teen'
			  : clicks < 500 ? 'Adult'
			  : 'Ninja';
	}, this);
}

var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem) {
		self.catList.push( new Cat(catItem) )
	});

	this.currentCat = ko.observable( this.catList()[0] );

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};

	this.updateCurrentCat = function(cat) {
		self.currentCat(cat);
	};
}

ko.applyBindings(new ViewModel());
