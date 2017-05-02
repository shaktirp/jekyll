console.log('i am main');

var feed = new Instafeed({
  get:'user',
	userId: 448158681,
  resolution: 'standard_resolution',
	accessToken: '448158681.6eb286a.983539d159db48fb8f9ca6c8942f327d',
  after: function () {
    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');
    });
  },
  template: '<div><img src="{{image}}" /></div>'
});

feed.run();
