// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=391bbc9206d6d6250875ff51556a0f5d&format=json&user_id=143684909@N08",
//   "method": "GET",
//   // "format": "json",
//   "headers": {}
// }
//
// $.ajax(settings).done(function(data) {
//   eval(data)
// }).fail(function(data) {
//   console.log('error', data)
// })
//
// function jsonFlickrApi(json) {
//   console.log(json);
//
//   $.each(json.photos.photo, function(i, item) {
//     var src = "https://farm" + item.farm + ".staticflickr.com/" + item.server + "/" + item.id + "_" + item.secret + ".jpg"
//     console.log(src);
//
//     $("<div>").append($("<img />").attr("src", src)).appendTo("#instafeed")
//   });
// };
