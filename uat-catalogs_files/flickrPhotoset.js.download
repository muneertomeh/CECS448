(function( $ ) {
	$.fn.flickr = function(options) {
		var url = 'https://api.flickr.com/services/rest/?jsoncallback=?';
		
		var settings = $.extend( {
			'api_key': 'c69bd3dfd28eed5054deeead4b2c57bf',			
		}, options);
		
		function view_image(event) {
			var target = $(event.target);
			
			if(target.is('img')) {
				var url = target.attr('data-url');
				var cache = new Image();
				cache.src = url;
				var gallery = target.parents('.flickr-gallery:first').children('div.viewport');

				var image = gallery.children('img');

			}
		}
	   
		return this.each(function() {    
			
			var gallery = $(this);
			gallery.addClass('flickr-gallery');
			
			
			$.getJSON(url, {
				method: 'flickr.photosets.getInfo',
				api_key: settings.api_key,						
				photoset_id: settings.photoset_id,
				format: 'json'
			}).success(function(state) {
				
				$.getJSON(url, {
					method: 'flickr.photosets.getPhotos',
					api_key: settings.api_key,
					media: 'photos',
					photoset_id: settings.photoset_id,
					format: 'json',
					extras: 'url_sq,url_m,date_taken,tags'
				}).success(function(state) {
					var list = gallery.find('ul:first');
					list.html('');

					
					$.each(state.photoset.photo, function(){
						list.append('<li><a><img src="' + this.url_sq + '" ' +
							'/></li></a>');
					});
					
				}).fail(function(state) { 
					console.log("Unable to retrieve photo set"); 
				});
			}).fail(function(state) { 
				console.log("Unable to retrieve photo set information"); 
			});
		});

	};
})( jQuery );


