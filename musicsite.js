$(document).ready(function(){

// Album info that displays over covers on hover //

var firstAlbum = { albumTitle:"Just Another Diamond Day", albumArtist:"By Vashti Bunyan", albumCountry:"Country - UK", albumYear:"1970", albumLabel:"Label - Philips", albumGenre:"Genre - Folk", albumPrice:"$5,000"};

$("#text-one-title").text(firstAlbum.albumTitle);
$("#text-one-artist").text(firstAlbum.albumArtist);
$("#text-one-country").text(firstAlbum.albumCountry);
$("#text-one-year").text(firstAlbum.albumYear);
$("#text-one-label").text(firstAlbum.albumLabel);
$("#text-one-genre").text(firstAlbum.albumGenre);
$("#text-one-price").text(firstAlbum.albumPrice);

var secondAlbum = { albumTitle:"Swaddling Songs", albumArtist:"By Mellow Candle", albumCountry:"Country - UK", albumYear:"1972", albumLabel:"Label - Deram", albumGenre:"Folk", albumPrice:"$3,600"};

$("#text-two-title").text(secondAlbum.albumTitle);
$("#text-two-artist").text(secondAlbum.albumArtist);
$("#text-two-country").text(secondAlbum.albumCountry);
$("#text-two-year").text(secondAlbum.albumYear);
$("#text-two-label").text(secondAlbum.albumLabel);
$("#text-two-genre").text(secondAlbum.albumGenre);
$("#text-two-price").text(secondAlbum.albumPrice);

var thirdAlbum = { albumTitle:"Gloria Barnes", albumArtist:"By Gloria Barnes", albumCountry:"Country - US", albumYear:"1971", albumLabel:"Label - Maple Records", albumGenre:"Soul", albumPrice:"$1,700"};

$("#text-three-title").text(thirdAlbum.albumTitle);
$("#text-three-artist").text(thirdAlbum.albumArtist);
$("#text-three-country").text(thirdAlbum.albumCountry);
$("#text-three-year").text(thirdAlbum.albumYear);
$("#text-three-label").text(thirdAlbum.albumLabel);
$("#text-three-genre").text(thirdAlbum.albumGenre);
$("#text-three-price").text(thirdAlbum.albumPrice);

var fourthAlbum = { albumTitle:"Pre-Flight", albumArtist:"By Room", albumCountry:"Country - UK", albumYear:"1970", albumLabel:"Label - Deram", albumGenre:"Blues Rock", albumPrice:"$3,600"};

$("#text-four-title").text(fourthAlbum.albumTitle);
$("#text-four-artist").text(fourthAlbum.albumArtist);
$("#text-four-country").text(fourthAlbum.albumCountry);
$("#text-four-year").text(fourthAlbum.albumYear);
$("#text-four-label").text(fourthAlbum.albumLabel);
$("#text-four-genre").text(fourthAlbum.albumGenre);
$("#text-four-price").text(fourthAlbum.albumPrice);

var fifthAlbum = { albumTitle:"Corridor of Faces", albumArtist:"By Lazy Smoke", albumCountry:"Country - US", albumYear:"1968", albumLabel:"Label - Onyx", albumGenre:"Psych Rock", albumPrice:"$2,500"};

$("#text-five-title").text(fifthAlbum.albumTitle);
$("#text-five-artist").text(fifthAlbum.albumArtist);
$("#text-five-country").text(fifthAlbum.albumCountry);
$("#text-five-year").text(fifthAlbum.albumYear);
$("#text-five-label").text(fifthAlbum.albumLabel);
$("#text-five-genre").text(fifthAlbum.albumGenre);
$("#text-five-price").text(fifthAlbum.albumPrice);

var sixthAlbum = { albumTitle:"Estrelando Embaixador", albumArtist:"By Tribo Massahi", albumCountry:"Country - Brazil", albumYear:"1972", albumLabel:"Label - River's", albumGenre:"Samba", albumPrice:"$3,300"};

$("#text-six-title").text(sixthAlbum.albumTitle);
$("#text-six-artist").text(sixthAlbum.albumArtist);
$("#text-six-country").text(sixthAlbum.albumCountry);
$("#text-six-year").text(sixthAlbum.albumYear);
$("#text-six-label").text(sixthAlbum.albumLabel);
$("#text-six-genre").text(sixthAlbum.albumGenre);
$("#text-six-price").text(sixthAlbum.albumPrice);

var seventhAlbum = { albumTitle:"Song of A Gypsy", albumArtist:"By Damon", albumCountry:"Country - US", albumYear:"1968", albumLabel:"Label - Ankh", albumGenre:"Psych Rock", albumPrice:"$3,500"};

$("#text-seven-title").text(seventhAlbum.albumTitle);
$("#text-seven-artist").text(seventhAlbum.albumArtist);
$("#text-seven-country").text(seventhAlbum.albumCountry);
$("#text-seven-year").text(seventhAlbum.albumYear);
$("#text-seven-label").text(seventhAlbum.albumLabel);
$("#text-seven-genre").text(seventhAlbum.albumGenre);
$("#text-seven-price").text(seventhAlbum.albumPrice);

var eigthAlbum = { albumTitle:"Pre-Meditated Gangstarism", albumArtist:"By Young Gangstas", albumCountry:"Country - US", albumYear:"1995", albumLabel:"Label - Teflon Don", albumGenre:"Hip Hop", albumPrice:"$1,300"};

$("#text-eight-title").text(eigthAlbum.albumTitle);
$("#text-eight-artist").text(eigthAlbum.albumArtist);
$("#text-eight-country").text(eigthAlbum.albumCountry);
$("#text-eight-year").text(eigthAlbum.albumYear);
$("#text-eight-label").text(eigthAlbum.albumLabel);
$("#text-eight-genre").text(eigthAlbum.albumGenre);
$("#text-eight-price").text(eigthAlbum.albumPrice);

var ninthAlbum = { albumTitle:"Pleure et Applaudit", albumArtist:"By Jean Dubuffet", albumCountry:"Country - France", albumYear:"1961", albumLabel:"Label - Galleria Del Cavallino Venise", albumGenre:"Avant Garde", albumPrice:"$2,800"};

$("#text-nine-title").text(ninthAlbum.albumTitle);
$("#text-nine-artist").text(ninthAlbum.albumArtist);
$("#text-nine-country").text(ninthAlbum.albumCountry);
$("#text-nine-year").text(ninthAlbum.albumYear);
$("#text-nine-label").text(ninthAlbum.albumLabel);
$("#text-nine-genre").text(ninthAlbum.albumGenre);
$("#text-nine-price").text(ninthAlbum.albumPrice);

// ------------------------------------------------Heart Function----------------------------------------------------------------//

$(function() {
  $("#heart1")
    .bind('click', function(event) {
      $("#heart1").toggleClass("liked");
    })
});

$(function() {
  $('#heart2')
    .bind('click', function(event) {
      $("#heart2").toggleClass("liked");
    })
});

$(function() {
  $('#heart3')
    .bind('click', function(event) {
      $("#heart3").toggleClass("liked");
    })
});

$(function() {
  $('#heart4')
    .bind('click', function(event) {
      $("#heart4").toggleClass("liked");
    })
});

$(function() {
  $('#heart5')
    .bind('click', function(event) {
      $("#heart5").toggleClass("liked");
    })
});

$(function() {
  $('#heart6')
    .bind('click', function(event) {
      $("#heart6").toggleClass("liked");
    })
});

$(function() {
  $('#heart7')
    .bind('click', function(event) {
      $("#heart7").toggleClass("liked");
    })
});

$(function() {
  $('#heart8')
    .bind('click', function(event) {
      $("#heart8").toggleClass("liked");
    })
});

$(function() {
  $('#heart9')
    .bind('click', function(event) {
      $("#heart9").toggleClass("liked");
    })
});


});