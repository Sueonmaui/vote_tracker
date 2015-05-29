
var image = []

//create a constructor with name and # votes iterate over the array images to create instances of the constructor to output the properties of the vote result

var catPic = function() {
  var rand = Math.round(Math.random() * image.length);
  do {
    var rand2 = Math.round(Math.random() * image.length);
    $('#imgA').attr('src', image[rand].link);
    $('#imgB').attr('src', image[rand2].link);
  }
  while(rand === rand2);
};

$.ajax({
  url: "https://api.imgur.com/3/album/ANPqy/images",
  headers:{
    "Authorization": "Client-ID 9c595d058e3aa4a"
  }
}).done(function(res) {
  image = res.data;
  catPic();
})

var $picClick1 = $('#imgA');
var $picClick2 = $('#imgB');
//event handler that records clicks assigned to the picClicks
//Highlight the winning kitten photo.
//Increase the total votes for the winning photo by one.
//Reveal the popularity of the two photos.
//Encourage the visitor to see two new randomly selected kitten photos to vote on.
