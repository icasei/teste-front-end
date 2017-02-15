app.factory("omdbApi", function ($http, config) {
	
	var configGet = {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
		}
	};

	var _getBuscaFilmes = function (filmePesquisa) {
		return $http.get(config.baseUrl + "?s=" + filmePesquisa);
	};

	var _getDetalhesFilme = function (imdbID) {		
		return $http.get(config.baseUrl + "?i=" + imdbID);
	};
	
	return {
		getBuscaFilmes: _getBuscaFilmes,
		getDetalhesFilme : _getDetalhesFilme
	};
});