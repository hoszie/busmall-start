'use strict'

var allItems = [];
var totalGuesses = 0;
var clickCount = 0;

function Item ( displayName, filePath, id ) {
    this.displayName = displayName;
    this.filePath = filePath;
    this.id = id;
    this.displayCount = 0;
    this.voteCount = 0;
};

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
    
    var objOne = imageArray[ threeNumbers[0] ];
    var elOne = document.getElementById( 'one' );
    elOne.setAttribute( 'src', objOne.filePath );
    elOne.setAttribute( 'data-index', threeNumbers[0] );
    objOne.displayCount ++;
    
   var objTwo = imageArray[ threeNumbers[1] ];
    var elTwo = document.getElementById( 'two' );
    elTwo.setAttribute( 'src', objTwo.filePath );
    elTwo.setAttribute( 'data-index', threeNumbers [1] );
    objTwo.displayCount ++;

    var objThree = imageArray[ threeNumbers[2] ];
    var elThree = document.getElementById( 'three' );
    elThree.setAttribute( 'src', objThree.filePath );
    elThree.setAttribute( 'data-index', threeNumbers[2] );
    objThree.displayCount ++;

    previousImages = threeNumbers;
};

function getNonPreviousNumbers() {
    previousImages = displayImages();
    
};

function clickHandler ( event ) {
    if ( clickCount < 5 ) {
        var index = event.target.getAttribute( 'data-index' );
        index = parseInt (index);
        
        imageArray[ index ].voteCount++;
        renderImages();
        clickCount ++;
    } else if ( !clickCount <= 5 ) {
        document.getElementById ( 'image-box' ).innerHTML = "";
    }
};



function produceClickEvent() {
    
    var optionOne = document.getElementById ( 'one' );
    optionOne.addEventListener ( 'click', clickHandler );
    
    var optionTwo = document.getElementById ( 'two' );
    optionTwo.addEventListener ( 'click', clickHandler );
    
    var optionThree = document.getElementById ( 'three' );
    optionThree.addEventListener ( 'click', clickHandler ); 
    // renderImages();
};
renderImages();
produceClickEvent();







// function clickHandler( event ) {
//     if ( clickCount < 5 ) {
//         renderImages();
//         var click = event.target.getAttribute( 'src' );
//         for (var i = 0; i < imageArray.length; i++ ) {
//             if( click === imageArray[i].filePath ) {
//                 imageArray[i].voteCount++;
//                 clickCount ++;
//             } 
//         }


//     } else if ( !clickCount < 5 ) {
//         document.getElementById ( 'image-box' ).innerHTML = "";
//     }
// }












// tallyVote: function ( target ) {
//     this.votes += 1;

//     // TODO track vote on selected restaurant
//     var selectRest = allItems [target.getAttribute( 'data-index')];
//     selectRest.votes++;

//     if ( this.voteCount > 4 ) {
//         this.showResults();
//     }
// },













// var survey = document.getElementById( 'survey' );
// survey.addEventListener( 'click', 'voteHandler' );

// function voteHandler ( event ) {
//     //determine which element was clicked
//     //find that element's object
//     //increase that object's votes

//     //redraw the images

//     console.log( event.target );
//     var clickedElement = event.target;
// }
    
  



