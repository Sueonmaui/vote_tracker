
var image = []

//create a constructor with name and # votes iterate over the array images to create instances of the constructor to output the properties of the vote result

var catPic = function() {
  var rand = Math.round(math.random() * Images.length);
  do {
    var rand2 = Math.round(math.random() * Images.length);
    $('#imgA').attr('src', images[rand].link);
    $('#imgB').attr('src', images[rand2].link);
  }
  while(rand === rand2);
};

$.ajax({
  url: "https://api.imgur.com/3/album/ANPqy/images",
  headers;{
    "Authorization": "Client-ID 9c595d058e3aa4a"
  }
}).done(function(res) {
  image = res.data;
  catPic();
})


