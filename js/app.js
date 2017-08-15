'use strict'

function Item (displayName, filePath, id) {
    this.displayName = displayName;
    this.filePath = filePath;
    this.id = id;
    this.displayCount = 0;
    this.voteCount = 0;
}

var bag = new Item ( 'Bag', 'images/bag.jpg', 'bag' );
var banana = new Item ( 'Banana', 'images/banana.jpg', 'banana' );
var bathroom = new Item ( 'Bathroom', 'images/bathroom.jpg', 'bathroom' );
var boots = new Item ( 'Boots', 'images/boots.jpg', 'boots' );
var breakfast = new Item ( 'Breakfast', 'images/breakfast.jpg', 'breakfast' );
var bubbleGum = new Item ( 'Bubblegum', 'images/bubblegum.jpg', 'bubblegum' );
var chair = new Item ( 'Chair', 'images/chair.jpg', 'chair' );
var cthulhu = new Item ( 'Cthulhu', 'images/cthulhu.jpg', 'cthulhu' );
var dogDuck = new Item ( 'Dog-Duck', 'images/dog-duck.jpg', 'dog-duck' );
var dragon = new Item ( 'Dragon', 'images/dragon.jpg', 'dragon' );
var pen = new Item ( 'Pen', 'images/pen.jpg', 'pen' );
var petSweep = new Item ( 'Pet Sweep', 'images/pet-sweep.jpg', 'pet-sweep' );
var scissors = new Item ( 'Scissors', 'images/scissors.jpg', 'scissors' );
var shark = new Item ( 'Shark', 'images/shark.jpg', 'shark' );
var sweep = new Item ( 'Demeaning Baby Sweeper', 'images/sweep.png', 'sweep' );
var tauntaun = new Item ( 'Sick Sleeping Bag', 'images/tauntaun.jpg', 'tauntaun' );
var unicorn = new Item ( 'Faker Meat than SPAM', 'images/unicorn.jpg', 'unicorn' );
var usb = new Item ( 'USB', 'images/usb.gif', 'usb' );
var waterCan = new Item ( 'Watering Can', 'images/water-can.jpg', 'water-can' );
var wineGlass = new Item ( 'Wine Glass', 'images/wine-glass.jpg', 'wine-glass' );

var imageArray = [ bag, banana, bathroom, boots, breakfast, bubbleGum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass ];


var previousImages = [];

function displayImages() {
    var threeRandomNumbers = [];
    do {
        var num = Math.floor(Math.random() * (imageArray.length ));
        if ( threeRandomNumbers.indexOf( num ) === -1 && 
            previousImages.indexOf( num ) === -1 ) {
            threeRandomNumbers.push ( num );
        }  
    } while ( threeRandomNumbers.length < 3 );
    return threeRandomNumbers;      
};



function renderImages() {
    var threeNumbers = displayImages();  
    var elOne = document.getElementById( 'one' );
    elOne.setAttribute( 'src', imageArray[ threeNumbers[0] ].filePath );

    var elOne = document.getElementById( 'two' );
    elOne.setAttribute( 'src', imageArray[ threeNumbers[1] ].filePath );

    var elOne = document.getElementById( 'three' );
    elOne.setAttribute( 'src', imageArray[ threeNumbers[2] ].filePath );
    
    previousImages = displayImages();                    //getnonPreviousNunmbers
};

function getNonPreviousNumbers() {
    previousImages = displayImages();
};
getNonPreviousNumbers();


var optionOne = document.getElementById ( 'one' );
optionOne.addEventListener ( 'click', renderImages );

var optionTwo = document.getElementById ( 'two' );
optionTwo.addEventListener ( 'click', renderImages );

var optionThree = document.getElementById ( 'three' );
optionThree.addEventListener ( 'click', renderImages );