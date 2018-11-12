// album info

var albumTitle = ["Just Another Diamond Day", "Swaddling Songs", "Gloria Barnes", 
                    "Pre-Flight", "Corridor of Faces", "Estrelando Embaixador", "Song of A Gypsy",
                      "Pre-Meditated Gangstarism", "Pleure et Applaudit"]
var albumArtist = ["Vashti Bunyan", "Mellow Candle", "Gloria Barnes", "Room", "Lazy Smoke",
                    "Tribo Massahi", "Damon", "Young Gangstas", "Jean Dubuffet"]
var albumCountry = ["UK", "US", "Brazil", "France"]
var albumYear = ["1961", "1968", "1970", "1971", "1972", "1995"]
var albumLabel = ["Philips", "Deram", "Maple Records", "Onyx", "River's", "Ankh", "Teflon Don Records", "Galleria Del Cavallino Venise"]
var albumGenre = ["Folk", "Soul", "Blues Rock", "Psych Rock", "Samba", "Hip Hop", "Avant-Garde"]
var albumPrice = ["$1,300", "$1,700", "$2,500", "$2,800", "$3,300", "$3,500", "$3,600", "$5,000"]






$(document).foundation();

$(function() {
  $('.button-like')
    .bind('click', function(event) {
      $(".button-like").toggleClass("liked");
    })
});



















