var request 		= require('request') 
var filesystem      = require('fs')

var baseUrl    		= 'https://netrunnerdb.com/card_image/'
var collectionNo	= '01'
var collectionSize  = 113 
var fileExtension	= '.png'

function fillWithZeroes(stringToFill, desiredStringLength) {
    var fixedString = '' + stringToFill;
    while (fixedString.length < desiredStringLength) {
        fixedString = '0' + fixedString;
    }
    return fixedString;
}

var imageDownloader = function() {
	for (var x = 1; x <= collectionSize; x++) {

    	var cardNo = fillWithZeroes(x, 3)
    	var fileName = collectionNo + cardNo + fileExtension
    	var finalUrl = baseUrl + fileName
    	//console.log(cardNo)
    	//console.log(finalUrl);

		request(finalUrl, {encoding: 'binary'}, function(error, response, body) {
			console.log("Saving " + fileName)
			filesystem.writeFile(fileName, body, 'binary', function (err) {console.log("There's an error somewhere.")});
		});
	} 
} 

imageDownloader();