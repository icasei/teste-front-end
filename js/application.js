var form = $('#search-form');
var search_field = $('#search-film-input');
var results = $('#container');

var KEY = 'AIzaSyCRIhIcZKzFcbF9Uxh1de6F3IAxSkLsL7k';

form.on('submit', function(e) {
	e.preventDefault();
	var url_search = 'https://www.googleapis.com/youtube/v3/search';

	var searchParams = {
		part: 'id,snippet',
		q: search_field.val(),
		key: KEY
	};
	
	$.get(url_search, searchParams, function(response) {
		$.each(response.items, function(index, item) {
			$("<div />").attr("class", "js-result-block col s12 m6 l3")
				.append($("<div />").attr("class", "js-card card")
					.append($("<div />").attr("class", "js-card-image card-image")
						.append($("<img />").attr("src", item.snippet.thumbnails.high.url)
						.append($("<a />").attr("href", "teste.com")
							.append($("<i />").attr("class", "material-icons").html("play_arrow")))))
					.append($("<div />").attr("class", "js-card-content card-content")
						.append($("<span />").attr("class","js-card-title card-title truncate").html(item.snippet.title))
						.append($("<p />").attr("class", "js-card-chanel card-chanel").html(item.snippet.channelTitle))
						.append($("<p />").attr("class", "js-card-desc card-desc").html(item.snippet.description))
						.append($("<div />").attr("class","js-card-action card-action center-align")
						.append($("<a />").attr("href", "teste.com2").attr("class","js-btn btn red lighten-1").html("+ Detalhes do vídeo"))))).appendTo(results);
		});
	});
});