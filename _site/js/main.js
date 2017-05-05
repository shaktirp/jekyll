// console.log('i am main');
//
// var feed = new Instafeed({
//   get:'user',
// 	userId: 448158681,
//   resolution: 'standard_resolution',
// 	accessToken: '448158681.6eb286a.983539d159db48fb8f9ca6c8942f327d',
//   after: function () {
//     var images = $("#instafeed").find('a');
//     $.each(images, function(index, image) {
//       var delay = (index * 75) + 'ms';
//       $(image).css('-webkit-animation-delay', delay);
//       $(image).css('-moz-animation-delay', delay);
//       $(image).css('-ms-animation-delay', delay);
//       $(image).css('-o-animation-delay', delay);
//       $(image).css('animation-delay', delay);
//       $(image).addClass('animated flipInX');
//     });
//   },
//   template: '<div><img src="{{image}}" /></div>'
// });
//
// feed.run();

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=391bbc9206d6d6250875ff51556a0f5d&format=json&user_id=143684909@N08",
  "method": "GET",
  // "format": "json",
  "headers": {}
}

$.ajax(settings).done(function(data) {
  eval(data)
}).fail(function(data) {
  console.log('error', data)
})

function jsonFlickrApi(json) {
  console.log(json);

  $.each(json.photos.photo, function(i, item) {
    var src = "https://farm" + item.farm + ".staticflickr.com/" + item.server + "/" + item.id + "_" + item.secret + ".jpg"
    console.log(src);

    $("<div>").append($("<img />").attr("src", src)).appendTo("#instafeed")
  });
};
