'use strict'

function Item (displayName, filePath, displayCount, voteCount, id) {
    this.displayName = displayName;
    this.filePath = filePath;
    this.displayCount = displayCount;
    this.voteCount = voteCount;
    this.id = id;
}


var imageArray = [ 'bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'chair.jpg' ];
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
// displayImages();

function getNonPreviousNumbers() {
    previousImages = displayImages();
};
getNonPreviousNumbers();

